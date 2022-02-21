import React from "react";
import "../styles/Body.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Body() {
  return (
    <div className="body-container">
      <img src={require("../imgs/meric.png")} />
      <h1>Meriç&nbsp;Bulca</h1>
      <p>CS&nbsp;Student @ Sabanci</p>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/meri%C3%A7-mert-bulca-59688517b/" target='_blank'>
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://github.com/mericmert" target='_blank'>
          <AiFillGithub className="icon" />
        </a>
        <a href="https://www.instagram.com/mericbulca/" target='_blank'>
          <AiFillInstagram className="icon"/>
        </a>
        <a href="https://twitter.com/mericmertbulca/" target='_blank'>
          <AiFillTwitterCircle className="icon"/>
        </a>
      </div>
    </div>
  );
}
