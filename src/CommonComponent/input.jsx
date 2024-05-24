import React from 'react'

const input = () => {
  return (
    <>
      {/* email start */}
      <div className="my-3">
                <label htmlFor="Email" className="font-Nunito font-semibold text-[12px] text-dark-blue opacity-70 tracking-wide">Email Address</label>
              <input
                type="email"
                placeholder="Ladushing691@gmail.com"
                name="Email"
                id="Email" 
                autoComplete="off" className="font-Nunito py-4 text-dark-blue text-xl font-medium border-2 border-dark-blue rounded-lg opacity-30 w-full px-5" 
              />
                </div>
                {/* email end */}
    </>
  )
}

export default input

// {/* input email component  */}
// <Input lableName={"Email Address"} placeholderName={"Ladushing691@gmail.com"}
// idName={"Email"} nameParent={"Email"} htmlForParent={"Email"} typeParent={"email"}/>
// {/* input email component */}

//===>

//     {/* email start */}
//     <div className="my-3">
//     <label htmlFor={htmlForParent} className="font-Nunito font-semibold text-[12px] text-dark-blue opacity-70 tracking-wide">{lableName}</label>
//   <input
//     type={typeParent}
//     placeholder={placeholderName}
//     name={nameParent}
//     id={idName}
//     autoComplete="off" className="font-Nunito py-4 text-dark-blue text-xl font-medium border-2 border-dark-blue rounded-lg opacity-30 w-full px-5"
//   />
//     </div>
//     {/* email end */}
