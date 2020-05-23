import React from 'react'

export default class Posts extends React.Component{

    render(){
        return( 
            <div>
                <p>{ `Welcome ${this.props.context.isLoggedIn.name}` }</p>
                <React.Fragment>
                    <button onClick={ this.props.context.actions.logout } > Sign Out </button>
                </React.Fragment>
            </div>
            // complicated shit. do this a lot later
        )
    }


}