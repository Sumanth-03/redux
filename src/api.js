import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const postFormData = createAsyncThunk(
  'form/postFormData',
  async(formData,{rejectWithValue}) => {
      try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        console.log(response ,formData)
        return response.data
      }     
      catch(error) {
        return(rejectWithValue(error))
      };
  }
)
export const postFormData2 = createAsyncThunk(
  'form/postFormData',
  async(formData,{rejectWithValue}) => {
      try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        console.log(response ,formData)
        return response.data
      }     
      catch(error) {
        return(rejectWithValue(error))
      };
  }
)


export const getData = createAsyncThunk(
  'data/getData',
  async(navigate,{rejectWithValue}) => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        navigate('/displayResponse',{state:{response : response.data}})
        return response.data
    }      
    catch(error){
      return(rejectWithValue(error))
    }
    
  }
)


