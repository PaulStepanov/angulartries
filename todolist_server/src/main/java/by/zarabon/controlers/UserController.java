package by.zarabon.controlers;

import by.zarabon.serverFormats.serverResponse.DefaultServerResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by pili on 4/27/17.
 */

@RestController
@RequestMapping("/user")
public class UserController {

    //Returns  JSON {
//      id:'string',
//      name:'string'
//              }
    @RequestMapping(path="/id",method = RequestMethod.GET)
    public Object getUserID(Principal principal) {
        return new DefaultServerResponse(true){
            String id = principal.getName();
            String name = principal.getName();

            {
                super.setisOk(true);
            }

            public String getId() {
                return id;
            }

            public void setId(String id) {
                this.id = id;
            }

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }
        };
    }
}
