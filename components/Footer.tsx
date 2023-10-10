import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import social_handles from '../utils/socila_handles.json'
import styles from './Footer.module.css';
import React, { useState } from 'react';

export default function Footer() {

	  const initialData = [
    { name: 'Customer Service 1', quickLink: 'Link 1', contact: 'Contact 1' },
    { name: 'Customer Service 2', quickLink: 'Link 2', contact: 'Contact 2' },
    { name: 'Customer Service 3', quickLink: 'Link 3', contact: 'Contact 3' },
    { name: 'Customer Service 4', quickLink: 'Link 4', contact: 'Contact 4' },
    { name: 'Customer Service 5', quickLink: 'Link 5', contact: 'Contact 5' },
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
          <th>Customer Service</th>
          <th>Quick Link</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody className={styles.tablebody}>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quickLink}</td>
            <td>{item.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
		</div>	


	
                <div className={styles.footerservice}>
                    <div className={styles.footerservicetitle}> Customer Service</div>
		<ul> 
		<li>Payment Method</li>
</ul>
                </div>
                <div className={styles.footerlinks}>
                    <Text className="font-bold text-white text-xl" text="Contact Us" />
                    {social_handles.map(({name, icon, link})=> (
                        <div className="flex my-2">
                            <Image height={10} width={20} src={icon} />
                            <Link className="ml-2 text-white" href={link}>{name}</Link>
                        </div>
                    ))}
                    <Text className="text-white" text="This is footer" />
                </div>
            </div>
        </div>
    )
}
