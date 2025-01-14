const Error = ({ error }) => {
  console.log(error)
  return (
    <div>
      <section id="error-page">
        <div className="container-content">
          <h1>404</h1>
          <h3>Sorry Page Not Found!</h3>
          <p>
            Oops! It seems like the page you are trying to access doesn't exist. 
            Feel free to report it; we will look into it.
          </p>
        </div>
        <div className="btn">
          <NavLink to="/">Return To Home</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Error;
