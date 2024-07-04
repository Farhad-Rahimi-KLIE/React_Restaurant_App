import React, { useState } from 'react'
import './style.css'
import MenuCard from './MenuCard'
import Menu from './MenuApi'
import Navbar from './Navbar'
const uniqueData = [...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All"]
const Resturant = () => {
const [mydata,setMyData] = useState(Menu)

const filterItem = (category)=>{
    if (category === "All") {
        setMyData(Menu);
        return
    }
    let updateList = Menu.filter((curElem)=>{
        return curElem.category === category;
    })
    setMyData(updateList)
}
  return (
    <>
    <Navbar filterItem={filterItem} uniqueData={uniqueData}/>
      <MenuCard mydata={mydata}/>
    </>
  )
}

export default Resturant
