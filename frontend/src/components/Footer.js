import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div>
        <div className="center">
          @copy Grupo 9 del CICLO 4 UIS
        </div>
        <div>
        <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>
        Copyright © 2014-2021 <Link to={"https://adminlte.io"}>AdminLTE.io</Link>.
      </strong>
      All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
