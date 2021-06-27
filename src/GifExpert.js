import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpert = ( {defaultCategory = [] } ) => {
    
    const [categories, setcategories] = useState(defaultCategory);
    
    return (
        <>
            <h2>Gif Expert</h2>
            <AddCategory setCategories={setcategories} />
            <hr />
            <div>
                <ol>
                    {
                        categories.map((category, index) => (
                            <GifGrid key={category} category={category} />
                         ) )
                    }
                </ol>
            </div>
        </>
    )
}


export default GifExpert;
