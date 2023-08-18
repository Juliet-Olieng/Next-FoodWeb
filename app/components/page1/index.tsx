import React from "react";
export default function Page1(){
    return(
        <div className='flex mt-4 mr-2 mb-6 ml-8 '>
        <div>
        <h1 className="text-4xl font-bold text-red-600 ">
All Fast Food is <img className="md:w-20" src='./line.png' alt="line" /> <br /> Available at Foodie
</h1>
            <div className='flex'>
            <img className='w-20 h-20 md:rounded-full' src={'./download.jpeg'} alt="sandwich" />
                <p className=" text-black">We Are Just A Click Away When You Crave For Delicious Food </p>
            </div>
            <div className='flex'>
                <button className="border text-black">Buy Now</button>
                <div className='flex'>
                <img id="icons" src={'./icon1.png'} />
                <p className=" text-black">How To Order</p>
                </div>
            </div>
        </div>
        <div>
        <img className="md:w-300 h-200" src={'./sandwich.png'} />
        </div> 
        </div>  
    )
}