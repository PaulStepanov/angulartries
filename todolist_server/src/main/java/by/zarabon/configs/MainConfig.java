package by.zarabon.configs;

import by.zarabon.filters.LoggingRequestFilters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
@EnableWebMvc
public class MainConfig extends WebMvcConfigurerAdapter {

    //Filter configurationn
    @Autowired
    @Bean
    public FilterRegistrationBean filterRegistration(LoggingRequestFilters loggingRequestFilters) {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(loggingRequestFilters);
        registration.addUrlPatterns("/*");
        registration.setName("debugRequestServletFilter");
        registration.setOrder(1);
        return registration;
    }


    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/static/**")//Which URL  matching the pattern will get access to resources
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(3600)
                .resourceChain(true)
                .addResolver(new PathResourceResolver());
    }
}
