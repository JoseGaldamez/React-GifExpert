import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('');
    const _handleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    
    const _handleSubmit = (e) => {
         
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
        
        
    }
    return (
        <form onSubmit={_handleSubmit}>
            <input placeholder="Buscar..." type="text" value={inputValue} onChange={_handleInputChange} />
        </ form>
    );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory;
