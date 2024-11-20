import React from "react";
import Button from "./Button";
import { FaBell } from "react-icons/fa";

const App = () => {

  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          <FaBell className="bg-red-800" />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleClick} onMouseLeave={handleClick}>Secondary</Button>
      </div>
      <div>
        <Button success>
          Success
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
};

export default App;
