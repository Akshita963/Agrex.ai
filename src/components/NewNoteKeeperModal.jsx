import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewNoteKeeperForm from "./newNoteKeeperForm";

class NewNoteKeeperModal extends Component {
  state = {
    modal: false,
  };
  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {
    
    const create = this.props.create;
    var title = "Edit Note";
    var button = (
      <Button color="success" onClick={this.toggle}>
        Edit
      </Button>
    );
    if (create) {
      title = "Creating New Note";

      button = (
        <Button
          color="success"
          onClick={this.toggle}
          style={{ minWidth: "200px", float: "right", color: "white" }}
        >
          Create New
        </Button>
      );
    }

    //  Here if we are creating a new note then accordingly that title (Modal header) will be there but with same modal.

    // modal body will be coming from NewNoteKeeperForm that is called below
    
    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewNoteKeeperForm // resetState, toggle, notes, pk are passed as prop from here to newNoteKeeperForm.
              resetState={this.props.resetState}
              toggle={this.toggle}
              note={this.props.notes}
              pk = {this.props.pk}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewNoteKeeperModal;
