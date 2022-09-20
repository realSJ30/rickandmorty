import "bulma/css/bulma.min.css";
import { QueryProvider } from "./graphql/client/query-provider";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <QueryProvider>
      <Dashboard />
    </QueryProvider>
  );
}

export default App;
