import React from 'react';
import List from "./list";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef()
    }
    componentDidMount() {
        document.body.addEventListener('click', this.closeModal)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.closeModal)
    }

    closeModal = (event) => {
        if(event.target.contains(this.props.modalBtnRef.current) && event.target.contains(this.modalRef.current)) {
            this.props.closeModal()
        }
    }

    render() {
        return (
            <div className="modal" ref={this.modalRef}>
                <List list={this.props.initialList}/>
            </div>
        );
    }
}
