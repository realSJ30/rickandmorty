import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>This site's API was based </strong> on{" "}
            <a target={"_blank"} href="https://rickandmortyapi.com/">
              Rick & Morty
            </a>
            <br />
            <span className="text-is-gray subtitle is-6 ">
              React | Bulma CSS | GrahpQL
            </span>
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
