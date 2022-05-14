function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a id="brand" className="navbar-brand" href="#" title="Go to BadBank Home">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <li id="CreateAccount" className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="Create a new account">Create Account</a>
          </li>
          <li id="login" className="nav-item">
            <a className="nav-link" href="#/login/" title="Login to your account">Login</a>
          </li>
          <li id="deposit" className="nav-item">
          <a className="nav-link" href="#/deposit/" title="Deposit Transaction">Deposit</a>
          </li>
          <li id="withdraw" className="nav-item">
          <a className="nav-link" href="#/withdraw/" title="Withdraw Transaction">Withdraw</a>
          </li>
          <li id="alldata" className="nav-item">
          <a className="nav-link" href="#/alldata/" title="View All Data">All Data</a>
          </li>
          <li id="Home" className="nav-item">
          <a className="nav-link" href="#" title="Home Page">Home</a>
          </li>                  
        </div>
      </div>
      </div>
    </nav>
    </>
  );
}