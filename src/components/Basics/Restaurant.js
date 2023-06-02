// card creation 
import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar  from './Navbar';
 const Restaurant = () => {
// useState Hooks-->
const[menuData, setMenuData] = useState(Menu);
// console.log(menuData);

 const filterItem=(category) =>{
 const updatedList = Menu.filter((curElem) => {
 return curElem.category === category;

 });
 setMenuData(updatedList);
 };

  return (
   <>


   {/* green wala menuData can be any name, but the same should be passed the same way to the child function as the parameter within the curly braces. */}
  <Navbar  filterItem={filterItem}/>
  <MenuCard menuData={menuData}/>
   </>
  )
}

export default Restaurant;
