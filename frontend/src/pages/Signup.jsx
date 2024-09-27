import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const Sginup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-screen bg-[#FFF8F3] flex justify-center items-center">
      <form action="" className="max-w-xl w-full flex flex-col text-[#405D72]">
      <div className="mb-4 w-full">
          <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
          />
        </div>
        
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
          />
        </div>

        <div className="mb-4 w-full relative">
          <label htmlFor="password" className="block text-sm font-medium ">Password</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
          />
          <div
            className="absolute right-2 text-slate-400 top-8 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
          </div>
          <h4 className='mt-3 text-slate-950'>
              <button>If you have acount</button>
            </h4>
          <div className='flex justify-center items-center mt-10'>
            
            <button className="bg-[#758694] rounded-lg text-lg text-[#F7E7CD] px-3 py-1 ">
                Signup
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
