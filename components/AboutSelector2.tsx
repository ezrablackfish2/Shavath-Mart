import React, { useState } from "react";
import styles from "./CustomDropdown.module.css";

interface Props {
	setSelectedAbout: (selected: string) => void;
	selectedAbout: string;
}

function AboutSelector({ setSelectedAbout, selectedAbout }: Props) {
  const abouts = ["Shavath Mart", "Our History", "Service Offering", "Partners and Clients", "Contact Us"]
  const [isHovered, setIsHovered] = useState(false);

  function handleOptionChange(event) {
    setSelectedAbout(event.target.value);
  }

  return (
    <div
      className={styles.sortall}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <select className={styles.sorter} id="platform" value={""} onChange={handleOptionChange}>
        <option value="">{selectedAbout}</option>
        {abouts.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {isHovered && (
        <div className={styles.drops}>
          {abouts.map((option, index) => (
            <div key={index} className={styles.dropsItems} onClick={() => setSelectedAbout(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutSelector;
