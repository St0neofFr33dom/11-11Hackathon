import { DisplayCard } from "./componets/displayCard.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DisplayCard
        imageURL="http://placekitten.com/100/100"
        imageALT="placeholder"
        title="test"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}

export default App;
