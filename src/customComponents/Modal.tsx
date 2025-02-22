import { Button } from '@/components/ui/button'
import { RootState } from '@/redux/store'

import { SetStateAction,Dispatch } from 'react';
import { useSelector} from 'react-redux'
export type ModalProps = {
  id: string; // `id` is a string
  show: boolean; // `show` is a boolean
  setShow: Dispatch<SetStateAction<boolean>>; // `setShow` is a state setter for boolean
};
export default function Modal({id,setShow}:ModalProps) {
  const {users} = useSelector((state:RootState)=>state.user) 
  const single = users.filter((p) => p.id === id)[0]; // Access the first element of the filtered array

  // Handle the case when no user is found
  if (!single) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black flex items-center justify-center z-50">
        <div className="bg-white p-2 h-[300px] w-[300px]">
          <p className="text-xl">User not found</p>
          <Button onClick={() => setShow(false)}>Close</Button>
        </div>
      </div>
    );
  }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black flex items-center justify-center z-50'>
      <div className='bg-white p-2 h-[300px] w-[300px]'>
      <div className="text-xl">
      <h1>Name: {single.name}</h1>
      <h1 className="overflow-hidden">Email: {single.email}</h1>
      </div>
      <div className="text-xl">
      <h1>Gender: {single.gender}</h1>
      <h1>Age: {single.age}</h1>
      </div>
        <Button onClick={()=>setShow(false)}>Close</Button>
      </div>
    </div>
  )
}
