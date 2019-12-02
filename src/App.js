import React from 'react';
import './App.css';
import uuid from 'uuid'
import Modal from "./components/modal";

const initialList = [
    {
        id: uuid(),
        value: 'index 0'
    }, {
        id: uuid(),
        value: 'index 1'
    }, {
        id: uuid(),
        value: 'index 2'
    }, {
        id: uuid(),
        value: 'index 3'
    }
]

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false
        }
        this.modalBtnRef = React.createRef()
    }
    showModal = () => {
        if(!this.state.isModalOpen) {
            this.setState({
                isModalOpen: true
            })
        }
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

  render() {
    return (
        <div className="wrapper">
            <button
                onClick={this.showModal} ref={this.modalBtnRef}>Show list in modal</button>
            {this.state.isModalOpen &&
            <Modal
                modalBtnRef={this.modalBtnRef}
                className="modal"
                initialList={initialList}
                closeModal={this.closeModal}/>
            }
        </div>
    );
  }
}

export default App;
