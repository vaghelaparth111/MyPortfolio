import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Parth Vaghela</span>{" "}
            from <span className="purple">Ahmedabad, Gujarat.</span>
            <br />
            I’m currently parsuing{" "}
            <span className="purple">B.Tech </span> in <span className="purple"> Information Technology </span> at{" "}
            <span className="purple">Aditya Silver Oak Intitute Of Technology.</span>
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Musics 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building the future through code and creativity"{" "}
          </p>
          <footer className="blockquote-footer">PARTH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
