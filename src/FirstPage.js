import React from "react";
import Navigation from "./Navigation";
import PersonDetails from "./PersonDetails";


function FirstPage() {
  return (
    <div className="">
        <div className="mb-5">
            
            <Navigation />
            <div className="flex justify-between items-center relative">
              <div className=" ml-7">
                <img src="sofaa.png" className=" mt-16  ml-20 h-36" alt="" />
                <h1 className=" text-2xl font-bold mb-4 pr-28 mt-6 justify-start ml-5"><span className=" mr-9">Crafted with</span><br/>excellent Wood, <br/><span className=" text-red-800 pl-12">Renovate Your</span><span className=" text-blue-900">  Home</span></h1>
              </div>
              <div className="">
                <img src="chair.png" className=" w-44 mb-7 h-56 mr-28 " alt="chair" />
              
              </div>
              <img src="premium.png" alt="seal" className=" h-24 absolute right-16 bottom-7"/>

            </div>
        </div>
        <div className="flex">
           
           <PersonDetails name="Haron" post={"Creative Director"} logo="person1.png"/>
           <PersonDetails name="Rachel Ann" post={"Senior Designer"} logo="person2.png"/>
           <PersonDetails name={"Derrick Paul"} post={"Media Specialist"} logo="person4.png"/>
          
        </div>
      
    </div>
  )
}

export default FirstPage;
