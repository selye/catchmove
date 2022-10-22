import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const ExampleScroll = () => {
  const domRef = useRef<HTMLUListElement>(null);
  const conRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let timer: NodeJS.Timeout;
    if (domRef.current) {
      let li = document.getElementsByTagName("li");
      let speed = 1;
      const oUl = domRef.current;
      oUl.innerHTML += oUl.innerHTML;
      oUl.style.width = li.length * li[0].offsetWidth + "px";
      const run = () => {
        if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
          oUl.style.left = "0";
        }
        if (oUl.offsetLeft > 0) {
          oUl.style.left = -oUl.offsetWidth / 2 + "px";
        }
        oUl.style.left = oUl.offsetLeft - speed + "px";
      };
      run();
      timer = setInterval(run, 30);
      if (conRef.current) {
        conRef.current.onmouseover = function () {
          clearInterval(timer);
        };
        conRef.current.onmouseout = function () {
          timer = setInterval(run, 30);
        };
      }
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Link to="/">首页</Link>
      <div ref={conRef} className="scroll-content">
        <ul ref={domRef} className="scroll-list">
          <li>
            <img src={require("../img/p1.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p2.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p3.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p4.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p5.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p6.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p7.jpeg")} alt="" />
          </li>
          <li>
            <img src={require("../img/p8.jpeg")} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExampleScroll;
