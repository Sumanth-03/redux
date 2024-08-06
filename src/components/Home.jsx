import React from "react";
import { Route, Routes } from "react-router-dom";
import GetData from "./GetData";
import Form_1 from "./form_1";
import Form_2 from "./form_2";
import Index from "./index"; 
import Acknowledge from "./acknowledge";

function Home (){
    return(
    <>
    <h1 className="mt-10">routes</h1>
        <Routes>
            <Route exact path='/' element={<Index></Index>}></Route>
            <Route path='/displayResponse' element={<GetData></GetData>}></Route>
            <Route path='/acknowledge' element={<Acknowledge></Acknowledge>}></Route>
            <Route path='/form_1' element={<Form_1></Form_1>}></Route>
            <Route path='/form_2' element={<Form_2></Form_2>}></Route>
        </Routes>
    </>
        
    )
}
export default Home