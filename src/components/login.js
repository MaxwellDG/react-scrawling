import React from 'react'
import MyForms from './myForms'

export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            password: "",
            errors: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleChange(event){
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.context.actions.login(this.state.name, this.state.password)
        .then(data => {
            if(data === null){
                this.setState({
                    errors: ["User login failed."]
                })
            } else {
                console.log(`${this.state.name} has logged in?`)
            }
        })
        .catch(errors => console.log(errors))
    }

    handleCancel(event){

    }

    render(){
        return(
            <MyForms errors={ this.state.errors } componentOnSubmit= { this.handleSubmit } onCancel={ this.handleCancel } elements={() => ( 
                <React.Fragment>
                    <input type="text" placeholder="Account name: " name="name" onChange={ this.handleChange }/>
                    <input type="text" placeholder="Password: " name="password" onChange={ this.handleChange }/>
                </React.Fragment>    
                )
            }/>
        )
    }
}