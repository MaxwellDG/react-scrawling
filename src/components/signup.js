import React from 'react'
import MyForms from './myForms'

export default class SignUp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            password: "",
            email: "",
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
        event.preventDefault();
        const { name, password, email } = this.state
        this.props.context.APICalls.createUser({
            name,
            password, 
            email 
        }).then(errors => {
            if(errors.length){
                this.setState({ 
                    errors: errors
                 })
            } else {
                this.props.context.actions.login(name, password)
            }
        }).catch(reason => {
            console.log(reason.toString())
            this.props.history.push('/apiConnectionErr')
        })
    }

    handleCancel(event){
        // clear fields
    }

    render(){
        return(
            <MyForms errors={ this.state.errors } componentOnSubmit= { this.handleSubmit } onCancel={ this.handleCancel } elements={() => ( 
                <React.Fragment>
                    <input type="text" placeholder="Account name: " name="name" onChange={ this.handleChange }/>
                    <input type="text" placeholder="Password: " name="password" onChange={ this.handleChange }/>
                    <input type="text" placeholder="Email: (Optional) " name="email" onChange={ this.handleChange }/>
                </React.Fragment>  
                )
            }  />
        )
    }
}