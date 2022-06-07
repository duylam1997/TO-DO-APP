import React, {Component} from "react";
import '../Button/ButtonContent'
import ButtonContent from "../Button/ButtonContent";
import Divider from "../Divider/input";
import './style.css'

export default class ListItem extends Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return(
            <>
                <div className="list-item">
                    <div>
                        <p>{this.props.content}</p>
                    </div>
                    <div className="action">
                        <ButtonContent complete/>
                        <ButtonContent remove/>
                    </div>
                </div>
                <Divider width='99%'/>
            </>
        )
    }
}