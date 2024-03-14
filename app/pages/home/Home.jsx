import React from 'react'
import Banner from './components/banner/Banner'
import Category from './components/category/Category'

const Home = () => {
  return (
    <div>
        <div>
             <Banner/>
        </div>
        <div>
         <Category/>
        </div>
    </div>
  )
}

export default Home