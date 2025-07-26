import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
import { Fragment } from "react";
import { TodoFooter } from "./TodoFooter.jsx";
import dayjs from "dayjs";

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const taskRef = useRef();
    const detRef = useRef();

    const agregarTarea = () => {
        const task = taskRef.current.value;
        const detalle = detRef.current.value;
        const fechaCreacion = dayjs().format("DD-MM-YYYY HH:mm");

    if (task === "" || detalle === "") return;

    setTodos((prevTodos) => {
        const newTask = {
            id: uuid(),
            task: task,
            fecha: fechaCreacion,
            detalle: detalle,
            completed: false,
        };
        return [...prevTodos, newTask];
    });

    taskRef.current.value = "";
    detRef.current.value = "";
    };

    const cantidadTareas = () => todos.length;
    const tareasCompletadas = () => todos.filter((todo) => todo.completed).length;

    const cambiarEstadoTarea = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const eliminarTareasCompletadas = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

return (
    <Fragment>
        <h1><strong><i>Listado de Tareas</i></strong></h1>
        <h4>Ten tus notas en orden, ve sus detalles y completalas cuando quieras!</h4>
            <div className="row">
                <div className="col input-group mt-4 mb-4">
                    <div className="d-flex flex-column align-items-start me-3">
                        <button onClick={agregarTarea} className="btn btn-success mb-2">
                            <img src="/clipboard2-plus-fill.svg" class="img-fluid" alt="guardar" />
                        </button>
                        <button onClick={eliminarTareasCompletadas} className="btn btn-danger">
                            <img src="/clipboard2-minus-fill.svg" class="text-center" alt="eliminar"/>
                        </button>
                    </div>
                    <div className="flex-grow-1">
                        <input
                            className="form-control mb-2"
                            ref={taskRef}
                            placeholder="Nombre de la Tarea"
                            type="text"
                        />
                        <textarea
                            className="form-control"
                            ref={detRef}
                            placeholder="Detalles de la Tarea"
                            rows="3"
                        ></textarea>
                    </div>
                </div>
                <div className="col">
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
                        ))}
                    </ul>
                </div>
            </div>
        <TodoFooter total={cantidadTareas()} completadas={tareasCompletadas()} />
    </Fragment>
  );
}
