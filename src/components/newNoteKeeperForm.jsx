import React from "react";
import { Button, Form, FormGroup, Input, Label, Toast } from "reactstrap";
import agent from "../agent";


class NewNoteKeeperForm extends React.Component {
  state = {
    title: this.props.title,
    description :this.props.description
}

  componentDidMount() {
    if (this.props.note) {
      const {  title, description } = this.props.note;
      this.setState({  title, description });
    }
  }

  onChange = e => {
    if(e.target.name =="title" ){
//checking the length of title value to be between 0 and 50 because we have implemented this condition in BE.
      if(e.target.value.length >=0 && e.target.value.length <= 50){
        this.setState({ [e.target.name]: e.target.value });
      }
      else{
        //  alert message will be display.
        alert(" Title value should be between 0 and 50")
      }
    }
    else{
      // here we are setting the state value corresponding to their name.
      this.setState({ [e.target.name]: e.target.value });
    }
    
  };
// it will create new note.
  createNoteKeeper = () => {
    agent.Notes.createNote(this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
    window.location.reload(true) // it will reload the window.
  };
  
//it will update the existing note.
  editNoteKeeper = pk => {
    let list = {'title':this.state.title, 'description':this.state.description}
    if(this.state.title || this.state.description){
      agent.Notes.updateNote(pk,this.state)
    }
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };
  render() {
    return (
      // Form will open with the fields title, description and submit button and all fields are required fields.
      // Submit button will call function as : when we have filled data already in form that is the 
      // form is prefilled then we call editNoteKeeper function with pk otherwise createNoteKeeper function will call.

      <Form > 
        <FormGroup>
          <Label for="name">Title:</Label>
          <Input
            required
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)} // this will keep our form prefilled when we click on edit button.
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            required
            type="textarea"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)} // this will keep our form prefilled when we click on edit button.
          />
        </FormGroup> 
        <Button color="success" onClick={this.props.note ? this.editNoteKeeper(this.props.pk) : this.createNoteKeeper}>Submit</Button>
      </Form>
    );
  }
}

export default NewNoteKeeperForm;