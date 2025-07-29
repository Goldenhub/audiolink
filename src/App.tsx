import { AppRoutes } from "@/routes";
import { AppProvider as Provider } from "./providers/AppProvider";

function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}

export default App;
