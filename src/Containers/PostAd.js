import React, { Component } from "react";

import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Form
} from "react-bootstrap";
class PostAd extends Component {
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
          onChange={this.handleTitleChange}
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
        <FieldGroup id="formControlsQuantity" type="number" label="Quantity"  min={1}
              max={10}
              defaultValue={3}
              onChange={this.handleQuantityChange}/>
         <FieldGroup
          id="formControlsPrice"
          type="text"
          label="Price per Item"
          placeholder="Enter Price"
          autoFocus
          // value={this.state.title}
          onChange={this.handlePriceChange}
        />
        <FormGroup
          controlId="formControlsDescrp"
          // value={this.state.title}
          onChange={this.handleDescChange}
        >
          <ControlLabel>Description</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
        <FieldGroup id="formControlsFile" type="file" label="Image" />

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
export default PostAd;
