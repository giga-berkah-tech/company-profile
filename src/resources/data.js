import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/mobile-dev.webp";
import benefitTwoImg from "../../public/img/web-dev.webp";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  BeakerIcon,
  CircleStackIcon,
  EyeDropperIcon,
  WrenchIcon,
} from "@heroicons/react/16/solid";

export const benefitOne = {
  title: "benefits.web.title",
  desc: "benefits.web.desc",
  image: benefitTwoImg,
  bullets: [
    {
      title: "benefits.web.bullets.frontend.title",
      desc: "benefits.web.bullets.frontend.desc",
      icon: <BeakerIcon />,
    },
    {
      title: "benefits.web.bullets.backend.title",
      desc: "benefits.web.bullets.backend.desc",
      icon: <BeakerIcon />,
    },
    {
      title: "benefits.web.bullets.features.title",
      desc: "benefits.web.bullets.features.desc",
      icon: <BeakerIcon />,
    },
  ],
};

export const benefitTwo = {
  title: "benefits.mobile.title",
  desc: "benefits.mobile.desc",
  image: benefitOneImg,
  bullets: [
    {
      title: "benefits.mobile.bullets.flutter.title",
      desc: "benefits.mobile.bullets.flutter.desc",
      icon: <BeakerIcon />,
    },
    {
      title: "benefits.mobile.bullets.android.title",
      desc: "benefits.mobile.bullets.android.desc",
      icon: <BeakerIcon />,
    },
    {
      title: "benefits.mobile.bullets.ios.title",
      desc: "benefits.mobile.bullets.ios.desc",
      icon: <BeakerIcon />,
    },
  ],
};

export const getFaqData = () => [
  {
    question: "faq.what.question",
    answer: "faq.what.answer",
  },
  {
    question: "faq.services.question",
    answer: "faq.services.answer",
  },
  {
    question: "faq.location.question",
    answer: "faq.location.answer",
  },
  {
    question: "faq.why.question",
    answer: "faq.why.answer",
  },
];
