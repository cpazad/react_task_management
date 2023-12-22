const TaskManager = () => {
  return (
    <div>
      <h2 className="text-2xl text-white">Task Manager</h2>
      <div>
        {/* Form */}
        <div>
          <form action=""></form>
        </div>
        {/* Task Columns */}
        <div className="flex justify-evenly gap-5 p-20">
          <div className="w-1/3 h-40 bg-slate-700">
            <h2 className="bg-slate-800 text-stone-100 py-3"> To-Dos </h2>
          </div>
          <div className="w-1/3 h-40 bg-slate-700">
            <h2 className="bg-slate-800 text-stone-100 py-3"> In-Progress </h2>
          </div>
          <div className="w-1/3 h-40 bg-slate-700">
            <h2 className="bg-slate-800 text-stone-100 py-3"> Completed </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
