import React from 'react'

const page = ({params} : {params: {id: string}}) => {
    const {id} = params;
  return (
    <div>
      <h2 className='text-3xl'>User Profile : {id}</h2>
    </div>
  )
}

export default page
