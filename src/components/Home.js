import React from 'react'
import { circuite } from '../assets'
const Home = () => {
  const style = {
      rightContainer: 'bg-black w-[60%] h-[100vh] flex flex-col justify-center',
      titleContainer: 'w-[80%] h-[30%] text-white flex  flex-col justify-center m-auto' ,
      title: 'text-white text-[80px] h-[100px] font-bold text-end',
      titleName: 'text-white text-[60px] h-[100px] font-bold text-end border-t-2',
      titleBorder: 'text-white text-[80px] h-[100px] font-bold text-end mb-10  ',
      container : 'w-[100vw] h-[100vh] flex',
      imageContainer: 'w-[40%] h-[100vh] overflow-hidden',
      image: 'object-contain'
    }
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={circuite} className={style.image} />
      </div>
      <div className={style.rightContainer}>
        <div className={style.titleContainer}>
          <p className={style.title}>Building an IOT system</p>
          <p className={style.title}>And connecting it to the</p>
          <p className={style.titleBorder}>Cloud</p>
          <p className={style.titleName}>Georgian-Iulian Tudor</p>
        </div>
      </div>
    </div>
  )
}

export default Home