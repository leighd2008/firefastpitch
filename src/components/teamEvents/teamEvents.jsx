import React from "react";
import "./teamEvents.scss";
import { Card, CardTitle } from "reactstrap";
import Scroll from "../scroll/scroll";

import Events from "./events";

const TeamEvents = ({ eventUrls, teamname }) => {
  return (
    <div className="team-events">
      <Card className="ma3 events">
        <CardTitle tag="h1">{`${teamname} Team Events `}</CardTitle>
        <Scroll>
          <Events eventUrls={eventUrls} />
        </Scroll>
      </Card>
    </div>
  );
};

export default TeamEvents;
