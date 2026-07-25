import apiRoutes from "#constant/routes.constant";
import notesRoutes from "#routes/notes/notes.route";

const { BASE } = apiRoutes;

function setupRoutesMiddleware(app) {
 app.use(BASE, notesRoutes);
}

export default setupRoutesMiddleware; 