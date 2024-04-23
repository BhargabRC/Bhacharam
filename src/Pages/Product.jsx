import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Cursor from '../Components/Cursor/Cursor';


export const Product = () => {

    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div>
      {/* <Cursor/> */}
      <ProductDisplay product={product}/>
    </div>
  )
}
