import React, { Fragment }  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
function App() {

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Tienda Virtual"/>
      <Products />;
      <Footer fecha={fecha} />
    </Fragment>
    
  );
}



export default App;
