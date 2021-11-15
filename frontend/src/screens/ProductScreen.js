import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state)=> state.productDetails);
    const {loading,error,product} = productDetails;

    useEffect(() =>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    return (
        <div>
            {loading ? (
                <div className="loading-spin"> 
                    <LoadingBox></LoadingBox>
                </div>
          
            ): error ?  ( 
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
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
                            <p><span className="bold-size">Description:</span> {product.description}</p>
                        </li>
                        <li>
                            <p>Status: {product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="danger">Unavailable</span>) }</p>
                        </li>
                        <li>
                            <p>Price: {product.price === 0 ? (<span className="success">Free</span>) : (<span>{product.price}$</span>)} </p>
                        </li>
                        {product.countInStock > 0 && (
                            <>
                            <li>
                                <div className="row">
                                    <div><span className="bold-size">Qty:</span></div>
                                    <div>
                                        <select value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map( (x)=>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                        </li>
                            </>
                            
                        )}

{product.countInStock === 0 && (
                            <>
                            <li>
                                <div className="row">
                                    <div><span className="bold-size">Qty:</span></div>
                                    <div>
                                        <select value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map( (x)=>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <button disabled onClick={addToCartHandler} className="primary block disabled-button">Add to Cart</button>
                        </li>
                            </>
                            
                        )}
                        
                    </ul>
                    </div>  
                </div>
                <div className="col-1">
                    
                </div>
            </div>
        </div>
            )}
          
         </div>

        
    )
}

