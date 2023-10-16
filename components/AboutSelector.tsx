import React, { useState } from 'react';
import styles from './CustomDropdown.module.css';

interface Props {
	setSelectedAbout: (selected: string) => void;
	selectedAbout: string;
	selectedDrop: string;
	setSelectedDrop: (selected: string) => void;
}

function AboutSelector ( {setSelectedAbout, selectedAbout, selectedDrop, setSelectedDrop} : Props) {
	const services = ["Shavath Mart", "Our History", "Service Offering", "Partners and Clients", "Contact Us"]
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
    		setIsOpen(!isOpen);
	};
	  const handleMouseEnter = () => {
		setIsOpen(true);
		setSelectedDrop("About");
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
		setSelectedDrop("all");
	};

  return (
    <div className={isOpen ? styles.dropdownopen2 : styles.dropdown2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={(selectedDrop === "About" || selectedDrop === "all") ? ( isOpen ? styles.select2open : styles.select2 ) : (styles.hiddenword)} onClick={toggleDropdown}>
        <div className={styles.selectorword}>{selectedAbout}</div> <div className={styles.imagebox}><img src="/dropdown.png" className={styles.dropdownarrow} /></div>
      </div>
      <div className={styles.options2}>
		{services.map((option, index) => (
                                <div className={styles.option2} onClick={() => setSelectedAbout(option)}>
                                {option}
                                </div>
                        ))}
      </div>
    </div>
  );
};

export default AboutSelector;

