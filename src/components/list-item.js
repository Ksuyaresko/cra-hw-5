import React from 'react'

export default class ListItem extends React.Component {
    state = {
        clicked: 0
    }
    handleClick = () => {
        this.setState({
            clicked: this.state.clicked + 1
        })
    }
    render() {
        const {item} = this.props
        return(
            <div onClick={this.handleClick}>
                {item.value} - clicked: {this.state.clicked}
            </div>
        )
    }
}