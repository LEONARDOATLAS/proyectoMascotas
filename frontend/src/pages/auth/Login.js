import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import APIInvoke from "../../utils/APIInvoke";

const Login = () => {
  // para redireccionar el complente de home
  const navegate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const iniciarSeccion = async () => {
    if (password.length < 6) {
      const msg = "El password debe ser mínimo de 6 caracteres ";
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: msg,
      }); 
    } else {
      const data = {
        email: usuario.email,
        password: usuario.password
      }

      const response = await APIInvoke.invokePOST('/api/auth', data);
      const mensaje = response.msg;

      if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta'){
        const msg = "No es posible la autenticacion revisar los datos ..."
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: msg,
        }); 
      }else {
        // token de acceso al pagina
        const jwt = response.token;

        // Gaurdamos en el localStore
        localStorage.setItem('token', jwt);

        // rediccionamos a la pagina home
        navegate("/")
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSeccion();
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Iniciar</b>Sesión
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              Bienvenido, Ingrese sus credenciales
            </p>
            <form onSubmit={onSubmit}>
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

              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <Link to={"/crearcuenta"} className="btn btn-block btn-danger">
                  Crear Cuenta
                </Link>
              </div>
              <div>
              <Link to={"/"} className="btn btn-block btn-secondary">
                  Inicio
                </Link>
              </div>
            </form>

            <p>Tienda de moscatas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
