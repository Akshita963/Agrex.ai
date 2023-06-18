import React, { Component, useEffect, useState } from "react";
import NewNoteKeeperModal from "./NewNoteKeeperModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import agent from "../agent";
import './DescriptionPreview.css'

class NoteKeeperList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          notes: null
        };
      }
    componentDidMount() {
        agent.Notes.allNotes()
          .then(res => this.setState({ notes: res.data }));
      }

    
  render() {
    const {notes} = this.state;

    return (
      // table will render on home screen with classnames written in './DescriptionPreview.css' file.
      <table class="table">
        <thead>
          <tr className="text-center" >
            <th >Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!notes || notes.length <= 0 ? ( // if no notes are there then it will display a message.
            <tr>
              <td colSpan="3" align="center">
                <b>No Notes Available</b>
              </td>
            </tr>
          ) : (
            // map will run a loop to display whole notes in our table.
            // text overflow class will maintain our css as it will be converted to ellipses if overflow occur.
            // newNoteKeeperModal will correspond to edit button as create and pk is passed false as prop.
            //ConfirmRemovalModal will correspond to delete button as pk is passed as prop.
            notes.map(note => (   
              <tr align="center" key={note.id}>
                <td>{note.title}</td>
                <td class="cell-4"> 
                <span class="text-overflow">{note.description}</span></td> 
                <td>
                  <NewNoteKeeperModal
                    pk = {note.id}
                    create={false}
                    notes={note}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={note.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
}

export default NoteKeeperList;