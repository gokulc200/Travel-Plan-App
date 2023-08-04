// src/components/Login.js
import React, { useState } from 'react';
import firebase, { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            navigate("/",{ replace: true });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='login-container'>
            <div className='col-12 col-md-6 col-lg-5 d-none d-lg-block'>
                <img src='https://dreamcivil.com/wp-content/uploads/2021/08/Burj-portrait-lagre_tcm25-475749-min.jpg' alt='' className='start-image' />
            </div>
            <div className='col-12 col-lg-7'>
                <div className='d-flex flex-column justify-content-center align-items-center pt-4 pb-4'>
                    <h1 className='main-heading'>Trip Planner App 🛫</h1>
                    <div className='d-flex flex-column justify-content-center align-items-center pt-4 pb-4'>
                        <h1 className='text-white pb-4'>Login</h1>
                        <button onClick={handleGoogleSignIn} className='signin-btn'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png' alt='' className='btn-image' /> &nbsp; Sign in with Google</button>
                    </div>
                    <div>
                        <ul className="trip-features">
                            <li>🌊 Explore exotic beaches and immerse yourself in crystal-clear waters.</li>
                            <li>🌎 Experience the rich heritage and culture of ancient civilizations.</li>
                            <li>🪂 Enjoy adrenaline-pumping adventures in lush jungles and soaring mountains.</li>
                            <li>🗿 Discover hidden gems and picturesque landscapes off the beaten path.</li>
                            <li>🌟 Engage in authentic interactions with local communities and traditions.</li>
                            <li>🦁 Embark on a wildlife safari and witness majestic creatures in their natural habitat.</li>
        
                        </ul>
                    </div>
                </div>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
