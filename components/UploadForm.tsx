import React, { useState } from 'react';
import styles from '../components/Upload.module.css';
import { useRouter } from 'next/router';

interface UploadFormProps {
  onUpload: (formData: FormData) => void;
  user: any; // Define the type of user appropriately
  token: string | null; // Define the type of token appropriately
}

const UploadForm: React.FC<UploadFormProps> = ({ onUpload, user, token }) => {
  const router = useRouter();
  const handleNavigation = (route: string) => {
    router.push(route);
  };
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [color, setColor] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File | undefined;

    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && token) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', parseFloat(price).toFixed(2));
      if (image) {
        formData.append('img', image);
      }
      formData.append('color', color);

      onUpload(formData);
      handleNavigation('/home');
    } else {
      handleNavigation('/login');
    }
  };

  return (
    <form className={styles.uploadform} onSubmit={handleSubmit}>
      <label className={styles.labeltitle}>Product Name</label>
      <input
        className={styles.titleinput}
        type="text"
        value={name}
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
      {imagePreview && <img src={imagePreview} alt="Image Preview" className={styles.previewImage} />}
      <label className={styles.labeltitle}>Product Price</label>
      <input
        className={styles.titleinput}
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price $"
      />
      <label className={styles.labeltitle}>Product Color</label>
      <input
        className={styles.titleinput}
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Product Color"
      />
      <button className={styles.uploadbutton} type="submit">
        Upload
      </button>

    </form>
  );
};

export default UploadForm;

