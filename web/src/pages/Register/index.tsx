import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Register = () => {
    return (
    <div id="page-register">
        <div className="content">
            <header>
            <img src={logo} alt="Ecoleta" />
            </header>

            <main>
                <h1>Cadastro efetuado com sucesso :) </h1>
                <p>A Coleta Seletiva possui um papel importantíssimo para o meio ambiente seguindo o objetivo de fazer com que vários tipos de resíduos
                     sigam seu caminho para reciclagem ou destinação final ambientalmente correta.</p>
                <Link to="/">
                <span>
                    <FiArrowLeft />
                </span>
                <strong>Voltar para Home</strong>
                </Link>

            </main>

        </div>
    </div>
)
}

export default Register;