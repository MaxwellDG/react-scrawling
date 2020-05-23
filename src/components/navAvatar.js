import React from 'react'
import PropTypes from 'prop-types'

class Avatar extends React.Component{

    static propTypes = {
        image: PropTypes.any
    }

    render(){
        const { image } = this.props

        return(
            <img id="avatar" src={ image } alt="avatar_image"/>
        ); 
    }
}

export default Avatar