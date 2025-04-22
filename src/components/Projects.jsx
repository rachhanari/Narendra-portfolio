import { useFrame, useThree } from '@react-three/fiber';
import { motion } from "framer-motion-3d";
import React, { useEffect, useRef } from 'react';
import { Image, Text } from '@react-three/drei';
import { atom, useAtom } from "jotai";
import { animate, useMotionValue } from 'framer-motion';

export const projects = [
  {
    title: "Nobel school",
    url: "https://www.nobelgurukulschool.org/",
    image: "Images/Nobel.png",
    description: "Empowering young minds through holistic education at Nobel Gurukul – where learning meets excellence."
  },
  {
    title: "Freecodecamp",
    url: "https://github.com/freeCodeCamp/freeCodeCamp.git",
    image: "Images/Freecodecamp.png",
    description: "Join the freeCodeCamp Contributor Community – help millions learn to code while sharpening your own skills."
  },
  {
    title: "Ecommerce Web",
    url: "https://rachhanari.github.io/CartCraft-Ecommerce/",
    image: "/Images/Ecommerce.png",  // Corrected path
    description: "A sleek Ecommerce website offering a smooth shopping experience with diverse products and secure checkout."
  },
  {
    title: "React-utils libary",
    url: "https://www.npmjs.com/package/react-smart-utils",
    image: "Images/React-smart-utls.png",
    description: "Contribute to the React-smart-utils library, an open-source collection of utility functions designed to streamline React development and enhance code reusability."
  },
  {
    title: "Portfolio",
    url: "https://narendra-portfolio-smoky.vercel.app/",
    image: "Images/Portfollio.png",
    description: "Yep this is my website. Thanks for visiting!"
  },
  {
    title: "Esay-Trip",
    url: "https://easy-trip-webpge.vercel.app/",
    image: "/Images/Esay-trip.png",  // Corrected path to image
    description: "Effortless travel planning at your fingertips with Esay-Trip – your ultimate trip companion!"
  },
  {
    title: "Weather-web",
    url: "https://github.com/rachhanari/Weather-App.git",
    image: "Images/Weather.png",
    description: "A weather web app that fetches real-time data using an API to display current conditions and forecasts based on location."
  },  
];

const Project = ({ project, highlighted }) => {
  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group>
      <mesh
        ref={background}
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="#4d5d6d" transparent opacity={0.4} />
      </mesh>

      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />

      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>

      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={`project_${index}`}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : 0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

export default Projects;
