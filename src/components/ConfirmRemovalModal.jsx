import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import agent from "../agent";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteNote = pk => {
    agent.Notes.deleteNote(pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
    window.location.reload(true)
  };

  render() {
    return (
      // here firstly on clicking the delete button a modal will open to ask whether you want to delete the note or not.
      // if yes then delete note will call with pk where we call our delete our api from agent.
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Delete
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really wanna delete the note?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" 
            color="primary" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteNote(this.props.pk)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;