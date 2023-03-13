import React, { state, setState } from 'react'
import ListaTareas from '../ListaTareas/ListaTareas'

class Inicio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ListaTareas tareas={['Tarea 1', 'Tarea 2', 'Tarea 3']} />
            </div>
        )
    }
}

export default Inicio