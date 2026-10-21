import"./Home.css";
export default function Home() {
    return(
        <div className="Home">
            <h1>Welcome to LonAptech</h1>
            <p>Get instant personal lonas up to $50,000 with low interet rates and flexible<br/>repayment options.</p>
            <button>Apply Now,Its Free</button>
            <div className="container">

            <div className="card">
                <h2>Lightning Fast</h2>
                <h6>Lighttning Fast Approval</h6>
                <p>Get decision in under 10 minutes</p>

            </div>

            <div className="card">
                <h2>NO Paperwork</h2>
                <h6>No Paperwork Required</h6>
                <p>100% digtal & hasle-free process</p>

            </div>

            <div className="card">
                <h2>Best Rates</h2>
                <h6>Lowest Interest Rates</h6>
                <p>Starting from just 8.99% p.a.</p>

            </div>
            </div>
        </div>
    );
}