import React from 'react'
import { product } from './Array'

function ProductCard() {
    const AllProducts = product.map(prod =>
    
    <div key={prod.key} className='text-left h-[45vh] sm:w-[200px] md:w-[620px] shadow-xl flex justify-center overflow-hidden flex-col'>
        <div className='h-[65%] self-center justify-self-start w-[110%]'>
            <img className='object-cover p-2 h-[100%] w-full hover:scale-105' src={prod.imgurl} />
        </div>
        <p className='text-sm py-2 pl-2'>{prod.title}</p>
        <div className=' pl-3 pb-1 text-left'>
            <p className='text-xs text-slate-600'></p>
            <h4 className='text-base font-bold '>{prod.price}<span className='line-through text-slate-500 text-xs'>{prod.subprice}</span></h4>
        </div>
        
    </div>

)

    return (
    <>
   <div className='w-[180vw] gap-4 grid grid-flow-col overflow-x-auto lg:flex flex-row'>
    {AllProducts}
    <div className='self-center'> <img className='hover:drop-shadow-xl hover:bg-slate-200 rounded-full' src='https://cdn-icons-png.flaticon.com/128/1549/1549454.png'/></div>
    </div>
    </>    
    )

}

export default ProductCard

/* return (
        <div className='grid sm:gap-4 lg:grid-cols-5 overflow-hidden flex-grow md:grid-cols-4 sm:grid-cols-3'>
            <div className='text-left   h-[65vh] w-56 shadow-xl flex justify-center flex-col m-5'>
                <div className='h-[65%] self-center justify-self-start'>
                    <img className='object-cover p-2 h-[100%] w-full' src={`${Product[0].imgurl}`} />
                </div>
                <p className='text-sm py-2 pl-2'>{`${Product[0].title}`}</p>


                <div className=' pl-3 pb-1 text-left'>
                    <p className='text-xs text-slate-600'></p>
                    <h4 className='text-base font-bold '>{`${Product[0].price}`}<span className='line-through text-slate-500 text-xs'>$150</span></h4>
                    <div className='flex justify-stretch'>
                        <span className='rounded-3xl px-2 text-white bg-black'>
                            3.0 &#11088;
                        </span>
                        <span className='rounded-3xl cursor-pointer px-2'>
                            <Like />
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
       
    )
*/