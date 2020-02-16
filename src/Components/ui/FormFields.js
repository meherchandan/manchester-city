import React from 'react'

const  FormFields = ({id,formdata,change}) =>{
    const showError = ()=>{
        return (
            <div className="error_label">
                {
                    formdata.validation && !formdata.valid ?formdata.validationMessage:''
                }
            </div>
            
        )
    }
    const renderTemplate = ()=>{
        let formTemplate = null;
        switch(formdata.element){
            case ('input'):
                formTemplate = <div>
                    {formdata.showLabel?
                    <div className="label_inputs">
                        {formdata.config.label}
                    </div>:null}
                    <input {...formdata.config} 
                    value = {formdata.value}
                    onChange={(event)=>{change({event,id})}} 
                    />
                    {showError()}
                </div>
                break;
                case ('select'):
                    formTemplate = <div>
                        {formdata.showLabel?
                        <div className="label_inputs">
                            {formdata.config.label}
                        </div>:null}
                        <select  
                        value = {formdata.value}
                        onChange={(event)=>{change({event,id})}} 
                        >
                            <option value = "">Select one</option>
                            {
                                formdata.config.options.map((item,i)=>(
                                    <option key = {i}value ={item.key}>{item.value} </option>
                                ))
                            }
                        </select>
                    </div>
                    break;
            default:
                formTemplate=null;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}
export default FormFields;