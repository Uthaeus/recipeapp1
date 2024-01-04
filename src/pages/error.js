import { Link } from "react-router-dom";

function Error() {

    return (
        <div className="error">
            <h1 className="error-title">Oop something went wrong!</h1>

            <Link to='/' className="error-link">Return Home</Link>
        </div>
    );
}

export default Error;