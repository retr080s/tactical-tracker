import { GiCargoCrate } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";

const Terminal = () => {
  return (
    <div className="b-terminal">
      <div className="terminal">
        <h1 className="t-terminal">The Tactical Terminal</h1>
        <div className="t-select">
          <Link to="/storage" style={{ textDecoration: "none" }}>
            <div className="t-storage">
              <h1 className="t-terminal">
                <GiCargoCrate />
                Storage
              </h1>

              <img
                src="src/images/storage.png"
                alt="storage"
                className="image"
              />
            </div>
          </Link>

          <Link to="/team" style={{ textDecoration: "none" }}>
            <div className="t-team">
              <h1 className="t-terminal">
                {" "}
                <AiOutlineTeam /> Team
              </h1>
              <img src="src/images/team.png" alt="team" className="image" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Terminal;
