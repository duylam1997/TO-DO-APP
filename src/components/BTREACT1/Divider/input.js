import React,{Component} from "react";

export default class Divider extends Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        const {width} = this.props;
        return(
            <hr style={{width: width, height: '2px', color: 'black', backgroundColor: 'black'}} />
        )
    }
}