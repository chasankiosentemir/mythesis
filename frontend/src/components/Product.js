import React from 'react'
import Rating from './Rating';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade'

export default function Product(props) {
    const {product} = props;
    return (
<Fade bottom duration={1500}> 
<div key={product._id} className="card">
                <Link to={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt="product"/>
                </Link>
                <div className="card-body">
                 <Link to={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </Link>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    <p>{product.countInStock === 0 ? (<span className="danger">Unavailable</span>) :("")}</p>
                    <div className="price">{product.price === 0 ? (<span className="success">Free</span>) : (<span>{product.price}$</span>)}</div>
                </div>
            </div>
            </Fade>

        
    )
}