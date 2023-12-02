import React, { Suspense } from 'react'
import Hero from './Hero'
import Category from './Category'
import ComingSoon from './ComingSoon'
import Collaborations from './Collaborations'
import Virat from './Virat'
import ProductCrousel from './ProductCrousel'
import Pumaxpleasure from './Pumaxpleasure'
import Video from './Video'
import Neymar from './Neymar'
import Loading from './loading'
function Home() {
    return (
        <>
        <Suspense fallback={<Loading/>}>
            <Hero />
            <Category />
            <Video />
            <Collaborations />
            <Virat />
            <ComingSoon />
            <Pumaxpleasure />
            <ProductCrousel />
            <Neymar />
        </Suspense>
        </>
    )
}

export default Home