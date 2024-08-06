import React from "react";
import { NavLink } from "react-router-dom";
function Index (){
    return(
    <main className="mt-10 flex flex-row justify-center md:px-20 p-5 bg-slate-100">
    <NavLink to='/form_1' className='px-5 p-2 rounded-xl hover:bg-gray-100 shadow-inner'>Registration Form</NavLink>
    <NavLink to='/form_2' className='px-5 p-2 rounded-xl hover:bg-gray-100 shadow-inner'>FeedBack Form</NavLink>
    </main>
    )
}
export default Index
