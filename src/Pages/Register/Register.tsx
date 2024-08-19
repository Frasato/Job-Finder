import { Link } from "react-router-dom";

const Register = () =>{
    return(
        <div>
            <input type="text" name="username" id="username" />
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
            <input type="passwordAgain" name="passwordAgain" id="passwordAgain" />
            <button>Register</button>
            <Link to="/login">Already have an account?</Link>
        </div>
    )
}

export default Register;