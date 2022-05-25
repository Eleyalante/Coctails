import Pages from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Header /> */}
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
