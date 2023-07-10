import React, {Fragment, useState, useRef} from "react";
import  ReactDOM  from "react-dom";
import {TodoItem} from "./TodoItem";

import {v4 as uuid} from "uuid";

export function TodoList(){

    //INICIALIZAR LAS VARIABLES QUE ESTARA VIENDO REACT
    //POR SI SUFREN CAMBIOS
    //todos = NOMBRE DE LA CONSTANTE
    //setTodos = METODO QUE SE VA A UTILIZAR PARA CAPTURAR MODIFICACIONES
    //useState = USARA UN STATE PARA CAPTURAR LOS ESTADOS 
    //VIGILAREMOS EL ESTADO DEL ARREGLO

    const [todos, setTodos] = useState([
        {id:1, tarea:'Vacaciones '}, {id:2, tarea:'Paseo'},
        {id:3, tarea:'Viaje'}, {id:4, tarea:'Fiestas'}
    ])

    const tareaRef = useRef();

    const agregarTarea = () =>{
        //alert("agregando tarea....");
        const tarea = tareaRef.current.value;
        //alert(tarea);
        const id = uuid();
        //alert(id);

        if(tarea === '') return;

        setTodos((prevTodos) =>{
            const nuevaTarea = {
                id:uuid(),
                tarea: tarea
            }
            // 3 PUNTITOS: TOMO EL ARREGLO NUEVO Y LO DESCOMPONGO
            //Y CON EL TETURN TOMO EL ARREGLO ANTIGUO Y LO DESCOMPONGO
            //RESULTANDO UN ARREGLO ACTUALIZADO
            tareaRef.current.value ='';
            return [...prevTodos, nuevaTarea]
       }) 
 }




    return (
                <Fragment>

                    <h1 >Mi álbum</h1>

                    <div className="input-group mt-4 mb-4">
                        <input ref={tareaRef} placeholder="Ingrese un Titulo" className="form-control" type="text"></input>
                        <button onClick={agregarTarea} className="btn btn-success ms-2">+</button>
                    </div>

                    <ul className="list-group">
                        {todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id}></TodoItem>
                        ))}
                    </ul>
                </Fragment>
    )

}