import Pages from './routes'
import {BrowserRouter} from 'react-router-dom';
import {DefaultLayout} from './components/Layout'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <DefaultLayout>
          <Pages />
        </DefaultLayout>
        {/* <DefaultLayout/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
