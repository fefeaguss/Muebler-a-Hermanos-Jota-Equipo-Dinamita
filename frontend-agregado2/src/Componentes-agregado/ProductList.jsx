
import React from 'react';
import ProductCard from './ProductCard';

// 'productos' y 'onSelectProducto' desde App.jsx
const ProductList = ({ productos, onSelectProducto }) => {
    return (
        <div>
            {productos.map((prod) => (
                // A cada card le paso el producto y la función onSelectProducto. 
                <ProductCard
                    key={prod.id} // La 'key' es fundamental para listas en React.
                    producto={prod}
                    onCardClick={onSelectProducto}
                />
            ))}
        </div>
    );
};

export default ProductList;