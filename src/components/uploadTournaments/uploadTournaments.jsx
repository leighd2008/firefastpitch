import React from "react";

import "./uploadTournaments.scss";

const UploadTournaments = ({ csvArray }) => {
  
  return (
      csvArray.length > 0 ?
        <>
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Event</th>
                <th>Venue</th>
                <th>Weekend</th>
              </tr>
            </thead>
            <tbody>
              {
                csvArray.map((item, i) => (
                  <tr key={i}>
                    <td>{item.Team}</td>
                    <td>{item.Event}</td>
                    <td>{item.Venue}</td>
                    <td>{item.Weekend}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </> : null
  )
}

export default UploadTournaments
