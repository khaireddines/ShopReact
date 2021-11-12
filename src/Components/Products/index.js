import React, {Component} from 'react';
import Data from '../../Components/Products/Data';
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:Data,
            productCart:[]
        }
    }
    componentDidMount() {
        if (localStorage.getItem('state'))
            this.setState(JSON.parse(localStorage.getItem('state')))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('state',JSON.stringify(this.state));
    }
    componentWillUnmount() {
    }
    AddProductToCart = (product) => {
        this.setState({productCart:[...this.state.productCart,{...product,id:this.state.productCart.length+1}]})
    }

    render() {
        let { products, productCart } =this.state
        console.log(productCart.length)
        return (
            <div className={'row justify-content-center'} style={{height:'inherit'}}>
                <div className={'col'} style={{height:'inherit'}}>
                    <div className={'row justify-content-center shadow-lg p-3 mb-5 bg-body rounded'} style={{overflow:'overlay', height:'inherit'}}>
                        <ProductList AddProductToCart={this.AddProductToCart} Products={products} />
                    </div>
                </div>
                {(productCart.length !== 0)
                &&(<div className={'col-md-2 shadow-lg p-0 mb-5 bg-body rounded'} style={{overflow: 'overlay', height:'inherit'}}>
                    <div
                        className="d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top"
                        style={{backgroundImage: 'url(/bg-1.jpg)' }}>
												<span className="btn btn-md btn-icon bg-white-o-15 mr-4">
													<i className="flaticon2-shopping-cart-1 text-success"/>
												</span>
                        <h4 className="text-white m-0 flex-grow-1 mr-3">My Cart</h4>
                        <button type="button" className="btn btn-success btn-sm">{productCart.length} Items</button>
                    </div>
                    <ProductCart cart={productCart} />
                    <div className="p-8 d-flex justify-content-between">
                        <div className="">

                        </div>
                        <div className="">
                            <button type="button" className="btn btn-primary text-weight-bold">Clear cart
                            </button>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}

export default Products;
