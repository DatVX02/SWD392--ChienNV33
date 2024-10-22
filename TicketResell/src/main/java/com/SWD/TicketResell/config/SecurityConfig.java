package com.SWD.TicketResell.config;

import com.SWD.TicketResell.filter.JwtTokenFilter;
import com.SWD.TicketResell.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig extends SecurityConfigurerAdapter {

    @Autowired
    private JwtUtils jwtUtils;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable()) // Disable CSRF protection
                .authorizeHttpRequests(auth -> auth
                        // Permit access to Swagger UI and OpenAPI endpoints
                        .requestMatchers(
                                "/v3/api-docs/**",    // OpenAPI docs
                                "/swagger-ui.html",    // Swagger UI
                                "/swagger-ui/**",      // Swagger UI resources
                                "/webjars/**"         // WebJars (if using)
                        ).permitAll() // Allow access to these endpoints
                        .requestMatchers("/api/auth/**").permitAll() // Allow access to auth endpoints
                        .anyRequest().authenticated()) // Protect all other requests
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)); // Stateless session management

        // Add JWT filter for authentication (ensure jwtUtils is properly initialized)
        http.addFilterBefore(new JwtTokenFilter(jwtUtils), UsernamePasswordAuthenticationFilter.class);

        return http.build(); // Build the HttpSecurity configuration
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
