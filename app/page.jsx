import React from 'react'
import Feed from '@Components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col' >
        <h1 className='head_text text-center'>League of Hackathon</h1>
        <br className="max-md:hidden" />  
        <span className="orange_gradient text-center head_text">Ai-Powered ranking system </span>  
        
        <p className='text-center desc' >Hackathon's team and members ranking system</p>
        
        <Feed />
    </section>
  )
}

export default Home
