import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
import './Navbar.css';

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm('You will be logged out. Are you sure?');
    if (confirmLogout) {
      try {
        await auth.signOut();
        navigate("/login",{ replace: true });
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src='https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg' alt='' className='logo' /></Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className='item-active'>Home</Link>
        <Link to="/tripplans" className='item-active'>Trip Plans &nbsp;<img src="https://www.ibps.in/wp-content/themes/ibps/images/new.gif" border="0" alt="" /></Link>
        <Link to="/discover" className='item-active'>Discover</Link>
        <Link to="/contact" className='item-active'>Contact</Link>
        {user && (
          <NavbarProfile onClick={handleLogout} className='item-active'>
            <img src={user.photoURL} alt="Profile" />
            <p>{user.displayName}</p>
          </NavbarProfile>
        )}
      </div>
      <div className="navbar-toggle" onClick={toggleMenu} style={{ fontSize: "20px" }}>
        {isMenuOpen ? <AiFillCloseCircle /> : <FaBars />}
      </div>
    </nav>

  );
};

export default Navbar;
