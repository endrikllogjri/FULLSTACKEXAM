import './App.css';
import Main from './component/Main';
import Update from './component/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PetForm from './component/PetForm';
import DetailOfPEt from './component/DetailOfPet';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" default />
        <Route element={<DetailOfPEt/>} path="/pet/:id" />
        <Route element={<PetForm/>} path="/pet/"/>
        <Route element={<Update/>} path="/pet/edit/:id"/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
