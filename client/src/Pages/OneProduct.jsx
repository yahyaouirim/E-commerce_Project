import React, { useContext } from 'react';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const OneProduct = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  let categoryItem = products.filter((e) => e.category === product.category);
  return (
    <div>
      <Breadcrums products={product}/>
      <ProductDisplay products={product}/>
      <DescriptionBox/>
      <RelatedProducts products={categoryItem}/>

    </div>
  )
}

export default OneProduct
