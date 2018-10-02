import React from 'react';

export default function(props){
    let newList =  props.list.map((element,index)=>{
        return <h2 key={index}>{element}</h2>})
    return(
       <div>
           {newList}
       </div>
    )
}