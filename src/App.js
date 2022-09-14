import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TodoPage } from "./Pages/Todpage";
// import { Quiz } from "./Pages/Quiz";
import Header from "./components/Navbar";

// import Form from "./components/Form";
// import Todo from "./components/Todo";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        {/* <Route path="/quiz" element={<Q />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
