import { useState } from "react";

export function Alert(nature, message, options = {}) {
  const [display, setDisplay] = useState("block");
  const style = { display: { display }, backgroundColor: nature };

  const handleStop = () => {
    setDisplay("none");
  };
  const handleValidate = (e) => {
    e.preventdefault;
    alert("valider");
  };

  options.auto ?? setTimeout(() => setDisplay("none"), 800);

  return (
    <div className="" style={{ style }}>
      <p> {message} </p>
      {options.validate ? (
        <div className="">
          <div onClick={handleValidate}>Valider </div>
          <div>Annuler</div>
        </div>
      ) : (
        <span onClick={handleStop}>X</span>
      )}
    </div>
  );
}

export function Spinner() {
  const style = {
    borderRadius: "100%",
    boderBottom: "3px blue",
  };
  return (
    <div
      className="spinner-border text-primary"
      style={style}
      role="status"
    ></div>
  );
}
