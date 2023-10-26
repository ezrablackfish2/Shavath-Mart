import Image from "next/image";
import Search from "./Search";
import social_handles from '../utils/socila_handles.json';
import Link from "next/link";
import styles from "./Header.module.css";
import ServiceSelector from "./ServiceSelector2";
import CustomDropdown from './ServiceSelector2';
import AboutSelector from './AboutSelector2';
import News from './NewsSelector2';
import Currency from './CurrencySelector2';
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  setlogin: (value: any) => void;
  setSuccess: (value: any) => void;
  search: any;
  setSearch: any;
  selectedAbout: any;
  selectedServcie: any;
  setSelectedAbout: (value: any) => void;
  setSelectedService: (value: any) => void;
}

export default function Header({ setlogin, setSuccess, search, setSearch, selectedAbout, selectedService, setSelectedAbout, setSelectedService }: HeaderProps) {
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
          <button onClick={() => setSelectedAbout("Contact Us")}>
            <Image
              className={styles.headerphoneimage}
              src={"/phone.png"}
              alt="Phone Image"
	      width={0}
	      height={0}
            />
            +251913657294
          </button>
        </div>
        <div className={styles.headergmail}>
          <Link href="mailto:hiwimehdi@gmail.com">
            <Image
              className={styles.headergmailimage}
              src={"/gmail.png"}
              alt="Gmail Image"
	      width = {0}
	      height = {0}
            />
            shavath@gmail
          </Link>
        </div>
        <div className={styles.headermedia}>
          {social_handles.map(({ icon, link }) => (
            <div className={styles.headeritems} key={link}>
              <Link className={styles.headerlink} href={link}>
                <Image
                  className={styles.headerimages}
                  src={icon}
                  alt="Social Media Image"
		  width={0}
		  height = {0}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navigationbar}>
        <a href="/home">
          <img className={styles.logo} src="/logo.jpg" alt="Logo Image"/>
        </a>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className={!isSticky ? styles.dropdowns : styles.dropdownsfixed}>
        <ServiceSelector
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
        <AboutSelector
          selectedAbout={selectedAbout}
          setSelectedAbout={setSelectedAbout}
        />
      </div>
    </>
  );
}

