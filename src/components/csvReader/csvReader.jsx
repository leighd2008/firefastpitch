import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
import { useState } from 'react'
import "./cvsReader.scss";
import { firestore } from "../../firebase/firebase.utils";


const CsvReader = ({ teamData }) => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (str, delim = '\t') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');

    const newArray = rows.map(row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {})
      return eachObject;
    })
    setCsvArray(newArray)
  }
  
  const updateTournaments = (csvArray) => {
    const teamDataArray = Object.entries(teamData);
    
    teamDataArray.map((team, i) => {
      let currentTourns = []
      csvArray.map((tourn, j) => {
        if (tourn.Team === team[1].title) {
          let location = tourn.City + "," + tourn.State
          let newTourn = { Location: location, Weekend: tourn.Weekend, name: tourn.Event, date: tourn.Date }
          currentTourns.push(newTourn)
        }
      })
      console.log(currentTourns)
      firestore.collection("teams").doc(team[1].id).update({
        tournaments: currentTourns
      })
    })

  }

  
  
  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
    
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text)
      updateTournaments(csvArray)
      // console.log(text);
    }
    reader.readAsText(file);
  }
  
  
  
  return (
    <form id='csv-form' className="cvsReader">
      <input
        type='file'
        accept='.csv'
        id='csvFile'
        onChange={(e) => {
          setCsvFile(e.target.files[0])
        }}
      >
      </input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault()
          if(csvFile)submit()
        }}>
        Submit
      </button>
      <br />
      <br />
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData
})

export default connect(mapStateToProps)(CsvReader);