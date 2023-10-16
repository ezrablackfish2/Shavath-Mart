import Image from "next/image";
import Link from "next/link";
import Text from "./Text";
import social_handles from '../utils/socila_handles.json'
import styles from './Footer.module.css';
import React, { useState } from 'react';

export default function Footer() {

	  const initialData = [
    { name: 'Customer Service 1', quickLink: 'Link 1', contact: 'Contact 1' },
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
            <td>{social_handles.map(({name, icon, link})=> (
                        <div className="flex my-2">
                            <img className={styles.footerimage} src={icon} />
                            <Link className="ml-2 text-white" href={link}>{name}</Link>
                        </div>
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
