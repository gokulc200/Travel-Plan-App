import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-background'>
            <div>
                <h1 className='footer-heading'>Let's Socialize</h1>
                <div className="d-flex">
                    <a href="https://www.linkedin.com/in/gokulc200/" target="blank"><img align="center" src="https://icon.signature.email/social/linkedin-circle-large-0077b5-FFFFFF.png" alt="" className="m-2" height="40" width="40" /></a>
                    <a href="https://www.instagram.com/gogull_bolt/" target="blank"><img align="center" src="https://icon.signature.email/social/instagram-circle-large-fe0076-FFFFFF.png" alt='' className="m-2" height="40" width="40" /></a>
                    <a href="mailto:gokulcjnvk@gmail.com" target="blank"><img align="center" src="https://icon.signature.email/social/email-circle-large-1493b3-FFFFFF.png" className="m-2" alt='' height="40" width="40" /></a>
                </div>
                <p><strong>Country : </strong>India, USA, UAE</p>
            </div>
            <div>
                <p>Copyright © Gokul Trip Planner 2023</p>
            </div>
            <div className='d-flex flex-column'>
                <form>
                    <h1 className='footer-heading'>Email Address</h1>
                    <input type='email' style={{ backgroundColor: "black", padding: "10px", color: "white", borderRadius: "10px" }} placeholder='Enter email address...' required />
                    <div>
                        <button type='submit' className='btn btn-primary mt-3 mb-3'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Footer