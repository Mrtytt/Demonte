import React,{useState,useReducer} from "react";
import CreateDataContext from "./CreateDataContext";
import jsonServer from "../api/jsonServer";

const Reducer = (state,action) =>{
    switch(action.type)
    {   
        case 'get_offers':
            return action.payload
        case 'get_otherservices':
            return action.payload
        case 'get_models':
            return action.payload
        default:
            return state
    }
}
const getOffers = (dispatch)=>{
    return async() =>{
        const response = await jsonServer.get('/offers')
        dispatch({type:'get_offers',payload:response.data})
    }
}
const getOtherServices = (dispatch)=>{
    return async() =>{
        const response = await jsonServer.get('/otherservices')
        dispatch({type:'get_otherservices',payload:response.data})
    }
}
const getModels = (dispatch)=>{
    return async() =>{
        const response = await jsonServer.get('/models')
        dispatch({type:'get_models',payload:response.data})
    }
}
export const {Context,Provider} = CreateDataContext(Reducer,{getOffers,getOtherServices,getModels},[])