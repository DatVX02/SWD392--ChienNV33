//package com.SWD.TicketResell.config;
//
//import com.SWD.TicketResell.filter.JwtTokenFilter;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//
//import java.util.Arrays;
//
//import static org.springframework.http.HttpMethod.GET;
//
//@Configuration
//@EnableWebSecurity
//@EnableWebMvc
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//@RequiredArgsConstructor
//public class SecurityConfig {
//    private final JwtTokenFilter jwtTokenFilter;
//    @Value("${api.prefix}")
//    private String apiPrefix;
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http)  throws Exception{
//        http
//                .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class)
//                .authorizeHttpRequests(requests -> {
//                    requests
//                            .requestMatchers(
//                                    String.format("%s/users/register", apiPrefix),
//                                    String.format("%s/users/login", apiPrefix),
//                                    String.format("%s/healthcheck/**", apiPrefix),
//                                    "/api-docs",
//                                    "/api-docs/**",
//                                    "/swagger-resources",
//                                    "/swagger-resources/**",
//                                    "/configuration/ui",
//                                    "/configuration/security",
//                                    "/swagger-ui/**",
//                                    "/swagger-ui.html",
//                                    "/webjars/swagger-ui/**",
//                                    "/swagger-ui/index.html"
//
//                            )
//                            .permitAll()
//                            .requestMatchers(GET,
//                                    String.format("%s/roles**", apiPrefix)).permitAll()
//
//                            .requestMatchers(GET,
//                                    String.format("%s/categories/**", apiPrefix)).permitAll()
//
//                            .requestMatchers(GET,
//                                    String.format("%s/products/**", apiPrefix)).permitAll()
//
//                            .requestMatchers(GET,
//                                    String.format("%s/products/images/*", apiPrefix)).permitAll()
//
//                            .requestMatchers(GET,
//                                    String.format("%s/orders/**", apiPrefix)).permitAll()
//
//                            .requestMatchers(GET,
//                                    String.format("%s/order_details/**", apiPrefix)).permitAll()
//
//                            .anyRequest()
//                            .authenticated();
//                    //.anyRequest().permitAll();
//                })
//                .csrf(AbstractHttpConfigurer::disable)
//                .cors(httpSecurityCorsConfigurer -> {
//                    httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource());
//                }); // Enable CORS here
//        http.securityMatcher(String.valueOf(EndpointRequest.toAnyEndpoint()));
//        return http.build();
//    }
//
//    @Bean
//    public CorsFilter corsFilter() {
//        return new CorsFilter();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("*"));
//        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type", "x-auth-token"));
//        configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//}
