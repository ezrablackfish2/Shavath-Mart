import React from 'react';
import { useRouter } from 'next/router';
import data from '../utils/data.json';
import "../app/globals.css"
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
import styles from "../components/Detail.module.css";


const ItemDetail = ({ item }) => {
	const router = useRouter();
	const description = ["wide", "cotton-made", "weight very light not less than 250g", "tight on the shoulders", "high quality ester", "all sizes L to XXL"]

  if (router.isFallback) {
    return <div>Please Wait Loading</div>;
  }

  return (
    <>
	          <Head>
        <title>{item.name}</title>
        </Head>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
            <Header />
	  	<div className={styles.productdetail}>
	  	<img className={styles.detailimage} src={item.image} alt={item.name} />
		<div className={styles.detailinfo}>
		<h1 className={styles.detailtitle}>{item.name}</h1>
	  	<ul className={styles.detaildescription}> Description
		{description.map(item => <li className={styles.detaildescribeone}>{item}</li>)}
	  	</ul>
		<p className={styles.detailcolor}>Color: {item.color}</p>
		<p className={styles.detailprice}>Price: {item.price}</p>

	  	<button className={styles.detailadd}>Add to Cart </button>
	  	</div>
	  	<div className={styles.detailreview}>
	  	<h1 className={styles.detailreviewtitle}>Review</h1>
	  	<p className={styles.detailreviewcontent}>
	  	There are no reviews yet.
		Be the first to review {item.name} Your email address will not be published. Required fields are marked *
	  	</p>
	  	</div>
	  	<Link href={`/review/${item.id}`}>
        		<div className={styles.review}> Add Review </div>
      		</Link>

	  	<Footer />

	  	</div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const itemId = parseInt(params.id);
  const item = data.find((item) => item.id === itemId);

  return {
    props: {
      item,
    },
  };
}

export default ItemDetail;

