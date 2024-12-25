import Image from "next/image";
import React from "react";

const SocialLogin = () => {
  return (
    <>
      <div className="text-center text-xs text-gray-500">or Signup with</div>
      <div className="flex gap-4">
        <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/fb.png" width={32} height={32} alt="" />
          <span>Facebook</span>
        </button>
        <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/google.png" width={32} height={32} alt="" />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
