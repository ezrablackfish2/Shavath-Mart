import React, { useState } from 'react';
import styles from './CustomDropdown.module.css';

interface Props {
	setSelectedCurrency: (selected: string) => void;
	selectedCurrency: string;
	selectedDrop: string;
	setSelectedDrop: any;
}

function Currency ( {setSelectedCurrency, selectedCurrency, selectedDrop, setSelectedDrop} : Props) {
	const currency = ["ethiopia", "america", "british", "china", "Saudi Arabia", "india"]
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
    		setIsOpen(!isOpen);
	};
	  const handleMouseEnter = () => {
		setIsOpen(true);
		setSelectedDrop("Currency");
	};

	const handleMouseLeave = () => {
                setIsOpen(false);
                setSelectedDrop("all");

	};

  return (
    <div className={isOpen ? styles.nuller : styles.nuller} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <div className={(selectedDrop === "Currency" || selectedDrop === "all") ? ( isOpen ? styles.select4open : styles.select ) : (styles.hiddenword)} onClick={toggleDropdown}>
        <div className={styles.selectorword}>{selectedCurrency}</div> <div className={styles.imagebox}><img src="/dropdown.png" className={styles.dropdownarrow} /></div>
      </div>
      <div className={styles.options2}>
		{currency.map((option, index) => (
                                <div className={styles.option2} onClick={() => setSelectedCurrency(option)}>
                                {option}
                                </div>
                        ))}
      </div>
    </div>
  );
};

export default Currency;

