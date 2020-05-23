import React, { Component } from 'react'
import jokes from '../data/jokeTestData'
import APICalls from '../utility/apiCalls'
import Cookies from 'js-cookie'

export const AppContext = React.createContext();

export class Provider extends Component{

    state = {
        isLoggedIn: Cookies.getJSON('authUser') || null,
        testingArray: jokes
    }

    constructor() {
        super();
        this.APICalls = new APICalls();
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
      }
    
      render() {
        return (
          <AppContext.Provider value={{
              APICalls: this.APICalls,
              isLoggedIn: this.state.isLoggedIn,
              testingArray: this.state.testingArray,
              actions: {
                  login: this.login,
                  logout: this.logout
              }
          }}>
            {this.props.children}
          </AppContext.Provider>  
        );
      }

      login = async (name, password) => {
        const user = await this.APICalls.getUser(name, password)
        if(user !== null){
          this.setState({
              isLoggedIn: user
          } )
          Cookies.set('authUser', JSON.stringify(this.state.isLoggedIn), {expires: 1})
        } 
      } 

      logout = async () => {
        console.log("moop")
        this.setState({
          isLoggedIn: null
        })
        Cookies.remove('authUser')
        // Learn how to use Redirect and add some shit to the Switch/case Routing in LowerBlock
      }
}



export const Consumer = AppContext.Consumer

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={ context } />}
      </AppContext.Consumer>
    );
  }
}