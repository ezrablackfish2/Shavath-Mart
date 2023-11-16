import React, { useState, useContext, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from "../components/Signup.module.css";
import AuthContext from "../context/AuthProvider";
import { useRouter } from 'next/router';
import "../app/globals.css";
import Header from "../components/Header";
import Head from "next/head";

interface Props {
  user: string;
  token: string;
  formData: { username: string; password: string };
  setFormData: (data: { username: string; password: string }) => void;
  loggedin: boolean;
  setlogin: (loggedin: boolean) => void;
  setUser: (user: string) => void;
  setToken: (token: string) => void;
  search: any;
  setSearch: any;
  selectedAbout: any;
  selectedService: any;
  setSelectedAbout: any;
  setSelectedService: any;
}

function Signup({ user, token, formData, setFormData, loggedin, setlogin, setUser, setToken, search, setSearch, selectedAbout, selectedService, setSelectedAbout, setSelectedService }: Props) {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLDivElement>(null);
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<string[]>([]);
  const router = useRouter();

  const navigate = (route: string) => {
    router.push(route);
  };

  console.log(formData);

  useEffect(() => {
    if (user) {
      setSuccess(true);
      setlogin(true);
      navigate("/");
    }

    if (userRef.current) {
      userRef.current.focus();
    }
  }, [user]);

  useEffect(() => {
    setErrMsg("");
  }, [formData.username, formData.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formData);
      console.log(formData.username);
      console.log(formData.password);
      const user = formData.username;
      const pwd = formData.password;
      console.log('Signup successful:', response?.data?.message);
      token = response?.data?.user?.password;
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      console.log(token);

      setSuccess(true);
      setlogin(true);
      navigate("/home");
    } catch (err: any) {
      if (formData.password !== formData.password) {
        setErrMsg("passwords do not match");
      }

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        setErrMsg("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
      }

      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      if (!usernameRegex.test(formData.username)) {
        setErrMsg("Username contains invalid characters.");
      }

      const isAllLetters = /^[a-zA-Z]+$/.test(formData.password);
      const isAllNumbers = /^[0-9]+$/.test(formData.password);
      const isAllSpecialCharacters = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/g.test(formData.password);

      if (isAllLetters || isAllNumbers || isAllSpecialCharacters) {
        setErrMsg("Password should include a mix of letters, numbers, and special characters.");
      }

      const commonPasswords = ["password", "12345678", "qwerty", "admin", "87654321"];

      if (commonPasswords.includes(formData.password.toLowerCase())) {
        setErrMsg("Password is too common. Please choose a stronger password.");
      }

      if (formData.password.length < 8 || formData.password.length < 8) {
        setErrMsg("password must be between 8 - 24 characters");
      }

      if (!formData.password || !formData.password) {
        setErrMsg("You must input a password.");
      }

      if (!formData.username) {
        setErrMsg("you have to input a user name");
      }

      if (!err?.response) {
        setErrMsg("No server found");
      }

      if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      }
    }
  }

  function remover() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setSuccess(false);
    setlogin(false);
  }

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
      <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedAbout={selectedAbout} selectedService={selectedService} setSelectedAbout={setSelectedAbout} setSelectedService={setSelectedService}/>
      {success ? (
        <div className={styles.login}>
          <h1 className={styles.logintitle}>You are Signed Up!</h1>
          <br />
          <p><button className={styles.loginbutton} onClick={remover}>Log Out</button></p>
        </div>
      ) : (
        <div className={styles.login}>
          <img className={styles.signupimage} src="./logo.jpg" />
          <p className={styles.rederror}>{errMsg}</p>
          <h1 className={styles.logintitle}>Create account</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.labeltitle}>Your name</label>
            <input
              placeholder="name"
              className={styles.titleinput}
              type="text"
              name="username"
              ref={userRef}
              value={formData.username}
              autoComplete="off"
              onChange={handleChange}
            />
            <label className={styles.labeltitle}>Password</label>
            <input
              placeholder="password"
              className={styles.titleinput}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className={styles.loginbutton} type="submit">Create your Shavath account</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Signup;

