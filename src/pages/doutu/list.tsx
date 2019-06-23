import * as React from "react"
import { Button, message } from 'antd';
import { RouteComponentProps } from "react-router-dom";
import api from "../../api/api"

// import { render } from "react-dom";
// import "./nav.css"
export default class List extends React.Component<RouteComponentProps>{
    constructor(props:any){
        super(props)
    }
    state={
        list:[]
    }
    componentDidMount(){
        this.getList()
    }
    getList(){
        api.get("/images/getList").then(res=>{
            this.setState({
                list:res.data
            })
        })
    }
    add=()=>{
        this.props.history.push("add")
    }
    public render(){
        return (
            <div>
                {this.state.list.map((item:any)=>{
                    return(
                        <div>
                            <p>{item.title}</p>
                            <img style={{width:"30px",height:"30px"}} src={item.imageUrl} alt=""/>
                        </div>
                    )
                })}
                <Button onClick={this.add}>添加</Button>
            </div>
        )
    }
}