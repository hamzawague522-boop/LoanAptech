 import"./Contactus.css";
     export default function Contactus(){
    return(
        <form>
              <h2>Contact Us</h2>
               <p>We`re here to help!Reach out anytime.</p>
               <p>Email:support@loanapp.com</p>
                <p>Phone: +1(555) 123-4567</p>
                <p>Hours:Mon-Fri 9AM-6PM EST</p>

                <input type="text"placeholder="Your Name" />
                <input type="text"placeholder="Your Email" />
                <textarea rows="5" placeholder="Your Messages"></textarea>
                  <button>Send Messages</button>
        </form>
    )
}