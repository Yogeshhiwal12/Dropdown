import Dropdown from "./component/Dropdown";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Dropdown items={['Yes', 'Probably not']} />

    </div>
  );
}

export default App;
