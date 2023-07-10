import React from "react";
import ReactDom from "react-dom";

export function TodoItem({todo}){

    const {id, tarea} = todo;

    return (
        <li className="list-group-item">{tarea}<img src="https://picsum.photos/200/300"/></li>
    );
}