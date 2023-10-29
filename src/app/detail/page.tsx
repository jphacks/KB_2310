'use client'

import {useState} from "react"
import Image from "next/image";

export default function detail() {

  const [situationval, setSituationval] = useState(null);

  function Change(e) {
    setSituationval(e.target.value)
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-[8%] items-center bg-white relative">
      <Image src={"/bg-img.svg"} width={0} height={0} alt="bgImg" className="fixed w-full h-full flex justify-center items-center z-0 opacity-30" />
      <div className="absolute top-[30%] flex flex-col items-center">
        <input type="text" className="w-full px-[30px] py-[20px] text-center shadow-inner-box rounded-[10px]" placeholder="ニックネーム" />
        <div className="flex flex-row w-full gap-[10px]">
          <input type="radio" name="siotuation" value={0} className="" onChange={Change} id="0" />
          <label htmlFor="0">面接</label>
          <input type="radio" name="siotuation" value={1} className="" onChange={Change} id="1"/>
          <label htmlFor="1">プレゼンテーション</label>
        </div>
        <div className="flex flex-col gap-[3%]">
          {situationval==0 ? (
            <div className="flex flex-col gap-[15px]">
              <input type="text" className="" />
              <div className="flex flex-row gap-[3%]">
                <div>
                  <input type="radio" name="0-0" id="0-0" />
                  <label htmlFor="0-0">人事</label>
                </div>
                <div>
                  <input type="radio" name="0-1" id="0-1" />
                  <label htmlFor="0-1">職場プロフェッショナル</label>
                </div>
              </div>
              <button className="bg-[#3298D6] text-white">参加する</button>
            </div>
          ) : (situationval ==1 ? (
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-row gap-[3%]">
                  <div>
                    <input type="radio" name="1-0" id="1-0" />
                    <label htmlFor="1-0">3min</label>
                  </div>
                  <div>
                    <input type="radio" name="1-1" id="1-1" />
                    <label htmlFor="1-1">5min</label>
                  </div>
                </div>
                <div>
                  <input type="file" className="" />
                </div>
                <button className="bg-[#3298D6] text-white py-[10px] rounded-[10px]">参加する</button>
              </div>
          ) : <></>)}
        </div>
      </div>
    </div>
  );
};
