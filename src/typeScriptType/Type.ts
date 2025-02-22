
import { Dispatch, SetStateAction } from "react";
export type TUser = {
  name: string;
  email: string;
  age: number;
  gender: "male" | "femail";
  id: string;
};

export type TuserDetail = {
  users:TUser[];
  loading:boolean;
  error: string | null;
}

export type SingleUserProps = {
  user: TUser;
  setId: Dispatch<SetStateAction<string>>; // 
  setShow: Dispatch<SetStateAction<boolean>>; // 
};