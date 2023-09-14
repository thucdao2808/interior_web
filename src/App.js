
import React from 'react'

import './App.css'
import Logo from './components/header/Logo'
import ToogleSearch from "./components/header/ToogleSearch"
import ShoppingCart from "./components/header/ShoppingCart"
import ListOpition from './components/header/ListOpition'
import PageFirst from './components/header/PageFirst'
import Directory from './components/body/page-1/Directory'
import TradeMark from './components/body/page-1/TradeMark'
import LineShoe from './components/body/page-1/LineShoes'
import TypeLine from './components/body/page-1/TypeNail'
import Size from './components/body/page-1/Size'
import Color from './components/body/page-1/Color'
import Price from './components/body/page-1/Price'
import Product from './components/body/page-2/Product'
import Title from './components/body/page-2/Title'
import Pagination from './components/body/Pagination/Pagination'
import Trending from "./components/body/page-3/Trending"
import Scroll from './components/body/Scoll-top/Scroll'
import Communication from './components/footer/footer-1/Communication'
import ShowRoom from './components/footer/footer-2/ShowRoom'
import EmailRearch from './components/footer/footer-2/EmailRearch'
import Link from './components/footer/footer-2/Link'
function App() {
  return (
//header
<div>
 
 
 <div className='designer'>
    <div className='container'>
        <div className="App">
            <Logo className="logo">
                     <img src='https://soccerstore.vn/wp-content/uploads/2020/07/20140115_-White-shading-logo-1.png' alt ='' style={{background:'cover'}}></img>
            </Logo>
            <ToogleSearch></ToogleSearch>
            <ShoppingCart></ShoppingCart>
            <br></br>
        </div>
        <div>
             <ListOpition className='item-option'></ListOpition>
        </div>
       </div>
       <hr></hr>
       <div>
           <PageFirst></PageFirst>
       </div>
       <hr></hr>
       <div className='page'>
           <div className='list-category'>
            <Directory></Directory>
            <TradeMark></TradeMark>
            <LineShoe></LineShoe>
            <TypeLine></TypeLine>
            <Size></Size>
            <Color></Color>
            <Price></Price>
           </div>
           <div className='page-product'>
              <Title></Title>
              <Product></Product>
           </div>
        </div>
        <div>
            <Pagination className='convert-page'></Pagination>
        </div>
        <div>
           <Trending className='trending-production'></Trending>
        </div>
        <Scroll className='scroll'></Scroll>
        <Communication></Communication>
        <div className='footer-content-end'>
            <ShowRoom></ShowRoom>
            <EmailRearch></EmailRearch>
            <Link></Link>
        </div>    
    </div>
</div>
 
  );
}

export default App;



