'Use client'
import Body from './components/body';
import NavBar from './components/Navbar';
import Page1 from './components/page1';
import Footer from './components/footer';

import React from 'react';

export default function Home() {
  return (
<div className="h-screen-full bg-pink-100 text-black ml-3 ">
  <NavBar/>
  <Page1/>
 <Body/>
 <Footer/>
                       

</div>

  );
}
