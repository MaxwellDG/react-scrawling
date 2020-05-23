import React from 'react'
import { Route } from 'react-router-dom'

import Login from '../components/login'
import SignUp from '../components/signup'
import Posts from '../components/posts'
import withContext from '../context/context'
import PrivateRoute from '../utility/privateRoute'


const loginWithContext = withContext(Login)
const signUpWithContext = withContext(SignUp)
const postsWithContext = withContext(Posts)

class SectionAccount extends React.Component{

    render(){
        if(this.props.context.isLoggedIn !== null){
            return(
                <div id="postsBlock">
                    <h1 className="accountHeaders">Posts</h1>
                    <PrivateRoute component= { postsWithContext }/> 
                </div>
            )
        } else {
            return(
                <div>
                    <div id="loginBlock">
                        <h1 className="accountHeaders">Login</h1>
                        <Route component={ loginWithContext } />
                    </div>

                    <div id="signUpBlock">
                        <h1 className="accountHeaders">Create Account</h1>
                        <p id="accountDisclaimer">*No phone number, no postal code, no need to know your mother's maiden name<br></br>
                        An account will simply allow you to post your jokes and review feedback numbers. An email will enable lost-password retreival</p>
                        <Route component={ signUpWithContext } />
                    </div>
                </div>
        )
    }
}
}

export default SectionAccount