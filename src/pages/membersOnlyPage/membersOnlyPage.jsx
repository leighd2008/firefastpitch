import React from "react";


import "./membersOnlyPage.scss";

const MembersOnlyPage = ({ title, teamname }) => {
  console.log(title);
  return(
    <div className="members-only">
      <h1>{`Lots of ${title} Family Secret Stuff`}</h1>
    </div>
  );
}

export default MembersOnlyPage;
