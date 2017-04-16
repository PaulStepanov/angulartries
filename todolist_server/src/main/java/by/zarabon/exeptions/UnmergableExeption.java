package by.zarabon.exeptions;

public class UnmergableExeption extends Exception {

    public UnmergableExeption() {
        super();
    }

    public UnmergableExeption(String message) {
        super(message);
    }

    public UnmergableExeption(String message, Throwable cause) {
        super(message, cause);
    }

    public UnmergableExeption(Throwable cause) {
        super(cause);
    }

    protected UnmergableExeption(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
