import { Link } from "react-router-dom";
import { GiCargoCrate } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { RxExit } from "react-icons/rx";

const Storage = () => {
  return (
    <div className="b-terminal">
      <div className="terminal">
        <h1 className="t-terminal">
          Storage <GiCargoCrate />
        </h1>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <p className="t-terminal">
            Team <AiOutlineTeam />
          </p>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="t-terminal">
            Exit <RxExit />
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Storage;
