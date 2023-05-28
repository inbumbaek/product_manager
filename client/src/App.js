import './App.css';
import OneProduct from './components/OneProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/product/:id' element={<OneProduct/>}/>
          <Route path='/product/edit/:id' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
