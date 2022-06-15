import React from 'react'
import faker from 'faker'

const Data = [...Array(5)].map((_, i)=>{
  return {
    id: i,
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
  }
})

const Suggestions = () => {
  console.log(Data)
  return (
    <div>
        {Data.map(user=>{
          return (
            <img src={user.avatar}/>
          )
        })}
    </div>
  )
}

export default Suggestions