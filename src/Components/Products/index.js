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
                        <ProductList Products={products} />
                    </div>
                </div>
                {(productCart.length !== 0)
                &&(<div className={'col-3 shadow-lg p-3 mb-5 bg-body rounded'} style={{overflow: 'overlay', height:'inherit'}}>
                    <ProductCart cart={productCart} />
                </div>)}
            </div>
        );
    }
}

export default Products;
