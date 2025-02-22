import { showUser } from "@/crudeOperation/ShowUsers"
import { RootState, useAppDispatch } from "@/redux/store"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import SingleUser from "./SingleUser";
import { TUser } from "@/typeScriptType/Type";
import Modal from "./Modal";

export default function AllUsers() {
  const [id,setId] = useState('');
  const [show,setShow] = useState(false);
  const dispatch = useAppDispatch();
  const {users,loading} = useSelector((state:RootState)=>state.user) 
  useEffect(()=>{
    dispatch(showUser());
  },[dispatch]);
  if(loading){
    return <p className="text-center text-2xl mt-16">Loading</p>
  }

  return (
    <div className="container mx-auto px-4">
      {
        show && <Modal id={id} show={show} setShow={setShow}/>
      }
      <h1 className="text-center text-4xl font-bold">All Users</h1>
      <div className="grid grid-cols-3 gap-5">
        {
          users.map((user:TUser)=>(
            <SingleUser user={user} setId={setId} setShow={setShow} key={user.id}/>
          )
        )
      }
      </div>
    </div>
  )
}
