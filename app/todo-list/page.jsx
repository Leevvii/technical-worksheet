import ToDoFunc from "./ToDoFunc";

export default function ToDoList() {
  return (
    <main>
      <div className="max-w-fit mx-auto py-8">
        <h2 className="text-center text-5xl font-bold">ToDo List</h2>
        <ToDoFunc />
      </div>
    </main>
  );
}
