import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormFields from '../../ui/FormFields'
import {validate} from '../../ui/misc';
import axios from 'axios';
export default class Enroll extends Component {
    state={
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required: true,
                    email:true
                },
                valid:false,
                validationMessage:''
            }
        }
    }
    updateForm(element){
        const newFormData  = {...this.state.formdata}
        const newElement = {...newFormData[element.id]}
        newElement.value = element.event.target.value;
        let validData = validate(newElement);
        newElement.valid= validData[0];
        newElement.validationMessage= validData[1];
        newFormData[element.id] = newElement;
        this.setState({formdata:newFormData,formError:false,formSuccess:''})
    }
    resetFormSuccess(){
        const newFormData  = {...this.state.formdata};
        for(let key in newFormData){
            newFormData[key].valid = true;
            newFormData[key].validationMessage = '';
            newFormData[key].value = '';
        }
        this.setState({formdata:newFormData,formError:false,formSuccess:(this.state.formSuccess||'Congratulations!!')});
        this.resetSuccessMessage();
        
    }
    resetSuccessMessage(){
        setTimeout(()=>{
            this.setState({formSuccess:''})
        },2000)
    }

    submitForm(e){
        e.preventDefault();
        let data = {};
        let formIsValid = true;
        for(let key in this.state.formdata){
            formIsValid = this.state.formdata[key].valid;
            data[key] = formIsValid?this.state.formdata[key].value:{};
        }
        if(formIsValid){
            axios.post('/api/addPromotionEmail',{
                email:data.email.value
            })
            .then( (response) =>{
                console.log(response);
                window.data= response;
                this.setState({formSuccess:response.data.message});
            })
            this.resetFormSuccess();
        }else{
            this.setState({formError:true})
        }

    }
    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=>{this.submitForm(event)}}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormFields
                             id ={'email'}
                             formdata = {this.state.formdata.email}
                            change={(element)=>{this.updateForm(element)}}
                            >
                            </FormFields>
                            {this.state.formError?<div className="error_label">Something is wrong. Try again.</div>:''}
                            <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event)=>{this.submitForm(event)}}>Enroll</button>
                        </div>
                    </form>
                </div>
                
            </Fade>
        )
    }
}
