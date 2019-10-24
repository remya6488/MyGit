<%-- 
    Document   : layout
    Created on : Oct 18, 2019, 3:07:35 PM
    Author     : REMYA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://struts.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	
        <title>JSP Page</title>
        <style>
            html,body {border: 1px solid red;overflow: hidden;}
            
            div, body, html {border : 0px solid red; margin: 0px;padding: 0px;}
            .header {height: 10vh; background-color: transparent;}
            .content {height: 77vh; background-color: #fff; border : 1px solid #31a789;overflow: auto; padding: 25px 50px;}
            .footer {height: 8vh; background-color: transparent;}
            .main {
                padding: 25px 50px;
                margin: 25px 50px;
                margin: 0px 0px;
                height: 100%;
                background-color: #edf7fb;
                overflow: auto;
            }
            html{
                background-image: linear-gradient(to bottom right,#a1dbf5,#f0f9fd, #a1dbf5);
                background-repeat: no-repeat;
                height: 100%;
            }
            body{
                background-color: transparent !important;
            }
            table {background-color: #fff !important;}
            .headline {
                color: #5b96b1;
                font-size: 15pt;
                font-family: serif;
            }
            .alert {text-align: center;}
        </style>
    </head>
    <body>
       <div class="bg">
            <div class="header"><tiles:insert  attribute="header"></tiles:insert></div>
            <div class="content "><tiles:insert attribute="content"></tiles:insert></div>
            <div class="footer"><tiles:insert  attribute="footer"></tiles:insert></div>
        </div>
    </body>
</html>
