import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import social_handles from '../utils/socila_handles.json'
import styles from './Footer.module.css';
import React, { useState } from 'react';

export default function Footer() {

	  const initialData = [
    { name: ["Shoes", "Cosmetics", "Accessories", "Jewelries", "Bags"], quickLink: ['+251913657294', '+251912243671', 'hiwimehdi@gmail.com'], contact: 'Contact 1' },
  ];


	const [data, setData] = useState(initialData);

    return (
        <div className={styles.footer}>
            <div>
                <div className={styles.footerdetail}>
                    <img className={styles.footerlogo} src="/logo.jpg"/>
		<div>ShavathMart.com, the top marketplace for purchasing and selling products and services among our clientele. We wholeheartedly endorse fantastic deals and top-notch services for both buyers and sellers. Above all, we at ShavathMart.com strongly uphold the value of superior products and exceptional customer service."</div>
                </div>

		<div className={styles.footertable}>
		<table className={styles.table}>
      <thead className={styles.tablehead}>
        <tr>
          <th>Services</th>
          <th>Contacts</th>
          <th>Quick Links</th>
        </tr>
      </thead>
      <tbody className={styles.tablebody}>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name.map((name) => 
		(
			<div className={styles.listing}>{name}</div>
		)
		)}</td>
            <td>{item.quickLink.map((link) =>
		(
			<div className={styles.listing}>{link}</div>
		)
		
		)}</td>
            <td>{social_handles.map(({name, icon, link})=> (
                        <span>
                            <Link href={link}><img className={styles.footerimage} src={icon} /></Link>
                            <Link className={styles.footerlinking} href={link}>{name}</Link>
                        </span>
                    ))}
	    </td>
          </tr>
        ))}
      </tbody>
    </table>
		</div>
	</div>	
	</div>

	
    )
}
