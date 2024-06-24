import TaskCards from "./components/TaskCards.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-orange text-2xl font-bold text-center py-4">
        Task Management App
      </h1>
      <p className="text-yellow text-lg text-center ">
        Arrange your tasks and be more productive today🎯
      </p>

      <DndProvider backend={HTML5Backend}>
        <TaskCards />
      </DndProvider>
    </div>
  );
}

export default App;
