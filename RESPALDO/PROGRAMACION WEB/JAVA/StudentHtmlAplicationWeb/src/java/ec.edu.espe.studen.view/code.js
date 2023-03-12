 /* global axios */

let listar_productos = async() => {
    let productos;
    await axios({
            method: 'get',
            url: 'http://localhost:8080/StudentHtmlAplicationWeb/webresources/student',
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
                fila.insertCell().innerHTML = productos[i]['LastName'];
                fila.insertCell().innerHTML = productos[i]['Career'];
                }
                };
 mostrar_datos();
