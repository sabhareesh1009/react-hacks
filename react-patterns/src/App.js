import logo from "./logo.svg";
import "./App.css";
import UseStateHook from "./components/hooks/UseStateHook";
import UseEffectHook from "./components/hooks/UseEffectHook";
import { UseRefHook } from "./components/hooks/UseREfHook";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      <UseRefHook />
    </div>
  );
}

export default App;
