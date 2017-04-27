package by.zarabon.security.handlers;

import by.zarabon.security.exeptions.ApiError;
import by.zarabon.serverFormats.serverResponse.ErrorServerFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by pili on 4/27/17.
 */
public class CustomAuthenticationRestExceptionHandler implements AuthenticationFailureHandler {


    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                                        AuthenticationException e) throws IOException, ServletException {
        httpServletResponse.setStatus(HttpServletResponse.SC_FORBIDDEN);
        httpServletResponse.setContentType("application/json");

        ObjectMapper mapper = new ObjectMapper();
        String jsonResp = mapper.writeValueAsString(new ErrorServerFormat(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage()));

        PrintWriter httpServletResponseWriter = httpServletResponse.getWriter();
        httpServletResponseWriter.append(jsonResp).flush();
        httpServletResponseWriter.close();

    }
}
