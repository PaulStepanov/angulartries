package by.zarabon;

import by.zarabon.configs.MainConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
@ComponentScan
public class MainApp {

	public static void main(String[] args) {
		SpringApplication.run(MainApp.class, args);
		AnnotationConfigApplicationContext context =
				new AnnotationConfigApplicationContext();
		context.getEnvironment().setActiveProfiles("dev", "test");
		context.register(MainConfig.class);
	}
}
