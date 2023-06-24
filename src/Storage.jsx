import { Link } from "react-router-dom";
import { GiCargoCrate } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { RxExit } from "react-icons/rx";

const Storage = () => {
  return (
    <div className="b-terminal">
      <div className="terminal">
        <h1 className="t-terminal">
          <GiCargoCrate style={{ marginRight: "10px" }} />
          Storage
        </h1>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <p className="t-terminal">
            <AiOutlineTeam />
            Team
          </p>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="t-terminal">
            <RxExit style={{ marginRight: "10px" }} />
            Exit
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Storage;
