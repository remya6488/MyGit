<%-- 
    Document   : login
    Created on : Oct 16, 2019, 12:18:26 PM
    Author     : REMYA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://struts.apache.org/tags-html" prefix="html" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <title>Login</title>
        <style>
            html{
                background-image: linear-gradient(to bottom right,#a1dbf5,#f0f9fd, #a1dbf5);
                background-repeat: no-repeat;
                height: 100%;
            }
            body{
                background-color: transparent;
            }
            .login{
                margin: 10px 0px;
                border: 1px solid #f1f1f1;
            }
            .card-footer {
                display: inline-block;
                width:100%;
            }
            .d-flex{
                margin-top: 20vh;
            }
        </style>
    </head>
    <body>
        <html:form action="/user.do?action=login">
        <div class="d-flex justify-content-center">
            <div class="card mt-5 col-md-4 animated bounceInDown myForm">
                <div class="login">
                <div class="card-header"><h4>Login</h4></div>
                ${requestScope.response}
                <div class="card-body">
                    <div id="dynamic_container">
                        <div class="input-group">
                                <div class="input-group-prepend">
                                        <span class="input-group-text br-15"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" placeholder="Username" name="username" class="form-control"/>
                        </div>
                        <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                        <span class="input-group-text br-15"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="text" placeholder="Password" name="password" class="form-control"/>
                        </div>
<!--                        <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                        <span class="input-group-text br-15"><i class="fas fa-at"></i></span>
                                </div>
                                <input type="email" placeholder="Student Email" class="form-control"/>
                        </div>-->
                    </div>
                </div>

                <div class="card-footer">
                    <input type="submit" class="btn btn-success btn-sm float-right submit_btn" value="submit"/> 
                </div>
                </div>
            </div>
	</div>
        </html:form>
    </body>
</html>
