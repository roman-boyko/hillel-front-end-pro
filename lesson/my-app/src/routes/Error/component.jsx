import {Link} from "react-router-dom";

const Error = () => {
  return (
    <>
      <main>
        <h2>Error 404!</h2>
        <p>Sorry, page not found.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Error;
