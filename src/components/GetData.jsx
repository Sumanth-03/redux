import React from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

function GetData() {
    const location = useLocation();
    const response = location.state?.response || [];
    const {loading,error,data} = useSelector((state)=>state.getReducer)
    console.log(loading)
    if(loading){
        return(
          <div className='flex flex-col justify-center items-center mt-10 h-screen'>
          <h1 className="">loading...</h1>
          </div>
        )
      }
    return (
        <div className="container mx-auto px-4 mt-20">
            <h2 className="text-2xl font-bold mb-4">Response Data:</h2>
            {response.length > 0 ? (
                response.map((item, index) => (
                    <div key={index} className="mb-4 border p-4 rounded-lg">
                        <p className="text-lg font-bold">ID: {item.userId}</p>
                        <p className="text-lg">Title: {item.title}</p>
                        <p className="text-lg">Body: {item.body}</p>
                    </div>
                ))
            ) : (
                <p className="text-lg">No data available</p>
            )}
        </div>
    );
}

export default GetData;
