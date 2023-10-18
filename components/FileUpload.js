import React, { useState } from 'react';
import styles from '../components/Upload.module.css';

const FileUpload = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
	 const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('title', title);
      formData.append('price', parseFloat(price).toFixed(2));
      formData.append('color', color);
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.uploadform} onSubmit={handleSubmit}>
	  <label className={styles.labeltitle}> Product Name </label>
      <input
	  className={styles.titleinput}
        type="text"
        placeholder="Product Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
	  <label className={styles.labeltitle}> Product Image </label>
      <input className={styles.titleinput} type="file" accept="image/*" onChange={handleFileChange} />
	  {imageURL && <img src={imageURL} alt="Product Preview" className={styles.previewImage} />}
	  <label className={styles.labeltitle}> Product Price </label>
      <input
	  className={styles.titleinput}
        type="number"
        placeholder="Price $"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
	  <label className={styles.labeltitle}> Product Color </label>
      <input
	  className={styles.titleinput}
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button className={styles.uploadbutton} type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;

