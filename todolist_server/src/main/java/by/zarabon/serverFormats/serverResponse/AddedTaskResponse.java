package by.zarabon.serverFormats.serverResponse;

public class AddedTaskResponse extends DefaultServerResponse {
    private Long id;

    public Long getId() {
        return id;
    }

    public AddedTaskResponse() {
        super();
    }

    public AddedTaskResponse(Long id) {
        super();
        this.id = id;
    }

    public AddedTaskResponse setId(Long id) {
        this.id = id;
        return this;
    }

    @Override
    public AddedTaskResponse setisOk(boolean isOk) {
        super.setisOk(isOk);
        return this;
    }
}
