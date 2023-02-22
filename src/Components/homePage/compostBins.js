import React from 'react';
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

function handleDragStart(e) {
  this.style.opacity = '0.4';
}

function handleDragEnd(e) {
  this.style.opacity = '1';
}

function handleDrop(e) {
  e.stopPropagation(); // stops the browser from redirecting.
  return false;
}

const boxStyle = {
  border: "3px solid #666",
  backgroundColor: "#ddd",
  borderRadius: ".5em",
  padding: "10px",
  cursor: "move"
}


export default function CompostBins() {
  let items = document.querySelectorAll('.container .box');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop)
  });
  return (
    <div className='pageTitle'>
        <div class="container">
          <div draggable="true" class="box" style={boxStyle}>A</div>
          <div draggable="true" class="box"style={boxStyle}>B</div>
          <div draggable="true" class="box"style={boxStyle}>C</div>
        </div>

        {/*https://css-tricks.com/creating-a-parking-game-with-the-html-drag-and-drop-api/*/}

    </div>
  );
}