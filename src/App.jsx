import React,{useState} from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import CardGrid from './Components/Card';
import Footer from './Components/Footer';

const App = () => {
  const [cartValue, setCartValue] = useState(0);
  return (
    <>
    <Navbar cartValue={cartValue} />
    <Header />
    <section>
      <div className="container">
        <div className="row">
          <CardGrid setCartValue={setCartValue}></CardGrid>
        </div>
      </div>
    <Footer />
    </section>
  </>
);
}



export default App;