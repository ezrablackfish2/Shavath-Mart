import "../app/globals.css"
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchWhole from "../components/SearchWhole";
import Products from "../components/Products";
import data from '../utils/data.json'
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SearchProductWhole from "../components/SearchProductWhole";
import Head from "next/head";
import Bottom from "../components/Bottom";
import Link from 'next/link';
import styles from "../components/Searcher.module.css";

interface SearchProps {
  shower: any; // Change 'any' to the specific type you're using
  remover: any; // Change 'any' to the specific type you're using
  user: any; 
  token: any; 
  setlogin: any;
  setSuccess: any;
  search: any;
  setSearch: any;
}
export default function Searcher( {setSuccess, setlogin, search, setSearch, setSelectedAbout, setSelectedService, selectedAbout, selectedService}: SearchProps) {
	
    return (
        <>
	<Head>
	<title>Search</title>
	</Head>
	<link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />


      <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>

	<h1 className={styles.searchtitle}>Search</h1>
		<SearchWhole />
		<h1 className={styles.searchproducttitle}>Search Products</h1>
            <div className="flex justify-center my-10">
                <SearchProductWhole />
            </div>
            <Footer />
        </>
    )
}
