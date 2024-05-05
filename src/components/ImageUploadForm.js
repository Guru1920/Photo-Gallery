import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      // Send POST request to backend to upload image
      const response = await axios.post('/api/images/upload', formData);
      // Trigger parent component's callback function with uploaded image data
      onUpload(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploadForm;