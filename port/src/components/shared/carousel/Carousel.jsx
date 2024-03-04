"use client";

// components/DemoCarousel.js
import React, { Component, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports the styles directly
import heroImg from "../../../../public/heroImg.svg";
import Image from "next/image";
import { sideProject } from "@/lib/constant";
import styles from "./carousel.module.css";
import Button from "../button/Button";

// class DemoCarousel extends Component {
//   render() {
//     const { router } = this.props;
//     const handleChange = (index, item) => {
//       setCurrentProject(index);
//     };

//     const [currentProject, setCurrentProject] = useState(0);

//     const projects = sideProject;
//     return (
//       <div className={styles.content}>
//         <div className={styles.contentLeft}>
//           <Carousel
//             set
//             showThumbs={false}
//             swipeable={true}
//             showStatus={false}
//             onChange={handleChange}
//             infiniteLoop={true}
//             onClickItem={() => router.push("/")}
//           >
//             {projects
//               ? projects.map((project) => (
//                   <div key={project.id}>
//                     <Image
//                       src={project.img}
//                       alt={project.title}
//                       width="350"
//                       height="350"
//                       className={styles.carouselImg}
//                     />
//                   </div>
//                 ))
//               : projects.map((project) => (
//                   <div key={project.id}>
//                     <Image
//                       src={project.img}
//                       alt={project.title}
//                       width="300"
//                       height="300"
//                     />
//                   </div>
//                 ))}
//           </Carousel>
//         </div>
//         <div className={styles.contentRight}>
//           <span className={styles.projectTitle}>Ecommerce Website </span>
//           <span className={styles.projectDesc}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
//             elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//             aliqua. Ut enim ad minim veniam
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

const DemoCarousel = () => {
  // const { router } = this.props;
  const handleChange = (index, item) => {
    setCurrentProject(index);
    console.log(index);
  };

  const [currentProject, setCurrentProject] = useState(0);

  const projects = sideProject;
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <Carousel
          set
          showThumbs={false}
          swipeable={true}
          showStatus={false}
          onChange={handleChange}
          infiniteLoop={true}
        >
          {projects
            ? projects.map((project) => (
                <div key={project.id}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    width="350"
                    height="350"
                    className={styles.carouselImg}
                  />
                </div>
              ))
            : projects.map((project) => (
                <div key={project.id}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    width="300"
                    height="300"
                  />
                </div>
              ))}
        </Carousel>
      </div>
      <div className={styles.contentRight}>
        <span className={styles.projectTitle}>
          {projects[currentProject].title}{" "}
        </span>
        <span className={styles.projectDesc}>
          {projects[currentProject].description}
        </span>
        <div className={styles.buttons}>
          <Button text="Read More" link={projects[currentProject].link} />
          <Button
            text="Github"
            link={projects[currentProject].github}
            logo={"github"}
          />
        </div>
      </div>
    </div>
  );
};

export default DemoCarousel;
