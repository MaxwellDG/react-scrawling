import React from 'react'
import VoteButton from '../components/voteButton'
import AppContext from '../context/context'

import axios from 'axios'

export default class SectionBrowse extends React.Component{

    constructor(){
        super()
        this.state = {
            upcomingJokeSet: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(responseData => {
          let JSONData = responseData.data
          let testString = JSONData.title
          this.setState({
            upcomingJokeSet: [testString]
          })
        })
        .catch(error => console.log("Error was: " + error.toString()))
      }

    getNextJoke(){
        this.setState( prevState => {
            let newJokeIndex = prevState.data.indexOf(prevState.currentJoke) + 1
            return{
                    data: this.props.data,
                    currentJoke: prevState.data[newJokeIndex]
                }
            }
        )
    }

    render(){
        return(
                <div>
                    <p id="theJoke">{ this.state.upcomingJokeSet[0]  }</p> 
                    <div id="voteButtonContainer"> 
                        <VoteButton image='images/up-arrow.png' nextJoke={ this.getNextJoke.bind(this) }/>
                        <VoteButton image='images/up-arrow.png' nextJoke={ this.getNextJoke.bind(this) }/>
                        <VoteButton image='images/up-arrow.png' nextJoke={ this.getNextJoke.bind(this) }/>
                        <VoteButton image='images/up-arrow.png' nextJoke={ this.getNextJoke.bind(this) }/>
                    </div>
                </div>
            )
}

            // Go find the fancy dancy way (mapping arrays) to upload all 4 buttons. I think it was like...from each object in this datalist 
            // (You'll make later with their pressed/notpressed images) make a VoteButton with xyz attributes 

            // Obv the joke is incorrect. This is just for testing purposes since youre doing database data fetching later 
}