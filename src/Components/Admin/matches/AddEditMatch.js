import React, { Component } from 'react'
import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/FormFields';
import {validate} from '../../ui/misc';
import axios from 'axios';
export default class AddEditMatch extends Component {
    state={
        matchId:'',
        formType:'',
        formError:false,
        formSuccess:false,
        teams:[],
        formdata:{
            date:{
                element:'input',
                value:'',
                config:{
                    label:'Event date',
                    name:'date_input',
                    type:'date'
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:true
            },
            local:{
                element:'select',
                value:'',
                config:{
                    label:'Select local team',
                    name:'select_local',
                    type:'select',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:false
            },
            resultLocal:{
                element:'input',
                value:'',
                config:{
                    label:'Result local',
                    name:'result_local_input',
                    type:'text',
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:false
            },
            away:{
                element:'select',
                value:'',
                config:{
                    label:'Select away team',
                    name:'select_away',
                    type:'select',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:false
            },
            resultAway:{
                element:'input',
                value:'',
                config:{
                    label:'Result away',
                    name:'result_away_input',
                    type:'text',
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:false
            },
            referee:{
                element:'input',
                value:'',
                config:{
                    label:'Referee',
                    name:'referee_input',
                    type:'text'
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:true
            },
            stadium:{
                element:'input',
                value:'',
                config:{
                    label:'Stadium',
                    name:'stadium_input',
                    type:'text'
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:true
            },
            result:{
                element:'select',
                value:'',
                config:{
                    label:'Team Result',
                    name:'select_result',
                    type:'select',
                    options:[
                        {key:'W',value:"W"},
                        {key:'L',value:"L"},
                        {key:'D',value:"D"},
                        {key:'n/a',value:"n/a"},
                    ]
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:true
            },
            final:{
                element:'select',
                value:'',
                config:{
                    label:'Game played',
                    name:'select_played',
                    type:'select',
                    options:[
                        {key:'Yes',value:"Yes"},
                        {key:'No',value:"No"}
                    ]
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showLabel:true
            },
        }
    }
    updateField = (match,teamOption,teams,type,matchId)=>{
        const newFormData = {...this.state.formdata};
        for( let key in newFormData){
            if(match){
                newFormData[key].value=match[key];
                newFormData[key].valid=true;
            }
            if(key==='local'||key==='away'){
                newFormData[key].config.options=teamOption;
            }
        }
        console.log(newFormData)
        this.setState({matchId,formType:type,formdata:newFormData,teams})
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/teams')
        .then((res)=>{
            const teams = res.data;
            const teamOption = res.data.map(team=>{
                return {
                    key:team.shortname,
                    value:team.shortname
                }
            })
            // console.log(teamOption);
            console.log("match",this.props.computedMatch.params.id);
            const matchId = this.props.computedMatch.params.id;
            if(!matchId){
                this.updateField(false,teamOption,teams,"Add Match",matchId)
                
            }else{
                
                axios.get(`http://localhost:3001/api/matches/${matchId}`)
                .then((res)=>{
                    console.log("match data",res.data)
                    
                    this.setState({teams:res.data})
                    this.updateField(res.data[0],teamOption,teams,"Edit Match",matchId)
            })
        }
        });

    }
    updateForm(element){
        const newFormData  = {...this.state.formdata}
        const newElement = {...newFormData[element.id]}
        newElement.value = element.event.target.value;
        let validData = validate(newElement);
        newElement.valid= validData[0];
        newElement.validationMessage= validData[1];
        newFormData[element.id] = newElement;
        this.setState({formdata:newFormData,formError:false })
    }
    sucessForm = ()=>{
        this.setState({formSuccess:'updated successfully'})
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
        this.state.teams.forEach((team=>{
            if(team.shortname===data.local){
                data[ 'localThmb']=team.thumb;
            }
            if(team.shortname===data.away){
                data[ 'awayThmb']=team.thumb;
            }
        }))
        console.log(this.state.teams);
        console.log(data)

        if(formIsValid){
            const url = this.state.matchId?
                `http://localhost:3001/api/updatematch/${this.state.matchId}`:
                `http://localhost:3001/api/addmatch`;
            axios.post(url,{
                match:data
                   
            }).then((res)=>{
               this.sucessForm("updated");

            }).catch((err)=>{
                this.setState({formError:true});
            })
            // this.resetFormSuccess();
        }else{
            this.setState({formError:true})
        }

    }
    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>{this.state.formType}</h2>
                    <div>
                        <form onSubmit={(event)=>{this.submitForm(event)}}>


                <FormField 
                id="date"
                formdata={this.state.formdata.date}
                change={(element)=>this.updateForm(element)} />
                <div className="select_team_layout">
                    <div className="label_inputs">Local</div>
                        <div className="wrapper">
                            <div className="left">
                                <FormField 
                                id="local"
                                formdata={this.state.formdata.local}
                                change={(element)=>this.updateForm(element)} />

                            </div>
                            <div>
                                <FormField 
                                id="resultLocal"
                                formdata={this.state.formdata.resultLocal}
                                change={(element)=>this.updateForm(element)} />

                            </div>
                        </div> 
                </div>
                <div className="select_team_layout">
                    <div className="label_inputs">Away</div>
                        <div className="wrapper">
                            <div className="left">
                                <FormField 
                                id="away"
                                formdata={this.state.formdata.away}
                                change={(element)=>this.updateForm(element)} />

                            </div>
                            <div>
                                <FormField 
                                id="resultAway"
                                formdata={this.state.formdata.resultAway}
                                change={(element)=>this.updateForm(element)} />

                            </div>
                        </div> 
                </div>
                <div className="split_fields">
                    <FormField 
                    id="referee"
                    formdata={this.state.formdata.referee}
                    change={(element)=>this.updateForm(element)} />
                    <FormField 
                    id="stadium"
                    formdata={this.state.formdata.stadium}
                    change={(element)=>this.updateForm(element)} />

                </div>
                <div className="split_fields_last">
                    <FormField 
                    id="result"
                    formdata={this.state.formdata.result}
                    change={(element)=>this.updateForm(element)} />
                    
                    <FormField 
                    id="final"
                    formdata={this.state.formdata.final}
                    change={(element)=>this.updateForm(element)} />
                    

                </div>
                <div className="success_label">
                    {this.state.formSuccess}
                </div>
                {this.state.formError?
                <div className="error_label">
                Something is wrong.
            </div>:null}
            <div className="admin_submit">
                <button onClick={(event)=>{this.submitForm(event)}} >
                    {this.state.formType}</button>
            </div>
                
            </form>
        </div>
    </div>


            </AdminLayout>
        )
    }
}
