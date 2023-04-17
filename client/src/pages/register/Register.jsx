
import { useState } from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed';
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChnage = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setErr(error.response?.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>AU social.</h1>
          <p>
          {/* <h2>HELLO ADAMASIANS!</h2><br/> */}
          <h2>
          <Typed
                strings={[
                  'HELLO ADAMASIANS!',
                    'Welcome to AU SOCIAL!']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    <inputs type="text"/>
                </Typed>
          </h2>
          
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          {err && <p className="error">{err}</p>}
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChnage}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChnage}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChnage}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChnage}
            />
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

