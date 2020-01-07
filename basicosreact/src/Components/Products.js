import React, { Component, Fragment} from 'react';
import Product from './Product';

class Products extends Component{
    constructor(props){
        super(props);
        
        this.state=  {
            productos : [
            {id: 1, name: 'Camisa ReactJS', precio: 30},
            {id: 2, name: 'Camisa VueJS', precio: 30},
            {id: 3, name: 'Camisa Angular', precio: 30},
        ]};
    }

    render(){
        const {productos} = this.state;


        return(
            <Fragment>
                <h1>Lista de productos</h1>
                {productos.map(producto => (
                    <Product key={producto.id}
                        product = {producto}
                    />
                ))}
            </Fragment>
        );
    }
}

export default Products;