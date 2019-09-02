import React from "react";
import "./teamEvents.scss";
import { Card, CardTitle } from "reactstrap";
import Scroll from "../scroll/scroll";

import Events from "./events";

const TeamEvents = ({ eventUrls, teamname }) => {
  return (
    <Card className="ma3 events">
      <CardTitle tag="h1">{`${teamname} Team Events `}</CardTitle>
      <Scroll>
        <Events eventUrls={eventUrls} />
      </Scroll>
    </Card>
  );
};

export default TeamEvents;
