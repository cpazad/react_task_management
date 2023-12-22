import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { MdAddToPhotos } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";

const TaskManager = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    // now send the to-do item data to the server
    const toDoItem = {
      name: data.name,
      des: data.des,
      priority: data.priority,
    };
    const toDoRes = await axiosPublic.post("/task", toDoItem);
    console.log(toDoRes.data);
    if (toDoRes.data.insertedId) {
      // show success popup
      reset();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${data.name} is added to the contest.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const { data: toDoList = [], refetch } = useQuery({
    queryKey: ["toDoList"],
    queryFn: async () => {
      const res = await axiosPublic.get("/task");
      return res.data;
    },
  });
  const handleDeleteContest = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/task/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl text-white"> Task Manager</h2>
      {/* add to do item form */}
      <div className="w-96 mx-auto p-5 bg-slate-400 shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-1">
            <label className="label">
              <span className="label-text"> Item Name* </span>
            </label>
            <input
              type="text"
              placeholder="Item Name "
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-1">
            <label className="label">
              <span className="label-text"> Task Description *</span>
            </label>
            <input
              type="text"
              placeholder="Task Description"
              {...register("des", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-1">
            <label className="label">
              <span className="label-text"> Priority </span>
            </label>
            <select
              defaultValue="default"
              {...register("priority", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Set Priority
              </option>
              <option className="capitalize" value="high">
                High
              </option>
              <option className="capitalize" value="moderate">
                Moderate
              </option>
              <option className="capitalize" value="low">
                Low
              </option>
            </select>
          </div>
          <button className="btn btn-warning btn-wide my-3 bg-red-800 text-white">
            Add item <MdAddToPhotos className="ml-4" />
          </button>
        </form>
      </div>
      {/* To list display with drag and drop feature area */}
      <div className="flex justify-around gap-5 p-10">
        <div className="w-1/3 min-h-60 bg-slate-600">
          {" "}
          <h4 className="bg-slate-700 py-2 text-white"> To Do List </h4>
          {toDoList.map((item) => (
            <div
              key={item._id}
              className="m-2 p-5 bg-slate-500 text-left text-white"
            >
              <div className="flex justify-between items-center">
                <button className="btn btn-sm btn-danger rounded-sm my-2">
                  {" "}
                  Priority: {item.priority}
                </button>
                <button
                  onClick={() => handleDeleteContest(item)}
                  className="btn bg-red-500 btn-sm"
                >
                  <FaTrashAlt className="text-white text-lg"></FaTrashAlt>
                </button>
              </div>

              <h5 className="text-xl  text-orange-400 uppercase"> {item.name} </h5>
              <p> {item.des}</p>
            </div>
          ))}
        </div>
        {/* Column 2 - In progress */}
        <div className="w-1/3 min-h-60 bg-slate-600">
          <h4 className="bg-slate-700 py-2 text-white"> In Progress List </h4>
        </div>
        {/* Column 2 - Completed */}
        <div className="w-1/3 min-h-60 bg-slate-600">
          <h4 className="bg-slate-700 py-2 text-white"> Completed </h4>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
