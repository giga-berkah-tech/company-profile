import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/mobile-dev.png";
import benefitTwoImg from "../../public/img/web-dev.png";
import { Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3Icon, BeakerIcon, CircleStackIcon, EyeDropperIcon, WrenchIcon } from "@heroicons/react/16/solid";

const benefitOne = {
  title: "Web Development",
  desc: "The website development that we offer is customization. We tailor every website detail to your brand and specific business needs, so that your website is truly unique and different from the others.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Frontend",
      desc: "VueJs, ReactJS, NextJs",
      icon: <BeakerIcon />,
    },
    {
      title: "Backend",
      desc: "Laravel, NodeJS, Python",
      icon: <BeakerIcon />,
    },
    {
      title: "Utilities",
      desc: "Responsive, Security, Performance, Analytics, SEO, etc.",  
      icon: <BeakerIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mobile Development",
  desc: "The mobile application development that we carry out covers the entire process, from planning, design, development, to launch and maintenance. We ensure your application is ready to use and continuously updated according to market needs.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Android",
      desc: "Java, Kotlin",
      icon: <BeakerIcon />,
    },
    {
      title: "IOS",
      desc: "Swift",
      icon: <BeakerIcon />,
    },
    {
      title: "Hybrid",
      desc: "Flutter, React Native",
      icon: <BeakerIcon />,
    },
  ],
};

const faqdata = [
  {
    question: "What is PT. Giga Berkah Teknologi?",
    answer: "PT. Giga Berkah Teknologi offers high-quality IT solutions supported by a team of experienced experts. We prioritize customer satisfaction and strive to provide the best possible service. With our IT solutions, your business can operate efficiently and effectively. PT. Giga Berkah Teknologi will continue to develop the latest IT solutions to help your business remain competitive in the digital era. With the latest technology, we help you reach the full potential of your business.",
  },
  {
    question: "What services does PT. Giga Berkah Teknologi offer?",
    answer: "We offer website and mobile application development according to your needs",
  },
  {
    question: "Where is PT. Giga Berkah Teknologi located?",
    answer:
      "Jl.Ikan Piranha Perumahan A.Yani Inside Kav.13, RT.04/RW.03, Kota Malang, Jawa Timur 16255",
  }
];


export {benefitOne, benefitTwo, faqdata};
