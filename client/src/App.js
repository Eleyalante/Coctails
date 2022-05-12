import Pages from "./routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
