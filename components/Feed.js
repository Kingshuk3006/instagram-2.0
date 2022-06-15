import React from 'react'
import Posts from './Posts'
import Stories from './Stories'
import Miniprofile from './Miniprofile'
import Suggestions from './Suggestions'

const Feed = ({data}) => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
            <Stories photo={data}/>
            <Posts/>
        </section>
        <section className='hidden md:block'>
            <Miniprofile/>
            <Suggestions/>
        </section>
    </main>
  )
}

export default Feed