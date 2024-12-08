import React from "react";
import Image from "next/image";
import Vector from "../icons/Vector.png";
import Frame from "../icons/Frame 5.png";

const Header = () => {
  return (
    // <div>
    //   <div className="absolute w-full h-[38px] top-0 left-0 bg-black">
    //     {/* <!-- Content inside Frame 1 --> */}
    //     <p className="absolute w-[351px] h-[19px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-normal leading-[19px] text-white">
    //       Sign up and get 20% off to your first order. Sign Up Now
    //     </p>
    //   </div>

    // </div>

    <header>
      <div className="absolute w-full h-[38px] top-0 left-0 bg-black">
        <p className="font-satoshi text-l text-gray-80 absolute w-[351px] h-[19px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-normal leading-[19px] text-white">
          Sign up and get 20% off to your first order. Sign Up Now
        </p>
        <div className="absolute w-[20px] h-[20px] left-[1320px] top-1/2 -translate-y-1/2">
          <div className="absolute inset-[17.18%] bg-white ">
            <Image
              src={Vector}
              alt={"vector"}
              height={100}
              width={100}
              className="text-blue-950"
            ></Image>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="absolute left-[100px] top-[62px] w-[1240px] h-[41px] flex flex-row justify-center items-center gap-[40px] p-0">
        <div className="flex items-center justify-center w-[160px] h-[22px] text-[32px] leading-[38px] font-bold text-black font-integral-cf">
          SHOP.CO
        </div>
        <div className="flex flex-row items-start p-0 gap-[14px] w-[62px] h-[24px] flex-none order-3 flex-grow-0">
          <Image src={Frame} alt={"frame"} width={100} height={100}></Image>
        </div>
        <div className="flex flex-row items-start p-[12px_16px] gap-[12px] w-[577px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex-none order-2 flex-grow">
          <div className="w-[151px] h-[22px] font-normal text-[16px] leading-[22px] text-[rgba(0,0,0,0.4)] order-1 flex-grow-0 font-satoshi">
            Search for products...
          </div>
        </div>

        <div className="flex flex-row items-center gap-[24px] w-[321px] h-[22px]">
          <div className="flex flex-row items-center gap-[4px] w-[57px] h-[22px]">
            <div className="w-[37px] h-[22px] font-satoshi text-black text-[16px] leading-[22px]">
              Shop
            </div>
            <div className="relative w-[16px] h-[16px] bg-black"></div>
          </div>

          <div className="w-[56px] h-[22px] font-satoshi text-black text-[16px] leading-[22px]">
            On Sale
          </div>
          <div className="w-[87px] h-[22px] font-satoshi text-black text-[16px] leading-[22px]">
            New Arrivals
          </div>
          <div className="w-[49px] h-[22px] font-satoshi text-black text-[16px] leading-[22px]">
            Brands
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
