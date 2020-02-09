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
                    <input {...formdata.config} 
                    value = {formdata.value}
                    onChange={(event)=>{change({event,id})}} 
                    />
                    {showError()}
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