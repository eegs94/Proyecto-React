import React from "react";

export function TodoItem({ todo, cambiarEstado }) {
    const { id, task, fecha, detalle, completed } = todo;

    const fnCambiarEstado = () => {
        cambiarEstado(id);
    };

  return (
    <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
            <input
                type="checkbox"
                onChange={fnCambiarEstado}
                checked={completed}
                className="form-check-input me-2"
            />
            <strong>{task}</strong>
            <span className="text-muted">{"Creado el: "+fecha}</span>
        </div>
        <div className="mt-1"><i>{detalle}</i></div>
    </li>
  );
}
