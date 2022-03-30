import './App.css';
import Main from './component/Main';
import Update from './component/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from './component/AuthorForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<AuthorForm/>} path="/author/"/>
        <Route element={<Update/>} path="/author/edit/:id"/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
