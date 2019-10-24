<%-- 
    Document   : header
    Created on : Oct 18, 2019, 2:14:28 PM
    Author     : REMYA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <title>Top</title>
    </head>
    <body >
        <html:link action="/logout?action=logout"><i class="fas fa-sign-out-alt" style="float:right;margin: 10px; cursor:pointer; " title="Logout"></i></html:link>
        
        <ul class="nav justify-content-center" style="padding-top: 20px;">
            <li class="nav-item">
              <html:link action="/home" styleClass="nav-link" >Home</html:link>
            </li>
            <li class="nav-item">
              <html:link action="/contacts" styleClass="nav-link" >Contacts</html:link>
            </li>
            <li class="nav-item">
                <html:link action="/users.do?action=viewall" styleClass="nav-link" >Users</html:link>
            </li>
<!--            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>-->
        </ul>
    </body>
</html>
