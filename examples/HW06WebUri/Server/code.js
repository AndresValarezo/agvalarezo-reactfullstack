const API_URL= 'http://jsonplaceholder.typicode.com'

fetch(API_URL+'/users')
  .then((response)=> response.json())
  .then((users)=>{
     
      const HTMLResponse= document.querySelector('#app')
      const format= '<tr><th>id</th><th>Name</th><th>UserName</th><th>Email</th><th>Address</th><th>Phone</th><th>Website</th><th>Company Name</th></tr>'
      const template= users.map(user =>'<tr>'+'<td>'+user.id+'</td>'+'<td>'+user.name+'</td>'+'<td>'+user.username+
                                       '</td>'+'<td>'+user.email+'</td>'+'<td>'+user.address.street+","+user.address.suite+","+user.address.city+'</td>'
                                       +'<td>'+user.phone+'</td>'+ '<td>'+user.website+'</td>'+ '<td>'+user.company.name+'</td>'
                                       +'</tr>');
      HTMLResponse.innerHTML ='<table>'+format+template+'</table>';
  })
