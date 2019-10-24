/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package services;

import com.sun.xml.xsom.impl.scd.Iterators;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import models.User;

/**
 *
 * @author REMYA
 */
public class UserService {
    
    public Connection getDBConnection() throws SQLException{
        Connection conn;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test?autoreconnect=true&useSSL=false&allowPublicKeyRetrieval=true", "root", "root@123");
        } catch (ClassNotFoundException e) {
            System.err.println("Connection failed," + e.getMessage());
            conn = null;
        }
        
        return conn;
    }
    
    public int authenticateUser(String uname, String pwd) throws SQLException{
        int userid = 0;
        Connection conn = getDBConnection();
        PreparedStatement sql = conn.prepareStatement("SELECT UserId FROM Users WHERE Username=? AND Pwd=?");
        sql.setString(1, uname);
        sql.setString(2, pwd);
        try {
            ResultSet rs = sql.executeQuery();
            if (rs.next()){
            userid = rs.getInt("UserId");
            }
        }
        catch (SQLException ex){
            Logger.getLogger(UserService.class.getName()).log(Level.SEVERE, null, ex);
            System.err.println("Error !! " + ex);
        }
        
        return userid;
    }
    
    public List<User> getAllUsers() throws SQLException {
        
        List<User> users = new ArrayList();
        Connection conn = getDBConnection();
        PreparedStatement sql = conn.prepareStatement("SELECT * FROM Users");
        ResultSet rs = sql.executeQuery();
        while (rs.next()){
            User u = new User();
            u.setUserid(rs.getInt("UserId"));
            u.setName(rs.getString("UserName"));
            u.setName(rs.getString("Pwd"));
            u.setEmail(rs.getString("Mailid"));
            users.add(u);
        }
        return users;
    }
    
    public User getUserById(int userid) throws SQLException {
        
        User u = null;
        Connection conn = getDBConnection();
        PreparedStatement ps = conn.prepareStatement("SELECT * FROM Users WHERE UserId=?");
        ResultSet rs = ps.executeQuery();
        if (rs.next()){
            u.setUserid(rs.getInt("UserId"));
            u.setName(rs.getString("Username"));
            u.setPwd(rs.getString("Password"));
            u.setEmail(rs.getString("Email"));
        }
        return u;
    }
    
    public boolean checkUserExists(User user) throws SQLException{
        Connection conn = getDBConnection();
        PreparedStatement ps = conn.prepareStatement("SELECT * FROM Users WHERE UPPER(Username)=? OR MailId = ?");
        ps.setString(1, user.getName());
        ps.setString(2, user.getEmail());
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            return true;
        }
        else {
            return false;
        }
            
            
    }
    
    public User addUser(User user) throws SQLException{
        Connection conn = getDBConnection();
        if (conn != null){
            
                PreparedStatement sql = conn.prepareStatement("INSERT INTO Users(Username, pwd, mailid) VALUES (?,?,?)");
                sql.setString(1, user.getName());
                sql.setString(2, user.getPwd());
                sql.setString(3, user.getEmail());
            try {    
                int insderted = sql.executeUpdate();
            } catch (SQLException e) {
                System.err.println("addUser() failed," + e.getMessage());
                user = null;
            }
        }
        return user;
    }
    
    public int UpdateUser(User user) throws SQLException{
        int rows = 0;
        Connection conn = getDBConnection();
        PreparedStatement ps = conn.prepareStatement("Update Users SET Password=?, Email=?");
        ps.setString(1, user.getPwd());
        ps.setString(2, user.getEmail());
        rows = ps.executeUpdate();
        return rows;
    }
    
    public int deleteuser (int userid) throws SQLException{
        
        int rows = 0;
        Connection conn = getDBConnection();
        PreparedStatement ps = conn.prepareStatement("Delete FROM Users WHERE UserId=?");
        ps.setInt(1,userid);
        rows = ps.executeUpdate();
        return rows;
    }
    
}
