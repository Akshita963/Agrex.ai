import React from "react";
import { Button, Form, FormGroup, Input, Label, Toast } from "reactstrap";
import agent from "../agent";


class NewNoteKeeperForm extends React.Component {
  state = {
    title: "",
    description :""
}

  componentDidMount() {
    if (this.props.note) {
      const {  title, description } = this.props.note;
      this.setState({  title, description });
    }
  }

  onChange = e => {
    if(e.target.name =="title" ){
      if(e.target.value.length >=0 && e.target.value.length <= 50){
        this.setState({ [e.target.name]: e.target.value });
      }
      else{
        alert(" Title value should be between 0 and 50")
      }
    }
    else{
      this.setState({ [e.target.name]: e.target.value });
    }
    
  };

  createNoteKeeper = () => {
    agent.Notes.createNote(this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
    window.location.reload(true)
  };

  editNoteKeeper = pk => {
    console.log(typeof(pk))
    let list = {'title':this.props.note.title, 'description':this.props.note.description}
    console.log(list)
    agent.Notes.updateNote(this.props.pk,list).then(() => {
      // this.props.resetState();
      // this.props.toggle();
    }
    );
    // window.location.reload(true)
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };
  render() {
    return (
      <Form >
        <FormGroup>
          <Label for="name">Title:</Label>
          <Input
            required
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            required
            type="textarea"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <Button color="success" onClick={this.props.note ? this.editNoteKeeper(this.props.pk) : this.createNoteKeeper}>Submit</Button>
      </Form>
    );
  }
}

export default NewNoteKeeperForm;