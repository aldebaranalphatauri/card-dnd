import React from "react"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import Container from "./Container.js"
import "./styles.css"

export default function App() {
  const aBackend = isTouchDevice() ? TouchBackend : HTML5Backend

  return (
    <div className="App">
        <h2>Drag and drop multiple items with React DnD</h2>
        <h4>Use Shift or Cmd key to multi-select</h4>
      <DndProvider backend={aBackend}>
        <Container />
      </DndProvider>
    </div>
  )
}

function isTouchDevice() {
  try {
    let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

    let mq = function (query) {
      return window.matchMedia(query).matches;
    };

    if (('ontouchstart' in window) || (typeof window.DocumentTouch !== "undefined" && document instanceof window.DocumentTouch)) {
      return true;
    }

    return mq(['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(''));
  } catch (e) {
    console.error('(Touch detect failed)', e);
    return false;
  }
}
