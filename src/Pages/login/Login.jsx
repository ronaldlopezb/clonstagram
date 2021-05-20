import React from 'react'
import FormularioLogin from '../../Components/Login/FormularioLogin/FormularioLogin'

import './Login.css';

const Login = () => {
    return (
        <>
           <div className="contenedorLogin">
                <div className="Logo">
                    <img 
                        className = "logo"
                        src ="https://logos-marcas.com/wp-content/uploads/2020/04/Instagram-Logotipo-2016-Presente.png"
                        alt="Clonstagram"
                    />
                </div>

                <div className="Form">
                    <FormularioLogin/>
                </div> 
        </div>
        </>
    )
}

export default Login
