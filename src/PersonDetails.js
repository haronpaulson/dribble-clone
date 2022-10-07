import React from "react";

function PersonDetails({name, post, logo}) {
  return (
    <div className=" h-80 w-72 mr-4"  >
        <div>
            <img src={logo} className="ml-4 h-52 mr-5" alt="personone"/>
            <div className="flex ">
                <div className=" ml-14 mt-3">
                    <h3 className=" font-bold">{name}</h3>
                    <p1>{post}</p1>
                </div>
                <div>
                    <img src="linkedln.png" className=" h-7 w-8 ml-7 mt-5 bg-orange-600" alt="llinkedln"/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default PersonDetails;
