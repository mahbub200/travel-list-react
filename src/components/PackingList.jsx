import React from 'react';
import List from './List';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const PackingList = () => {
    return (
        <div className='list'>
           <ul>{initialItems.map(item=><List items={item}/>)}</ul> 
            
        </div>
    );
};

export default PackingList;