# requirements.txt additions
# Add these to your requirements.txt:
# flask-sqlalchemy
# psycopg2-binary
# flask-migrate

from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone
import hashlib
import secrets

load_dotenv()

app = Flask(__name__)

# CORS configuration - allow credentials
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

# Session configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', secrets.token_hex(32))
app.config['SESSION_COOKIE_SECURE'] = False  # Set to True in production with HTTPS
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=30)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://postgres:VkeaTGapeqNqEjKEwVOuKLClyaTPSeDg@ballast.proxy.rlwy.net:53120/railway')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Email configuration (same as before)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = os.getenv("MAIL_USERNAME")

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)

# Database Models (same as before)
class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    full_name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    phone = db.Column(db.String(20))
    company = db.Column(db.String(200))
    password_hash = db.Column(db.String(255), nullable=False)
    subscribe_newsletter = db.Column(db.Boolean, default=False)
    registration_date = db.Column(db.DateTime, default=datetime.utcnow)
    profile_complete = db.Column(db.Boolean, default=True)
    is_active = db.Column(db.Boolean, default=True)
    last_login = db.Column(db.DateTime)
    
    # Relationships
    sessions = db.relationship('UserSession', backref='user', lazy=True, cascade='all, delete-orphan')
    
    def to_dict(self):
        """Convert user object to dictionary, excluding sensitive data"""
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'fullName': self.full_name,
            'email': self.email,
            'phone': self.phone,
            'company': self.company,
            'subscribeNewsletter': self.subscribe_newsletter,
            'registrationDate': self.registration_date.isoformat() if self.registration_date else None,
            'profileComplete': self.profile_complete,
            'lastLogin': self.last_login.isoformat() if self.last_login else None
        }

class UserSession(db.Model):
    __tablename__ = 'user_sessions'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    session_token = db.Column(db.String(255), unique=True, nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    expires_at = db.Column(db.DateTime)
    remember_me = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean, default=True)
    user_agent = db.Column(db.Text)
    ip_address = db.Column(db.String(45))

class PasswordReset(db.Model):
    __tablename__ = 'password_resets'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    reset_token = db.Column(db.String(255), unique=True, nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    expires_at = db.Column(db.DateTime, nullable=False)
    is_used = db.Column(db.Boolean, default=False)

# Utility functions (same as before)
def hash_password(password):
    """Hash password with salt"""
    salt = secrets.token_hex(16)
    pwd_hash = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), 100000)
    return f"{salt}${pwd_hash.hex()}"

def verify_password(password, hashed):
    """Verify password against hash"""
    try:
        salt, pwd_hash = hashed.split('$')
        return pwd_hash == hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt.encode('utf-8'), 100000).hex()
    except:
        return False

def generate_session_token():
    """Generate secure session token"""
    return secrets.token_urlsafe(32)

def get_current_user():
    """Get current user from session"""
    session_token = session.get('session_token')
    if not session_token:
        return None
    
    # Find active session in database
    user_session = UserSession.query.filter_by(
        session_token=session_token,
        is_active=True
    ).first()
    
    if not user_session or user_session.expires_at < datetime.utcnow():
        # Session expired, clean up
        if user_session:
            user_session.is_active = False
            db.session.commit()
        session.clear()
        return None
    
    # Get user
    user = User.query.get(user_session.user_id)
    if not user or not user.is_active:
        return None
    
    return user

