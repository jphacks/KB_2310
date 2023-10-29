import {useState} from "react"

export default function detail() {

  const [situationval, setSituationval] = useState(0);

  function Change(e) {
    setSituationval(e.target.value)
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-[8%] items-center">
      <input type="text" className="w-[30%] px-[10%] py-[5%] text-center" placeholder="ニックネーム" />
      <div className="flex flex-row gap-[5%]">
        <input type="radio" name="siotuation" value={0} className="" onChange={Change} id="0" />
        <label htmlFor="0">面接</label>
        <input type="radio" name="siotuation" value={1} className="" onChange={Change} id="1"/>
        <label htmlFor="1">プレゼンテーション</label>
      </div>
      <div className="flex flex-col gap-[3%]">
        {situationval==0 ? (
          <div className="">
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
        )}
      </div>
    </div>
  );
};
