import React, { useState } from "react";


const CompostBins = () => {
  const [containers, setContainers] = useState([
    { id: 1, content: "Compost Item 1" },
    { id: 2, content: "Compost Item 2" },
    { id: 3, content: "Compost Item 3" },
    { id: 4, content: "Compost Item 4"}
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
    <div className="drag-and-drop">
      <div className="containers">
        {containers.map((container) => (
          <div
            key={container.id}
            className="container"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, container.id)}
            onDragEnd={handleDragEnd}
          >
            {container.content}
          </div>
        ))}
      </div>
      <div
        className={`droppable-container ${dragging ? "active" : ""}`}
        onDrop={handleDrop1}
        onDragOver={handleDragOver}
      >
        1
      </div>
      <div
        className={`droppable-container ${dragging ? "active" : ""}`}
        onDrop={handleDrop2}
        onDragOver={handleDragOver}
      >
        2
      </div>
      <div
        className={`droppable-container ${dragging ? "active" : ""}`}
        onDrop={handleDrop3}
        onDragOver={handleDragOver}
      >
        3
      </div>
      <div
        className={`droppable-container ${dragging ? "active" : ""}`}
        onDrop={handleDrop4}
        onDragOver={handleDragOver}
      >
        4
      </div>
    </div>
  );
};


export default CompostBins;