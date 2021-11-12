import React from 'react';
import ProduectCell from "../ProductCell";

const ProductList = ({Products, AddProductToCart}) => {
    return (
        <>
            {Products.map((product,index)=>{
                let { name, image, description, stock, price} = product
                return <ProduectCell index={index}
                                     name={name}
                                     image={image}
                                     description={description}
                                     stock={stock}
                                     price={price}
                                     AddProductToCart={AddProductToCart}
                                     type={'ProductItem'}
                />
            })}
        </>
    );
};

export default ProductList;
