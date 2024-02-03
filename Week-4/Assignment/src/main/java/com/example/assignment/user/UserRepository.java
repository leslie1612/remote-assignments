package com.example.assignment.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserByEmail(String mail);

    User findUserByEmailAndPassword(String mail, String password);
}
