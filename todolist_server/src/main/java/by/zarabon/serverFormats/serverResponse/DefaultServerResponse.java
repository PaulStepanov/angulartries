package by.zarabon.serverFormats.serverResponse;

public class DefaultServerResponse {
    private boolean isOk;

    public boolean getisOk() {
        return isOk;
    }

    public DefaultServerResponse(){}

    public DefaultServerResponse(boolean isOk) {
        this.isOk = isOk;
    }

    public DefaultServerResponse setisOk(boolean isOk) {
        this.isOk = isOk;
        return this;
    }
}
