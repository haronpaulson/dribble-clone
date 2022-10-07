import React from "react";

function SecondPage() {
  return (
    <div className="">
        <div className=" mt-5 relative">
           
            <img src="sofaa.png" className=" w-5/6 h-32 ml-20 mb-3  " alt="imageone"/>
            <button type="submit" className=" h-8 w-24 border-2  hover:bg-orange-200 p-0.5 font-medium absolute top-24 right-12 bg-white">See more</button>
            <img src="image2.png" className=" w-5/6 h-24 ml-20 mb-3" alt="imagetwo"/>
            <img src="image3.png" className=" w-5/6 h-24 ml-20 mb-10" alt="imagethree"/>
        </div>
        <div>
            <div className=" flex">
                <div>
                    <img src="bells.png" className=" ml-6 h-60 w-80" alt="bells"></img>
                </div>
                <div className=" ml-10 border-r-2 border-black-100">
                    <h1 className=" font-bold text-lg mb-16 mr-32 ">Product Details</h1>
                    <div className=" flex mb-4 border-b-2 border-grey-100" >
                        <h2 className=" mr-16 font-semibold">Materials</h2>
                        <p1>Magilia, Teak, <br/>Bleach, Granite, Stone <br/>Caladium,Shining</p1>
                    </div>
                    <div className="flex border-b-2 border-grey-200 items-start">
                        <h2 className=" mr-24 font-semibold">Sizing</h2>
                        <p1 >H 60cm L 40cm <br/> O 60 cm</p1>
                    </div>
                    <div className="flex">
                        <h2 className=" mr-7 font-semibold">Product<br/> Description</h2>     
                        <p1>The most suitable product for <br/> for your homes<br/>Top quality product<br/>
                        to satisfy customers.</p1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondPage;
