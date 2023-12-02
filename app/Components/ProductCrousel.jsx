"use client"
import React from 'react'
import ProductCard from './ProductCard'

function ProductCrousel() {
    return(
    <div className='product overflow-x-auto m-4 '>
    <ProductCard />
    </div>
    );
}

export default ProductCrousel