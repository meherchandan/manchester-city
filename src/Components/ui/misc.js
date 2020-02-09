import React from 'react';
import {Link } from 'react-router-dom';

export const Tag = (props)=>{
    const template = <div 
    style={{background:props.background,
    fontSize:props.size,
    color:props.color,
    padding: '5px 10px',
    display: 'inline-block',
    fontFamily:'Righteous',
    ...props.add
    }}
    >
        {props.children}
    </div>
    if(props.link){
        return(
        <Link to = {props.link}>
            {template}
        </Link>
        )
    }
    else{
        return template
    }

}

export const validate = (element)=>{
    let error = [true,''];

    if(element.validation.email){
        const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        error = !emailValidator.test(element.value.trim())?[false,'Please enter valid email address']:error;
    }
    if(element.validation.required){
        const valid = element.value.trim() !=='';
        const message = !valid? 'This field is required':"";
        error = !valid?[valid,message]:error;
    }
    return error;



}