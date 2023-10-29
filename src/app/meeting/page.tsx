'use client'
import Image from "next/image"
import {useState, useEffect, useRef} from "react"


export default function detail() {

  const [flag, setFlag] = useState(false)

  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
        if (videoRef.current && stream) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };
    getMediaStream();
  }, []);

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
    }
  };

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
    }
  };

  if (!stream) {
    return <p>カメラまたはマイクにアクセスできません。</p>;
  }

  return (
    // <div className="w-screen h-screen flex flex-col gap-[2%] bg-white">
    //   <div className="flex flex-row w-full justify-between">
    //     <div className="flex flex-row gap-[3%] justify-center">
    //       <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center rounded-[10px]">
    //         <span>ChatGPT</span>
    //       </div>
    //       <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center rounded-[10px]">
    //         <span>Bard</span>
    //       </div>
    //       <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center rounded-[10px]">
    //         <span>Bing</span>
    //       </div>
    //     </div>
    //     <div className="w-[100px] h-[100px] bg-[#D9D9D9] flex justify-center items-center rounded-[10px]">
    //       <span>自分</span>
    //     </div>
    //   </div>
    //   <div className="w-full h-full">
    //     <div className="bg-white flex justify-center items-center p-[30px] rounded-[10px] shadow-[0_0_24px_0_rgba(0,0,0,0.3)] fixed right-[10px] bottom-[10px]">
    //       <Image src="/hamberger.svg" alt="menu" width={30} height={13.33} onClick={() => setFlag(!flag)} />
    //     </div>
    //     {flag && (
    //       <div className="flex flex-col gap-[10px]">
    //         <span>退出</span>
    //         <Image src="/mic.svg" alt="mic" width={50} height={50} />
    //         <Image src="/camera.svg" alt="camera" width={50} height={50} />
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div>
      <video ref={videoRef} className="object-cover w-[640px] h-[480px] shadow-[0_0_24px_0_rgba(0,0,0,0.3)] rounded-[20px]" autoPlay />
      <div>
        <button onClick={toggleVideo}>カメラのオン/オフ</button>
        <button onClick={toggleAudio}>マイクのオン/オフ</button>
      </div>
    </div>
  );
}