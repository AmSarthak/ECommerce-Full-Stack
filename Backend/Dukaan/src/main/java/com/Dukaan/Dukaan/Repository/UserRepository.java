package com.Dukaan.Dukaan.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.Dukaan.Dukaan.model.User;

@Repository
public class UserRepository {
   private final JdbcTemplate jdbcTemplate;

   public UserRepository(JdbcTemplate jdbcTemplate){
    this.jdbcTemplate = jdbcTemplate;
   }

   private final RowMapper<User> userRowMapper = (rs, rowNum) -> new User(
    rs.getInt("id"),
    rs.getString("userid"),
    rs.getString("password")
   );

   public User findByusername(String username) {
    String sqlQuery = "SELECT * FROM userTable WHERE userid = ?";
    try {
        return jdbcTemplate.queryForObject(sqlQuery, userRowMapper, username);
    } catch (org.springframework.dao.EmptyResultDataAccessException e) {
        // Return null if user not found, so you can check for it in your Service/Controller
        return null; 
    }
}

}
