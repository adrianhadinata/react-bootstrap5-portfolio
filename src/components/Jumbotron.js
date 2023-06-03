import React from "react";
import Svg from "../elements/Svg";
import Img from "../elements/Img";
import { Fade, Zoom, Roll } from "react-reveal";

import Iam from "../assets/img/adrian-kkn-crop.jpg";

export default function Jumbotron() {
  return (
    <div className="jumbotron text-center" id="jumbotron">
      <Roll top delay={750} duration={1000}>
        <Img
          className={"rounded-circle img-thumbnail mt-5"}
          imageSrc={Iam}
          imageAlt={"Adrian KKN-BV 2020"}
          imageWidth={"250"}
        ></Img>
      </Roll>
      <Zoom cascade left delay={1000} duration={2500}>
        <h1 className="display-4">Adrian Hadinata Hadi Darsono</h1>
      </Zoom>
      {/* <Fade bottom delay={1000}> */}
      <p className="lead" id="title">
        <Zoom left cascade delay={1500} duration={2000}>
          Fullstack Web Developer
        </Zoom>
        <Fade bottom delay={1250}>
          {" "}
          &nbsp;|&nbsp;{" "}
        </Fade>
        <Zoom right cascade delay={1500} duration={2000}>
          PT. Globalindo Intimates
        </Zoom>
      </p>
      {/* </Fade> */}
      <Svg
        fillColor={"#ffffff"}
        fillOpacity={"1"}
        drawing={
          "M0,256L48,250.7C96,245,192,235,288,234.7C384,235,480,245,576,245.3C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        }
      ></Svg>
    </div>
  );
}
