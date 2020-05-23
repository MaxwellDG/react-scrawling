import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class VoteButton extends PureComponent{

    static propTypes = {
        image: PropTypes.any,
        nextJoke: PropTypes.func
    }

    render(){
        return(
            <input className="voteButton"
                type={ "image" }
                src={ this.props.image }
                alt= "voting_button"
                onClick={ this.props.nextJoke } /*TODO: whenever this returns the js equivalent of 'IndexOutOfBoundsError' 
                (or even when it's at index 9 and then store it if you want to be a pro :P), 
                have some conditional added to the nextJoke((add a parameter here for what index it's currently at)) above (NOT HERE) that if it's 
                i = 10, you need to make another axios fetch.
                */
                />
        )
    }
}

export default VoteButton