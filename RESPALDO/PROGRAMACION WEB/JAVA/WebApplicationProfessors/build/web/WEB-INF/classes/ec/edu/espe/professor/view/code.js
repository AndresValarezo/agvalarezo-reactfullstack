
let listar_productos = async() => {
    let productos;
    await axios({
            method: 'get',
            url: 'http://192.168.137.91:8080/WebApplicationProfessors/webresources/professors',
            responseType: 'json'
        }).then(function(res) {
            productos = res.data.productos;
        })
        .catch(function(err) {
            console.log(err);
        });
    return productos;
};
  const tbody = document.querySelector('#tbl-productos tbody');
  let mostrar_datos = async() => {
  let productos = await listar_productos();
            tbody.innerHTML = '';
            for (let i = 0; i < productos.length() ; i++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = productos[i]['Id'];
                fila.insertCell().innerHTML = productos[i]['Name'];
                fila.insertCell().innerHTML = productos[i]['Career'];
                fila.insertCell().innerHTML = productos[i]['Title'];
                fila.insertCell().innerHTML = productos[i]['Age'];
                fila.insertCell().innerHTML = productos[i]['Salary'];
                fila.insertCell().innerHTML = productos[i]['YearsTeaching'];
                fila.insertCell().innerHTML = productos[i]['Birthday'];
                }
                };
 mostrar_datos();
