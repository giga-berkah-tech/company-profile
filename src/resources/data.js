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
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  BeakerIcon,
  CircleStackIcon,
  EyeDropperIcon,
  WrenchIcon,
} from "@heroicons/react/16/solid";

const benefitOne = {
  title: "Web Development",
  desc: "At Giga Berkah Teknologi, our web development services offer fully customized solutions that are crafted to fit your brand and business requirements. We bring a unique touch to every detail, ensuring that your website not only stands out but also aligns with your company's identity and goals.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Frontend Technologies",
      desc: "Utilizing modern frameworks like React, Next.js, and Vue.js, we create dynamic and engaging user interfaces that make a lasting impression.",
      icon: <BeakerIcon />,
    },
    {
      title: "Backend Solutions",
      desc: "Our backend development with Laravel, Node.js, and Python ensures your website has a reliable and scalable foundation.",
      icon: <BeakerIcon />,
    },
    {
      title: "Key Features",
      desc: "With Giga Berkah Teknologi, you get more than just a website. We emphasize responsive design, security, performance, analytics, SEO, and more for a comprehensive solution.",
      icon: <BeakerIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mobile Development",
  desc: "Giga Berkah Teknologi provides end-to-end mobile app development, from planning and design to development, launch, and ongoing support. We make sure your app is ready for the market and continuously evolves to stay ahead of the competition.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Flutter Development",
      desc: "Our expertise in Flutter allows us to build high-quality cross-platform apps for Android and iOS, combining efficiency with robust performance.",
      icon: <BeakerIcon />,
    },
    {
      title: "Native Android",
      desc: "With Giga Berkah Teknologi, you can also opt for native Android development using Java and Kotlin for a highly tailored mobile experience.",
      icon: <BeakerIcon />,
    },
    {
      title: "Native iOS",
      desc: "Our Swift-based native iOS development ensures an optimized, seamless experience for iPhone and iPad users.",
      icon: <BeakerIcon />,
    },
  ],
};

const faqdata = [
  {
    question: "What is PT. Giga Berkah Teknologi?",
    answer:
      "PT. Giga Berkah Teknologi is an Indonesia-based company that provides high-quality IT solutions, specializing in web and mobile app development. Our experienced team is dedicated to delivering customized services using the latest technologies, including React, Next.js for web, and Flutter for mobile. We also offer native Android and iOS development, as well as backend solutions with Node.js and Python. We prioritize customer satisfaction and continually innovate to help businesses stay competitive in the digital era.",
  },
  {
    question: "What services does PT. Giga Berkah Teknologi offer?",
    answer:
      "Our services include end-to-end development of web and mobile applications, tailored to your business needs. We specialize in technologies like React, Next.js, and Flutter, and can also provide native Android and iOS development. Additionally, we offer backend development using Node.js and Python.",
  },
  {
    question: "Where is PT. Giga Berkah Teknologi located?",
    answer:
      "We are located in Malang, a well-known student city in Indonesia, at Jl. Ikan Piranha Perumahan A.Yani Inside Kav.14, RT.04/RW.03, Kota Malang, Jawa Timur 16255. Our strategic location makes it easy to recruit skilled talent from prestigious universities in the area.",
  },
  {
    question: "Why choose PT. Giga Berkah Teknologi?",
    answer:
      "Choosing PT. Giga Berkah Teknologi means partnering with a company that values quality, innovation, and customer satisfaction. Our team consists of experts from top universities, and we are committed to helping your business achieve its full potential through tailored IT solutions that drive efficiency and growth.",
  },
];

export { benefitOne, benefitTwo, faqdata };
