import { useState } from "react";
import "./index.css";

/**
 * Dashboard with 2 switches with parent state
 * @returns Switch Dashboard
 */
const PropsComponent = () => {
  return <Dashboard />;
};

const Dashboard = () => {
  const [s1, setS1] = useState(true);
  const [s2, setS2] = useState(true);

  const toggleS1 = () => {
    setS1((prev) => !prev);
  };
  const toggleS2 = () => {
    setS2((prev) => !prev);
  };

  return (
    <div className="dashboardContainer">
      <h3>Initial State</h3>
      <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <input type="checkbox" onChange={() => toggleS1()} checked={s1} />
        </div>
        <div>
          <input type="checkbox" onChange={() => toggleS2()} checked={s2} />
        </div>
      </div>

      <Switch on={s1} setOn={toggleS1} id={"s1"} />
      <Switch on={s2} setOn={toggleS2} id={"s2"} />
    </div>
  );
};

/**
 * Toggle Switch Component
 * @param {object} {on: bool, setOn: () => {}, id: string}
 */
//eslint-disable-next-line
const Switch = ({ on, setOn, id }) => {
  const clickSwitch = (e) => {
    const btn = e.target;

    if (btn.style.animationPlayState === "running") {
      btn.style.animationPlayState = "cancelled";
      return;
    }
    btn.style.animationPlayState = "running";

    btn.onanimationend = () => {
      btn.classList.toggle("on");
      setOn();
      btn.style.animationPlayState = "paused";
    };
  };

  return (
    <div className="toggleContainer">
      <div className="hole"></div>
      <button
        id={id}
        onClick={(e) => clickSwitch(e)}
        className={`switchContainer element ${on ? "on" : ""}`}
      ></button>
    </div>
  );
};

export default PropsComponent;
