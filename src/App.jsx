import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesContextProvider from "./Context/Course.context";
import Home from "./screens/Home/Home";
import PageNotFound from "./screens/NotFound/NotFound";
import FormScreen from "./screens/Form/Form";
import TableScreen from "./screens/Table/Table";

const App = () => {
  return (
    <CoursesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/create" Component={FormScreen} />
          <Route exact path="/create/new" Component={TableScreen} />
          <Route exact path="/table/:id" Component={TableScreen} />
          <Route exact path="/*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </CoursesContextProvider>
  );
};

export default App;
