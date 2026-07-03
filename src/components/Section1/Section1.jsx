import React from 'react'
import Navbar from './Navbar'
import Page1content from './page1content'
import Searchbar from './searchbar'

const Section1 = (props) => {
  const [search, setSearch] = React.useState('');
  return (
    <div className='h-screen w-full gap-5'>
        <Navbar search={search} setSearch={setSearch} />
        <Page1content users={props.users} search={search} setSearch={setSearch} />
      
    </div>
  )
}

export default Section1
