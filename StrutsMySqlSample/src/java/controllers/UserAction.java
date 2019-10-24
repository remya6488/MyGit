/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.User;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import services.UserService;

/**
 *
 * @author REMYA
 */
public class UserAction extends org.apache.struts.action.Action {

    /* forward name="success" path="" */
    private static final String LOGINSUCCESS = "LOGINSUCCESS";
    private static final String LOGINFAILED = "LOGINFAILED";
    private static final String USERLIST = "USERLIST";
    private static final String LOGGEDOUT = "LOGGEDOUT";

    /**
     * This is the action called from the Struts framework.
     *
     * @param mapping The ActionMapping used to select this instance.
     * @param form The optional ActionForm bean for this request.
     * @param request The HTTP Request we are processing.
     * @param response The HTTP Response we are processing.
     * @throws java.lang.Exception
     * @return
     */
    @Override
    public ActionForward execute(ActionMapping mapping, ActionForm form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        Logger.getLogger(UserAction.class.getName()).log(Level.INFO, "test log : " + "|" + request.getPathInfo() +"|"+ request.getQueryString());
        String action = request.getParameter("action").toString();
        String forward ="";
        
        UserService us = new UserService();
        if (action.equals("login")){
            String uname = request.getParameter("username").toString();
            String pwd = request.getParameter("password").toString();
            int userid = us.authenticateUser(uname, pwd);
            if (userid > 0){
                forward = LOGINSUCCESS;
            } else {
                request.setAttribute("response", "<div class=\"alert alert-danger\">Invalid credentials!!</div>");
                forward = LOGINFAILED;
            }
        }
        else if(action.equals("viewall")){
            
            List<User> users = new ArrayList<User>();
            users = us.getAllUsers();
            request.setAttribute("users", users);
            forward = USERLIST;
        
        } else if(action.equals("add")){
            User user = new User();
            user.setName(request.getParameter("name"));
            user.setEmail(request.getParameter("email"));
            user.setPwd(request.getParameter("pwd"));
            if (!us.checkUserExists(user)){
                if (us.addUser(user) == null) {
                        request.setAttribute("addResponse", "<div class=\"alert alert-danger\">Request failed.</div>");
                } else {
                    request.setAttribute("addResponse", "<div class=\"alert alert-success\">'"+ user.getName() +"'/'"+ user.getEmail()+"' added successfully.</div>");
                }
            }
            else {
                request.setAttribute("addResponse", "<div class=\"alert alert-danger\">Request failed. '"+ user.getName() +"'/'"+ user.getEmail()+"' already exists.</div>");
            }
            List<User>  users = us.getAllUsers();
            request.setAttribute("users", users);
            forward = USERLIST;
        
        } else if(action.equals("logout")){
            request.setAttribute("response", "<div class=\"alert alert-success\">Logged out successfully.</div>");
            forward = LOGGEDOUT;
        }
        return  mapping.findForward(forward);
    }
}
