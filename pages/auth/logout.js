import React from "react";
import { useRouter } from "next/router";

export default function logout() {
  const router = useRouter();
  let handleOnClick = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return <button onClick={handleOnClick}>logout</button>;
}
