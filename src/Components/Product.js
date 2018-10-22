import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { Link } from 'react-router-dom';
import { fakeData } from './HomeBasic';

class Product extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const {id} = this.props.match.params;
    console.log(id);
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          
        </Button>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
        {fakeData.map((product, index) => {
          if(product.id == id) {
            return <h1>{product.name}</h1>
          }
        })}
      </div>
    );
  }
}


export default Product;
