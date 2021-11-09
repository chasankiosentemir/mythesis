import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt="product"/>
                </a>
                <div className="card-body">
                 <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    <p>{product.countInStock === 0 ? (<span className="danger">Unavailable</span>) :("")}</p>
                    <div className="price">{product.price === 0 ? (<span className="success">Free</span>) : (<span>{product.price}$</span>)}</div>
                </div>
            </div>
    )
}