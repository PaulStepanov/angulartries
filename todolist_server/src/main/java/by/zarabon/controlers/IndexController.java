package by.zarabon.controlers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/*")
public class IndexController {

    @RequestMapping("/")
    public String renderIndex(ModelMap modelMap){
        return "index";
    }
}