# Updated Routes using Session-based Authentication
@app.route('/api/register', methods=['POST'])
def signup():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    phone = data.get('phone')
    company = data.get('company')
    password = data.get('password')
    subscribe_newsletter = data.get('subscribeNewsletter', False)
    
    # Check if user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "User already exists with this email"}), 400
    
    full_name = f"{first_name} {last_name}".strip()
    
    # Create new user
    new_user = User(
        first_name=first_name,
        last_name=last_name,
        full_name=full_name,
        email=email,
        phone=phone,
        company=company,
        password_hash=hash_password(password),
        subscribe_newsletter=subscribe_newsletter
    )
    
    try:
        db.session.add(new_user)
        db.session.commit()
        
        # Send welcome email (same logic as before)
        send_welcome_email(new_user)
        
        return jsonify({
            "message": "Registration successful! Welcome to IAMP - check your email for confirmation.",
            "member_name": full_name,
            "newsletter_subscribed": subscribe_newsletter
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Registration failed. Please try again."}), 500

@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    remember_me = data.get('rememberMe', False)
    
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    # Find user in database
    user = User.query.filter_by(email=email, is_active=True).first()
    if not user:
        return jsonify({"error": "Invalid email or password"}), 401
    
    # Verify password
    if not verify_password(password, user.password_hash):
        return jsonify({"error": "Invalid email or password"}), 401
    
    # Create session token
    session_token = generate_session_token()
    expires_at = datetime.now(timezone.utc) + timedelta(days=30 if remember_me else 1)
    
    # Create database session
    user_session = UserSession(
        user_id=user.id,
        session_token=session_token,
        expires_at=expires_at,
        remember_me=remember_me,
        user_agent=request.headers.get('User-Agent'),
        ip_address=request.remote_addr
    )
    
    # Update last login
    user.last_login = datetime.utcnow()
    
    try:
        db.session.add(user_session)
        db.session.commit()
        
        # Store session token in Flask session (cookie)
        session['session_token'] = session_token
        session['user_id'] = user.id
        
        # Make session permanent if remember me is checked
        if remember_me:
            session.permanent = True
        
        return jsonify({
            "message": "Sign in successful",
            "user": user.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Sign in failed. Please try again."}), 500

@app.route('/api/profile', methods=['GET'])
def get_profile():
    # Get current user from session
    user = get_current_user()
    if not user:
        return jsonify({"error": "Not authenticated"}), 401
    
    return jsonify({
        "user": user.to_dict()
    }), 200

@app.route('/api/logout', methods=['POST'])
def logout():
    session_token = session.get('session_token')
    
    if session_token:
        # Deactivate session in database
        user_session = UserSession.query.filter_by(session_token=session_token).first()
        if user_session:
            user_session.is_active = False
            db.session.commit()
    
    # Clear Flask session
    session.clear()
    
    return jsonify({"message": "Logged out successfully"}), 200

@app.route('/api/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({"error": "Email is required"}), 400
    
    user = User.query.filter_by(email=email, is_active=True).first()
    if not user:
        # For security, don't reveal if user exists or not
        return jsonify({"message": "If an account exists with this email, a password reset link has been sent."}), 200
    
    # Generate reset token
    reset_token = secrets.token_urlsafe(32)
    expires_at = datetime.utcnow() + timedelta(hours=24)
    
    # Deactivate any existing reset tokens for this user
    PasswordReset.query.filter_by(user_id=user.id, is_used=False).update({'is_used': True})
    
    # Create new reset token
    reset_request = PasswordReset(
        user_id=user.id,
        reset_token=reset_token,
        expires_at=expires_at
    )
    
    try:
        db.session.add(reset_request)
        db.session.commit()
        
        # Send reset email
        send_password_reset_email(user, reset_token)
        
        return jsonify({
            "message": "If an account exists with this email, a password reset link has been sent."
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            "message": "If an account exists with this email, a password reset link has been sent."
        }), 200

# Helper functions for sending emails (same as before)
def send_welcome_email(user):
    """Send welcome email to new user"""
    welcome_body = f"""Dear {user.first_name},

Welcome to IAMP - International Association of Maritime Professionals!

We are delighted to have you join our global network of maritime professionals. Your registration has been successfully completed, and you are now part of a community that connects over 118+ maritime companies worldwide.

Here's what you can expect as an IAMP member:

• Access to Global Opportunities: Connect with maritime professionals and companies across the globe
• Professional Development: Stay updated with industry trends, certifications, and career advancement opportunities  
• Networking Events: Participate in maritime conferences, workshops, and networking sessions
• Industry Resources: Access exclusive maritime publications, research, and market insights
• Career Support: Leverage our platform for career growth and professional connections

Your Account Details:
- Name: {user.full_name}
- Email: {user.email}
- Company: {user.company if user.company else 'Not specified'}
- Phone: {user.phone if user.phone else 'Not provided'}

You can now sign in to your account using your email and password.

If you have any questions or need assistance, please don't hesitate to contact our support team at support@iamp.org or visit our help center.

Thank you for choosing IAMP as your maritime professional network. We look forward to supporting your career journey in the maritime industry.

Best regards,

The IAMP Team
International Association of Maritime Professionals
Email: info@iamp.org
Website: www.iamp.org

---
This email was sent to {user.email}. If you did not create an IAMP account, please contact us immediately at support@iamp.org.
"""

    try:
        msg = Message(
            subject="Welcome to IAMP - Your Maritime Professional Network Awaits!",
            sender=app.config['MAIL_DEFAULT_SENDER'],
            recipients=[user.email],
            body=welcome_body
        )
        mail.send(msg)
        
        # Send admin notification
        send_admin_notification(user)
        
    except Exception as e:
        print(f"Welcome email failed: {e}")

def send_admin_notification(user):
    """Send admin notification for new registration"""
    admin_body = f"""New Member Registration - IAMP

A new member has successfully registered on the IAMP platform.

Member Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: {user.full_name}
Email Address: {user.email}
Phone Number: {user.phone if user.phone else 'Not provided'}
Company: {user.company if user.company else 'Not specified'}
Newsletter Subscription: {'Yes' if user.subscribe_newsletter else 'No'}

Registration Date: {user.registration_date.strftime('%B %d, %Y at %I:%M %p UTC')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This notification was automatically generated by the IAMP registration system.

---
IAMP Admin Panel
International Association of Maritime Professionals
"""

    try:
        admin_email = os.getenv("ADMIN_EMAIL")
        if admin_email:
            msg = Message(
                subject="New IAMP Member Registration - Welcome Aboard!",
                sender=app.config['MAIL_DEFAULT_SENDER'],
                recipients=[admin_email],
                body=admin_body
            )
            mail.send(msg)
    except Exception as e:
        print(f"Admin notification failed: {e}")

def send_password_reset_email(user, reset_token):
    """Send password reset email"""
    reset_body = f"""Dear {user.first_name},

We received a request to reset your password for your IAMP account.

If you requested this password reset, please click the link below to create a new password:

[Reset Password Link - {reset_token}]

This link will expire in 24 hours for security reasons.

If you did not request this password reset, please ignore this email and your password will remain unchanged.

For security reasons, please do not share this email with anyone.

Best regards,

The IAMP Team
International Association of Maritime Professionals
Email: info@iamp.org

---
This email was sent to {user.email}. If you did not request a password reset, please contact us immediately at support@iamp.org.
"""

    try:
        msg = Message(
            subject="IAMP - Password Reset Request",
            sender=app.config['MAIL_DEFAULT_SENDER'],
            recipients=[user.email],
            body=reset_body
        )
        mail.send(msg)
    except Exception as e:
        print(f"Password reset email failed: {e}")



# Add this route to your existing Flask app

from flask import jsonify, request
import re
from datetime import datetime

# Validation helper functions
def validate_phone(phone):
    """Validate phone number format"""
    if not phone:
        return True  # Phone is optional
    
    # Remove all non-digit characters
    phone_digits = re.sub(r'\D', '', phone)
    
    # Check if it's a valid length (typically 10-15 digits)
    if len(phone_digits) < 10 or len(phone_digits) > 15:
        return False
    
    return True

def validate_name(name):
    """Validate name format"""
    if not name or len(name.strip()) < 2:
        return False
    
    # Check if name contains only letters, spaces, hyphens, and apostrophes
    if not re.match(r"^[a-zA-Z\s\-']+$", name.strip()):
        return False
    
    return True

def validate_company(company):
    """Validate company name"""
    if not company:
        return True  # Company is optional
    
    # Company name should be reasonable length
    if len(company.strip()) > 200:
        return False
    
    return True

@app.route('/api/profile', methods=['PUT'])
def update_profile():
    """Update user profile"""
    # Get current user from session
    user = get_current_user()
    if not user:
        return jsonify({"error": "Not authenticated"}), 401
    
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        # Validate input data
        errors = []
        
        # First Name validation
        first_name = data.get('firstName', '').strip()
        if 'firstName' in data:
            if not validate_name(first_name):
                errors.append("First name must be at least 2 characters and contain only letters, spaces, hyphens, and apostrophes")
        
        # Last Name validation
        last_name = data.get('lastName', '').strip()
        if 'lastName' in data:
            if not validate_name(last_name):
                errors.append("Last name must be at least 2 characters and contain only letters, spaces, hyphens, and apostrophes")
        
        # Phone validation
        phone = data.get('phone', '').strip() if data.get('phone') else None
        if 'phone' in data and phone:
            if not validate_phone(phone):
                errors.append("Phone number must be between 10-15 digits")
        
        # Company validation
        company = data.get('company', '').strip() if data.get('company') else None
        if 'company' in data and company:
            if not validate_company(company):
                errors.append("Company name is too long (maximum 200 characters)")
        
        # Newsletter subscription validation
        subscribe_newsletter = data.get('subscribeNewsletter')
        if subscribe_newsletter is not None and not isinstance(subscribe_newsletter, bool):
            errors.append("Newsletter subscription must be true or false")
        
        # Return validation errors if any
        if errors:
            return jsonify({"error": "Validation failed", "details": errors}), 400
        
        # Track what fields are being updated
        updated_fields = []
        
        # Update user fields only if they are provided in the request
        if 'firstName' in data and first_name != user.first_name:
            user.first_name = first_name
            updated_fields.append('first name')
        
        if 'lastName' in data and last_name != user.last_name:
            user.last_name = last_name
            updated_fields.append('last name')
        
        # Update full name if first or last name changed
        if 'firstName' in data or 'lastName' in data:
            new_full_name = f"{user.first_name} {user.last_name}".strip()
            if new_full_name != user.full_name:
                user.full_name = new_full_name
                if 'full name' not in updated_fields:
                    updated_fields.append('full name')
        
        if 'phone' in data and phone != user.phone:
            user.phone = phone
            updated_fields.append('phone')
        
        if 'company' in data and company != user.company:
            user.company = company
            updated_fields.append('company')
        
        if subscribe_newsletter is not None and subscribe_newsletter != user.subscribe_newsletter:
            user.subscribe_newsletter = subscribe_newsletter
            updated_fields.append('newsletter subscription')
        
        # Check if any fields were actually updated
        if not updated_fields:
            return jsonify({
                "message": "No changes detected",
                "user": user.to_dict()
            }), 200
        
        # Save changes to database
        db.session.commit()
        
        # Log the update (optional - you can add a user activity log table later)
        print(f"User {user.email} updated profile fields: {', '.join(updated_fields)}")
        
        return jsonify({
            "message": f"Profile updated successfully! Updated: {', '.join(updated_fields)}",
            "user": user.to_dict(),
            "updated_fields": updated_fields
        }), 200
        
    except Exception as e:
        db.session.rollback()
        print(f"Profile update error: {e}")
        return jsonify({"error": "Failed to update profile. Please try again."}), 500

@app.route('/api/profile/change-password', methods=['PUT'])
def change_password():
    """Change user password"""
    # Get current user from session
    user = get_current_user()
    if not user:
        return jsonify({"error": "Not authenticated"}), 401
    
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        current_password = data.get('currentPassword')
        new_password = data.get('newPassword')
        confirm_password = data.get('confirmPassword')
        
        # Validation
        if not current_password or not new_password or not confirm_password:
            return jsonify({"error": "All password fields are required"}), 400
        
        # Verify current password
        if not verify_password(current_password, user.password_hash):
            return jsonify({"error": "Current password is incorrect"}), 400
        
        # Check if new password matches confirmation
        if new_password != confirm_password:
            return jsonify({"error": "New passwords do not match"}), 400
        
        # Validate new password strength
        if len(new_password) < 8:
            return jsonify({"error": "New password must be at least 8 characters long"}), 400
        
        # Check if new password is different from current
        if verify_password(new_password, user.password_hash):
            return jsonify({"error": "New password must be different from current password"}), 400
        
        # Update password
        user.password_hash = hash_password(new_password)
        db.session.commit()
        
        # Optionally, invalidate all other sessions except current one
        current_session_token = session.get('session_token')
        UserSession.query.filter(
            UserSession.user_id == user.id,
            UserSession.session_token != current_session_token,
            UserSession.is_active == True
        ).update({'is_active': False})
        db.session.commit()
        
        return jsonify({
            "message": "Password changed successfully. Other sessions have been logged out for security."
        }), 200
        
    except Exception as e:
        db.session.rollback()
        print(f"Password change error: {e}")
        return jsonify({"error": "Failed to change password. Please try again."}), 500

@app.route('/api/profile/delete-account', methods=['DELETE'])
def delete_account():
    """Delete user account (soft delete)"""
    # Get current user from session
    user = get_current_user()
    if not user:
        return jsonify({"error": "Not authenticated"}), 401
    
    try:
        data = request.get_json()
        password = data.get('password') if data else None
        
        if not password:
            return jsonify({"error": "Password confirmation is required"}), 400
        
        # Verify password
        if not verify_password(password, user.password_hash):
            return jsonify({"error": "Incorrect password"}), 400
        
        # Soft delete - deactivate account instead of hard delete
        user.is_active = False
        user.email = f"deleted_{user.id}_{user.email}"  # Prevent email conflicts
        
        # Deactivate all sessions
        UserSession.query.filter_by(user_id=user.id, is_active=True).update({'is_active': False})
        
        db.session.commit()
        
        # Clear current session
        session.clear()
        
        return jsonify({
            "message": "Account deleted successfully"
        }), 200
        
    except Exception as e:
        db.session.rollback()
        print(f"Account deletion error: {e}")
        return jsonify({"error": "Failed to delete account. Please try again."}), 500

# Optional: Add user activity logging
class UserActivity(db.Model):
    __tablename__ = 'user_activities'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    activity_type = db.Column(db.String(50), nullable=False)  # 'profile_update', 'password_change', etc.
    description = db.Column(db.Text)
    ip_address = db.Column(db.String(45))
    user_agent = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationship
    user = db.relationship('User', backref=db.backref('activities', lazy=True))

def log_user_activity(user_id, activity_type, description=None):
    """Log user activity"""
    try:
        activity = UserActivity(
            user_id=user_id,
            activity_type=activity_type,
            description=description,
            ip_address=request.remote_addr,
            user_agent=request.headers.get('User-Agent')
        )
        db.session.add(activity)
        db.session.commit()
    except Exception as e:
        print(f"Failed to log activity: {e}")

# Optional: Get user activity history
@app.route('/api/profile/activity', methods=['GET'])
def get_user_activity():
    """Get user activity history"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Not authenticated"}), 401
    
    try:
        page = request.args.get('page', 1, type=int)
        per_page = min(request.args.get('per_page', 10, type=int), 50)  # Max 50 items per page
        
        activities = UserActivity.query.filter_by(user_id=user.id)\
            .order_by(UserActivity.created_at.desc())\
            .paginate(page=page, per_page=per_page, error_out=False)
        
        return jsonify({
            "activities": [{
                "id": activity.id,
                "type": activity.activity_type,
                "description": activity.description,
                "timestamp": activity.created_at.isoformat(),
                "ip_address": activity.ip_address[:8] + "..." if activity.ip_address else None  # Partial IP for privacy
            } for activity in activities.items],
            "pagination": {
                "page": activities.page,
                "per_page": activities.per_page,
                "total": activities.total,
                "pages": activities.pages,
                "has_next": activities.has_next,
                "has_prev": activities.has_prev
            }
        }), 200
        
    except Exception as e:
        print(f"Activity history error: {e}")
        return jsonify({"error": "Failed to fetch activity history"}), 500
# Create tables
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)