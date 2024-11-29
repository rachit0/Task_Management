import React, { Component } from "react";
 import { Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    FormGroup,
    Input,
    Label
     } from 'reactstrap';

class CustomModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    handleCheck = e =>{
        let {name,value} = e.target;
        if(e.target.type === "checkbox"){
            value = e.target.checked;
        }
        const activItem = {...this.state.activeItem,[name]: value};
        this.setState({activItem})
    };

    render(){
        const {toggle, onSave} = this.props;
        return(
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Item</ModalHeader>
                <ModalBody>
                    <form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <input
                            type="text"
                            name="title"
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder="Enter Task Title" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <input
                            type="text"
                            name="description"
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder="Enter Task Description" 
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label for="completed">
                            <input
                            type="checkbox"
                            name="completed"
                            value={this.state.activeItem.completed}
                            onChange={this.handleChange}
                            placeholder="Enter Task Title" 
                            />
                            Completed
                            </Label>
                        </FormGroup>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button color='success' onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default CustomModal
