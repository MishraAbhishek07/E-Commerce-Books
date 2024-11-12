import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../services";
import { useTitle } from "../hooks/useTitle";
export const Login = () => {
  useTitle("Login")
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  

  async function handleSubmit(event) {
    event.preventDefault();
    const authDetail = {
      email: email.current.value,
      password: password.current.value
    };
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(authDetail)
    // };
    // const response = await fetch("http://localhost:8000/login", requestOptions);
    // const data = await response.json();
    // console.log(data)
    // if (data.accessToken) {
    //   sessionStorage.setItem("token",JSON.stringify(data.accessToken))
    //   sessionStorage.setItem("cbid",JSON.stringify(data.user.id))

    //   toast.success('Successfully logged in!', {
    //     position: "bottom-left",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   navigate("/products");
    // } else {
    //   toast.error(data, {
    //     position: "bottom-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
    const data=await login(authDetail)
    if (data.accessToken) {
      toast.success('Successfully loggedIn!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } else {
      toast.error(data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow dark:bg-gray-700">
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
        </section>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input ref={email} type="email" id="email" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shubham@example.com" required autoComplete="off" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input ref={password} type="password" id="password" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </form>
      </div>
    </main>
  );
};
