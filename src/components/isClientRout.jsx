import React,{useContext} from 'react'
import { Redirect } from 'react-router'

import {Route} from 'react-router-dom'
import isClient from '../context/isClient'

const IsClientRoute = ({path,component})=>{
    const{isAuthClient}= useContext(isClient)
    
    return isAuthClient?(
       
        <Route exact path={path} component={component}/>
        
    ):(
        <Redirect to ="/" /> )
}
export default IsClientRoute