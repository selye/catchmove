import { off } from "process";
import { useState, useRef } from "react";
import "./index.css";

interface OffsetProp {
  right: number;
  bottom: number;
}

export const ItemMove = () => {
  const offset = useRef({
    disX: 0,
    disY: 0,
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  const FnDown = (event: React.MouseEvent<Element, MouseEvent>) => {
    const drag = ref.current;
    if (drag) {
      offset.current.disX = event.clientX - drag.getBoundingClientRect().left;
      offset.current.disY = event.clientY - drag.getBoundingClientRect().top;
    }
    document.onmousemove = fnMove;
    document.onmouseup = fnUp;
  };

  const fnMove = (ev: MouseEvent) => {
    const x = ev.clientX - offset.current.disX;
    const y = ev.clientY - offset.current.disY;
    const drag = ref.current;
    if (drag) {
      drag.style.left = Math.floor(x) + "px";
      drag.style.top = Math.floor(y) + "px";
    }
  };

  const fnUp = () => {
    const stand = window.innerWidth;
    const drag = ref.current;
    if (drag) {
      if (drag.getBoundingClientRect().left > stand / 2) {
        drag.style.right = 0 + "px";
        drag.style.left = "auto";
      } else {
        drag.style.left = 0 + "px";
        drag.style.right = "auto";
      }
    }

    document.onmousemove = null;
    document.onmouseup = null;
  };

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
      }}
      className="catchMove"
      onMouseDown={FnDown}
    >
      <img
        src={require("../asstes/youdami.jpg")}
        alt={"youdami"}
        className={"move-img"}
      />
    </div>
  );
};
