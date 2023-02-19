import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
 import { selectProductData } from 'app/pages/Product/slice/selectors';

export default function ViewProduct() {
    const data = useSelector(selectProductData);
  return (
    <>
    <h1>View Products </h1>
    {data.map(product=><div key={product._id}>{product.name} {product.category}<b>{product.description}</b></div>)}
    </>
    
  )
}
