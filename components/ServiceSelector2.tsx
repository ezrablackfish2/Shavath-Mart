import React, { useState } from "react";
import styles from "./CustomDropdown.module.css";

interface Props {
	setSelectedService: (selected: string) => void;
	selectedService: string;
}

function ServiceSelector({ setSelectedService, selectedService }: Props) {
  const services = ["Cloth", "Shoes", "Electronic Devices", "Books", "Entertainment", "Automobiles"];
  const [isHovered, setIsHovered] = useState(false);

  function handleOptionChange(event) {
    setSelectedService(event.target.value);
  }

  return (
    <div
      className={styles.sortall}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <select className={styles.sorter} id="platform" value={""} onChange={handleOptionChange}>
        <option value="">{selectedService}</option>
        {services.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {isHovered && (
        <div className={styles.drops}>
          {services.map((option, index) => (
            <div key={index} className={styles.dropsItems} onClick={() => setSelectedService(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServiceSelector;