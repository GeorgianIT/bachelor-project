import React from 'react'

const Intoduction = () => {
  const style = {
    container: 'h-[100vh] w-[100vh] flex m-auto',
    smallerConainter: 'w-[70%] h-[70%] text-center m-auto',
    textTitle: 'font-bold text-[50px]'
  }
  return (
    <div className={style.container}>
      <div className={style.smallerConainter}>
        <p className={style.textTitle}>Intoduction</p>
      </div>
    </div>
  )
}

export default Intoduction