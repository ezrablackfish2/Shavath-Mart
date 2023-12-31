import React from 'react';
import UploadPage from '../components/UploadPage';
import styles from '../components/Upload.module.css';
import Head from 'next/head';
import Header from '../components/Header';
import '../app/globals.css';

interface UploadProps {
  user: any; // Replace 'any' with the actual type of 'user'
  token: any; // Replace 'any' with the actual type of 'token'
  setlogin: any;
  setSuccess: any;
  search: any;
  setSearch: any;
  selectedAbout: any;
  setSelectedAbout: any;
  selectedService: any;
  setSelectedService: any;
}

const Upload: React.FC<UploadProps> = ({ user, token, setSuccess, setlogin, search, setSearch, setSelectedAbout, setSelectedService, selectedAbout, selectedService }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400&family=Aguafina+Script&family=Amatic+SC&family=Barrio&family=Bellota:wght@300&family=Black+Ops+One&family=Caveat&family=Chakra+Petch:ital,wght@1,300&family=Cinzel&family=Cookie&family=Croissant+One&family=Dancing+Script&family=Faster+One&family=Fuggles&family=Gugi&family=Hammersmith+One&family=Homemade+Apple&family=Itim&family=Lilita+One&family=Montserrat+Alternates:wght@100&family=Nothing+You+Could+Do&family=Orbitron&family=Playball&family=Rajdhani&family=Satisfy&family=Sedgwick+Ave+Display&family=Shadows+Into+Light&family=Space+Mono&family=Tilt+Prism&family=Yellowtail&display=swap"
        rel="stylesheet"
      />
      <Head>
        <title>Upload Data</title>
      </Head>

      <Header setlogin={setlogin} setSuccess={setSuccess} search={search} setSearch={setSearch} selectedService={selectedService} selectedAbout={selectedAbout} setSelectedService={setSelectedService} setSelectedAbout={setSelectedAbout}/>


      <UploadPage user={user} token={token} />
    </>
  );
};

export default Upload;

