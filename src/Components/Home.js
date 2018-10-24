import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
// import Search from "./Search";
// import Signup from "./Signup";
// import ImageSlider from "./ImageSlider";
import GoogleApiWrapper from "./Location";
// import Cards from "./Cards";
import Routes from "../Routes";
// import PostAd from '../Containers/PostAd';
// import Login from "./Login";
import { Input } from "antd";
const {  Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class Home extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>
                <Link to="/Home">Home</Link>
              </span>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item> */}
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="pie-chart" />
                  <span>Food</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/foods">Snacks</Link>
              </Menu.Item>
              <Menu.Item key="3">Beverages</Menu.Item>
              <Menu.Item key="4">HomeMade</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Medicine</span>
                </span>
              }
            >
              <Menu.Item key="5"><Link to="">Emergency</Link></Menu.Item>
              <Menu.Item key="6"><Link to="">Vitamin &amp; Supplements</Link></Menu.Item>
            </SubMenu>
            {/* <SubMenu
              key="sub3"
              title={<span><Icon type="user" /><span>Misc</span></span>}
            > */}
            <Menu.Item key="7">
              {" "}
              <Icon type="file" />
              <span><Link to="">Misc</Link></span>
            </Menu.Item>
            {/* <Menu.Item key="8">Bill</Menu.Item>
              <Menu.Item key="9">Alex</Menu.Item> */}
            {/* </SubMenu> */}
            <Menu.Item key="10">
              <Icon type="file" />
              <span><Link to="/ReportUs">Report Us</Link></span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="home" />
              <span>
                <Link to="/Login">Login</Link>
              </span>
            </Menu.Item>
            {/* <Menu.Item key="12">
              <Icon type="home" />
              <span>
                <Link to="/PostAd">Ad</Link>
              </span>
            </Menu.Item> */}
            <Menu.Item key="13">
              <Icon type="home" />
              <span>
                <Link to="/Signup">Signup</Link>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          {/* <Location /> */}
          {/* <Search style={{ background: "#fff", padding: 0, marginLeft: 200 }} /> */}
          <span >
            <Search style={{ padding: 24, width: 250,float:'left'}}
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </span>
          <span><GoogleApiWrapper/></span>
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }} /> */}
            <div style={{ padding: 24, background: "#fff" }}>
              {/* <ImageSlider/> */}
              <Routes />
              {/* <Signup /> */}
              {/* <PostAd /> */}
              {/* <Login /> */}
            </div>
            {/* <div style={{ padding: 24, background: "#fff" }}>
               
            </div> */}
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default Home;
