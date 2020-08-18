import React from "react";
import Tournaments from "./Tournaments";

import { Card } from "reactstrap";

const TournamentPage = () => {
  return (
    <Card
      className="ma3 roster"
      style={{
        backgroundColor: "#rgb(194, 198, 202)",
        borderColor: "red",
        borderWidth: "4px",
        minWidth: "48vw"
      }}
    >
      <Tournaments index={1} />
      <Tournaments index={2} />
      <Tournaments index={0} />
    </Card>
  );
};

export default TournamentPage;
