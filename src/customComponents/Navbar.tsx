import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const count = useSelector((state:RootState)=>state.user.users)
  return (
    <div className="container mx-auto flex justify-around items-center my-10">
      <div>
        <h1 className="text-4xl font-bold">Logo</h1>
      </div>
      <div className="flex items-center gap-5
      ">
        <Link to="/">Create Post</Link>
         <Link to="/allUsers">All Post ({count.length})</Link>
      </div>
      <div>
         <input className="outline p-2" placeholder="Serch" type="text" name="item" id="" />
      </div>
    </div>
  )
}
