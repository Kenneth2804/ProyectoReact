import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Componente1 } from './components/Componente1';
import Componente2 from './components/Componente2';
import Login from './components/Login';

function App() {
  return (

<BrowserRouter>

    <div className="App">
<Routes>
<Route path='/' exact element={<Login></Login>}></Route>  
<Route path='/componente1' exact element={<Componente1></Componente1>}></Route>  

</Routes>
    </div>


</BrowserRouter>
  );
}

export default App;
