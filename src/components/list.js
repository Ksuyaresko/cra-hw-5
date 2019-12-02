import React from 'react'
import ListItem from "./list-item";
import uuid from 'uuid'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    }

    addToTop = () => {
        this.setState({
            list: [
                {id: uuid(), value: `index ${this.state.list.length}`},
                ...this.state.list
            ]})
    }
    addToBottom = () => {
        this.setState({
            list: [
                ...this.state.list,
                {id: uuid(), value: `index ${this.state.list.length}`}
            ]})
    }
    render() {
        const {list} = this.state
            return(
                <div className='list'>
                    <div>
                        <button onClick={this.addToTop}>Add to top</button>
                        <button onClick={this.addToBottom}>Add to bottom</button>
                    </div>
                    <div>
                        {list.map( item => (
                            <ListItem key={item.id} item={item} />
                        ))}
                    </div>

                </div>
                )
    }
}