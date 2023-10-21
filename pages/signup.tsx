import React, { useState, useContext, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from "../components/Signup.module.css";
import AuthContext from "../context/AuthProvider";
import { useRouter } from 'next/router';

interface Props {
	user: string;
	token: string;
	formData: {};
	setFormData: () => void;
	loggedin: boolean;
	setlogin: () => void;
}

function Signup( {user, token, formData, setFormData, loggedin, setlogin, setUser, setToken} : Props) {
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);
	const [allUsers, setAllUsers] = useState([]);
	const router = useRouter();
  	const navigate = (route) => {
    		router.push(route);
	};
	console.log(formData)	

	useEffect(() => {
		if (user) {
		setSuccess(true);
		setlogin(true);
		navigate("/");
	}

		userRef.current.focus();
	}, [user])
	useEffect(() => {
		setErrMsg("")
	}, [formData.username, formData.password])

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
    		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:3000/api/auth/register", formData);
			console.log(formData.username);
			console.log(formData.password);
			const user = formData.username;
			const pwd = formData.password
			console.log('Signup successful:', response?.data?.message);
			token = response?.data?.user?.password;
			localStorage.setItem("user", user)
			localStorage.setItem("token", token);
			console.log(token);

			setSuccess(true);
			setlogin(true);
			navigate("/home");
	useEffect(() => {
                if (user) {
                setSuccess(true);
                setlogin(true);
                navigate("/home");
        }

                userRef.current.focus();
        }, [user])

		} catch (err) {
			if (formData.password !== formData.password) {
				setErrMsg("passwords do not match")
			}


			const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
			if (!passwordRegex.test(formData.password1)) {
				setErrMsg("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
			}

			const usernameRegex = /^[a-zA-Z0-9_]+$/;
			if (!usernameRegex.test(formData.username)) {
				setErrMsg("Username contains invalid characters.");
			}

			
			const isAllLetters = /^[a-zA-Z]+$/.test(formData.password1);
			const isAllNumbers = /^[0-9]+$/.test(formData.password1);
			const isAllSpecialCharacters = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/g.test(formData.password1);

			if (isAllLetters || isAllNumbers || isAllSpecialCharacters) {
				setErrMsg("Password should include a mix of letters, numbers, and special characters.");
			}
			const commonPasswords = ["password", "12345678", "qwerty", "admin", "87654321"];

			if (commonPasswords.includes(formData.password.toLowerCase())) {
				setErrMsg("Password is too common. Please choose a stronger password.");
			}

			if (formData.password.length < 8 || formData.password.length < 8)
			{
				setErrMsg("password must be between 8 - 24 characters")
			}
			if (!formData.password || !formData.password) {
				setErrMsg("You must input a password.");
			}
			if (!formData.username) {
				setErrMsg("you have to input a user name")
			}
			if (!err?.response) {
				setErrMsg("No server found")
			}
			if (err.response?.status === 401) {
                        setErrMsg("Unauthorized");
			}
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
				<h1>You are Signed Up!</h1>
				<br />
				<p><button onClick={remover}>Log Out</button></p>
				</div>
			) : (
	    <div className={styles.login}>
	<p className={styles.rederror}>{errMsg}</p>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
	<img className={styles.signupimdb} src="" />
	<div className={styles.loginlabel}>
          <label>Your name</label>
	</div>
	<div>
          <input
		className={styles.logininput}
            	type="text"
            	name="username"
		ref={userRef}
		value={formData.username}
		autoComplete="off"
		onChange={handleChange}
          />
        </div>
        <div className={styles.loginlabel}>
          <label>Password</label>
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
        <button className={styles.loginbutton} type="submit">Create your IMDb account</button>
      </form>
    </div>
		)}
	</>
  );
}

export default Signup;
