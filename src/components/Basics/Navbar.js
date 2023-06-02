import React from 'react'
// import Menu from 'menuApi.js'
const Navbar = ({filterItem, setMenuData, Menu}) => {
  return (
    <>
      {/* NAVBAR  */}
<div className="navbar">
  <div className="btn-group">
    <button className="btn-group__item" onClick={ ()=> filterItem("starter")}>
      Starter
    </button>
    <button className="btn-group__item" onClick={ ()=> filterItem("lunch")}>
     Lunch
    </button>
    <button className="btn-group__item" onClick={ ()=> filterItem("refreshment")}>
      Refreshments
    </button>
    <button className="btn-group__item" onClick={ ()=> filterItem("snacks")}>
     Snacks
    </button>
    <button className="btn-group__item" onClick={ ()=> filterItem("desert")}>
    Desert
    </button>
    <button className="btn-group__item" onClick={ ()=> filterItem("all-timer")}>
    All-Timer
    </button>
    <button className="btn-group__item" onClick={ ()=> setMenuData(Menu)}>
    All
    </button>
  </div>
</div>
    </>
  )
}

export default Navbar

//M0RE CATEGORY ADDITION PART