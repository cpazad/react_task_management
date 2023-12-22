import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div className="bg-slate-900">
        <div></div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard