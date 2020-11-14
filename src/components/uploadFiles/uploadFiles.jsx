import React, { useState } from 'react';
import { storage } from "../../firebase/firebase.utils";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";


import "./uploadFiles.scss";

const UploadFiles = ({ teamData, title, index }) => {
  const [imageAsFile, setImageAsFile] = useState(null)
  const [imageAsUrl, setImageAsUrl] = useState("")

  const handleImageAsFile = (e) => {
    setImageAsFile(e.target.files[0]);
  }

  const updateTeamData = (imageAsUrl) => {
    const roster = teamData[title].roster;
    const teamId = teamData[title].id
    console.log(imageAsUrl);
    roster[index].birthCert = imageAsUrl;
    firestore.collection('teams').doc(teamId).update({
      roster: roster,
    })
    console.log(teamData[title]['roster'][index]);
  }

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
          updateTeamData(imageAsUrl);
        })
        // console.log(imageAsUrl)
    });

    }

  return (
    <div className="uploadFiles">
      <form className='upload' onSubmit={handleFireBaseUpload}>
        <input
          type="file" 
          onChange={handleImageAsFile}
        />
        <button className='uploadFirebase' disabled={!imageAsFile}>upload to firebase</button>
      </form>
      <img className='fileImage' src={imageAsUrl} alt="birth certificate"/>
    </div>
  );
} 

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(UploadFiles);