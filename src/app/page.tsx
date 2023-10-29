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

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date()
    if (date.getFullYear() != now.getFullYear()) {
      setYear(date.getFullYear());
    }
    if(date.getMonth() != now.getMonth()) {
      setMonth(date.getMonth() + 1);
    }
    if(date.getDate() != now.getDate()) {
      setDay(date.getDate() + 1);
    }
    setToday(`${year}年${month}月${day}`)
    setDate(new Date());
  })

  useEffect(() => {
    const now = new Date();
    if (date.getHours() != now.getHours()) {
      setHour(now.getHours())
    }
    if (date.getMinutes() != now.getMinutes()) {
      setMinute(now.getMinutes())
    }
    setTime(`${hour}時${minute}分`)
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={"/bg-img.svg"} width={0} height={0} alt="bgImg" className="w-[50%] h-[50%] flex justify-center items-center" />
      <div className="flex flex-row justify-center items-center gap-[30%]">
        <div className="flex flex-col p-[30%]">
          <Image src={"/sum.svg"} width={0} height={0} alt="sum" className="w-[35%] h-[35%]" />
          <span className="">新規ミーティング</span>
        </div>
        <div className="flex flex-col bg-[#D0D0D0]/70 shadow-[inset_0px_0px_24px_0px_rgba(0, 0, 0, 0.25)] p-20">
          <div className="flex flex-col gap-[5%] w-full h-full items-center">
            <span className="text-[50px] font-bold">{today}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
