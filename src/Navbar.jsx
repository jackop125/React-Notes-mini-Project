const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-warning">
        <div className="container">
          <a className="navbar-brand" href="index.html">
          <i className="bi bi-journal-bookmark-fill" style={{fontSize:"25px"}}></i>
          &nbsp;<span style={{fontWeight:"bold"}}>Notes</span>
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
