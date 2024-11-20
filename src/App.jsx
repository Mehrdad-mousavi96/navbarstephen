import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      fdsafds
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success outline>
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
