import React from 'react'
import RightCardContent from './rightcardcontent'

const rightcard = (props) => {
    console.log(props.color);
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt=""/>
        <RightCardContent id={props.id} img={props.img} name={props.name} intro={props.intro} age={props.age} city={props.city} occupation={props.occupation} income={props.income} creditScore={props.creditScore} satisfaction={props.satisfaction} tag={props.tag} color={props.color} products={props.products} about={props.about} recommendation={props.recommendation} />
    </div>
  )
}

export default rightcard
 