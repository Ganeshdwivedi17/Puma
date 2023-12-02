import React from 'react'
import Tile from './Tile'

function Category() {
  return (
    <>
      <div className='w-full h-[200px] my-10 sm:mt-[110px] md:mt-0 grid grid-flow-col sm:justify-start md:justify-center sm:items-center md:items-center overflow-x-auto lg:flex flex-row justify-center'>
        <Tile url={`https://in.puma.com/in/en/pd/rebound-lay-up-unisex-sneakers/369573?swatch=01&referrer=carousel`} text={`MotorSport`} imgurl={`https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/307137/07/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-X-Ray-Speed-Unisex-Sneakers`} />
        <Tile url={`https://in.puma.com/in/en/pd/lex-mens-training-shoes/376826?swatch=02&referrer=carousel`} text={`Party Sneakers`} imgurl={`https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/307950/01/fnd/IND/fmt/png/Scuderia-Ferrari-Trinity-Men's-Sneakers`} />
        <Tile url={`https://in.puma.com/in/en/pd/lex-mens-training-shoes/376826?swatch=02&referrer=carousel`} text={`Styles at special prices`} imgurl={`https://assets.ajio.com/medias/sys_master/root/20230330/0CKT/64256547711cf97ba7fc359a/-473Wx593H-469437671-black-MODEL.jpg`} />
        <Tile url={`https://in.puma.com/in/en/pd/rs-x-black-and-white-unisex-sneakers/390039?swatch=01&referrer=carousel`} text={`Terrace Shoes`} imgurl={`https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/396464/01/fnd/IND/fmt/png/Palermo-Lth-Unisex-Sneakers`} />
        <Tile url={`https://in.puma.com/in/en/pd/rs-x-3d-unisex-sneakers/390025?swatch=01&referrer=carousel`} text={`Nitro Running`} imgurl={`https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/377291/02/fnd/IND/fmt/png/PUMA-x-FIRST-MILE-Velocity-Nitro-2-Men's-Running-Shoes`} />

      </div>
    </>
  )
}


export default Category