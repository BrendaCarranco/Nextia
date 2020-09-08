import React, { useState } from 'react'
import { getProducts } from './getProduct';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    return (
        <>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
            <button onClick={() => getProducts(inputValue)}>Buscar</button>
        </>
    )
}