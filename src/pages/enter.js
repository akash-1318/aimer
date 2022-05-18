import { useState } from "react";
import "./enter.css";
const Enter = () => {
  const [name, setName] = useState("");
  return (
    <div className="enter__container">
      <div className="enter__sub-container">
        <div className="content">
          <h1 className="primary__text">Hello, what's your name ?</h1>
          <input
            className="name__input"
            type="text"
            onChange={(e) => setName(e.target.value.trim())}
            onKeyPress={(e) => {
                if(e.key === "Enter") {
                    localStorage.setItem("username", name)
                    window.location.reload()
                }
            }}
          />
        </div>
        {name.length > 0 && (
          <div className="btn__container">
            <button className="primary__btn" onClick={()=> {
                localStorage.setItem("username", name)
                window.location.reload()
            }}>
              <i class="bx bx-chevrons-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Enter };
