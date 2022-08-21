import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTeamData } from "../../redux/team/team.selectors";
// import { selectRegisteredData } from "../../redux/registered/registered.selectors"
import { useState } from 'react'
import "./cvsReader.scss";
import { firestore } from "../../firebase/firebase.utils";


const CsvReader = ({ teamData, /*registeredData*/ }) => {
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
      firestore.collection("teams").doc(team[1].id).update({
        tournaments: currentTourns
      })
    })

  }

//   const updateRegistered = async (csvArray) => {
//     const registeredDataArray = Object.entries(registeredData);
//       let currentRegistered = []
//       csvArray.map((player, j) => {
//         let newPlayer = { Reg_year: player.regyear || "", DOB: player.DOB || "",address: player.address || "", bats: player.bats || "", birthCert: player.birthCert || "", city: player.city || "", coaching: player.coaching || "", division: player.division || "", team: player.team || "", email: player.email || "", experience: player.experience || "", jersey: player.jersey || "", last: player.last || "", name: player.name || "", onTeam: player.onTeam || "", parent1: player.parent1 || "", parent1email: player.parent1email || "", parent1phone: player.parent1phone || "", parent2: player.parent2 || "", parent2email: player.parent2email || "", parent2phone: player.parent2phone || "",phone: player.phone || "", positions: player.positions || "", previous: player.previous || "", session: player.session || "", state: player.state || "", throws: player.throws || "", year: player.year || "", zipcode: player.zipcode || "" };
//         console.log(newPlayer)
        
//           currentRegistered.push(newPlayer)
//         //   return currentRegistered
//         console.log(currentRegistered)
//         })
//       await firestore.collection("registered").doc(registeredDataArray[0][1].id).update({
//         players: currentRegistered
//       })
//     //   console.log("update2")
      
//   } 

  
  
  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
    
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text)
    //   console.log(text);
      updateTournaments(csvArray)
    }
    reader.readAsText(file);
  }
  
//   const submitRegistered = () => {
//     const file = csvFile;
//     const reader = new FileReader();
    
//     reader.onload = function (e) {
//       const text = e.target.result;
//       processCSV(text)
//     //   console.log(text);
//       updateRegistered(csvArray)
//     }
//     reader.readAsText(file);
//   }
  
  
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
      {/* <button
        onClick={(e) => {
          e.preventDefault()
          if(csvFile)submitRegistered()
        }}>
        Submit Registered
      </button>
      <br />
      <br /> */}
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  teamData: selectTeamData,
//   registeredData: selectRegisteredData
})

export default connect(mapStateToProps)(CsvReader);