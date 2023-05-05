import React from "react";
import { Fragment, useState } from "react";

const Formulario = () => {
    return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row">
        <div className="col-md-3">
          <label className="form-label">Ingresa tu e-mail</label>
          <input
            input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            onChange={ev=>setEmail(ev.target.value)}
            ></input>
        </div>
        <div className="col-md-3">
          <label className="form-label">Ingresa tu password</label>
          <input
            input
            type="password"
            className="form-control"
            placeholder="pass"
            name="pass"
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Inicia Sesión
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default Formulario;
