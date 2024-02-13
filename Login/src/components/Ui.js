import React, { useState } from 'react';
import rev from '../Images/book.jpg';
import userLogo from '../Images/logo.png';

function LoginPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonColor, setButtonColor] = useState('#3b82f6');

  const handleMouseEnter = () => {
    setIsHovered(true);
    setButtonColor('#2563EB');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setButtonColor('#3b82f6');
  };

  return (
    <div style={{ borderColor:'1px solid black',border:'5px'  }}>
    <div className="login-page" style={{ display: 'flex',borderRadius:'10px', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'whitesmoke' }}>
      <img
        src={rev}
        alt="login image"
        style={{ width: '52%', maxHeight: '300%', objectFit: 'cover', borderRadius: '10px', transition: 'transform 1.5s' }}
      />
      <div className="form-container" style={{ flex: 1, padding: '30px', maxWidth: '400px', backgroundColor: 'white', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '50px', marginLeft: '50px' }}>

        <h2>
          <img src={userLogo} alt="User Logo" style={{ width: '24px', marginRight: '8px' }} />
          Login
        </h2>
        <form style={{ width: '100%' }}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ fontFamily:'inherit',fontSize:'20px'}}>Email </label>
            <input type="text" id="password" name="email" style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #cccccc', borderRadius: '5px', boxSizing: 'border-box', marginTop: '0.5rem' }} />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ fontFamily:'inherit',fontSize:'20px'}}>Password</label>
            <input type="password" id="password" name="password" style={{ width: '100%', padding: '8px', fontSize: '16px', border: '1px solid #cccccc', borderRadius: '5px', boxSizing: 'border-box', marginTop: '0.5rem' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ marginRight: '5px' }}>
              <input type="checkbox" id="keepSignedIn" name="keepSignedIn" style={{ marginRight: '5px' }} />
              <label htmlFor="keepSignedIn" style={{ fontFamily: 'bold', fontSize: '1rem' }}>Keep me signed in</label>
            </div>
            <a href="/create-account" style={{ fontFamily: 'bold', color: '#3b82f6',textDecoration:'none' ,color:'blue'}}>Create new account</a>
          </div>
          <button
            type="submit"
            style={{
              width: '60%',
              padding: '10px',
              backgroundColor: buttonColor,
              color: '#ffffff',
              fontSize: '18px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft:'5rem',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
