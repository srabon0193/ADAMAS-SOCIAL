import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typed from 'react-typed';
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate=useNavigate()

  const handleChnage = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>AU SOCIAL.</h1>
          <p>
          <h2>
          <Typed
                strings={[
                    'Welcome to AU FAMILY!',
                    'Please enter your login details.']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    <inputs type="text"/>
                </Typed>
          </h2>
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChnage}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChnage}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
