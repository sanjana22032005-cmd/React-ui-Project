import React from 'react'
import "remixicon/fonts/remixicon.css";
import Rightcard from './rightcard'

const Rightcontent = (props) => {
    console.log(props.users);
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {
        props.users.map(function(elem,ind){
            return <Rightcard key={elem.id} id={elem.id} img={elem.img} name={elem.name} intro={elem.intro} age={elem.age} city={elem.city} occupation={elem.occupation} income={elem.income} creditScore={elem.creditScore} satisfaction={elem.satisfaction} tag={elem.tag} color={elem.color} products={elem.products} about={elem.about} recommendation={elem.recommendation}/>
        })
      }
    </div>
  )
}

export default Rightcontent
