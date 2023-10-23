import React from 'react';
import axios from 'axios';
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
import style from "../components/Review.module.css";
import useProducts from "../hooks/useProducts";

interface Props {
	item: any;
	setlogin: any;
	setSuccess: any;
	search: any;
	setSearch: any;
}
const ItemDetail = ({ item, setlogin, setSuccess, search, setSearch }: Props) => {
	const router = useRouter();
	const description = ["wide", "cotton-made", "weight very light not less than 250g", "tight on the shoulders", "high quality ester", "all sizes L to XXL"]
const [review, setReview] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
    };



  if (router.isFallback) {
    return <div>Please Wait Loading</div>;
  }
	const imageData = item.img.data.data;
	const base64Image = Buffer.from(imageData).toString('base64');
	const imageURI = `data:image/png;base64,${base64Image}`;

  return (
    <>
	          <Head>
        <title>{item.name}</title>
        </Head>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
            <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} />
	  	<div className={styles.productdetail}>
	  	<img className={styles.detailimage} src={imageURI} alt={item.name} />
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
        	<div className={styles.review}> Add Review </div>
	  	<div className={style.reviewall}>
                <h2 className={style.detailreviewtitle}>Your Review</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
	  		className={style.area}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write your review here"
                        required
                    />
                    <div>
                        <button className={style.reviewbutton} type="submit">Submit</button>
                    </div>
                </form>
            </div>

	  	<Footer />

	  	</div>
    </>
  );
};

async function fetchData() {
  const response = await fetch('http://localhost:3000/api');
  const data = await response.json();
	console.log(data);
  return data;
}

//export async function getStaticPaths() {
//  const data = await fetchData();
//  
//  const paths = data.map((item: any) => ({
//    params: { id: item._id },
//  }));


async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/api');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You can handle the error as needed
  }
}


//  return {
//    paths,
//    fallback: false
//  };
//}

interface Props {
	params: any;
}
export async function getStaticProps({ params }: Props) {
  const data = await fetchData();
  const item = data.find((item: any) => item._id.toString() === params.id);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: { item },
  };
}

export default ItemDetail;
