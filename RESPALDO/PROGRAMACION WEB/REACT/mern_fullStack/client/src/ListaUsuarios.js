import React from 'react';
import { Fragment } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
function listaUsuarios (){
    return(
        <Fragment>
            <div>
                <h2>Lista de Usuarios</h2>
                <UsuarioIndividual/>
            </div>
        </Fragment>
    )
}

export default listaUsuarios;