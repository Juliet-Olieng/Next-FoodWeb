import React from "react";
import Variaty from "../object";
export default function Body() {
  return (
    <div>
      <div className='md:flex border border-none-300 p-4 gap-10 bg-pink-200 w-70 ml-10 rounded '>
        <div className="flex gap-5">
          <img id="icon1" src={'./icon2.png'} alt="" />
          <div>
            <h4 className="text-gray-400" >Fast Delivery</h4>
            <p className="text-gray-400">The Food Will Be Delivered To <br />Your Home within 1-2 Hours Of <br />Your Ordering</p>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-5">
          <img className="" src={'./icon3.png'} alt="" />
          <div>
            <h4>Fresh Food</h4>
            <p className="text-gray-400">Your Food Will Be Delivered <br />100% Fresh To Your Home. We <br />Do Not Deliver Stale Food</p>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-5">
          <img id="icon1" src={'./icon4.png'} alt="" />
          <div>
            <h4 className="text-gray-400">Free Delivery</h4>
            <p className="text-gray-400">Your Food delivery Is <br />Absolutely Free. No Cost <br />Just Order and Enjoy</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="home grid grid-cols-2 gap-20 mt-4 mr-2 mb-6 ml-10">
          <h1 className="text-4xl font-bold ">Best <span className="text-4xl font-bold text-red-600">Delivered</span><br />Categories  </h1>
          <p className="text-gray-400">Here Are Some Of Our Best Distributed <br />Categories . If You Want You Can Order <br />From Here</p>
        </div>
        <div className="md:flex gap-20 mt-4 mb-6 ml-20 ">
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
        <h1 className="text-4xl font-bold ml-10">Our <span className=" text-red-600">Regular</span> Menu</h1>
        <div className="home grid grid-cols-2 ml-10">
          <p className="text-gray-400">These Are Our Regular menus. You Can <br />Order Anything You Like</p>
          <button className="px-4 py-2 bg-red-300 text-white rounded-md hover:bg-red-600 absolute left-1/2 transform -translate-x-1/2">See All</button>
        </div>
        {/* ************** */}

        <div className="image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 ml-4  ">
      {Variaty.map((variaty, index) => (
        <div key={index} className="p-5 border border-gray-400 rounded-md w-80 bg-red-200 m-4 mt-40">
          <div className="mt-[-150px]">
            <img src={variaty.image} alt={variaty.title} className="img-menu style={{ width: '300px', height: 'auto' }}"  />
          </div>
          <div className="pt-15 p-">
            <h1 >{variaty.title}</h1>
            <img  src={variaty.ratings} alt={variaty.ratings} className="w-20" />
            <h3 className="gap-5 text-white">{variaty.price}<span><button className="bg-red-300 p-4 p-5 border rounded-md ">Buy Now</button></span></h3>
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