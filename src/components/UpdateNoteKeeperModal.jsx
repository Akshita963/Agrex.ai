import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewNoteKeeperForm from "./newNoteKeeperForm";

class UpdateNoteKeeperModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {

    return (
      <Fragment>
      <Button color="success" onClick={this.toggle}>
        Edit
      </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Note</ModalHeader>

          <ModalBody>
            <NewNoteKeeperForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              notekeeper={this.props.note}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default UpdateNoteKeeperModal;
