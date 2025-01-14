import React, { useState, useEffect } from 'react'
import './NewCollections.css'
// import new_collection from '../Assests/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collection, setNew_Collection] = useState([]);
  useEffect(()=>{
    fetch('https://ropa-shop-backend.onrender.com/newcollections')
    .then((res)=>res.json())
    .then((data)=>setNew_Collection(data));
  },[]);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
