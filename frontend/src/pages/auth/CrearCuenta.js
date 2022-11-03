import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import APIInvoke from "../../utils/APIInvoke";

const CrearCuenta = () =>{
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    });

    const {nombre, email, password, confirmar} = usuario;
  

    const onChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // para colocar el cursor al inicio
    useEffect( () =>{
        document.getElementById("nombre").focus();

    }, [])  

    const crearCuenta = async () => {

      if (password !== confirmar ){
        const msg = "Las Contraseñas son diferentes por favor revisar...";
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: msg,
        });      
      }else if (password.length < 6) {
        const msg = "La contraseña debe ser al menos de 6 caracteres ";
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: msg,
        });
        
      } else{
        const data = {
          nombre: usuario.nombre,
          email: usuario.email,
          password: usuario.password
        }
        const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
        const mensaje = response.status;
        console.log(mensaje)

        if (mensaje !== 'El usuario ya existe'){
          const status = "Usuario Guardado";

          Swal.fire({
            icon: 'success',
            title: 'Confirmación',
            text: status,
          });   
            setUsuario({
              nombre: '',
              email: '',
              password: '',
              confirmar: '',
            });
        }
      }
    }

    const onSubmit = (e) => {
      e.preventDefault();
      crearCuenta();
    }

    return (
        <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}>
              <b>Crear Cuenta</b>
            </Link>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Ingrese los datos de la cuenta:</p>

              <form onSubmit={onSubmit}>
                
              <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>               
                
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
  

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar Contraseña"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
  
                <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                   Crear Cuenta
                </button>
                <Link to={"/login"} className="btn btn-block btn-secondary">
                   Regresar Login
                </Link>
              </div>
  
              </form>
  
              <p>Tienda de moscatas</p>
            </div>
  
          </div>
        </div>
      </div>
    );
}
export default CrearCuenta;