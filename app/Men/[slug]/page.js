import ReviewProduct from '../../Components/ReviewProduct'
import React from 'react'

function page({params}) {
  return (
    <div>
        <ReviewProduct params={params}/>
    </div>
  )
}

export default page