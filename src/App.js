import Home from "./pages/Home";
import Category from "./pages/Category";
import Delivery from "./pages/Delivery";
import Manual from "./pages/Manual";
import Dowload from "./pages/Dowload";
import Comment from "./pages/Comment";
import Subscription from "./pages/Subscription";
import Footer from "./pages/Footer";
import './css/style.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home/>
        <Category/>
        <Delivery/>
        <Manual/>
        <Dowload/>
        <Comment/>
        <Subscription/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
