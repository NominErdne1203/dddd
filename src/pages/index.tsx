import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleClick = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className="flex justify-center column h-screen grid place-items-center bg-gradient-to-r from-pink-400 to-black ">
      {isImageVisible && (
        <Image
          className="flex absolute z-50 justify-center mb-200 "
          src={"/kiss.png"}
          alt="kiss"
          width={50}
          height={400}
        />
      )}

      <a href="https://www.facebook.com/profile.php?id=100003806587648">
        <Image
          className="border-solid border-2 border-white rounded-full"
          alt={"zurag"}
          src={"/zurag.jpeg"}
          width={400}
          height={900}
        />
      </a>
      <button
        className="bg-white w-[100px] rounded-full h-[50px]"
        onClick={handleClick}
      >
        {isImageVisible ? "Dar" : "Dar"}
      </button>
    </div>
  );
}

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// export default function Home() {
//   return (
//     <div className="flex items-start justify-center column">
//       <a href=""></a>
//       <Image
//         className="z-50 ml-10"
//         src={"/kiss.png"}
//         alt="kiss"
//         width={50}
//         height={400}
//       />
//       <Image
//         className="border-solid border-2 border-indigo-600 z-0"
//         alt={"zurag"}
//         src={"/zurag.jpeg"}
//         width={400}
//         height={900}
//       />
//       {/* <button onClick={}>dar</button> */}
//     </div>
//   );
// }
