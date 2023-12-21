import React from "react";
import "./team.css";
import LineTitle from "../Components/Common/LineTitle";
import TeamCards from "../Components/Team/TeamCards";

import {
  Leads,
  CoreTeamList,
  Facilitators,
  TeamMembers,
} from "../Components/Team/TeamDetails";

const Team = () => {
  return (
    <div>
      <header class="center-content center-div Team_Header">
        <h1>Our Team</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius
          ipsum autem cum aut, perferendis, eos ratione voluptatibus officiis ut
          consectetu
        </p>
      </header>
      <LineTitle title="Leads" />
      <TeamCards teamList={Leads} />
      <LineTitle title="Core" />
      <TeamCards teamList={CoreTeamList} />
      <LineTitle title="Facilitators" />
      <TeamCards teamList={Facilitators} />
      <LineTitle title="TeamMembers" />
      <TeamCards teamList={TeamMembers} />
    </div>
  );
};

export default Team;
