import React from "react";
import Sidebar from "./Sidebar";
import randomcolor from "randomcolor";
import faker from "faker";
import { IoChatbubblesOutline, IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import data from "./data.json";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <ul>
      {props.data.map((item, index) => (
        <li key={item.name}>
          <div className="card">
            <div className="image">
              <img
                src={`https://randomuser.me/api/portraits/men/${randomIntFromInterval(
                  1,
                  100
                )}.jpg`}
                alt="Profile"
                style={{ borderColor: levelColor }}
              />
            </div>
            <div className="card-body">
              <h4>{faker.name.findName()}</h4>
              <p>{faker.name.jobTitle()}</p>
            </div>
            <div className="card-footer" style={{ background: levelColor }}>
              <IoChatbubblesOutline size={20} />
              <IoCallOutline size={20} />
              <IoVideocamOutline size={20} />
            </div>
            <div></div>
          </div>
          {item.children && item.children.length > 0 && (
            <Card data={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Sidebar />
      <div id="content">
        <Card data={data} />
      </div>
    </div>
  );
};

export default Chart;
