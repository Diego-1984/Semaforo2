import React, { useState } from "react";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Corregir: la función useState debe devolver una matriz con dos elementos

  return (
    <>
      <div className="palito"></div>
      <div className="semaforo">
        <div
          onClick={() => setSelectedColor("red")} // Corregir: cambiar "setSelectecColor" a "setSelectedColor"
          className={"light red" + (selectedColor === "red" ? " glowred" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "light yellow" + (selectedColor === "yellow" ? " glowyellow" : "")
          }
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={
            "light green" + (selectedColor === "green" ? " glowgreen" : "")
          }
        ></div>
      </div>
      <div className="Mensaje">⇈ Click on one ⇈</div>
      <div className="Button">
        <button class="Reload"onClick={() => window.location.reload()}>RELOAD</button>
      </div>
    </>
  );
};

export default Home;
