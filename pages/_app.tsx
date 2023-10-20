import { useState, useEffect } from 'react';
import Home from "./home";
import UploadForm from "../components/UploadForm";
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();
  const handleNavigation = (route) => {
    router.push(route);
  };

  const [search, setSearch] = useState("");
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const [loggedin, setlogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [VG, setVG] = useState(null);
  const [rateOn, setRateOn] = useState(false);
  const [watchlistOn, setWatchlistOn] = useState(false);
  const [darkoverlay, setDarkOverlay] = useState(false);
  const [watchlistSuccess, setWatchlistSuccess] = useState(false);
  const [watchlist, setWatchlist] = useState(false);
  const [remover, setRemover] = useState(true);
  const [shower, setShower] = useState(false);
  useEffect(() => {

    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedIsAuthenticated = localStorage.getItem('token') !== null;

    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(storedUser);
    setIsAuthenticated(storedIsAuthenticated);
  }, []);



return (
        <>
	<Component {...pageProps} shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin}/>
        </>
);
}

export default App;
