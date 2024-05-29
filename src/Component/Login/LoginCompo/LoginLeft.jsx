import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const LoginLeft = () => {
  //? =================== Use State Hook Start  ===================== //
  const [eye, setEye] = useState(false);
  const [loading, setloading] = useState(false);
  // google + firebase
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // google + firebase

  //react router navigate
  const navigate = useNavigate();
  //? =================== Use State Hook End  ===================== //

  //* =================== Error Use State Hook Start  ===================== //
  const [Error, setError] = useState({
    EmailError: "",
    PasswordError: "",
  });
  //* =================== Error Use State Hook End  ===================== //

  //? =================== Use State Nesting or Use State Object Start ===================== //
  const [inputValue, setinputValue] = useState({
    // inputValue initial object
    Email: "",
    Password: "",
  });
  //? =================== Use State Nesting or Use State Object  End ===================== //

  //* ===================  handleInputValue Functionality form Start  ===================== //
  const handleInputValue = (event) => {
    setinputValue({
      // inputValue New object
      ...inputValue, // copy old object
      [event.target.id]: event.target.value, // set new value to id
    });
    // distructure mane
    //usestate er value inputvalue te theke ta amra jani , ekon seta
    //ver korte ...inputValue use kore then
    //1  ...inputValue,
    //2 [event.target.id]:[event.target.value]
    //1 inputValue er value  usestate e save ase sei value ber korar jonno(karon seta object er bitore ase)==>...inputValue,
    //2 console.log(inputValue["Email"]="hello@gmail.com"); ekane input value ekta object seta ke access korte hoi tahole
    // inputValue["Email"] aeta dite hobe , ekon ami cieci ja likbo ta email e set hoe jabe
    // inputValue["Email"]="hello@gmail.com") , aar object e likte hole seta ke : dite hoe
    // ekon ami cie sobkicu dynamic tar mane ami jehoto  2ta input e onchange = handleinput func use korsi
    // tai jetatei ami change korbo ta jeno tar id onosare bose jai
    // mane [event.target.id]:[event.target.value] , kew jodi email like tar mane tar id = email , then ja likse mane value set email id te set hoe jace
    // thik password o ek rokom, ekon amr ekta handler use korbo aar kaj korbe sob
  };
  //* ===================  handleInputValue Functionality form End  ===================== //

  //? ===================  Regex for Email & Password Start  ===================== //
  const EmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;
  const PasswordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.\-+*/])[A-Za-z\d@$!%*?&.\-+*/]{8,}$/;
  //? ===================  Regex for Email & Password End  ===================== //

  //* ===================  handleLogin Functionality form End  ===================== //
  const handleLogin = () => {
    if (!inputValue.Email) {
      setError({
        ...Error,
        EmailError: "Email Credential Missing Or Wrong ⚠️",
      });
    } else if (!EmailRegex.test(inputValue.Email)) {
      setError({
        ...Error,
        EmailError: "Email Credential Missing Or Wrong' ⚠️",
      });
    } else if (!inputValue.Password) {
      setError({
        ...Error,
        PasswordError: "Password Credential Missing Or Wrong ⚠️",
      });
    } else if (!PasswordRegex.test(inputValue.Password)) {
      setError({
        ...Error,
        PasswordError: "Password Credential Missing Or Wrong' ⚠️",
      });
    } else {
      setloading(true);
      setinputValue({
        ...inputValue,
        Email: "",
        Password: "",
      });
      setError({
        ...Error,
        EmailError: "",
        PasswordError: "",
      });
      //console.log("everything is oke");
      signInWithEmailAndPassword(auth, inputValue.Email, inputValue.Password)
        .then((userinfo) => {
          localStorage.setItem("UserTokenN",userinfo._tokenResponse.idToken)
          // localStorage.setItem("UserToken",userinfo._tokenResponse.idToken) // 
          // specific user info save kore raklam 
          //console.log(userinfo._tokenResponse.idToken);
          //? user jodi succesfully login kore then take navigate kore dibe home page 
          navigate("/home")
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setloading(false);
        });
    }
  };
  //* ===================  handleLogin Functionality form End  ===================== //

  //? ===================  handleLoginWithGoogle Functionality form End  ===================== //
  const handleLoginWithGoogle =()=>{
    // using promise // 
    signInWithPopup(auth, provider).then((userinfo)=>{
      const credential = GoogleAuthProvider.credentialFromResult(userinfo);
      const token = credential.accessToken;
      const user = userinfo.user;
      if(user){
        navigate('/home') // user jodi google dea login kore navigate koraw homepage
      }
     // console.log(user,credential);
    }).catch((error)=>{
      console.log(error.message);
    })
     // using promise // 

  }
  
   //? using async/ await 
  //  const handleLoginWithGoogle = async () =>{
  //   try{
  //     const result = await signInWithPopup(auth,provider);
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken; 
  //     const user = result.user;
  //     if(user){ // user jodi thake mane google dia login korle navigate koraba take homepage
  //       navigate("/home")
  //     }
  //    // console.log(user,credential);
  //   }catch(error){
  //     console.log(error.message);

  //   }
  //  }
  //? using async/ await 
  
  //? ===================  handleLoginWithGoogle Functionality form End  ===================== //
  

  //! =================== prevent default load Functionality form Start  ===================== //
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //! =================== prevent default load Functionality form End  ===================== //

  return (
    <div className="flex justify-center items-center w-[55%] h-[100vh] ">
      <div className="w-[70%]">
        {/* heading part start */}
        <div>
          <div>
            <h1 className="font-OpenSans text-dark-blue font-bold text-4xl mb-3 pt-10">
              Login to your account!
            </h1>
          </div>

          {/* goole auth part start layout and func */}
          <div className="flex items-center py-4 px-4 border-[1px] border-dark-blue rounded-lg my-8 w-[200px] cursor-pointer">
            <span className="mr-2 text-[20px]">
              <FcGoogle />
            </span>
            <p className="text-[#03014C] font-OpenSans text-sm font-semibold tracking-wide" onClick={handleLoginWithGoogle}>
              Login with Google
            </p>
          </div>
          {/* goole auth part end layout and func */}
          
        </div>
        {/* heading part end */}

        {/* form part start  */}
        <form onSubmit={handleSubmit}>
          {/* email start */}
          <div className="mt-5 mb-3 ">
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
              value={inputValue.Email}
              autoComplete="off"
              className="font-Nunito py-4 text-dark-blue text-xl font-medium border-b-2 border-dark-blue  opacity-30 w-full "
              onChange={handleInputValue}
              // ======================= Handle Email Functionality ========================= //
              // onChange={(event) => SetEmail(event.target.value)}
              // ======================= Handle Email Functionality ========================= //
            />
          </div>

          {/* email error start and its functionality start*/}
          {Error.EmailError && (
            <span className="text-red-400 font-Nunito font-normal text-md mb-3">
              {Error.EmailError}
            </span>
          )}
          {/* email error end and its functionality end */}

          {/* email end */}

          {/* password start */}
          <div className="mt-3  mb-4 relative ">
            <label
              htmlFor="Password"
              className="font-semibold text-[12px] text-dark-blue opacity-70 tracking-wide font-Nunito"
            >
              Password
            </label>
            <input
              // {Eye ? "text" : "password"}
              type={eye ? "text" : "password"}
              placeholder="1234@adfdsaf"
              name="Password"
              id="Password"
              value={inputValue.Password} //state ja thakbe tai dekaba // mane state khali hole tomi o hoba
              autoComplete="off"
              className="py-4 text-dark-blue text-xl font-medium border-b-2 border-dark-blue  opacity-30 w-full  font-Nunito "
              onChange={handleInputValue}
              // ======================= Handle Password Functionality ========================= //
              // onChange={(event) => SetPassword(event.target.value)}
              // ======================= Handle Password Functionality ========================= //
            />

            {/* eye button start */}
            <div
              className="absolute top-[53%] right-[3%] text-dark-blue opacity-30 cursor-pointer"
              // ======================= Handle Eye Functionality ========================= //
              onClick={() => setEye(!eye)} /// ! direct func call na kore setEye(!Eye) ekane korlam
              // ======================= Handle Eye Functionality ========================= //
            >
              {eye ? <FaEye /> : <FaEyeSlash />}
            </div>
            {/* eye button End */}
          </div>

          {/* Password error start and its functionality start*/}
          {Error.PasswordError && (
            <span className="text-red-400 font-Nunito font-normal text-md ">
              {Error.PasswordError}
            </span>
          )}
          {/* Password error end and its functionality end */}

          {/* password end */}

          {/* button start */}
          <button
            type="submit"
            className="w-full py-5 rounded-lg bg-btnColor text-white text-xl font-normal mt-3 font-Nunito relative"
            // ======================= Handle Login / signup Functionality ========================= //
            onClick={handleLogin}
            // ======================= Handle login / signup Functionality ========================= //
          >
            {/* loader functionality start */}
            {loading && ( //? loading jeheto postion kora tai eye er moto direct object kore kora jai
              <div>
                <div class="loader absolute top-[30%] left-[28%]"></div>
                <div class="loader absolute top-[30%] right-[28%]"></div>
              </div>
            )}
            {/* loader functionality end */}
            Login to Continue
          </button>

          {/* button end */}
        </form>

        {/* sign UP start & LOGIN  functionality */}
        <div>
          <h3 className="text-start font-OpenSans font-normal text-[#03014C] text-sm mt-6">
            Don’t have an account ?
            <span className="text-[#EA6C00] ml-1 cursor-pointer">
              <Link
                to={"/"}
                className="hover:underline hover:decoration-dark-blue"
              >
                Sign up
              </Link>
            </span>
          </h3>
        </div>
        {/* sign UP End & LOGIN functionality  */}
        {/* from end */}
      </div>
    </div>
  );
};

export default LoginLeft;
