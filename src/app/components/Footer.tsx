import React from "react";
import Image from "next/image";
import Frame from "../icons/Frame 52.png";

const Footer = () => {
  return (
    <footer>
      <div className="absolute w-[1441px] h-[589px] left-1/2 -translate-x-[720.5px] top-[3781px]">
        <div className="absolute w-[1441px] h-[589px] left-[-1px] top-[3781px]">
          <div className="absolute w-[1441px] h-[499px] left-1/2 -translate-x-[720.5px] top-[3871px] bg-[#F0F0F0]">
            <div className="bg-red-00 h-5">
              {" "}
              <Image
                src={Frame}
                alt={"frame"}
                height={1280}
                width={1270}
                className="content-center text-black items-center mt-[150px] ml-[90px]"
              ></Image>
            </div>
          </div>
          <div className="absolute left-[100px] top-[4263px] ml-[-60px] w-[269px] h-[19px] text-right text-[14px] leading-[19px] font-normal text-[#000000] opacity-60">
            © 2000-2021, All rights reserved
          </div>
          <div className="absolute left-[1059px] top-[4258px] w-[281.07px] h-[30.03px] flex flex-row items-end gap-[12px]">
            {/* Visa */}
            <div className="relative w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.37857px] shadow-[0px_4.48214px_8.96429px_rgba(183,183,183,0.08),0px_0.448214px_4.48214px_rgba(183,183,183,0.08)]">
              <div className="absolute left-[14.83%] right-[15.37%] top-[33.08%] bottom-[31.92%] bg-[#1434CB]"></div>
            </div>

            {/* Mastercard */}
            <div className="relative w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.37857px] shadow-[0px_4.48214px_8.96429px_rgba(183,183,183,0.08),0px_0.448214px_4.48214px_rgba(183,183,183,0.08)]">
              <div className="absolute left-[22.6%] right-[22.95%] top-[23.88%] bottom-[23.88%] bg-[#F79E1B]"></div>
            </div>

            {/* Paypal */}
            <div className="relative w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.37857px] shadow-[0px_4.48214px_8.96429px_rgba(183,183,183,0.08),0px_0.448214px_4.48214px_rgba(183,183,183,0.08)]">
              <div className="absolute left-[12.98%] right-[12.89%] top-[35.45%] bottom-[33.89%] bg-[#179BD7]"></div>
            </div>

            {/* Apple Pay */}
            <div className="relative w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.37857px] shadow-[0px_4.48214px_8.96429px_rgba(183,183,183,0.08),0px_0.448214px_4.48214px_rgba(183,183,183,0.08)]">
              <div className="absolute left-[21.63%] right-[21.7%] top-[32.09%] bottom-[30.6%] bg-[#000008]"></div>
            </div>

            {/* Google Pay */}
            <div className="relative w-[46.61px] h-[30.03px] bg-white border border-[#D6DCE5] rounded-[5.37857px] shadow-[0px_4.48214px_8.96429px_rgba(183,183,183,0.08),0px_0.448214px_4.48214px_rgba(183,183,183,0.08)]">
              <div className="absolute left-[19.23%] right-[19.5%] top-[32.84%] bottom-[29.85%] bg-[#E94235]"></div>
            </div>
          </div>

          <div className="absolute w-[1240px] h-0 left-1/2 -translate-x-[620px] top-[4238px] border border-solid border-[rgba(0,0,0,0.1)]"></div>
          <div className="absolute flex flex-row justify-between items-center p-[36px_64px] gap-[153px] w-[1240px] h-[180px] left-[100px] top-[3781px] bg-[#000000] rounded-[20px]">
            <div className="mx-auto w-[551px] h-[94px] font-[Integral CF] font-bold text-[40px] leading-[45px] text-[#FFFFFF]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className="flex flex-col items-start p-0 gap-[14px] mx-auto w-[349px] h-[108px]">
              <div className="flex items-start p-[12px_16px] gap-[12px] w-[349px] h-[48px] bg-[#FFFFFF] rounded-[62px]">
                <div className="w-[24px] h-[24px] bg-black"></div>
                <input
                  className="w-[173px] h-[22px] font-[Satoshi] font-normal text-[16px] leading-[22px] text-[#000000] bg-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex items-center justify-center p-[12px_16px] gap-[12px] w-[349px] h-[46px] bg-[#FFFFFF] rounded-[62px]">
                <span className="font-[Satoshi] text-[16px] text-[#000000]">
                  Subscribe to Newsletter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
