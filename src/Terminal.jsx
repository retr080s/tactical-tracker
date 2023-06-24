import { GiCargoCrate } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";

const Terminal = () => {
  return (
    <div className="b-terminal">
      <div className="terminal">
        <h1 className="t-terminal">The Tactical Terminal</h1>
        <div className="t-select">
          <div className="t-storage">
            <h1 className="t-terminal">
              {/* <Link to="/storage">
                <GiCargoCrate />
                Storage
              </Link> */}
              <GiCargoCrate />
              Storage
            </h1>

            <img src="src/images/storage.png" alt="storage" className="image" />
          </div>
          <div className="t-team">
            <h1 className="t-terminal">
              {" "}
              <AiOutlineTeam /> Team
            </h1>
            <img src="src/images/team.png" alt="team" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terminal;
