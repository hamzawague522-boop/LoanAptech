export default function SignUp(){
    return (
        <div className="container">
        <form>
            <input type="text" placeholder="Full name"/>
            <input type="text" placeholder="Email adress"/>
            <input type="text" placeholder="Phone number"/>
            <input type="text" placeholder="password"/>
            <input type="text" placeholder="Confram password"/>
            <button>Sign up</button>
        </form>
        </div>
    );
}