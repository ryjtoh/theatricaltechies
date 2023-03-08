import React, { useState } from "react";
import style from "../../style.css";

const CompostBins = () => {
  const [containers, setContainers] = useState([
    { id: 1, content: "banana.png" },
    { id: 2, content: "crackedegg.png" },
    { id: 3, content: "bones.png" },
    { id: 4, content: "teabag.png" },
    { id: 5, content: "winecork.svg" },
    { id: 6, content: "meat.png" },
  ]);
  const [dragging, setDragging] = useState(false);
  const [binState, setBinState] = useState("closedbin.svg")
  const [nonCompostBinState, setNonCompostBinState] = useState("closedNonCompostbin.svg")

  const handleDragStart = (event, id) => {
    setDragging(id);
    setBinState("openbin.svg")
    setNonCompostBinState("openNonCompostbin.svg")
  };

  const handleDragEnd = (event) => {
    setDragging(false);
    setBinState("closedbin.svg")
    setNonCompostBinState("closedNonCompostbin.svg")
  };

  const handleDrop1 = (event) => {
    event.preventDefault();
    if (dragging === 1 || dragging === 4) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
      alert("Correct")
    }
    setDragging(false);
    setBinState("closedbin.svg")
    setNonCompostBinState("closedNonCompostbin.svg")
  };

  const handleDrop2 = (event) => {
    event.preventDefault();
    if (dragging === 2) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
      alert("Correct")
    }
    setDragging(false);
    setBinState("closedbin.svg")
    setNonCompostBinState("closedNonCompostbin.svg")
  };

  const handleDrop3 = (event) => {
    event.preventDefault();
    if (dragging === 5) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
      alert("Correct")
    }
    setDragging(false);
    setBinState("closedbin.svg")
    setNonCompostBinState("closedNonCompostbin.svg")
  };

  const handleDrop4 = (event) => {
    event.preventDefault();
    if (dragging === 3 || dragging === 6) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
      alert("Correct")
    }
    setDragging(false);
    setBinState("closedbin.svg")
    setNonCompostBinState("closedNonCompostbin.svg")
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="instructions">
        <div className="sectionParagraph">
          <h1>INSTRUCTIONS</h1>
          <p>It's time to practice composting! Drag each item into the correct compost bin based on how long you think it will take to compost. 
            If the item is placed correctly, the item will disappear and be composted otherwise the item will remain in the same place. </p>
        </div>
      </div>
      <div className="containers">
        {containers.map((container) => (
          <div
            key={container.id}
            className="container"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, container.id)}
            onDragEnd={handleDragEnd}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={container.content} alt={container.content} />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          border: "1px black",
          paddingBottom: "10rem"
        }}
      >
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop1}
          onDragOver={handleDragOver}
          style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingBottom: "8rem", width: "200px"}}
        >
          <img src={binState} alt="compostbin"/>
          <p style={{ paddingTop: "1rem" }}>6 MONTHS</p>
        </div>
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop2}
          onDragOver={handleDragOver}
          style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingBottom: "8rem", width: "200px" }}
        >
          <img src={binState} alt="compostbin"/>
          <p style={{ paddingTop: "1rem" }}>12 MONTHS</p>
        </div>
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop3}
          onDragOver={handleDragOver}
          style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingBottom: "8rem", width: "200px" }}
        >
          <img src={binState} alt="compostbin"/>
          <p style={{ paddingTop: "1rem" }}>2 YEARS +</p>
        </div>
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop4}
          onDragOver={handleDragOver}
          style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingBottom: "8rem", width: "200px" }}
        >
          <img src={binState} alt="noncompostbin"/>
          <p style={{ paddingTop: "1rem" }}>NON-COMPOSTABLE</p>
        </div>
      </div>
    </>
  );
};

export default CompostBins;
