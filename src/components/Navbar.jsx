import "./Navbar.css";
function Navbar(){
    return(
        <>
        <header>
            <nav>
                LoanAptech
            <a href="/Home">Home</a>
            <a href="/Loans">Loans</a>
            <a href="/about">About</a>
            <a href="/Contactus">Contactus</a>
            <a href="/Login">Login</a>
            <a href="/Sign" style={{background:"blue",color:"white",border:"10px",borderRadius:"5px"}}>Sign Up</a>
            </nav>
        </header>
        </>
    );
}
export default Navbar;