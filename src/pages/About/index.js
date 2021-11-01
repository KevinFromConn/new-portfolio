import React from "react";
import myHeadshot from "../../assets/Kevin-Profile-Picture.jpg";

function About() {
  return (
    <section>
      <div>
        <h1>About Me</h1>
      </div>
      <article>
        <div>
          <img src={myHeadshot} alt="The Man Himself, Kevin White Jr." />
          Watch this space!
        </div>
      </article>
    </section>
  );
}

export default About;
