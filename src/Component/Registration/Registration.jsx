import React, { useState } from "react";
import RegistrationImg from "../../assets/RegistrationImg.png";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  //? ================ useState Hook ======================= //
  const [Email, SetEmail] = useState("");
  const [FullName, SetFullName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Eye, setEye] = useState(false); // use state value = Eye
  //console.log(Password);
  // SetEmail("Mahmudur Nishat")
  //console.log(Email);
  //console.log(FullName)
  //? ================ useState Hook ======================= //

  //* ================ Error useState Hook ======================= //

  const [EmailError, setEmailError] = useState("");
  const [FullNameError, setFullNameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  //* ================ Error useState Hook ======================= //

  //!  ================ prevent Reload ======================= //
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //! ================ prevent Reload ======================= //

  //? ======================= All Handle Functionality ========================= //

  // ======================= Handle Email Functionality ========================= //
  //  const HandleEmail = (event)=>{
  //     SetEmail(event.target.value);
  //  }
  // ======================= Handle Email Functionality ========================= //

  // ======================= Handle Name Functionality ========================= //
  // const HandleName = (event)=>{
  //     SetFullName(event.target.value)
  // }
  // ======================= Handle Name Functionality ========================= //

  // ======================= Handle Password Functionality ========================= //
  // const HandlePassword=(event)=>{
  //     SetPassword(event.target.value)
  // }
  // ======================= Handle Password Functionality ========================= //

  //? ======================= Handle eye Functionality start ========================= //
  const handleEye = () => {
    setEye(!Eye);
    // console.log(Eye);
  };
  //? ======================= Handle eye Functionality end ========================= //

  //*======================= Regex Email Functionality start ========================= //
  const EmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;
  const email = "nishatmahmudur89@gmail.com";
  console.log(EmailRegex.test(email));

  const PasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.\-+*/])[A-Za-z\d@$!%*?&.\-+*/]{8,}$/;
  const password1 = "SoftwareEngineer75@/com"
  console.log(PasswordRegex.test(password1));
  //*======================= Regex Email Functionality end ========================= //

  //* ======================= Handle signup Functionality ========================= //
  const handleSignup = () => {
    if (!Email) {
      setEmailError("Email Credential Missing Or Wrong ⚠️");
    } else if (!EmailRegex.test(Email)) {
      setEmailError("Email Credential Missing Or Wrong ⚠️");
    } else if (!FullName) {
      setEmailError("");
      setFullNameError("Name is missing ⚠️");
    } else if (!Password) {
      setEmailError("");
      setFullNameError("");
      setPasswordError("Passwrod Credential Missing Or Wrong ⚠️");
    }else if(!PasswordRegex.test(Password)){
      setPasswordError("Password Credential Missing Or Wrong ⚠️");
    } else {
      setEmailError("");
      setFullNameError("");
      setPasswordError("");
      //console.log("everything is oke");
    }
  };
  // console.log(EmailError,FullNameError,PasswordError);
  //*======================= Handle signup Functionality ========================= //

  //? ======================= All handle Functionality ========================= //
  return (
    <>
      <div className=" flex justify-between items-center">
        <div className="  w-1/2 h-fullvh flex justify-center items-center ">
          <div>
            <h1 className="font-Nunito text-dark-blue font-bold text-4xl mb-3 pt-10">
              Get started with easily register
            </h1>
            <h3 className="font-Nunito text-black font-normal text-xl opacity-50 pb-5">
              Free register and you can enjoy it
            </h3>
            <form onSubmit={handleSubmit}>
              {/* email start */}
              <div className="my-3">
                <label
                  htmlFor="Email"
                  className="font-Nunito font-semibold text-[12px] text-dark-blue opacity-70 tracking-wide"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Ladushing691@gmail.com"
                  name="Email"
                  id="Email"
                  autoComplete="off"
                  className="font-Nunito py-4 text-dark-blue text-xl font-medium border-2 border-dark-blue rounded-lg opacity-30 w-full px-5"
                  // ======================= Handle Email Functionality ========================= //
                  onChange={(event) => SetEmail(event.target.value)}
                  // ======================= Handle Email Functionality ========================= //
                />
              </div>

              {/* email error start and its functionality start*/}
              {EmailError && (
                <span className="text-red-400 font-Nunito font-normal text-md">
                  {EmailError}
                </span>
              )}
              {/* email error end and its functionality end */}

              {/* email end */}

              {/* Full name input start */}
              <div className="my-3">
                <label
                  htmlFor="fullname"
                  className="font-Nunito font-semibold text-[12px] text-dark-blue opacity-70 tracking-wide"
                >
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Ladushing GTG"
                  name="fullname"
                  id="fullname"
                  autoComplete="off"
                  className="font-Nunito py-4 text-dark-blue text-xl font-medium border-2 border-dark-blue rounded-lg opacity-30 w-full px-5"
                  // ======================= Handle Name Functionality ========================= /
                  onChange={(event) => SetFullName(event.target.value)}
                  // ======================= Handle Name Functionality ========================= /
                />
              </div>

              {/* Full name error start and its functionality start*/}
              {FullNameError && (
                <span className="text-red-400 font-Nunito font-normal text-md">
                  {FullNameError}
                </span>
              )}
              {/* Full name error start and its functionality start*/}

              {/* Full name input end */}

              {/* password start */}
              <div className="my-3 relative ">
                <label
                  htmlFor="Password"
                  className="font-semibold text-[12px] text-dark-blue opacity-70 tracking-wide font-Nunito"
                >
                  Password
                </label>
                <input
                  type={Eye ? "text" : "password"}
                  placeholder="1234@adfdsaf"
                  name="Password"
                  id="Password"
                  autoComplete="off"
                  className="py-4 text-dark-blue text-xl font-medium border-2 border-dark-blue rounded-lg opacity-30 w-full px-5 font-Nunito "
                  // ======================= Handle Password Functionality ========================= //
                  onChange={(event) => SetPassword(event.target.value)}
                  // ======================= Handle Password Functionality ========================= //
                />

                {/* eye button start */}
                <div
                  className="absolute top-[53%] right-[3%] "
                  // ======================= Handle Eye Functionality ========================= //
                  onClick={handleEye} /// ! direct func call na kore setEye(!Eye) korte paren
                  // ======================= Handle Eye Functionality ========================= //
                >
                  {Eye ? <FaRegEye /> : <FaEyeSlash />}
                </div>
                {/* eye button End */}
              </div>

              {/* Password error start and its functionality start*/}
              {PasswordError && (
                <span className="text-red-400 font-Nunito font-normal text-md">
                  {PasswordError}
                </span>
              )}
              {/* Password error start and its functionality End*/}

              {/* password end */}

              {/* button start */}
              <button
                type="submit"
                className="w-full py-5 rounded-[86px] bg-btnColor text-white text-xl font-normal mt-3 font-Nunito"
                // ======================= Handle login / signup Functionality ========================= //
                onClick={handleSignup}
                // ======================= Handle login / signup Functionality ========================= //
              >
                Sign up
              </button>

              {/* button end */}
            </form>

            {/* sign in start & registration functionality */}
            <h3 className="text-center font-OpenSans font-normal text-[#03014C] text-sm mt-4">
              Already have an account?
              <span className="text-[#EA6C00] ml-1 cursor-pointer hover:underline hover:decoration-dark-blue ">
                Sign in
              </span>
            </h3>
            {/* sign in End & registration functionality  */}
          </div>
        </div>
        <div className=" w-1/2 h-fullvh">
          <img
            src={RegistrationImg}
            alt={RegistrationImg}
            className=" min-w-full h-screen"
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
