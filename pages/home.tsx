import "../app/globals.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SearchProduct from "../components/SearchProduct";
import Head from "next/head";
import Bottom from "../components/Bottom";
import Link from 'next/link';
import useProducts from "../hooks/useProducts";
import data from "../utils/data.json";
import styles from "../components/Home.module.css";


interface HomeProps {
  shower: any; // Change 'any' to the specific type you're using
  remover: any; // Change 'any' to the specific type you're using
  user: any; // Change 'any' to the specific type you're using
  token: any; // Change 'any' to the specific type you're using
  setlogin: any;
  setSuccess: any;
}

export default function Home({ shower, remover, user, token, setlogin, setSuccess, products, error, isLoading }: HomeProps) {
	console.log(products);

  return (
    <>
      <Head>
        <title>Shavath Mart</title>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
      <Header setlogin={setlogin} setSuccess={setSuccess}/>
      <Hero />
      {console.log(shower, remover, user, token)}
      <div className="flex justify-center my-10">
        <SearchProduct />
      </div>
      <div className="flex justify-center mb-28">
	{error && <p> Ezra site request error code 77 </p>}
	{isLoading && <img src="/loading.gif" className={styles.loadhome} />}
        <Products data={products} />
      </div>
      <Bottom />
      <Footer />
    </>
  );
}
