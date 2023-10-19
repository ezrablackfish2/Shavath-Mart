import React from 'react';
import FileUpload from '../components/FileUpload';
import uploadImage from '../utils/api';
import styles from '../components/Upload.module.css';
import Head from "next/head";
import Header from "../components/Header";
import "../app/globals.css"



const Upload = () => {
  const handleUpload = async (formData: FormData) => {
    try {
      const response = await uploadImage(formData);
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Image upload failed', error);
    }
  };

  return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap" rel="stylesheet" />
	<Head>
        <title>Upload Data</title>
        </Head>
            <Header />
	<div className={styles.uploadbody}>
	<h1 className={styles.uploadtitle}>Upload a Product</h1>
	<FileUpload onSubmit={handleUpload} />
	</div>
	</>
  );
};

export default Upload;

