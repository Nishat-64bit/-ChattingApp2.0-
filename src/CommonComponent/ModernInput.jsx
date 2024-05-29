import React from 'react'

const ModernInput = () => {
  return (
    <>
       <div className="my-3">
          <label
            htmlFor="Email"
            className="text-[#03014C] font-OpenSans text-sm font-normal opacity-50"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Youraddres@email.com"
            id="Email"
            name="Email"
            autoComplete="off"
            className="py-3 text-[#03014C] font-OpenSans font-medium  text-[20px] opacity-50 bg-transparent border-b-[1px]  border-b-[rgba(3,1,76,0.2)]  w-full placeholder:text-[#03014C] "
          />
          </div>
    </>
  )
}

export default ModernInput
