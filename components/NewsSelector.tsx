import React, { useState } from 'react';
import styles from './CustomDropdown.module.css';

interface Props {
	setSelectedNews: (sort: sort) => void;
	selectedNews: string;
	selectedDrop: string;
	setSelectedDrop: () => void;
}

function News ( {setSelectedNews, selectedNews, selectedDrop, setSelectedDrop} : Props) {
	const news = ["Latest", "Sales and promotions", "Shipping and returns", "Books", "Customer service:", "Company news"]
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
    		setIsOpen(!isOpen);
	};
	  const handleMouseEnter = () => {
		setIsOpen(true);
		setSelectedDrop("News");
	};

	const handleMouseLeave = () => {
                setIsOpen(false);
                setSelectedDrop("all");

	};

  return (
    <div className={isOpen ? styles.dropdownopen2 : styles.dropdown2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           <div className={(selectedDrop === "News" || selectedDrop === "all") ? ( isOpen ? styles.select3open : styles.select ) : (styles.hiddenword)} onClick={toggleDropdown}>
        <div className={styles.selectorword}>{selectedNews}</div> <div className={styles.imagebox}><img src="/dropdown.png" className={styles.dropdownarrow} /></div>
      </div>
      <div className={styles.options2}>
		{news.map((option, index) => (
                                <div className={styles.option2} onClick={() => setSelectedNews(option)}>
                                {option}
                                </div>
                        ))}
      </div>
    </div>
  );
};

export default News;

