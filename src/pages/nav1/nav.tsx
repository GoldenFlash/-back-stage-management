import * as React from "react"
import { Button, message } from 'antd';
import api from "../../api/api"
import "./nav.css"
export default class Nav extends React.Component{
    componentDidMount(){
        // this.save()
    }
    state={
        content:"",
        title:"",
        image:""
    }
    save=()=>{
        let url:string = "images/saveImage"
        let content:string = this.state.content 
        let title = this.state.title
        let image = this.state.image
        let params:object = {
            title: title,
            imageUrl: image,
            content: JSON.stringify(content)
        }
        api.post(url,params).then(res=>{
            console.log("res",res)
            if (!res.err){
                message.success(res.message);
            }else{
                message.error(res.message);

            }
        }).catch(err=>{

        })
    }
    titleInput=(e:any)=>{
        this.setState({
            title: e.target.value
        })
    }
    imageUrlInput=(e:any)=>{
        this.setState({
            image: e.target.value
        })
    }

    contentInput=(e:any)=>{
        console.log(e.target.value)
        this.setState({
            content: e.target.value
        })
    }
    render(){
        return(
            <div>
                <div>
                    <span>标题</span>
                    <input onInput={this.titleInput} type="text"/>
                </div>
                <div>
                    <span>图片地址</span>
                    <input onInput={this.imageUrlInput} type="text"/>
                </div>
                <div className="contentInput">
                    <span>内容</span>
                    <textarea onInput={this.contentInput} name="" id="" cols={30} rows={10}></textarea>
                </div>
                
                <div className="button">  
                    <Button onClick={() => {
                        this.save()
                    }}>保存</Button>
                </div>
            </div>
        )
    }
}