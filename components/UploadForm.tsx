import React, { useState } from 'react';
import styles from '../components/Upload.module.css';

interface UploadFormProps {
  onUpload: (formData: FormData) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onUpload }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [color, setColor] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', parseFloat(price).toFixed(2));
    formData.append('img', image as File);
    formData.append('color', color);

    onUpload(formData);
  };

  return (
    <form className={styles.uploadform} onSubmit={handleSubmit}>
        <label className={styles.labeltitle}>Product Name</label>
        <input 
		className={styles.titleinput} 
		type="text" value={name} 
		onChange={(e) => setName(e.target.value)}
		placeholder="Product Name"
		/>
	<label className={styles.labeltitle}>Product Image</label>
        <input 
		className={styles.titleinput}
		type="file" 
		accept="image/*" 
		onChange={handleImageChange} 
		placeholder="Put Image"
		/>
	{imagePreview && <img src={imagePreview} alt="Image Preview" className={styles.previewImage}/>}
        <label className={styles.labeltitle}>Product Price</label>
        <input 
		className={styles.titleinput}
		type="number" 
		value={price} 
		onChange={(e) => setPrice(e.target.value)} 
		placeholder="Price $"
		/>
               <label className={styles.labeltitle}>Product Color</label>
        <input 
		className={styles.titleinput}
		type="text" 
		value={color} 
		onChange={(e) => setColor(e.target.value)} 
		placeholder="Color"
		/>
      <button className={styles.uploadbutton} type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;

