import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div>
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
            <button>Login</button>
            <Link to="/register">Do not have an account?</Link>
        </div>
    )
}

export default Login;