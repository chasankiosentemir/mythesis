
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Fade from 'react-reveal/Fade'

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading,error,products} = productList;
    //Send AJAX request to backend.
    useEffect(() =>{
        dispatch(listProducts());
    }, []);
    return (
       
        <div>
            {loading?(
                <div className="loading-spin"> 
                    <LoadingBox></LoadingBox>
                </div>
          
            ): error? ( 
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                //<Fade bottom duration={1500} cascade> 
            <div className="row center"> 
          {products.map((product) => (

              <Product key={product._id} product={product}></Product>
              
          ))}
         </div>
         //</Fade>
        
            )}
          
         </div>
         
    );
    
}
