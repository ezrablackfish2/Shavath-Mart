import React, { useState } from "react";
import styles from "./Header.module.css";

interface Props {
	setSelectedService: (selected: string) => void;
	selectedService: string;
}

function ServiceSelector( {setSelectedService, selectedService} : Props) {
	const sorts = ["Cloth", "Shoes", "Electronic Devices", "Books", "Entertainment", "Automobiles"]
	function handleOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
                setSelectedService(event.target.value);
        };
	return (
		                <div className={styles.headersortbox}>
                <label htmlFor="service"></label>
                <select className={styles.headersorter} id="platform" value={""} onChange={handleOptionChange}>
                        <option value="">{selectedService}</option>
                        {sorts.map((option, index) => (
                                <option key={index} value={option}>
                                {option}
                                </option>
                        ))}
                </select>
                </div>
	);
}
export default ServiceSelector;
