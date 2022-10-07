import React, {useState} from "react";

function Navigation() {
    const[dropdown, setDropdown] = useState(false);
    function handleClick(e) {
        setDropdown(!dropdown);
    }
  return (
    <div className="  shadow-xl shadow-orange-200">
      
        <div className="flex justify-between items-center">
            <div>
                <img src="logo.png" className=" h-9 w-20 ml-5" alt="logo"></img>
            </div>
            <div >
                <ul className="flex px-5 font-medium">
                    <li className="  hover:underline"><a href="#" className=" pr-3">ABOUT US</a></li>
                    <li className="  hover:underline"><a href="#">OUR WORK</a></li>
                </ul>
            </div>
            <div>
                <img src="menu.png" className=" h-8 w-13 pr-10" alt="menu" onClick={handleClick}/>
            </div>
        </div> 
        {dropdown && <div className=" bg-red-100 w-48 border-2 border-black absolute top-8 right-4 z-20 font-medium">
            <ul >
                <li className=" border-b-2 border-black hover:bg-red-300 hover:cursor-pointer">Contact Us</li>
                <li className=" border-b-2 border-black  hover:bg-red-300 hover:cursor-pointer">Gallery</li>
                <li className="  hover:bg-red-300 hover:cursor-pointer">Latest Collection</li>
            </ul>
        </div>      
        }
    </div>
  )
}

export default Navigation;
