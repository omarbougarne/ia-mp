const Loading = () => {
    const overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    };
  
    const spinnerStyle = {
      width: '60px',
      height: '60px',
      border: '6px solid #e2e8f0',
      borderTop: '6px solid #1d4ed8',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '20px',
    };
  
    const textStyle = {
      fontSize: '1.2rem',
      color: '#1e293b',
      fontWeight: 500,
      letterSpacing: '0.5px',
    };
  
    return (
      <>
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
        <div style={overlayStyle}>
          <div style={spinnerStyle}></div>
          <p style={textStyle}>Loading...</p>
        </div>
      </>
    );
  };
  
  export default Loading;
  