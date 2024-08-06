import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { logOut } from "../store/Auth";
import { useNavigate, NavLink } from "react-router-dom";
import { getData } from "../api";
function Nav (){
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = ()=>{
        dispatch(logOut())
    }
    const handleClickData = () =>{
        dispatch(getData(navigate))
    }
    return(
        <nav className="fixed top-0  p-4 m-0 bg-slate-200 w-screen flex flex-row justify-end items-center ">
            <NavLink to='/' className='mr-auto'>
            <h1 className="font-extrabold text-3xl p-2 m-2 mr-auto">Redux</h1>
            </NavLink>
            

            {isLoggedIn &&
                <>
                <NavLink onClick={handleClickData} to='/displayResponse' className='px-5 p-2 rounded-xl hover:bg-gray-100 shadow-inner'>GetData</NavLink>
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClick}>
                    Log Out
                </button>
                </>
                
            }
        </nav>
    )
}
export default Nav