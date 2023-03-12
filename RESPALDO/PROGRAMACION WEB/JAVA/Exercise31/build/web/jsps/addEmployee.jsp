<%-- 
    Document   : chickenfarm
    Created on : 24-nov-2021, 12:34:47
    Author     : Elkin Vera
--%>

<%@page import="ec.edu.espe.ex.controller.EmployeeController"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="utils.MongoDBManager"%>
<%@page import="ec.edu.espe.ex.model.Employee"%>
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Add chicken</title>
    </head>
    <body>
        <h1>Hello Chickens from Elkin!</h1>
        This form is using -- >
        <%= request.getMethod() %>
        method
        <hr>
        <br>
        
        <% //With this I begin Java code
            
            int id;
            String name;
            String direction;
            String email;
            String lastWorks;
            Date bornDate = new Date();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            EmployeeController controller = new EmployeeController();

            Employee employee;
            
            id = Integer.parseInt(request.getParameter("employeeId"));
            name = request.getParameter("name");
            direction = request.getParameter("direction");
            email = request.getParameter("email");
            lastWorks = request.getParameter("lastWorks");
            bornDate = format.parse(request.getParameter("bornDate"));
            
            out.println("<br>ID --> " + id);
            out.println("<br>Name --> " + name);
            out.println("<br>Direction --> " + direction);
            out.println("<br>Email --> " + email);
            out.println("<br>Last works --> " + lastWorks);
            out.println("<br>Born date --> " + bornDate);
            
            employee = new Employee(id, name, direction, email, lastWorks, bornDate);
            

            controller.insertEmployee(employee);

        %>
        
        <br>
        <hr>
        <br>

    </body>
</html>
