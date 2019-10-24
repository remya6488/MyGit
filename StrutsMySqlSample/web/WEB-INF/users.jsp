<%-- 
    Document   : users
    Created on : Oct 18, 2019, 6:09:50 PM
    Author     : REMYA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<%@taglib uri="http://struts.apache.org/tags-bean" prefix="bean" %>
<%@taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="jstl"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Users</title>
    </head>
    <body >
        <div class="headline">Users</div>
        <div>${requestScope.addResponse}</div>
        <html:form styleClass="form-inline" action="/adduser.do?action=add">
            
            <div class="form-group mx-sm-3  mb-2">
              <label for="name" class="sr-only">Username</label>
              <input type="text"  class="form-control" name="name" id="name" value="" placeholder="Username">
            </div>
            
            <div class="form-group mx-sm-3 mb-2">
              <label for="pwd" class="sr-only">Password</label>
              <input type="password" class="form-control"  name="pwd" id="pwd" placeholder="Password">
            </div>
            
            <div class="form-group mx-sm-3  mb-2">
              <label for="email" class="sr-only">Email</label>
              <input type="text"  class="form-control" id="email" name="email" value="" placeholder="EMail">
            </div>
            
            <html:submit  styleClass="btn btn-primary mb-2" value="Submit"></html:submit>
        </html:form>
        <div class="headline"> Using Logic:iterate and Bean </div> 
        <table class="table table-hover" >
            <thead>
            <th> Sl No </th>
            <th> User Id</th>
            <th> User name</th>
            <th> Email </th>
            </thead>
            <logic:iterate name="users" id="User">
                <tr>
                    <td></td>
                    <td><bean:write name="User" property="userid"></bean:write></td>
                    <td><bean:write name="User" property="name"></bean:write></td>
                    <td><bean:write name="User" property="email"></bean:write></td>
                </tr>
            </logic:iterate>
        </table>
        
        
        <div class="header"> Using JSTL - Foreach </div>
        <table class="table table-hover" >
            <thead>
            <th> Sl No </th>
            <th> User Id</th>
            <th> User name</th>
            <th> Email </th>
            </thead>        
            <jstl:forEach items="${users}" var="item" varStatus="i" >
            <tr>
              <td><jstl:out value="${i.index+1}" /></td>
              <td><jstl:out value="${item.userid}" /></td>
              <td><jstl:out value="${item.name}" /></td>
              <td><jstl:out value="${item.email}" /></td>
            </tr>
          </jstl:forEach>
            </table>
    </body>
</html>
