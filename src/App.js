
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyDetails from './pages/PropertyDetails'
import { DataContextProvider } from './components/HouseContext';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
 
       
   
    <div className="App   bg-white">
      <div className='container bg-white'>
        
  
      <DataContextProvider>
      

     
     
     <Header /> 
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={ <PropertyDetails /> } />

     </Routes>
    
    


   
    
     </DataContextProvider>
   
     </div>
     <Footer />
    </div>
  
  );
}

export default App;
