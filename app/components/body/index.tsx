import React from "react";
import Variaty from "../object";
export default function Body() {
  return (
    <div>
      <div className='md:flex border border-none-300 p-4 gap-4 bg-red'>
        <div id="cont1">
          <img id="icon1" src={'./icon2.png'} alt="" />
          <div>
            <h4>Fast Delivery</h4>
            <p>The Food Will Be Delivered To <br />Your Home within 1-2 Hours Of <br />Your Ordering</p>
          </div>
        </div>
        {/*  */}
        <div id="cont1">
          <img id="icon1" src={'./icon3.png'} alt="" />
          <div>
            <h4>Fresh Food</h4>
            <p>Your Food Will Be Delivered <br />100% Fresh To Your Home. We <br />Do Not Deliver Stale Food</p>
          </div>
        </div>
        {/*  */}
        <div id="cont1">
          <img id="icon1" src={'./icon4.png'} alt="" />
          <div>
            <h4>Free Delivery</h4>
            <p>Your Food delivery Is <br />Absolutely Free. No Cost <br />Just Order and Enjoy</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="md:flex gap-10 mt-4 mr-2 mb-6 ml-8">
          <h1>Best <span>Delivered</span><br />Categories  </h1>
          <p>Here Are Some Of Our Best Distributed <br />Categories . If You Want You Can Order <br />From Here</p>
        </div>
        <div className="md:flex gap-10 mt-4 mr-2 mb-6 ml-8 ">
          <div>
            <img className="img" src={'./Burger.png'} />
            <h4>Chicken Burger</h4>
            <p>order Now </p>
          </div>
          {/*  */}
          <div >
            <img className="img" src={'./Pizza.png'} />
            <h4>Chicken Pizza</h4>
            <p>order Now </p>
          </div>
          {/*  */}
          <div>
            <img className="img" src={'./Fries.png'} />
            <h4>French Fries</h4>
            <p>order Now </p>
          </div>
        </div>
      </div>

      <div>
        <h1>Our <span className="text-red">Regular</span> Menu</h1>
        <div className="md:flex">
          <p>These Are Our Regular menus. You Can <br />Order Anything You Like</p>
          <button id="btn">See All</button>
        </div>
        {/* ************** */}

        <div className="image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 ml-4  ">
      {Variaty.map((variaty, index) => (
        <div key={index} className="p-5 border border-gray-400 rounded-md w-80 bg-red-200 m-4">
          <div>
            <img src={variaty.image} alt={variaty.title} className="img-menu" />
          </div>
          <div className="pt-15 p-">
            <h1>{variaty.title}</h1>
            <img  src={variaty.ratings} alt={variaty.ratings} className="w-20" />
            <h3 className="gap-5">{variaty.price}<span><button className="bg-red-400 p-4 p-5 border rounded-md ">Buy Now</button></span></h3>
          </div>
        </div>
      ))}
    </div>

      </div>
      {/*  */}
      <div className="md:flex gap-5 mt-4 mr-2 mb-6 ml-8">
        <div >
          <img className="w-200 md:w-100" src={'./bug.png'} alt="" />
        </div>
        <div id="mt-4 mr-2 mb-6 ml-8">
          <img className="w-200 md:w-100" src={'./bug2.png'} alt="" />
          <img className="w-200 md:w-100 pt-4" src={'./bug3.png'} alt="" />
        </div>

      </div>
    </div>
  )
}