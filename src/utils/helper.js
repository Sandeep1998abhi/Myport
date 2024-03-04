import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";

import { TbBrandLeetcode } from "react-icons/tb";
import { SiReplit } from "react-icons/si";

import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/sandeep-kumar-203875193",
    color: "#0072b1",

  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    url: "https://github.com/Sandeep1998abhi",
    color: "#fff",
  },
  {
    id: `leedcode-${Date.now()}`,
    Icon: TbBrandLeetcode,
    url: "https://leetcode.com/Sandy1998/",
    color: "#0077B5",
  },
  {
    id: `sireplit-${Date.now()}`,
    Icon: SiReplit,
    url: "https://replit.com/@SandeepKumar257",
    color: "#ff0000",
  },
  
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `a${Date.now()}`,
    name: "Food Restaurant",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/Sandeep1998abhi/Restaurant",
  },
  {
    id: `b${Date.now()}`,
    name: "News",
    imgSrc: "https://img.freepik.com/premium-photo/virtual-set-studio-green-footage-3d-illustration_327072-1333.jpg?w=826",
    gitURL: "https://github.com/Sandeep1998abhi/NEWSFEED---Javascript-Project---c4zcbzprrlwa",
  },
  {
    id: `c${Date.now()}`,
    name: "Logitech Mouse",
    imgSrc: "https://e0.pxfuel.com/wallpapers/99/559/desktop-wallpaper-logitech-s-new-g-pro-wireless-gaming-mouse-could-be-its-best-gaming-mouse-yet.jpg",
    gitURL: "https://github.com/Sandeep1998abhi/Mouse.pro1",
  },
  {
    id: `d${Date.now()}`,
    name: "Movie Website",
    imgSrc: "https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?w=826&t=st=1708840547~exp=1708841147~hmac=215c21901abf7f1cd668ecfc9cc41056e6811d11c5ae430b67cd66d7686a929f",
    gitURL: "https://github.com/Sandeep1998abhi/Movieweb",
  },
  {
    id: `e${Date.now()}`,
    name: "Upsilon Perfume",
    imgSrc: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gitURL: "https://github.com/Sandeep1998abhi/Upsilon-Perfume",
  },
  {
    id: `f${Date.now()}`,
    name: "Animation landing page",
    imgSrc: "https://img.freepik.com/free-vector/movie-night-cartoon-landing-page_107791-6072.jpg?t=st=1708838060~exp=1708841660~hmac=e4b06cf890522c2f1d50026d7da6bf1d4dd8fbcd0c469f4c3c939ee70be0caf8&w=826",
    gitURL: "https://github.com/Sandeep1998abhi/Movie.web",
  },
];
