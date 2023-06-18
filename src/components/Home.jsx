import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NoteKeeperList from "./NoteKeeperList";
import NewNoteKeeperModal from "./NewNoteKeeperModal";
import agent from "../agent";
import axios from "axios";


class Home extends Component {
  state = {
    notes: [],
  };

    componentDidMount() {
      this.resetState();
    }

    getNotes = () => {
      agent.Notes.allNotes().then(res => this.setState({ notes: res.data }));
    };

    resetState = () => {
      this.getNotes();
    };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <NewNoteKeeperModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <NoteKeeperList
              notes={this.state.notes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
