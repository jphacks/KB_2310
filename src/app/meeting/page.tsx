import Image from "next/image"
import {useState} from "react"

export default function detail() {

  const [flag, setFlag] = useState(false)

  function clickHandle() {
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-[2%]">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-[3%]">
          <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center">
            <span>ChatGPT</span>
          </div>
          <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center">
            <span>Bard</span>
          </div>
          <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center">
            <span>Bing</span>
          </div>
        </div>
        <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center">
          <span>自分</span>
        </div>
      </div>
      <div className="w-full h-full bg-black">
        <div className="absolute bg-white flex justify-center items-center p-[80px]">
          <Image src="/hamberger.svg" alt="menu" width={50} height={33.33} onClick={() => setFlag(!flag)} />
        </div>
        {flag && (
          <div className="flex flex-col gap-[10px]">
            <span>退出</span>
            <Image src="/mic.svg" alt="mic" width={50} height={50} />
            <Image src="/camera.svg" alt="camera" width={50} height={50} />
          </div>
        )}
      </div>
    </div>
  );
};
