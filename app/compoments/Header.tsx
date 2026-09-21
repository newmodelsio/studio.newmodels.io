import Image from "next/image";

export default function Header({ invert }: { invert: boolean }) {
  return (
    <>
      <div className="w-full flex items-center justify-between p-3 md:px-5 md:py-10">
        <a href="/">
          <div className="text-[30px] md:text-[40px] distort uppercase md:leading-[1]">
            {" NM "}
            <span className={`px-2 uppercase ${invert ? 'text-black bg-white' : 'bg-black text-white'} `}>Studio</span>
          </div>
        </a>
        <a href={invert ? "/" : "/about"} className="distort p-1 fixed top-0 right-0 m-3 md:mx-5 md:my-10 z-20 ">
          <div className="distort relative w-[35px] h-[35px] flex flex-col items-center justify-center">
            {invert ? <>
              <div className="w-full border-[3px]  bg-white border-white absolute top-[50%] rotate-[-45deg] mt-[-1px]"></div>
              <div className="w-full border-[3px] bg-white border-white absolute top-[50%] rotate-[45deg] mt-[-1px]"></div>
            </> :
              <><div className="w-full border-[3px]  border-black  absolute top-[50%] translate-y-[-50%]"></div>
                <div className="w-full border-[3px]  border-black rotate-[-90deg]"></div>
              </>}

          </div>
        </a>
      </div>
    </>
  );
}
