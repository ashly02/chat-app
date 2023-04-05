import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        setErr("Please verify your email before logging in.");
      } else {
        navigate("/home")
      }
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>LiveChat</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
          {err && <span>{err}</span>}
          <p>New User?<Link to="/">Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login;
