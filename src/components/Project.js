import React from "react";
import "../styles/Project.css";
export default function Project({ filename, title, content,go}) {
  return (
    <div className="project">
      <a href={go} target='_blank'>
        <img src={require(`/src/imgs/${filename}`)} />
        <div className="title-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </a>
    </div>
  );
}
