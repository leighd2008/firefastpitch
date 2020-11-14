import React, { useState } from 'react';
import { storage } from "../../firebase/firebase.utils"

const UploadFiles = () => {
  const [imageAsFile, setImageAsFile] = useState(null)
  const [imageAsUrl, setImageAsUrl] = useState("")

  const handleImageAsFile = (e) => {
    setImageAsFile( e.target.files[0]);
  }

  // updateTeamData = (teamData) => {

  // }

  const handleFireBaseUpload = (e) => {
    e.preventDefault()
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
    uploadTask.on('state_changed', console.log, console.error, () => {
      storage
        .ref('images')
        .child(imageAsFile.name)
        .getDownloadURL()
        .then((imageAsUrl) => {
          setImageAsFile(null);
          setImageAsUrl(imageAsUrl);
        });
    });
    }

  return (
    <div className="uploadFiles">
      <form onSubmit={handleFireBaseUpload}>
        <input
          type="file" 
          onChange={handleImageAsFile}
        />
        <button disabled={!imageAsFile}>upload to firebase</button>
      </form>
      <img src={imageAsUrl} alt="birth certificate"/>
    </div>
  );
} 

export default UploadFiles