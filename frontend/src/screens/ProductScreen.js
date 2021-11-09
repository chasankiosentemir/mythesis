import React from 'react';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if(!product){
        return <div>Product Not Found!</div>
    }
    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1 ">
                <div className=" card-body">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        
                        <li>
                            <p>Description: {product.description}</p>
                        </li>
                        <li>
                            <p>Status: {product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="danger">Unavailable</span>) }</p>
                        </li>
                        <li>
                            <p>Price: {product.price === 0 ? (<span className="success">Free</span>) : (<span>{product.price}$</span>)} </p>
                        </li>
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                    </div>  
                </div>
                <div className="col-1">
                    
                </div>
            </div>
        </div>
    )
}

