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
    
  console.log(this.props.pk)
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

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewNoteKeeperForm
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
