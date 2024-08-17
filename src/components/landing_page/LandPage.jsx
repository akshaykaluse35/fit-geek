// landing_page/Land_page.js
import React from 'react';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import Header from "../Header/Header"
import Body from './Body';
import Community from './Community';


const LandPage = () =>{
    return(
        <>
            <Header/>
            <Body/>
            <Community/>
            <Footer/>
            
            
        </>
    )
}



export default LandPage;