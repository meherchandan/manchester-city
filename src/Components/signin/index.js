import React, { Component } from 'react'
import FormFields from '../ui/FormFields'
import {validate} from '../ui/misc';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {updateState} from '../../../src';
class SignIn extends Component {
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
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your password'
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:''
            }
        }
    }
    resetFormSuccess(){
        const newFormData  = {...this.state.formdata};
        for(let key in newFormData){
            newFormData[key].valid = true;
            newFormData[key].validationMessage = '';
            newFormData[key].value = '';
        }
        this.setState({formdata:newFormData,formError:false,formSuccess:''});
        this.resetSuccessMessage();
        
    }
    resetSuccessMessage(){
        setTimeout(()=>{
            this.setState({formSuccess:''})
        },2000)
    }
    componentDidUpdate(prevProps) {
        const locationChanged =
        this.props.location !== prevProps.location;
        return locationChanged;
    
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
            axios.post('/api/signin',{
                username:data.email,
                password: data.password     
            }).then((res)=>{
                localStorage.setItem('token', res.data.token);
                updateState(true);
                this.props.history.push('/dashboard');
            }).catch((err)=>{
                this.setState({formError:true});
            })
            this.resetFormSuccess();
        }else{
            this.setState({formError:true})
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
    render() {
        return (
            <div className="container">
                <div 
                className="signin_wrapper"
                style={{
                    margin:'100px'
                }}>
                    <form onSubmit={(event)=>{this.submitForm(event)}}>
                        <h2>Please Login</h2>
                        <FormFields
                            id ={'email'}
                            formdata = {this.state.formdata.email}
                            change={(element)=>{this.updateForm(element)}}
                            >
                            </FormFields>
                        <FormFields
                            id ={'password'}
                            formdata = {this.state.formdata.password}
                            change={(element)=>{this.updateForm(element)}}
                            >
                            </FormFields>
                            {this.state.formError?<div className="error_label">Something is wrong. Try again.</div>:''}
                            <button onClick={(event)=>{this.submitForm(event)}}>Login</button>

                    </form>

                </div>
            </div>
        )
    }
}
export default withRouter(SignIn);