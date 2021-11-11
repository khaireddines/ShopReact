import React from 'react';
import ProduectCell from "../ProductCell";

const ProductCart = ({cart}) => {

    return (
        <>
            {cart.map((product, index)=>{
                let { name, image, description, stock, price} = product
                return <ProduectCell index={index}
                                     name={name}
                                     image={image}
                                     description={description}
                                     stock={stock}
                                     price={price}
                                     type={'CartItem'}
                />
            })}
        </>
    );
};


export default ProductCart;
