import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            { loading && <p id="loading" className="animate__animated animate__flash">Cargando...</p> }
            
        <div className="card-grid">
            { 
            images.length != 0
                ? images.map((img) => {
                        return ( <GifGridItem key={img.id} {...img} /> )
                    })
                : !loading && <p>No se encontraron gifs con este título</p>
           }
        </div>
        </>
    )
}

GifGrid.prototype = {
    category: PropTypes.string.isRequired,
}