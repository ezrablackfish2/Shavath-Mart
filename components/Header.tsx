import Image from "next/image";
import Search from "./Search";
import social_handles from '../utils/socila_handles.json'
import Link from "next/link";
import styles from "./Header.module.css";
import ServiceSelector from "./ServiceSelector2";
import CustomDropdown from './ServiceSelector2';
import AboutSelector from './AboutSelector2';
import News from './NewsSelector2';
import Currency from './CurrencySelector2';
import React, { useState, useEffect } from 'react';

export default function Header( { setlogin, setSuccess }){
	        const [selectedService, setSelectedService] = useState("Services");
	        const [selectedAbout, setSelectedAbout] = useState("About");
	        const [selectedNews, setSelectedNews] = useState("News");
	        const [selectedCurrency, setSelectedCurrency] = useState("Currency");
	        const [selectOpen, setSelectOpen] = useState(false);
		const [selectedDrop, setSelectedDrop] = useState("all");
		const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsSticky(scrollTop > 140);
	};

	window.addEventListener('scroll', handleScroll);

	return () => {
	window.removeEventListener('scroll', handleScroll);
	};
}, []);

		function remover() {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	}


    return (
        <>
            <div className={styles.header}>
	<div className={styles.headerphone}>
	<Link href="/login">
	<img className={styles.headerphoneimage} src={"/phone.png"} />
	7944
	</Link>
	</div>
	<div className={styles.headergmail}>
	<button onClick={remover}>
	<img className={styles.headergmailimage} src={"/gmail.png"} />
	shavath@gmail
	</button>
	</div>
	<div className={styles.headermedia}>
                {social_handles.map(({icon, link})=> (
                    <div className={styles.headeritems}>
                        <Link className={styles.headerlink} href={link}><img className={styles.headerimages} src={icon} /></Link>
                    </div>

                ))}
	</div>
            </div>
            <div className={styles.navigationbar}>
		<Link href="/home">
                <img className={styles.logo} src="/logo.jpg"  />
		</Link>
                <Search />
            </div>
	<div className={!isSticky ? styles.dropdowns : styles.dropdownsfixed}>
	<ServiceSelector selectedService={selectedService} setSelectedService={setSelectedService} />	
	<AboutSelector selectedAbout={selectedAbout} setSelectedAbout={setSelectedAbout} />	
	<News selectedNews={selectedNews} setSelectedNews={setSelectedNews} />	
	<Currency selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />	
	</div>
        </>
    )
}
