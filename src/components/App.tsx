import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from 'react-query'
import LocationPage from "../pages/LocationMap";

const App: React.FC = ()=>{
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" component={LocationPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;