import React from 'react';

const List = ({items}) => {
    return (
        <div>
            
        <li><span className={items.packed ?'pack':' '} > {items.quantity}{items.description} </span>
        <button>❌</button></li>
        
        
        </div>
    );
};

export default List;