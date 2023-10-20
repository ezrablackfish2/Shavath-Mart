import React from 'react';
import UploadForm from './UploadForm';
import { uploadData } from './api';
import "../app/globals.css";
import styles from '../components/Upload.module.css';


const UploadPage: React.FC = () => {
  const handleUpload = async (formData: FormData) => {
    try {
      const response = await uploadData(formData);
      console.log('Upload successful!', response);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className={styles.uploadbody}>
      <h1 className={styles.uploadtitle}>Upload Data</h1>
      <UploadForm onUpload={handleUpload} />
    </div>
  );
};

export default UploadPage;

