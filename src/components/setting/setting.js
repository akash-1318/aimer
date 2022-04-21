import { useState } from "react";
import "./setting.css";

const Setting = () => {
  const [showChange, setShowChange] = useState(false);
  return (
    <div className="setting__main-container">
      <div
        className={`edit__conatiner ${showChange ? "show" : ""}`}
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        <p className="edit__para">Change user</p>
      </div>
      <span
        className="sub__container"
        onClick={() => setShowChange(!showChange)}
      >
        <i class="bx bx-cog"></i>
      </span>
    </div>
  );
};

export { Setting };
