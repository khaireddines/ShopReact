import React from 'react';

const ProduectCell = ({name, image, description, stock, price, index, type='ProductItem' }) => {
    return (
        <>
            {(type === 'CartItem')
                ?(
                    <div className="card" style={{width: '22rem'}} key={index}>
                        <div className="card-header">{name}</div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{price} </h6>
                        </div>
                    </div>
                )
                :(<div className={'col-sm-12 col-md-3 my-3 d-flex justify-content-center'}>
                    <div className="card" style={{width: '22rem'}} key={index}>
                        <img src={image} className="card-img-top" width={150} height={150} alt="" />
                        <div className="card-header">{name}</div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{price} </h6>
                            <p className="card-text">{description}</p>
                            <button className='btn btn-outline-success' > Add to Cart</button>
                        </div>
                        <div className="card-footer text-muted">
                            {(stock>0)?`En stock ${stock}`:`Out of Stock ${stock}`}
                        </div>
                    </div>
                </div>)}
        </>

    );
};


export default ProduectCell;
