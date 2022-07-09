import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Tasks from "../../components/Task/Tasks";
import { RouteGuard } from "../../components/RouteGuard";

export default function Index() {
  //   async function fetchUser() {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   }
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let fetchTasks = async () => {
    let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/tasks", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setTasks(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <RouteGuard>
        <Tasks tasks={tasks} />
      </RouteGuard>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/auth/login">
        <a>login</a>
      </Link>
    </>
  );
}

// export default function Index({ tasks }) {
//     return (
//       <>
//         <Tasks tasks={tasks} />
//         <h2>
//           <Link href="/">
//             <a>Back to home</a>
//           </Link>
//         </h2>
//       </>
//     );
//   }

// export async function getStaticProps() {
//   let fetchTasks = async () => {
//     let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/tasks");
//     return res.data;
//   };
//   let tasks = await fetchTasks();
//   return {
//     props: {
//       tasks: tasks,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   const { params } = context;
//   let fetchTasks = async () => {
//     let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/tasks");
//     return res.data;
//   };
//   let tasks = await fetchTasks();
//   return {
//     props: {
//       tasks: tasks,
//     },
//   };
// }
