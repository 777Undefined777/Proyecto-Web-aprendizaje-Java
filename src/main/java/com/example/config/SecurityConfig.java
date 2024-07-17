package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/v1/principal").permitAll()
                        .requestMatchers("/v1/session-info").authenticated()
                        .requestMatchers("/static/**", "/styles.css", "/scripts.js", "/hcvideo.mp4").permitAll() // Permitir acceso a recursos estáticos
                        .anyRequest().authenticated()
                )
                .formLogin(login -> login
                        .successHandler(successHandler())
                        .permitAll()
                )
                .httpBasic(); // Agregar autenticación HTTP Basic
        return http.build();
    }

    public AuthenticationSuccessHandler successHandler() {
        return (((request, response, authentication) ->
                response.sendRedirect("/v1/index")));
    }
}
