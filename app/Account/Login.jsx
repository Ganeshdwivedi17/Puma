import { useState, useRef, useEffect } from "react";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { UserLogin } from "../Redux/authSlice";

function Login() {
  const dispatch = useDispatch();
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const User = {
    email:user,
    password:pwd
  }

  useEffect(() => {
    setErrmsg("");
  }, [user, pwd]);


  const handleSubmit = (e) => {
    dispatch(UserLogin(User));
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        redirect('/Men')
      ) : (
        <section>
      <p
        ref={errRef}
        className={errmsg ? `bg-red-700` : `bg-green-600`}
        aria-live="assertive"
      >
      {errmsg}
      </p>
        <div className='md:w-[99.5vw] sm:w-[100vw] bg-cover bg-center bg-[url("https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNob2VzfGVufDB8fDB8fHww")] z-0 lg:mt-20  font-[FFDINforPumaW07-Regular-latin] relative overflow-x-clip '>
        <video className='w-[100vw] h-[150%] Register-video sm:hidden md:block' autoPlay muted loop >
            <source  src='https://static.videezy.com/system/resources/previews/000/053/100/original/4K-44.mp4' type='video/mp4' ></source>
        </video>
        <div className="m-36 sm:m-2 md:absolute md:top-[5%] md:left-[25%]">
        <h1 className="text-4xl font-extrabold text-left lg:pl-20 pb-5 ">
          My Account
        </h1>
        <div className="m-14 flex justify-center">
          <form
            className="md:w-[37vw] sm:w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center flex-col items-center">
              <p className="font-bold">Login / Register</p>
              <hr className="h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-slate-700 text-sm self-start">
                Enter your email and password to log in
              </p>
              <div className="flex flex-col my-3">
                <label className="text-sm font-bold">Username</label>
                <input
                  ref={userRef}
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  required
                  className="md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black"
                  type="text"
                  placeholder="Enter your Username"
                />
              </div>
              <div className="flex flex-col my-3 text-start">
                <label className="text-sm font-bold">password</label>
                <input
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                  required
                  autoComplete='true'
                  className="md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
             
              <button className="bg-slate-300 rounded-md px-[16vw] text-slate-900 py-5 font-bold">
                Login
              </button>
              <p className="text-xs m-3">
                By logging in, I confirm that I have read and accept the Terms
                and Conditionsand the Privacy Policy.
              </p>
              <button href={"/Account/Register"} className="self-start">
                Don't Have an account yet{" "}
                <span className="text-lg font-bold underline">
                  Register Here
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
       </div>
       </section>)}
    </>
    )
}

export default Login