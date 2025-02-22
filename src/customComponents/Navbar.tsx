import { showUser } from "@/crudeOperation/ShowUsers";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(showUser());
  },[dispatch]);
  const count = useSelector((state:RootState)=>state.user.users)
  return (
    <div className="container mx-auto flex justify-around items-center my-10">
      <div>
        <h1 className="text-4xl font-bold">Logo</h1>
      </div>
      <div className="flex items-center gap-5
      ">
        <Link className="border bg-red-300 p-2" to="/">Create Post</Link>
         <Link className="border bg-red-300 p-2" to="/allUsers">All Post ({count.length})</Link>
      </div>
      <div>
         <input className="outline p-2" placeholder="Serch" type="text" name="item" id="" />
      </div>
    </div>
  )
}
