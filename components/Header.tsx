import Image from "next/image";
import Search from "./Search";
import social_handles from '../utils/socila_handles.json'
import Link from "next/link";
import styles from "./Header.module.css";
import ServiceSelector from "./Services";
import CustomDropdown from './ServiceSelector';
import AboutSelector from './AboutSelector';
import News from './NewsSelector';
import Currency from './CurrencySelector';
import React, { useState, useEffect } from 'react';

export default function Header(){
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


    return (
        <>
            <div className={styles.header}>
	<div className={styles.headerphone}>
	<Link href="">
	<img className={styles.headerphoneimage} src={"/phone.png"} />
	7944
	</Link>
	</div>
	<div className={styles.headergmail}>
	<Link href="">
	<img className={styles.headergmailimage} src={"/gmail.png"} />
	shavath@gmail
	</Link>
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
	<CustomDropdown selectedService={selectedService} setSelectedService={setSelectedService} selectedDrop={selectedDrop} setSelectedDrop={setSelectedDrop}/>	
	<AboutSelector selectedAbout={selectedAbout} setSelectedAbout={setSelectedAbout} selectedDrop={selectedDrop} setSelectedDrop={setSelectedDrop}/>	
	<News selectedNews={selectedNews} setSelectedNews={setSelectedNews} selectedDrop={selectedDrop} setSelectedDrop={setSelectedDrop}/>	
	<Currency selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} selectedDrop={selectedDrop} setSelectedDrop={setSelectedDrop}/>	
	</div>
        </>
    )
}
