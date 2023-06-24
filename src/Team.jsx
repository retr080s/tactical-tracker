import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { GiCargoCrate } from "react-icons/gi";
import { RxExit } from "react-icons/rx";

const Team = () => {
  return (
    <div className="b-terminal">
      <div className="terminal">
        <h1 className="t-terminal">
          Team <AiOutlineTeam />
        </h1>
        <div className="menu">
          <Link to="/storage" style={{ textDecoration: "none" }}>
            <p className="t-terminal">
              Storage
              <GiCargoCrate />
            </p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="t-terminal">
              Exit <RxExit />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Team;
