import { useEffect, useState } from "react";

function DOM(props) {

  //! Thay đổi font chữ của Men's Clothing ở trong trang Shopping !//
  // window.onscroll = function SPH() {
  //   console.log(document.getElementById("FB").getBoundingClientRect());
  //   if (window.innerWidth < 960) {
  //     if (
  //       document.querySelector(".SPHRes").getBoundingClientRect().top === 60
  //     ) {
  //       document.getElementById("SPHRes-Text").style.fontSize = "16px";
  //     } else {
  //       document.getElementById("SPHRes-Text").style.fontSize = "20px";
  //     }
  //   } else {
  //     if (document.querySelector(".SPH").getBoundingClientRect().top === 60) {
  //       document.getElementById("SPH-Text").style.fontSize = "16px";
  //     } else {
  //       document.getElementById("SPH-Text").style.fontSize = "24px";
  //       document.getElementById("FB").style.position = "absolute";
  //       document.getElementById("FB").style.top = "0px";
  //     }
  //     if (document.getElementById("FB").getBoundingClientRect().top === 221) {
  //       document.getElementById("FB").style.position = "absolute";
  //       document.getElementById("FB").style.top = "0px";
  //     }
  //     if (document.getElementById("FB").getBoundingClientRect().top < 111) {
  //       document.getElementById("FB").style.position = "fixed";
  //       document.getElementById("FB").style.top = "111px";
  //     }
  //     if (document.getElementById("FB").getBoundingClientRect().top === 221) {
  //       document.getElementById("FB").style.position = "absolute";
  //       document.getElementById("FB").style.top = "0px";
  //     }
  //   }
  // };

  return <>{props.children}</>;
}
export default DOM;
