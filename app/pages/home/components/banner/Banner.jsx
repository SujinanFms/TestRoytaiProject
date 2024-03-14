import { Carousel, Image } from "antd";
import BannerImage from "../../../../../public/Banner.png";
import BannerImage2 from "../../../../../public//Banner2.png";
import React from "react";

const bannerImageUrl = "/_next/static/media/Banner.de852e58.png";

// รูปภาพของ Banner ที่เก็บในอาร์เรย์
const bannerImages = [
  "/_next/static/media/Banner.de852e58.png",
  "/_next/static/media/Banner2.d6a7a01e.png",
  "/_next/static/media/Banner.de852e58.png",
  // เพิ่มรูปภาพตามต้องการ
];

const contentStyle = {
  height: "412px", //160px
  color: "#fff",
  lineHeight: "412px", //160px
  textAlign: "center",
  //   background: "#364d79",
  //backgroundImage: `url(${bannerImageUrl})`, // ใช้ backgroundImage เพื่อกำหนดภาพพื้นหลัง
  //backgroundSize: "cover", // เพื่อให้รูปภาพของคุณเต็มพื้นที่
};


// console.log("BannerImage", BannerImage);
// console.log("BannerImage", BannerImage2);

const Banner = () => {
  return (
    <div>
      {/* <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <Image src={BannerImage} style={logoStyle} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel> */}
      <Carousel autoplay>
        {bannerImages.map((imageUrl, index) => (
          <div key={index}>
            <h3
              style={{
                height: "412px",
                color: "#fff",
                lineHeight: "412px",
                textAlign: "center",
                background: "transparent",
                backgroundImage: `url(${imageUrl})`, // ใช้ URL ของภาพในอาร์เรย์
                backgroundSize: "cover",
              }}
            ></h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
