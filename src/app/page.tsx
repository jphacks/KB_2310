'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [today, setToday] = useState("");

  const now = new Date();
  const [hour, setHour] = useState(now.getHours());
  const [min, setMin] = useState(now.getMinutes());
  const [time, setTime] = useState("");

  setInterval(() => {
    const now = new Date();
    setHour(now.getHours());
    setMin(now.getMinutes());
    setTime(`${hour}:${min}`);
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
    setDay(now.getDate());
    const str = day.toString()
    if(str.length === 1){
      const tmp = 0 + str
      setDay(tmp);
    }
    setToday(`${year}年${month}月${day}日`);
  }, 1000);



  return (
     <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Image src={"/bg-img.svg"} width={0} height={0} alt="bgImg" className="fixed w-full h-full flex justify-center items-center z-0 opacity-30" />
      <div className="absolute top-[250px] flex flex-row justify-center items-center gap-[200px] z-10">
        <Link href="/detail" className="flex flex-col w-[200px] h-[255px] cursor-pointer">
          <div className="bg-[#FFFF00]/70 shadow-inner-box w-[150px] h-[150px] rounded-[20px] relative">
            <Image src={"/sum.svg"} width={50} height={50} alt="sum" className="absolute left-[50px] top-[50px]" />
          </div>
          <span className="font-bold text-[18px]">新規ミーティング</span>
        </Link>
        <div className="flex flex-col bg-[#D0D0D0]/70 w-[300px] h-[500px] rounded-[20px] p-[20px] shadow-inner-box">
          <div className="flex flex-col gap-[2%] w-full h-full items-center">
            <span className="text-[30px] font-bold">{time}</span>
            <span className="font-bold">{today}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
