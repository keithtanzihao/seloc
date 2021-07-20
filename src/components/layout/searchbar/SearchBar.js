import React from 'react'

import SearchTitle from './SearchTitle'

import './SearchBar.css'

const SearchBar = () => {

  return (
    <header className='searchBar'>
        <SearchTitle />
    </header>
  )
}

export default SearchBar


// window.onscroll = function () {
//   var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
//   if (scrollTop >= document.getElementById("d").offsetTop) {
//     document.getElementById("nav").style.position = "fixed";
//     document.getElementById("d").style.marginTop = "50px";
//     document.getElementById("nav").style.marginTop = "-50px";
//   } else {
//     document.getElementById("nav").style.position = "static";
//     document.getElementById("d").style.marginTop = "0px";
//     document.getElementById("nav").style.marginTop = "0px";
//   }
// }