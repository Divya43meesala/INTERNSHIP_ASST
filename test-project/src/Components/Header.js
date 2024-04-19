import React, { useState } from 'react';
import Logo from '../atgworld.png'; // Path to your logo image
import { BiSearch } from 'react-icons/bi'; // Import search icon from react-icons
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Import Facebook and Google icons
import { AiOutlineEye } from 'react-icons/ai';
import SignInImage from './signin.jpeg'; // Import sign-in image
import  profile from './profile_icon4.jpg'
import './Header.css'

const Header = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [login,setLogin]=useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [name,setName]=useState('')

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const handleSignupSubmit = () => {
    // Handle signup logic here

    // For demonstration, just show the success popup
    setShowSuccessPopup(true);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src={Logo}
              alt="Logo"
              width="200"
              height="60"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <form className="d-flex">
              <div className="input-group" style={{ width: '360px' }}>
                <span className="input-group-text bg-light rounded-start border-0">
                  <BiSearch />
                </span>
                <input
                  className="form-control bg-light border-0 rounded-end"
                  type="search"
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
          
          <ul className="navbar-nav">
          { login==false ?
            (<li className="nav-item">
              <a className="nav-link" href="#create-account" onClick={handleSignupClick}>
                Create Account <span className='text-primary'>It's free</span>
              </a>
            </li>):(
              <li className="nav-item">
             <p><img src={profile} height="30px" width="30px" style={{ borderRadius:'50px'}}/>{name}</p> 
            </li>
            )
          }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#signup" onClick={handleSignupClick}>Sign Up</a></li>
                <li><a className="dropdown-item" href="#login" onClick={handleLoginClick}>Login</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '80%', maxHeight: '95%' }}>
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#c8e6c9', color: '#1b5e20' }}>
                <h5 className="modal-title">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now.</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseSignupModal}></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
                        <h5 className="fw-bold" style={{ fontStyle: 'italic', textAlign: 'left', marginBottom: '20px' }}>Create Account</h5>
                        <form onSubmit={handleSignupSubmit}>
                          <div className="mb-3 d-flex justify-content-between">
                            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="First Name" style={{ width: '48%' }} />
                            <input type="text" className="form-control" placeholder="Last Name" style={{ width: '48%' }} />
                          </div>
                          <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email address" />
                          </div>
                          <div className="mb-3 position-relative">
                            <input type="password" className="form-control pr-5" placeholder="Password" />
                            <AiOutlineEye className="position-absolute top-50 end-0 translate-middle-y" style={{ cursor: 'pointer' }} />
                          </div>
                          <div className="mb-3 position-relative">
                            <input type="password" className="form-control pr-5" placeholder="Confirm Password" />
                          </div>
                          <button type="submit" className="btn btn-primary btn-block w-100" style={{ borderRadius: '80px' }} onClick={(e)=>setLogin(true)}>Create Account</button>
                        </form>
                      </div>
                      <div className="text-center mt-3">
                        <div className="d-block border" style={{ marginRight: '10px', width: '450px' }}>
                          <button type="button" className="btn btn-light rounded-circle" style={{ width: '40px', height: '40px' }}><FaFacebook /></button>
                          <span className="d-block-inline">Sign In with Facebook</span>
                        </div>
                        <div className="d-block border mt-3" style={{ width: '450px' }}>
                          <button type="button" className="btn btn-light rounded-circle" style={{ width: '40px', height: '40px' }}><FaGoogle /></button>
                          <span className="d-block-inline">Sign In with Google</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-center">
                        <p className="text-center">Already have an account? <span className="text-primary" onClick={handleLoginClick}>Sign in</span></p>
                        <img src={SignInImage} alt="Image" style={{ height: '400px', width: '400px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '80%', maxHeight: '95%' }}>
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#c8e6c9', color: '#1b5e20' }}>
                <h5 className="modal-title">Let's learn, share & inspire each other with our passion for computer engineering. Sign in now.</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseLoginModal}></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
                        <h5 className="fw-bold" style={{ fontStyle: 'italic', textAlign: 'left', marginBottom: '20px' }}>Sign In</h5>
                        <form>
                          <div className="mb-3">
                            <input type="email" className="form-control" onChange={(e)=>setName(e.target.value)}  placeholder="Email address" />
                          </div>
                          <div className="mb-3 position-relative">
                            <input type="password" className="form-control pr-5" placeholder="Password" />
                            <AiOutlineEye className="position-absolute top-50 end-0 translate-middle-y" style={{ cursor: 'pointer' }} />
                          </div>
                          <button type="submit" className="btn btn-primary btn-block w-100" style={{ borderRadius: '80px' }} onClick={(e)=>setLogin(true)}>Sign In</button>
                        </form>
                        <div className="text-center mt-3">
                          <div className="d-block border" style={{ marginRight: '10px', width: '400px' }}>
                            <button type="button" className="btn btn-light rounded-circle" style={{ width: '40px', height: '40px' }}><FaFacebook /></button>
                            <span className="d-block-inline">Sign In with Facebook</span>
                          </div>
                          <div className="d-block border mt-3" style={{ width: '400px' }}>
                            <button type="button" className="btn btn-light rounded-circle" style={{ width: '40px', height: '40px' }}><FaGoogle /></button>
                            <span className="d-block-inline">Sign In with Google</span>
                          </div>
                        </div>
                        <p className="text-center mt-3 fw-bold">Forgot Password?</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text-center">
                        <p className="text-center">Don't have an account yet? <span className="text-primary" onClick={handleSignupClick}>Create new for free</span></p>
                        <img src={SignInImage} alt="Image" style={{ height: '400px', width: '400px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Signup Successful</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseSuccessPopup}></button>
              </div>
              <div className="modal-body">
                <p>Your account has been successfully created.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSignupModal && <div className="modal-backdrop fade show" onClick={handleCloseSignupModal}></div>}
      {showLoginModal && <div className="modal-backdrop fade show" onClick={handleCloseLoginModal}></div>}
    </div>
  );
};

export default Header;
