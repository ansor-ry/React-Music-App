import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>SPOTIFY CLONE</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        LIBRARY <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
