import React, { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleClick = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className="flex flex-row justify-center h-screen grid place-items-center bg-gradient-to-r from-blue-300 to-black ">
      {isImageVisible && (
        <Image
          className="flex absolute z-50 justify-center mt-[-370px] mr-[-10px]"
          src={"/kiss.png"}
          alt="kiss"
          width={70}
          height={400}
        />
      )}
      <Image
        className="border-solid border-2 border-white rounded-full"
        alt={"zurag"}
        src={"/zurag.jpeg"}
        width={400}
        height={400}
      />
      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-blue-500 w-[100px] rounded-full h-[50px] text-2xl mt-[-320px] hover:bg-blue-700"
          onClick={handleClick}
        >
          {isImageVisible ? "Дар" : "Дар"}
        </button>
        <a
          className="w-[100px] flex-row ml-[30px] mt-[70px]"
          href="https://www.facebook.com/profile.php?id=100003806587648"
        >
          <Image
            // className="border-solid border-2 border-white rounded-full"
            alt={"zurag"}
            src={"/facebook.png"}
            width={60}
            height={100}
          />
          <p className="mb-[30px]">Facebook</p>
        </a>

        <p className="text-2xl mb-[-50px]">
          11Б анги Номин-Эрдэнэ, Энх-Үйлс, Анужин{" "}
        </p>
      </div>
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
