import Image from "next/image";
import Header from "./components/Header";
import Rectangle from "../app/pics/Rectangle 2.png";
import Gi from "../app/icons/Gi.png";
import Gii from "../app/icons/Gii.png";
import zara from "../app/icons/zara.png";
import gucci from "../app/icons/gucci.png";
import parada from "../app/icons/prada.png";
import h1 from "../app/h-pics/h1.png";
import h2 from "../app/h-pics/h2.png";
import h3 from "../app/h-pics/h3.png";
import h4 from "../app/h-pics/h4.png";
import h5 from "../app/h-pics/h5.png";
import h6 from "../app/h-pics/h6.png";
import h7 from "../app/h-pics/h7.png";
import h8 from "../app/h-pics/h8.png";
// import z1 from "../app/h-last/z1.png";
// import z2 from "../app/h-last/z2.png";
// import z3 from "../app/h-last/z3.png";
// import z4 from "../app/h-last/z4.png";
import z5 from "../app/h-last/z5.png";
import z6 from "../app/h-last/z6.png";
import z7 from "../app/h-last/z7.png";

import star1 from "../app/icons/star1.png";

export default function Home() {
  return (
    <section>
      <div>
        <div>
          <div className="absolute left-[100px] top-[237px] w-[577px] h-[173px] flex items-center text-black font-bold text-[64px] leading-[64px] font-[Integral CF]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </div>
          <div className="absolute left-[100px] top-[442px] w-[545px] h-[33px] text-[16px] leading-[22px] font-[Satoshi] font-normal text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </div>
          <div className="absolute left-[100px] top-[507px] w-[210px] h-[52px] flex flex-row justify-center items-center gap-[12px] px-[54px] py-[16px] text-[#FFFFFF] bg-black rounded-[62px]">
            {/* Add your content here */}
            Shop Now
          </div>
        </div>
        <div>
          <Image src={Rectangle} alt={"pics"} className="mt-14"></Image>
        </div>
      </div>

      <div className="absolute top-[797px] left-0 w-[1440px] h-[122px] bg-black">
        <div className="flex justify-between mt-10 mx-20">
          {" "}
          <Image src={Gii} alt={"a"}></Image>
          <Image src={zara} alt={"b"}></Image>
          <Image src={gucci} alt={"c"}></Image>
          <Image src={parada} alt={"d"}></Image>
          <Image src={Gi} alt={"e"}></Image>
        </div>
      </div>
      <div className="absolute pb-[190px] top-[991px] left-[calc(50%-201.5px)] w-[403px] h-[58px] flex items-center text-center text-[48px] font-[700] leading-[58px] text-black font-integral-cf">
        NEW ARRIVALS
      </div>

      <div className="flex justify-around mt-[350px]">
        <div>
          <div>
            <Image src={h1} alt={"1"}></Image>
            <div className="absolute top-[1418px] ml-[-53px] left-[100px] w-[225px] h-[27px] flex items-center text-[20px] font-[700] leading-[27px] text-black font-satoshi">
              T-SHIRT WITH TAPE DETAILS
            </div>
            <Image src={star1} alt={"star"} className="mt-[100px]"></Image>
            <div className="absolute top-[1480px] left-[100px] w-[55px] h-[32px] flex items-center gap-[10px]">
              <span className="text-[24px] ml-[-50px] mt-5 font-bold leading-[32px] text-black font-satoshi">
                $120
              </span>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image src={h2} alt={"1"}></Image>
            <div className="absolute top-[1418px] left-[415px] w-[150px] h-[27px] flex items-center text-[20px] font-bold leading-[27px] text-black font-satoshi">
              SKINNY FIT JEANS
            </div>
            <Image src={star1} alt={"star"} className="mt-[100px]"></Image>
            <div className="absolute top-[1480px] mt-3 left-[415px] w-[200px] h-[32px] flex items-center gap-[10px]">
              {/* <!-- $240 --> */}
              <span className="text-[24px] font-bold leading-[32px] text-black font-satoshi">
                $240
              </span>

              {/* <!-- $260 with line-through --> */}
              <span className="text-[24px] font-bold leading-[32px] text-black text-opacity-40 line-through font-satoshi">
                $260
              </span>

              {/* <!-- Red Badge -20% --> */}
              <div className="flex justify-center items-center px-[14px] py-[6px] gap-[12px] bg-red-100 rounded-[62px] w-[58px] h-[28px]">
                <span className="text-[12px] font-medium leading-[16px] text-red-500 font-satoshi">
                  -20%
                </span>
              </div>
            </div>
          </div>{" "}
        </div>

        <div>
          <div>
            <Image src={h3} alt={"1"}></Image>
            <div className="absolute ml-[70px] top-[1418px] left-[730px] w-[151px] h-[27px] flex items-center text-[20px] font-bold leading-[27px] text-black font-satoshi">
              CHECKERED SHIRT
            </div>
            <Image src={star1} alt={"star"} className="mt-[100px]"></Image>
            <div className="absolute ml-[70px] mt-3 top-[1480px] left-[730px] w-[56px] h-[32px] flex items-center text-[24px] font-bold leading-[32px] text-black font-satoshi">
              $180
            </div>
          </div>{" "}
        </div>

        <div>
          <div>
            <Image src={h4} alt={"1"}></Image>
            <div className="absolute ml-[130px] top-[1418px] left-[1045px] w-[199px] h-[27px] flex items-center text-[20px] font-bold leading-[27px] text-black font-satoshi">
              SLEEVE STRIPED T-SHIRT
            </div>
            <Image src={star1} alt={"star"} className="mt-[100px]"></Image>
            <div className="absolute top-[1480px] ml-[130px] mt-3 left-[1045px] w-[189px] h-[32px] flex items-center gap-[10px]">
              {/* <!-- $130 --> */}
              <span className="text-[24px] font-bold leading-[32px] text-black font-satoshi flex items-center justify-center w-[55px] h-[32px]">
                $130
              </span>

              {/* <!-- $160 with line-through --> */}
              <span className="text-[24px] font-bold leading-[32px] text-black text-opacity-40 line-through flex items-center justify-center w-[56px] h-[32px]">
                $160
              </span>

              {/* <!-- Red Badge (-30%) --> */}
              <div className="flex justify-center items-center px-[14px] py-[6px] gap-[12px] bg-red-100 rounded-[62px] w-[58px] h-[28px]">
                <span className="text-[12px] font-medium leading-[16px] text-red-500 font-satoshi">
                  -30%
                </span>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="absolute mt-[10px] top-[1548px] left-1/2 -translate-x-1/2 w-[218px] h-[52px] flex justify-center items-center gap-[12px] px-[54px] py-[16px] border rounded-[62px] border-black/10 box-border">
          {/* <!-- "View All" --> */}
          <span className="text-[16px] font-medium leading-[22px] text-black font-satoshi">
            View All
          </span>
        </div>
        <hr className="bg-red-800 text-black" />
        {/* //////////////////////////////////////// top  selling */}
      </div>
      <div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[1728px] w-[346px] h-[58px] flex items-center text-center text-black font-bold text-[48px] leading-[58px]">
          {/* <!-- Your content here --> */}
          TOP SELLING
        </div>
        {/* blocks */}
        <div className="flex justify-around">
          <div>
            <Image src={h8} alt={"1"} className="mt-[400px]"></Image>
            <div className="absolute mt-[50px] ml-[-60px] left-[100px] top-[2155px] w-[194px] h-[27px] flex items-center text-black font-bold text-[20px] leading-[27px] font-sans">
              Vertical Striped Shirt
            </div>
            <Image src={star1} alt={"star"} className="mt-[65px]"></Image>
            <div className="absolute mt-[55px] ml-[-60px] left-[100px] top-[2217px] w-[53px] h-[32px] flex items-center text-black font-bold text-[24px] leading-[32px] font-sans">
              $212
            </div>
          </div>

          <div>
            <Image src={h6} alt={"1"} className="mt-[400px]"></Image>
            <div className="absolute ml-[0px] mt-[50px] left-[415px] top-[2155px] w-[226px] h-[27px] flex items-center text-black font-bold text-[20px] leading-[27px] font-sans">
              COURAGE GRAPHIC T-SHIRT
            </div>

            <Image src={star1} alt={"star"} className="mt-[65px]"></Image>
            <div className="absolute  ml-[0px] mt-[50px] left-[415px] top-[2217px] w-[54px] h-[32px] flex items-center text-black font-bold text-[24px] leading-[32px] font-sans">
              $145
            </div>
          </div>

          <div>
            <Image src={h7} alt={"1"} className="mt-[400px]"></Image>
            <div className="absolute ml-[70px] mt-[50px] left-[730px] top-[2155px] w-[239px] h-[27px] flex items-center text-black font-bold text-[20px] leading-[27px] font-sans">
              LOOSE FIT BERMUDA SHORTS
            </div>

            <Image src={star1} alt={"star"} className="mt-[65px]"></Image>
            <div className="absolute ml-[70px] mt-[50px] left-[730px] top-[2217px] w-[47px] h-[32px] flex items-center text-black font-bold text-[24px] leading-[32px] font-sans">
              $80
            </div>
          </div>

          <div>
            <Image src={h5} alt={"1"} className="mt-[400px]"></Image>
            <div className="absolute ml-[140px] mt-[50px] left-[1045px] top-[2155px] w-[185px] h-[27px] flex items-center text-black font-bold text-[20px] leading-[27px] font-sans">
              FADED SKINNY JEANS
            </div>

            <Image src={star1} alt={"star"} className="mt-[65px]"></Image>
            <div className="absolute left-[1045px] top-[2217px] flex items-center gap-[10px] w-[55px] h-[32px]">
              <span className="flex ml-[140px] mt-[100px] items-center w-[55px] h-[32px] text-[24px] leading-[32px] font-bold text-black font-sans">
                $210
              </span>
            </div>
          </div>
        </div>
        <div className="box-border mt-[50px] absolute left-1/2 top-[2285px] flex items-center justify-center gap-[12px] w-[218px] h-[52px] -translate-x-1/2 border border-black/10 rounded-[62px]">
          <span className="flex-none order-0 flex-grow-0 w-[58px] h-[22px] text-[16px] leading-[22px] font-medium text-black font-sans">
            View All
          </span>
        </div>
      </div>

      {/* //                    //                 third  //                        // */}
      <div className="absolute left-[100px] top-[2417px] w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px]">
        {/* BROWSE BY dress STYLE */}
        <h2 className="absolute left-1/2 top-[70px] transform -translate-x-1/2 text-[48px] leading-[58px] font-bold font-integral text-black text-center">
          BROWSE BY dress STYLE
        </h2>

        {/* Frame 61 */}
        <div className="absolute left-[64px] top-[192px] w-[407px] h-[289px] bg-white rounded-[20px]">
          {/* image 11 */}
          <div
            className="absolute left-[626px] top-[-122px] w-[973px] h-[649px] bg-cover bg-center"
            style={{
              backgroundImage: "url(image.png)",
              transform: "scaleX(-1)",
            }}
          />
          <h3 className="absolute left-[36px] top-[25px] text-[36px] leading-[49px] font-bold text-black">
            Casual
          </h3>
        </div>

        {/* Frame 62 */}
        <div className="absolute left-[491px] top-[192px] w-[684px] h-[289px] bg-white rounded-[20px]">
          {/* image 13 */}
          <div
            className="absolute left-[0px] top-[-146px] w-[1306px] h-[870px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/z1.png')",
            }}
          />
          <h3 className="absolute left-[36px] top-[25px] text-[36px] leading-[49px] font-bold text-black">
            Formal
          </h3>
        </div>

        {/* Frame 63 */}
        <div className="absolute left-[768px] top-[501px] w-[407px] h-[289px] bg-white rounded-[20px]">
          {/* image 14 */}
          <div
            className="absolute left-[53px] top-[-148px] w-[452px] h-[677px] bg-cover bg-center"
            style={{
              backgroundImage: "url(h1.png)",
            }}
          />
          <h3 className="absolute left-[36px] top-[25px] text-[36px] leading-[49px] font-bold text-black">
            Gym
          </h3>
        </div>

        {/* Frame 64 */}
        <div className="absolute left-[64px] top-[501px] w-[684px] h-[289px] bg-white rounded-[20px]">
          {/* image 12 */}
          <div
            className="absolute left-[42px] top-[-163px] w-[770px] h-[616px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/z1.svg')",
            }}
          />
          <h3 className="absolute left-[36px] top-[25px] text-[36px] leading-[49px] font-bold text-black">
            Party
          </h3>
        </div>
      </div>
      {/* ////////////                    LAST                             /////////////// */}
      <div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[3363px] w-[654px] h-[58px] flex items-center font-bold text-[48px] leading-[58px] text-black"
          style={{ fontFamily: "'Integral CF', sans-serif" }}
        >
          OUR HAPPY CUSTOMERS
        </div>
        <div className="absolute left-[100px] top-[3461px] w-[400px] h-[240px] flex flex-wrap items-start content-start p-[28px_32px] gap-[24px_342px] border border-[#1A1A1A] rounded-[20px]">
          <Image src={z5} alt={"rev1"}></Image>
        </div>
        <div className="absolute left-[520px] top-[3461px] w-[400px] h-[239.58px] flex flex-wrap items-start content-start p-[28px_32px] gap-[24px_342px] border border-[#1A1A1A] rounded-[20px]">
          <Image src={z6} alt={"rev1"}></Image>
        </div>
        <div className="absolute left-[940px] top-[3461px] w-[400px] h-[239.58px] flex flex-wrap items-start content-start p-[28px_32px] gap-[24px_342px] border border-[#1A1A1A] rounded-[20px]">
          <Image src={z7} alt={"rev1"}></Image>
        </div>
      </div>
    </section>
  );
}
