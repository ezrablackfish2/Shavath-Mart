import React, { useState } from 'react';
import styles from './CustomDropdown.module.css';

interface Props {
	setSelectedService: (selected: string) => void;
	selectedService: string;
	selectedDrop: string;
	setSelectedDrop: (selected: string) => void;
}

function CustomDropdown ( {setSelectedService, selectedService, selectedDrop, setSelectedDrop} : Props) {
	const services = ["Cloth", "Shoes"]
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
    		setIsOpen(!isOpen);
	};
	  const handleMouseEnter = () => {
		setIsOpen(true);
		setSelectedDrop("Services");
	};

	const handleMouseLeave = () => {
                setIsOpen(false);
                setSelectedDrop("all");

	};

  return (
    <div className={isOpen ? styles.dropdownopen : styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={(selectedDrop === "Services" || selectedDrop === "all") ? styles.select : styles.hiddenword} onClick={toggleDropdown}>
        <div className={styles.selectorword}>{selectedService}</div> <div className={styles.imagebox}><img src="/dropdown.png" className={styles.dropdownarrow} /></div>
      </div>
      <div className={styles.options}>
		{services.map((option, index) => (
                                <div className={styles.option} onClick={() => setSelectedService(option)}>
                                {option}
                                </div>
                        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;

