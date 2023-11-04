import Home from "./pages/Home";
import Category from "./pages/Category";
import Delivery from "./pages/Delivery";
import './css/style.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home/>
        <Category/>
        <Delivery/>
      </div>
    </div>
  );
}

export default App;
