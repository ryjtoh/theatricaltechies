import React, { useState } from "react";
import style from "../../style.css";

const CompostBins = () => {
  const [containers, setContainers] = useState([
    { id: 1, content: "banana.png" },
    { id: 2, content: "bones.png" },
    { id: 3, content: "crackedegg.png" },
    { id: 4, content: "teabag.png" },
    { id: 5, content: "winecork.png" },
    { id: 6, content: "meat.png" },
  ]);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event, id) => {
    setDragging(id);
  };

  const handleDragEnd = (event) => {
    setDragging(false);
  };

  const handleDrop1 = (event) => {
    event.preventDefault();
    if (dragging === 1) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
    }
    setDragging(false);
  };

  const handleDrop2 = (event) => {
    event.preventDefault();
    if (dragging === 2) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
    }
    setDragging(false);
  };

  const handleDrop3 = (event) => {
    event.preventDefault();
    if (dragging === 3) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
    }
    setDragging(false);
  };

  const handleDrop4 = (event) => {
    event.preventDefault();
    if (dragging === 4) {
      const updatedContainers = containers.filter(
        (container) => container.id !== dragging
      );
      setContainers(updatedContainers);
    }
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="containers">
        {containers.map((container) => (
          <div
            key={container.id}
            className="container"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, container.id)}
            onDragEnd={handleDragEnd}
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
        }}
      >
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop1}
          onDragOver={handleDragOver}
        >
          6months
        </div>
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop2}
          onDragOver={handleDragOver}
        >
          12 months
        </div>
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop3}
          onDragOver={handleDragOver}
        >
          2 years +
        </div>
        <div
          className={`droppable-container ${dragging ? "active" : ""}`}
          onDrop={handleDrop4}
          onDragOver={handleDragOver}
        >
          non compostable
        </div>
      </div>
    </>
  );
};

export default CompostBins;
