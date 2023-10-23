import { useState, useEffect } from 'react';
import Home from "./home";
import UploadForm from "../components/UploadForm";
import { useRouter } from 'next/router';
import useProducts from "../hooks/useProducts";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any; // Change 'any' to the appropriate type if known
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleNavigation = (route: string) => {
    router.push(route);
  };

  const [search, setSearch] = useState<string>("");
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState<{ username: string; password1: string; password2: string }>({
    username: '',
    password1: '',
    password2: '',
  });
  const [loggedin, setlogin] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [VG, setVG] = useState<null | any>(null); // Replace 'any' with the appropriate type
  const [rateOn, setRateOn] = useState<boolean>(false);
  const [watchlistOn, setWatchlistOn] = useState<boolean>(false);
  const [darkoverlay, setDarkOverlay] = useState<boolean>(false);
  const [watchlistSuccess, setWatchlistSuccess] = useState<boolean>(false);
  const [watchlist, setWatchlist] = useState<boolean>(false);
  const [remover, setRemover] = useState<boolean>(true);
  const [shower, setShower] = useState<boolean>(false);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      const storedIsAuthenticated = localStorage.getItem('token') !== null;

      if (storedToken) setToken(storedToken);
      if (storedUser) setUser(storedUser);
      setIsAuthenticated(storedIsAuthenticated);
    }
  }, []);
      const {products, error, isLoading } = useProducts(user, token);

  return (
    <>
      <Component {...pageProps} shower={shower} remover={remover} user={user} token={token} formData={loginData} setFormData={setLoginData} loggedin={loggedin} setlogin={setlogin} setToken={setToken} setUser={setUser} products={products} error={error} isLoading={isLoading}/>
    </>
  );
}

export default App;
