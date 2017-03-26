package by.zarabon.filters;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

@Component("loggingRequestFilters")
@WebFilter(urlPatterns = "/**", filterName = "debugRequestServletFilter")
public class LoggingRequestFilters implements Filter {
    private Logger logger;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        logger = LoggerFactory.getLogger(LoggingRequestFilters.class);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;

        StringBuilder debugMessage = new StringBuilder();

        debugMessage
                .append("URL : ").append(httpServletRequest.getRequestURI()).append("|")
                .append("Headers: \n");
        //Logging headers
        ArrayList<String> headerNames = Collections.list(((HttpServletRequest) servletRequest).getHeaderNames());
        headerNames.forEach(s -> {
            debugMessage.append(s.toString()).append(":")
                    .append(((HttpServletRequest) servletRequest)
                            .getHeader(s))
                    .append("\n");

        });

        logger.debug(debugMessage.toString());
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
