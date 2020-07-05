let empleados = [{
        id: 1,
        nombre: 'Roberto'
},{
        id: 2,
        nombre: 'María'
},{
        id: 3,
        nombre: 'Juan'
        
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
        salario: 2000
    }]; 


//empleados
let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`NO existe un empleado con el Id ${id}`)
    } else {
        callback(null, empleadoDB)
    }

}


//Salarios

let getSalario = (empleado, callback) => {
    
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${ empleado.nombre}`)
    } else {
        callback( null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }

}

getEmpleado(5, (err, empleado) => {

    if (err) {
        return console.log(err)
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err)
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} $`)
    })

})


 
