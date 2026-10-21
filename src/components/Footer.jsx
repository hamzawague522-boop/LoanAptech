 import {Link} from "react-router-dom";
 import "./Footer.css";
 export default function Footer(){
    return (
        <>
    <footer >
        <div className="container">
            <div className="box">
                <h5>LoanAptech</h5>
                <p>Your Trusted Allies</p>
            </div>
            <div className="box">
                <h3>Quick Links</h3>
                <Link to="/" className="under">Home</Link>
                 <Link to="/" className="under">products</Link>
                  <Link to="/" className="under">Apply New</Link>
                  <Link to="/" className="under">About Us</Link>
            </div>
            <div className="box">
                <h3>Support</h3>
                 <Link to="/" className="under">Contact</Link>
                 <Link to="/" className="under">FAQ</Link>
                  <Link to="/" className="under">privacy pollcy</Link>
                  <Link to="/" className="under">Terms of Service</Link>
            </div>
            <div className="box">
                <h3>Get in Touch</h3>
                <Link to="/" className="under">suppcrt@lcapech.com</Link>
                 <Link to="/" className="under">+1(555)123-4567</Link>
                  <Link to="/" className="under">Mon-frt 9AM-6PM-EST</Link>
            </div>

        </div>
        
    </footer>
    </>
    );
}