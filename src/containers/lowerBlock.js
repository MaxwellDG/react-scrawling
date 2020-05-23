import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SectionBrowse from './sectionBrowse';
import SectionAbout from './sectionAbout'
import SectionAccount from './sectionAccount'
import Section404 from '../components/section404'
import withContext from '../context/context'
import AppContext from '../context/context'


class LowerBlock extends React.Component{

    render(){
        const sectionBrowseWithContext = withContext(SectionBrowse)
        const sectionAccountWithContext = withContext(SectionAccount)


        return(
            <div id="lowerBlock">
                <Switch>
                    <Route exact path='/' component={ sectionBrowseWithContext }/>
                    <Route exact path='/account' component={ sectionAccountWithContext }/>
                    <Route exact path='/about' render={ () => <SectionAbout />}/>
                    <Route component={ Section404 }/>
                </Switch>
            </div>
        )
    }
}

export default LowerBlock

// Treehouse: "Using URL Parameters" for when you want to have a customized greeting "Hello, {userName}" for a logged in account page.
// Specifically, use dynamic data to change the URL. The URL now has a parameter that can be used to customize the UI.

// TODO: You WILL have problems because Webpack has not been successfully integrated. You'll have to watch some webpack tutorials on youtube. NOT that guy from before.