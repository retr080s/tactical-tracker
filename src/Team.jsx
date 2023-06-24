import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { GiCargoCrate } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
import teamData from "../teamData.json";

const Team = () => {
  return (
    <div className="b-terminal">
      <div className="terminal">
        <h1 className="t-terminal">
          <AiOutlineTeam />
          Team
        </h1>
        <div className="menu">
          <Link to="/storage" style={{ textDecoration: "none" }}>
            <p className="t-terminal">
              <GiCargoCrate style={{ marginRight: "10px" }} />
              Storage
            </p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="t-terminal">
              <RxExit style={{ marginRight: "10px" }} />
              Exit
            </p>
          </Link>
        </div>
        <div key={teamData.id}>
          <p>{teamData.name}</p>
        </div>
        <div className="teamList">
          {teamData.map((td) => {
            return (
              <div key={td.id}>
                <img src={td.image} alt="image" />
                <p>{td.name}</p>
                <p>{td.role}</p>
                <p>{td.active}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Team;
