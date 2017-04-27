package by.zarabon.serverFormats.serverResponse;

import java.util.ArrayList;

/**
 * Created by pili on 4/27/17.
 */
public class ErrorServerFormat {

    private Integer code;
    private String message;
    private ArrayList<ErrorServerFormat> errors = new ArrayList<>();

    public ErrorServerFormat(){

    }

    public ErrorServerFormat(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public ErrorServerFormat(Integer code, String message,ArrayList<ErrorServerFormat> errors) {
        this.code = code;
        this.message = message;
        this.errors.addAll(errors);
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ArrayList<ErrorServerFormat> getErrors() {
        return errors;
    }

    public void setErrors(ArrayList<ErrorServerFormat> errors) {
        this.errors = errors;
    }
}
