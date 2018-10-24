import React, { Component } from "react";

import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Form
} from "react-bootstrap";
import axios from "axios";
class PostAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      title: '',
      description: "",
      price: 0,
      quantity: 3,

    };
  }
  fileHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
    // console.log(e.target.files[0]);
  };

  handleSubmit = e => {
    // uploading image logic
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    fd. append("title",this.state.title)
    fd. append("quantity",this.state.quantity)
    fd. append("price",this.state.price);
    fd. append("description",this.state.description);
    axios.post("URL", fd).then(res => {
      console.log(res);
    });


  };
  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    return (
      <Form>
        <FieldGroup
          id="formControlsTitle"
          type="text"
          label="Title"
          placeholder="Enter Title"
          autoFocus
          
          // value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
        />

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Category</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="Food">Food</option>
            <option value="Medicine">Medicine</option>
            <option value="Other">Other</option>
          </FormControl>
        </FormGroup>
        <FieldGroup
          id="formControlsQuantity"
          type="number"
          label="Quantity"
          min={1}
          max={10}
          defaultValue={3}
          // onChange={e => this.setState({ quantity: e.target.value })}
        />
        <FieldGroup
          id="formControlsPrice"
          type="text"
          label="Price per Item"
          placeholder="Enter Price"
          autoFocus
          // value={this.state.title}
          onChange={e => this.setState({ price: e.target.value })}
        />
        <FormGroup
          controlId="formControlsDescrp"
          // value={this.state.title}
          // onChange={this.handleDescChange}

        >
          <ControlLabel>Description</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" onChange={e => this.setState({ description: e.target.value })} />
        </FormGroup>
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="Image"
          // required
          onChange={this.fileHandler}
        />

        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
export default PostAd;
