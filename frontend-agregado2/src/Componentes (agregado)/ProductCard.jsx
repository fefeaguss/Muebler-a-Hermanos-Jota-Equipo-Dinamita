
import React from 'react';

// Recibe 'producto' y 'onCardClick' desde ProductList.jsx
const ProductCard = ({ producto, onCardClick }) => {
  return (// Cuando se da click en la card, llama a onCardClick con el producto.
          // esto le da aviso a la App.jsx de que se seleccionó un producto.
    <div className='card' onClick={() => onCardClick(producto)}>
      <img src={producto.imagen} alt={producto.nombre}/>
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      </div>
  );
};

export default ProductCard;
