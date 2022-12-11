import './App.scss';
import Form from './components/Form/Form';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Success from './components/Success/Success';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/form_app' element={<Form />} />
            <Route path='/form_app/success' element={<Success />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
