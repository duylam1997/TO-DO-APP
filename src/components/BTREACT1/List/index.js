import React, {Component} from "react";
import './style.css'
import ListItem from "./ListItem";

export default class List extends Component{
    render(){
        return(
            <div className="list-wrapper">
                <ListItem content='This is a first task!'/>
                <ListItem content='This is a first task!'/>
                <ListItem content='This is a first task!'/>
                <ListItem content='This is a first task!'/>
                <ListItem content='This is a first task!'/>
            </div>
        )
    }
}