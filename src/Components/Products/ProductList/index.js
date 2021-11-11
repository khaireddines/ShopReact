import React from 'react';
import ProduectCell from "../ProductCell";

const ProductList = ({Products}) => {
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
                                     type={'ProductItem'}
                />
            })}
        </>
    );
};

export default ProductList;
