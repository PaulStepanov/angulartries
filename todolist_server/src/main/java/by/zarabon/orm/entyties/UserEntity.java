package by.zarabon.orm.entyties;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @Column(name = "username")
    private String user;

    @Column(name = "password")
    private String password;

    @Column(name = "enabled")
    private boolean isEnabled;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idtask_relation")
    private TaskEntity taskRelationId;

    public UserEntity(String user, String password, boolean isEnabled) {
        this.user = user;
        this.password = password;
        this.isEnabled = isEnabled;
    }

    public String getUser() {
        return user;
    }

    public UserEntity setUser(String user) {
        this.user = user;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserEntity setPassword(String password) {
        this.password = password;
        return this;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public UserEntity setEnabled(boolean enabled) {
        isEnabled = enabled;
        return this;
    }
}
