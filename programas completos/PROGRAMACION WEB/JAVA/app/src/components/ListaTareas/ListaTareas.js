import React, { state, setState } from 'react'

class ListaTareas extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Lista de tareas</h1>
                <ul>
                    {this.props.tareas.map((tarea, index) => <li key={index}>{tarea}</li>)}
                </ul>
            </div>
        )
    }
}

export default ListaTareas