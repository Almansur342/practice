import { Button } from "@/components/ui/button"
import { createUser } from "@/crudeOperation/create";
import { useAppDispatch } from "@/redux/store";
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  email:string;
  age: number;
  gender: "male" | "femail";
}

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
   
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    dispatch(createUser(data))
    navigate("/allUsers")
    }
    
  return (
    <div className="w-1/3 mx-auto">
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
    <input
     placeholder="Enter your name"
    className="outline p-2" {...register("name", { required: true })} />
    {errors.name && <span className="text-red-500">This field is required</span>}

    <input placeholder="Enter your email" className="outline p-2" {...register("email", { required: true })} />
    {errors.email && <span
     className="text-red-500">This field is required</span>
     }

    <input placeholder="Enter your age" className="outline p-2" {...register("age", { required: true })} />
    {errors.age && <span className="text-red-500">This field is required</span>}

    <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="male"
              {...register("gender", { required: true })}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="female"
              {...register("gender", { required: true })}
            />
            Female
          </label>
        </div>
        {errors.gender && (
          <span className="text-red-500">Please select a gender</span>
        )}

    <Button type="submit">Submit</Button>
  </form>
    </div>
    
)
}

