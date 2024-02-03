package com.example.assignment.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUser (User user){
        return userRepository.findUserByEmail(user.getEmail());
    }

    public User vaildUser (User user){
        return userRepository.findUserByEmailAndPassword(user.getEmail(),user.getPassword());
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public String checkUser(User user) {

        User findUser = findUser(user);
        User vaildUser = vaildUser(user);

        if (vaildUser != null) {
            return "success";
        } else if (findUser != null) {
            return "Wrong password";
        } else {
            return "Not registered yet";
        }
    }
}
