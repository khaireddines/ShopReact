import React from 'react';

const ProduectCell = ({name, image, description, stock, price, index, type = 'ProductItem', AddProductToCart}) => {
    let product = {name, image, description, stock, price, index}
    return (
        <>
            {(type === 'CartItem')
                ? (
                    <div className="p-2">


                            <div key={index} className="scroll scroll-push ps ps--active-y" data-scroll="true" data-height="250"
                                 data-mobile-height="200" style={{overflow: 'hidden'}}>

                                <div className="d-flex align-items-center justify-content-between mr-5 p-1">
                                    <div className="d-flex flex-column mr-2">

                                        <div className="d-flex align-items-center mt-2">
                                            <a href="#"
                                               className="font-weight-bold text-dark-75 font-size-lg text-hover-primary">{name}</a>
                                        </div>
                                        <div className="d-flex align-items-center mt-2">
                                            <span
                                                className="font-weight-bold mr-1 text-dark-75 font-size-lg">{price}</span>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon ml-5 mr-2">
                                                                                                                     <span
                                                                                                                         className="svg-icon">
                                                                                     <svg height="24px" version="1.1"
                                                                                          viewBox="0 0 24 24"
                                                                                          width="24px"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                     >
                                                                                     <g fill="none" fillRule="evenodd"
                                                                                        stroke="none" strokeWidth="1">
                                                                                     <rect fill="#000000" height="2"
                                                                                           rx="1" width="16" x="4"
                                                                                           y="11"/>
                                                                                             </g>
                                                                                </svg>

                                                                             </span>
                                            </a>
                                            <a href="#" className="btn btn-xs btn-light-success btn-icon">
                                                <span className="svg-icon ">
                                                    <svg
                                                        height="24px"
                                                        version="1.1"
                                                        viewBox="0 0 24 24"
                                                        width="24px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                                            <g fill="none" fillRule="evenodd"
                                                                               stroke="none" strokeWidth="1">
                                                                                <rect fill="#000000" height="2" rx="1"
                                                                                      width="16" x="4" y="11"/>
                                                                                <rect fill="#000000" height="2"
                                                                                      opacity="0.3" rx="1"
                                                                                      transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                                                                      width="16" x="4" y="11"/>
                                                                            </g>
                                                                        </svg>
                                                </span>
                                            </a>
                                        </div>

                                    </div>
                                    <a href="#" className="symbol symbol-70 flex-shrink-0">
                                        <img src={image} style={{width: '200px'}} title="" alt="" />
                                    </a>
                                </div>

                                <div className="separator separator-solid"/>


                            </div>


                            </div>

                )
                : (<div className={'col-sm-12 col-md-2 my-3 d-flex justify-content-center'}>
                    <div className="card" style={{width: '22rem'}} key={index}>
                        <img src={image} className="card-img-top" width={150} height={150} alt=""/>
                        <div className="card-header">{name}</div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{price} </h6>
                            <p className="card-text">{description}</p>
                            <button className='btn btn-outline-success' onClick={() => {
                                AddProductToCart(product)
                            }}> Add to Cart
                            </button>
                        </div>
                        <div className="card-footer text-muted">
                            {(stock > 0) ? `En stock ${stock}` : `Out of Stock ${stock}`}
                        </div>
                    </div>
                </div>)}
        </>

    );
};


export default ProduectCell;
