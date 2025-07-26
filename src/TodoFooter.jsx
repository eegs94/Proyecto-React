import React from "react";

export function TodoFooter({ total, completadas }) {
    if (total === 0) return (
        <footer className="todo-footer mt-5">
            <div className="container d-flex justify-content-center">
                <span className="alert alert-success">
                    No tienes tareas pendientes!
                </span>
            </div>
        </footer>
    );
    return (
        <footer className="todo-footer mt-5">
            <div className="container d-flex justify-content-center">
                <span className="alert alert-info">
                    Tareas completadas {completadas} de un total de {total}
                </span>
            </div>
        </footer>
    );
}
