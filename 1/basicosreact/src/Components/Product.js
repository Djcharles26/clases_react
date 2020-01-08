import React from 'react';

const Product = ({product}) =>{
    return (
        <div>
            <li>
                <ul><h1>{product.name}</h1></ul>
                <ul>Precio: ${product.precio}</ul>
            </li>
        </div>
    )
}

export default Product;