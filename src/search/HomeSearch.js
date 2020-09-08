import React, { useState } from 'react'

const HomeSearch = () => {

    const [categories, setCategories] = useState(['norte']);

    return (
        <>
        <AddCategory setCategories={ setCategories } />

        <ol>
            {
                categories.map( category  => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>
        </>
    )
}

export default HomeSearch
