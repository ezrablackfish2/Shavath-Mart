import React, { useState, useContext, useRef, useEffect } from 'react';
import axios from 'axios';
import AuthContext from "../context/AuthProvider.tsx";
import { useRouter } from 'next/router';
import styles from "../components/Login.module.css";

interface Props {
	user: string;
	token: string;
	formData: {};
	setFormData: () => void;
	loggedin: boolean;
	setlogin: () => void;
}

function Login( {user, token, formData, setFormData, loggedin, setlogin} : Props) {
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);
	const router = useRouter();
	const navigate = (route) => {
		router.push(route);
	};
	
	useEffect(() => {
		if (user && token) {
		setSuccess(true);
		setlogin(true);
		navigate("/home");
	}

		userRef.current.focus();
	}, [user, token])
	useEffect(() => {
		setErrMsg("")
	}, [formData.username, formData.password])

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
    		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:3000/api/auth/login', formData);
			console.log(response);
			const token = response?.data?.user?.password;
			console.log(token);
			console.log(formData.username);
			console.log(formData.password);
			const user = formData.username;
			const pwd = formData.password
			console.log('Login successful:', response.data);
			localStorage.setItem("user", user)
			localStorage.setItem("token", token);
			setSuccess(true);
			setlogin(true);
			navigate("/");

		} catch (err) {
		if (!err?.response){
		setErrMsg("No Server Response");

		} else if (err.response?.status === 400) {
			setErrMsg("missing user name or password");
		} else if (err.response?.status === 401) {
			setErrMsg("Unauthorized");
		} else {
			setErrMsg("Login Failed");
		}
			errRef.current.focus();
		}
	};
	function remover() {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setSuccess(false);
		setlogin(false);
	}

	return (
		<>
	  			{success ? (
				<div>
				<h1>You are logged In!</h1>
				<br />
				<p><button onClick={remover}>Log Out</button></p>
				</div>
			) : (
				<>	
				<img className={styles.loginimdb} src="/shoes.png" />
				<div className={styles.login}>
				<h1>Sign In</h1>
				<p className={styles.rederror} ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"><span className={styles.rederror}>{errMsg}</span></p>
 				<form onSubmit={handleSubmit}>
				<div className={styles.loginlabel}>
				<label>Username</label>
				</div>
				<div>
				<input
				className={styles.logininput}
				type="text"
				name="username"
				ref = {userRef}
				autoComplete="off"
				value={formData.username}
				onChange={handleChange}
			/>
				</div>
				<div className={styles.loginlabel}>
				<label >Password</label>
				</div>
				<div>
				<input 
				className={styles.logininput}
				type="password"
				name="password"
				value={formData.password}
				onChange={handleChange}
			/>
				</div>
				<button className={styles.loginbutton} type="submit">Signin</button>
			<button className={styles.signuplinkbutton} ><a href="/signup">Create your IMDb account</a></button>
		</form>
		</div>
		</>
		)}
	</>
  );
}

export default Login;
