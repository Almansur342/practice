import { Button } from "@/components/ui/button";
import { deleteUser } from "@/crudeOperation/DeleteUser";
import { useAppDispatch } from "@/redux/store";
import { SingleUserProps } from "@/typeScriptType/Type";



export default function SingleUser({user,setId,setShow}:SingleUserProps) {
  const {name,email,gender,age,id} = user || {};
  const dispatch = useAppDispatch();
  return (
    <div className="border p-3">
      <div className="text-xl">
      <h1>Name: {name}</h1>
      <h1 className="overflow-hidden">Email: {email}</h1>
      </div>
      <div className="text-xl">
      <h1>Gender: {gender}</h1>
      <h1>Age: {age}</h1>
      </div>
      <div className="flex items-center gap-3 mt-2">
      <Button onClick={()=>[setId(id),setShow(true)]}>View</Button>
      <Button onClick={()=>dispatch(deleteUser(id))}>Delete</Button>
      <Button>Edit</Button>
      </div>
      
    </div>
  )
}
