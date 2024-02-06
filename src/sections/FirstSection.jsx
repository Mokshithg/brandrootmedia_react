import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LinearGradient } from "react-text-gradients";
import ImageCubeEffect from "../components/ImageCubeEffect";
import TwoCardsEffect from "../components/TwoCardsEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";

const images = {
  1: [
    "https://growthrocket.media/_next/image?url=%2F01.jpg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F02.jpg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F03.JPG&w=1920&q=75",
  ],
  2: [
    "https://growthrocket.media/_next/image?url=%2F04.JPG&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F05.jpeg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F06.jpeg&w=1920&q=75",
  ],
  3: [
    "https://growthrocket.media/_next/image?url=%2F06.jpg&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F08.JPG&w=1920&q=75",
    "https://growthrocket.media/_next/image?url=%2F07.jpeg&w=1920&q=75",
  ],
};

const brands = [
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Frangde.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fshishu.jpg&w=256&q=75",
  "https://growthrocket.media/brands/fisdom.svg",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fzypp.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fpokerbazi.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fopulence.jpeg&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Favisa.jpg&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fadilqadri.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fvitra.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fiquanta.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Fnavi.png&w=256&q=75",
  "https://growthrocket.media/_next/image?url=%2Fbrands%2Faism.png&w=128&q=75",
];

export default function FirstSection() {
  return (
    <div className="text-white md:my-44 my-24 mx-0">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="font-antonio">
          {/* <h1 className="md:text-[7vh] text-[3vh] font-[400]" style={{backgroundImage: "linear-gradient(to right, #000000, #7ED6DF)"}}>
            From Concept To Creation -<br /> "Transforming Ideas into Captivating Visual Stories"
          </h1> */}
          <LinearGradient gradient={["to right","#7ED6DF,#808080"]} className="md:text-[5vh] text-[3vh] font-[400]">
            From Concept To Creation -<br/> "Transforming Ideas into Captivating Visual Stories"
          </LinearGradient><br/>
          <LinearGradient gradient={["to right","#166D3B,#808080"]} className="md:text-[5vh] text-[3vh] font-[400] mt-[-10] font-antonio">
            Crafting Your Digital Identity -<br/> "Let Us Amplify Your Presence on YouTube and Instagram"
          </LinearGradient><br/>
          <LinearGradient gradient={["to right","#923CB5,#808080"]} className="md:text-[5vh] text-[3vh] font-[400]">
            "Your One-Stop <br/>Solution for Content Creation Success"
          </LinearGradient>
        </div>

        <div className="relative left-[190px] top-32 md:top-0 md:left-0">
          <div className="md:w-56 w-42 md:h-56 h-30 relative md:bottom-24 bottom-32 left-12 md:left-[-35px]">
            <ImageCubeEffect
              images={images[1]}
              style={"md:h-56 h-32 w-full object-cover rounded-full"}
            />
          </div>
          <div className="h-28 md:h-48 w-28 md:w-48 relative top-[-30px] md:top-[-110px] bottom-10 md:left-48">
            <ImageCubeEffect
              images={images[2]}
              style={"md:h-48 h-28 w-full object-cover rounded-full"}
            />
          </div>
          <div className="w-44 md:w-64 h-44 md:h-64 relative bottom-56 right-66 md:left-[-70px]">
            <ImageCubeEffect
              images={images[3]}
              style={"md:h-64 h-44 w-44 md:w-64 object-cover rounded-full"}
            />
          </div>
        </div>
      </div>

      <div className="my-16">
        <h1 className="text-3xl md:text-6xl font-medium tracking-tight">
          Brands That{" "}
          <LinearGradient gradient={["to right", "#ffb701 ,#ff341e"]}>
            Trust Us
          </LinearGradient>
        </h1>
        <TwoCardsEffect rotate={"rotate-[2deg]"}> 
          <Swiper
            loop={true}
            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            autoplay={true}
            breakpoints={{
              769: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            spaceBetween={120}
            modules={[Keyboard, Navigation, Autoplay]}
            className="mySwiper px-20 py-10"
          >
          {brands.map((el, i) => (
            <SwiperSlide key={i} className="">
              <img src={el} className="h-44 w-44 object-contain" alt="" />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next text-slate-100 animate-bounce-left"></div>
          <div className="swiper-button-prev text-slate-100 animate-bounce-right"></div>
          </Swiper>
        </TwoCardsEffect>
      </div>
    </div>
  );
}
