import React from "react";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({ isDragging: !!monitor.isDragging() })
  }));
  return (
    <div
      ref={drag}
      style={{
        backgroundColor: "transparent",
        fontSize: "30px",
        fontWeight: "bold",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move"
      }}
    >
      ♘
    </div>
  );
}
