/* eslint-disable jsx-a11y/anchor-is-valid */
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item relative group">
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
              <span className="absolute left-0 w-32 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Create a new account
              </span>
            </li>
            <li className="nav-item relative group">
              <a className="nav-link" href="#/login/">
                Login
              </a>
              <span className="absolute left-0 w-32 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Login to your account
              </span>
            </li>
            <li className="nav-item relative group">
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
              <span className="absolute left-0 w-32 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Deposit money
              </span>
            </li>
            <li className="nav-item relative group">
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
              <span className="absolute left-0 w-32 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Withdraw money
              </span>
            </li>
            <li className="nav-item relative group">
              <a className="nav-link" href="#/balance/">
                Balance
              </a>
              <span className="absolute left-0 w-32 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View your balance
              </span>
            </li>
            <li className="nav-item relative group">
              <a className="nav-link" href="#/alldata/">
                AllData
              </a>
              <span className="absolute left-0 w-32 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View all data
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
