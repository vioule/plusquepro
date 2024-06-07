"use client";
import { useRouter } from "next/navigation";
import { disconnect } from "@/lib/store/features/session/sessionSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { HiOutlineLogin } from "react-icons/hi";

export default function LogOut() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onLogout = async () => {
    const result = await fetch("/api/logout");
    const res = await result.json();
    if (res.success) {
      dispatch(disconnect());
      router.push("/login");
    } else {
      console.log(res.error);
    }
  };
  return (
    <button onClick={onLogout} className="p-4 rounded-lg flex items-center">
      <HiOutlineLogin />
      <span className="ml-2">Logout</span>
    </button>
  );
}
