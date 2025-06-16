import ProductDetail from '@/components/productDetail';
import React from 'react'

const ProductDetailPage = ({ params }) => {
    // const id = params.id;
    return (
        // <div>ProductDetailPage{id}</div>
        <ProductDetail id={params.id} />
    )
}

export default ProductDetailPage