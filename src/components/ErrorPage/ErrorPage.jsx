import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <button><Link to="/">Go back to home</Link></button>
        </div>
    );
};

export default ErrorPage;