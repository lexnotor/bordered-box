import React from "react";
import "./App.css";
import Bordered from "./components/Borderd";

function App() {
  return (
    <div className="flex gap-5 flex-wrap">
      {[
        ...(function* (i) {
          for (let j = 0; j < i; j++)
            yield (
              <Bordered key={j}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Bordered>
            );
        })(5),
      ]}
    </div>
  );
}

export default App;
