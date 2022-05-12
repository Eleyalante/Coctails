import Pages from "./routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
