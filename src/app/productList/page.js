'use client'

import React from "react";
import ProductList from "@/components/productList";

const page = () => {

    const products = [
        {
            id: 1,
            name: "Groceries Kit",
            price: 650,
            unit: "per unit",
            image: "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
            obtained: 11,
            total: 2000,
        },
        {
            id: 1,
            name: "Groceries Kit",
            price: 650,
            unit: "per unit",
            image: "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
            obtained: 11,
            total: 2000,
        },
        {
            id: 2,
            name: "Hygiene Kit",
            price: 550,
            unit: "per unit",
            image: "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
            obtained: 5,
            total: 2000,
        },
        {
            id: 1,
            name: "Groceries Kit",
            price: 650,
            unit: "per unit",
            image: "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
            obtained: 11,
            total: 2000,
        },
        {
            id: 2,
            name: "Hygiene Kit",
            price: 550,
            unit: "per unit",
            image: "https://dkprodimages.gumlet.io/catalogue/1033201523grocery%20kit%202025%20jan%2015-01.jpg?format=webp&w=320&dpr=1.0",
            obtained: 5,
            total: 2000,
        }
    ];

    const handleAddProduct = (product) => {
        console.log(product);
    };
    return (
        <>
            <ProductList products={products} onAdd={handleAddProduct} />
        </>
    );
};

export default page;
