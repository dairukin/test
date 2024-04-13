
import React from "react"
import dataProducts from '../../data'
import { NavLink } from "react-router-dom"
import Search from "../Search/Search"
import Filter from "../Filter/Filter"

import { useState } from "react"
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export default function Products() {
    const products = dataProducts()


    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')

    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    const filteredProducts = products.filter((item) => 

        item.title.toLowerCase().includes(query.toLocaleLowerCase())

    )

    const sortProducts = (sorting, products) => {

        switch (sorting) {
            case 'priceAscending':
                return products.sort((a, b) => a.price - b.price)
            case 'priceDescending':
                return products.sort((a, b) => b.price - a.price)
            case 'nameA':
                return products.sort((a, b) => a.title.localeCompare(b.title))
            case 'nameZ':
                return products.sort((a, b) => b.title.localeCompare(a.title))
            default: 
                return products
        }

    }

    const fullSorting = sortProducts(sorting, filteredProducts)



    return (
        <div className="bg-white">
            <Search query={query} onChangeQuery={onChangeQuery} />

            <Filter sorting={sorting} onSortingChange={onSortingChange} />

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                fullSorting.length ? (
                    fullSorting.map((product) => (
                        <NavLink to={`/products/${product.id}`}>
                            <a key={product.id} href='#' className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.photo}
                                        alt={product.photo}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price} ₽</p>
                            </a>
                        </NavLink>
                    ))
                ) : (
                    <h2>По вашему запросу `{query}` ничего не найдено!</h2>
                )}
                </div>

            </div>
        </div>
    )
}
