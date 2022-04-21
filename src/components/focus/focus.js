import { useEffect, useState } from "react";
import "./focus.css";

const Focus = () => {
  const [focus, setFocus] = useState("");
  const [focusText, setFocusText] = useState("");
  const [editText, setEditText] = useState("");
  const [strike, setStrike] = useState(false);
  const [appr, setAppre] = useState("")

  const appreciation_words = [
    "Nice!",
    "Nicely done!",
    "You're the best!",
    "Great work!",
    "This is great!",
    "Way to go!",
];

  useEffect(() => {
    localStorage.getItem("focus") &&
      setFocusText(localStorage.getItem("focus"));
      localStorage.getItem("strike") && setStrike(localStorage.getItem("strike"))
  }, [focusText],[strike]);

  return (
    <div className="focus__main-container">
      {focusText ? (
        <div className="focus__sub-container">
          <p className="focus__sub-text">Main focus for today</p>
          <div className="focus__section">
            <input onChange = {() => {
                if(strike === false) {
                localStorage.setItem("strike", true)
                setStrike(localStorage.getItem("strike"))
            } else{
                localStorage.removeItem("strike")
                setStrike(false)
            }
            const random = Math.floor(Math.random() * 6)
            setAppre(appreciation_words[random])
            }}
            type="checkbox" 
            checked = {localStorage.getItem("strike")}
            className="checkbox__input"
            id="one"/>
            <label for="one" className={`focus__section-text ${strike ? "strike" : ""}`}>
                <span></span> {localStorage.getItem("focus")}
            </label>
          <button
            className="delete__btn"
            onClick={() => {
              setEditText("");
              localStorage.removeItem("focus");
              setFocusText("");
              localStorage.removeItem("strike")
              setStrike(false)
            }}
          >
            <i class="bx bx-x"></i>
          </button>
          <button
            className="edit__btn"
            onClick={() => {
              setEditText(localStorage.getItem("focus"));
              localStorage.removeItem("focus");
              setFocusText("");
              localStorage.removeItem("strike")
              setStrike(false)
            }}
          >
            <i class="bx bx-edit-alt"></i>
          </button>
          </div>
          <div>
              <h1 className={`greeting__word ${strike && "show"}`}>{appr}</h1>
          </div>
        </div>
      ) : (
        <div className="focus__sub-container">
          <p className="focus__text">What's your main focus for today?</p>
          <input
            className="focus__input"
            type="text"
            defaultValue={editText !== "" ? editText : ""}
            onChange={(e) => {
              setFocus(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                localStorage.setItem("focus", focus);
              }
              setFocusText(localStorage.getItem("focus"));
            }}
          />
        </div>
      )}
    </div>
  );
};

export { Focus };
