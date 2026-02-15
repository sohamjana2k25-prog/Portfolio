import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;
import com.google.gson.Gson;

public class projects extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");

        Project[] projects = {
                new Project("AI Chat App", "Built using React and Java backend"),
                new Project("E-Commerce Platform", "Scalable full stack system"),
                new Project("Portfolio Website", "Animated modern UI")
        };

        String json = new Gson().toJson(projects);
        response.getWriter().write(json);
    }

    static class Project {
        String title;
        String description;

        Project(String t, String d) {
            title = t;
            description = d;
        }
    }
}
