import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { setData } from "../store/userData";
import { logIn } from "../store/Auth";

function LogInForm (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name==''&& !email==''){
            dispatch(setData({ name, Email: email }));
            setName('') 
            setEmail('')
            dispatch(logIn())
        }else{
            console.log('error',name,email,!name===''&& !email==='')
        }
        
    }
    return(
        <div className="flex  flex-col justify-center justify-items-center mt-40 bg-slate-300 shadow-lg md:w-[40%] rounded-xl m-auto p-10">
        <h1 className="font-bold text-xl m-auto">Log In</h1><br></br>
        <form className="flex flex-col justify-center space-y-4" onSubmit={handleSubmit}>
            <input name="name" type="text" 
            placeholder="Enter Your Name" 
            value={name}
            className="p-4  border-2  w-[80%] m-auto rounded-xl"
            onChange={(e) => setName(e.target.value)}
            >
            </input>

            <input name="Email"type="email" placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4  border-2 w-[80%] m-auto rounded-xl"
            >
            </input>
            <button type='submit'
            className="bg-sky-500 text-white font-extrabold text-xl ml-auto p-2 px-4 rounded-xl m-4 my-10">Submit</button>
        </form>
        </div>
        
    )
}

export default LogInForm