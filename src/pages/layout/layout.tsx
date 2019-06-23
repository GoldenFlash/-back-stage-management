import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';
import Nav1 from "../nav1/nav"
import DoutuList from "../doutu/list"
import './layout.css';
const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component<RouteComponentProps> {
    constructor(props:any){
        super(props)
        console.log(props)
        // this.props = props
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handelMenuClick=(key:string)=>{
        // console.log(this.props.history)
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout className="layout">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item 
                            onClick={() => { this.handelMenuClick("doutuList")}} key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route exact path="/doutuList" component={DoutuList} />
                            <Route exact path="/add" component={Nav1} />
                           
                        </Switch>
          </Content>
                </Layout>
            </Layout>
        );
    }
}

