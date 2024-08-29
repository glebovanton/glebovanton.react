import IconHat from "@/app/components/icons/IconHat";
import IconSuitcase from "@/app/components/icons/IconSuitcase";
import IconVue from "@/app/components/icons/IconVue";
import insiderImage from "@/assets/images/insider.jpg";
import politicoImage from "@/assets/images/politico.jpg";
import comicsImage from "@/assets/images/comics.jpg";
import awsImage from "@/assets/images/aws.jpg";
import life1Image from "@/assets/images/life/life-1.jpg";
import life2Image from "@/assets/images/life/life-2.jpg";
import life3Image from "@/assets/images/life/life-3.jpg";
import life4Image from "@/assets/images/life/life-4.jpg";
import life5Image from "@/assets/images/life/life-5.jpg";
import life6Image from "@/assets/images/life/life-6.jpg";

export const linksData = [
  {
    name: "home",
    hash: "#home",
    title: "Home",
  },
  {
    name: "home",
    hash: "#about",
    title: "About",
  },
  {
    name: "home",
    hash: "#projects",
    title: "Projects",
  },
  {
    name: "home",
    hash: "#skills",
    title: "Skills",
  },
  {
    name: "home",
    hash: "#experience",
    title: "Experience",
  },
  {
    name: "home",
    hash: "#contact",
    title: "Contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer in Insider",
    location: "Lithuania",
    description:
      "2021-2022 - The company has expanded its workforce and opened offices worldwide (28 countries with more than 700 employees from 41 different nationalities). Our goal was to improve onsite conversions with predictions." +
      "<br />• Performance and page loading time improvement: Page loading delays were reduced from 30 seconds to 3 seconds (in some cases)." +
      "<br />• Error tracking and debugging: We prioritized SLA tasks for app error tracking and debugging using Sentry." +
      "<br />• Design consistency: Ensured consistency across multi-product applications." +
      "<br />• Code refactoring: Refactored old components and developed a new design system across all services, reducing useless code." +
      "<br />These efforts enabled us to raise $121 million in our Series D funding round, elevating the company's valuation to over $1 billion and achieving unicorn status." +
      "<br />2023-2024 - Our team focused on working more cohesively with clients to achieve an outstanding customer experience. KR included: " +
      "<br />• Domain zones and sender management interface: Improved for creating email campaigns." +
      "<br />• AI text generation across all products: Integrated AI for subject and preheader generation with a common interface for other teams to meet customer requests." +
      "<br />• New campaign interface: Created a new interface for promotional and transactional campaigns." +
      "<br />• Gmail and promotions annotations: Implemented to make emails stand out from others, based on customer requests." +
      "<br />• RSS feed multi-naming interface: Developed a new interface based on partner requests to enhance tracking of RSS campaigns with an outstanding visual experience." +
      "<br />• AMP layout integration in templates: This allows for improved template loading times by leveraging AMP's non-blocking loading and prerendering technology." +
      "<br />• Front-end page accessibility: Began developing and discussing implementation across all services." +
      "<br />These efforts helped us secure $105M in investment to accelerate our M&A strategy. In 2023, Insider became the easiest platform to set up a campaign with zero downtime, thanks to our improved onboarding interface." +
      "<br />2024-2025 - we continue enhancing the customer experience with the following plans: " +
      "<br />• Localization feature: Add localization features in email services across all steps of campaign creation, allowing customers to create campaigns in multiple languages." +
      "<br />• Email template library: Create a new email template library to help customers store prepared templates from previous campaigns, saving time on creating new campaigns from scratch.",
    icon: IconVue,
    date: "2021 - present",
  },
  {
    title: "Front-End Developer in Politico",
    location: "Arlington, Virginia, U.S",
    description:
      "In 2019 our team added Regulatory Compass to its suite of policy monitoring tools. The regulation tracker provides visibility into the opaque rulemaking process. It was also the first time Pro users could add their own data to the platform by setting and changing priority and stance for tracked rules.\n" +
      "In 2020 we overhauled our interface to give policy professionals a more intuitive, intelligent, and data-driven experience that delivers personalized content, recommendations, and intel tailored to what Pros need when they need it." +
      "We also redesigned the interface in terms of accessibility, which is a different approach to FE product development.",
    icon: IconVue,
    date: "2019 - 2021",
  },
  {
    title: "Full-stack Developer in Beyondtimecomics",
    location: "Duarte, California, U.S",
    description:
      "I developed this web application (comics store and reader) from scratch. This project helped me gain foundational skills in client communication and allowed me to upskill to a full-stack developer.",
    icon: IconSuitcase,
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "",
    description:
      "I have four years of experience as a freelance front-end developer. During this time, I gained extensive knowledge and completed various courses and trainings, earning several certificates. As a result, I have developed numerous websites, including: https://himmelzimmer.com, https://endymed.com, https://www.aphidlondon.com, https://exclusivebar.by, https://verba.by, https://cassette.by, https://swuden.by.\n" +
      "<a target='_blank' class='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' href='https://drive.google.com/drive/folders/0B8XDEQCTNc14dVRIRi03akctb0U?resourcekey=0-LS2NH5mj6HPdVsd9TYCPrw&usp=sharing'>My certificates</a>",
    icon: IconSuitcase,
    date: "2016 - 2019",
  },
  {
    title: "Graduated university and trainings",
    location: "Lithuania, Belarus",
    description:
      "I graduated with a degree in Design Engineering after six years of university study. Following that, I taught myself the basics of web development and completed training programs at Epam, RSSchool, and TeachMeSkills.",
    icon: IconHat,
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    name: "Insider",
    description:
      "Insider, also known as Useinsider, is a private company founded in 2012. The company specializes in marketing technology, offering a range of solutions like customer data platforms, journey orchestration, personalization engines, and predictive marketing tools to deliver experiences across channels like Web, App, Web Push, Email, SMS, and Messaging Apps (WhatsApp, Facebook Messenger, RCS). It serves over 1,200 customers globally, including major brands like Samsung, GAP, Vodafone, IKEA, and Toyota​ (PitchBook)​​ (Craft.co)​.",
    skills: [
      "AWS",
      "Docker",
      "Figma",
      "Git",
      "Jira",
      "Storybook",
      "TypeScript",
      "Unit testing",
      "Vue",
      "Vuex",
      "JS",
      "HTML",
      "CSS",
    ],
    date: "December 27, 2021",
    image: insiderImage,
    url: "https://useinsider.com/",
  },
  {
    name: "Politico",
    description:
      "An American political journalism company based in Arlington County, Virginia, that covers politics and policy in the United States and internationally. It distributes content through its website, television, printed newspapers, radio, and podcasts. Its coverage in Washington, D.C. includes the U.S. Congress, lobbying, the media, and the presidency.",
    skills: [
      "Accessibility",
      "Browserstack",
      "CSS",
      "Figma",
      "Git",
      "HTML",
      "JS",
      "Jest",
      "Jira",
      "Snapshot testing",
      "Storybook",
      "Unit testing",
      "Vue",
      "Vuex",
      "Npm",
      "Yarn",
      "Zeplin",
    ],
    date: "August 1, 2019 → December 24, 2021",
    image: politicoImage,
    url: "https://www.politicopro.com/about/",
  },
  {
    name: "Beyondtimecomics",
    description: "Project for the sale of comics with a reader in SPA concept.",
    skills: ["Figma", "Git", "Jest", "Jira", "Vue", "Vuex", "Yarn"],
    date: "July 1, 2018 → December 1, 2019",
    image: comicsImage,
    url: "https://beyondtimecomics.com/",
  },
  {
    name: "Study Project (The Rolling Scopes School, Epam)",
    description:
      "Here I learned AWS + Node.js and developed app + API with Node => Express => Nuxt",
    skills: ["Figma", "Git", "Jest", "Jira", "Vue", "Vuex", "Yarn"],
    date: "August 20, 2021",
    image: awsImage,
    url: "https://github.com/glebovanton/shop-vue-vuex-cloudfront",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue 3",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Vuex",
  "GraphQL",
  "AWS",
  "Express",
  "PostgreSQL",
  "Docker",
  "Storybook",
  "Git",
] as const;

export const aboutImagesData = [
  [
    { image: life1Image, class: "w-1/2 p-1 md:p-2" },
    { image: life2Image, class: "w-1/2 p-1 md:p-2" },
    { image: life3Image, class: "w-full p-1 md:p-2" },
  ],
  [
    { image: life4Image, class: "w-full p-1 md:p-2" },
    { image: life5Image, class: "w-1/2 p-1 md:p-2" },
    { image: life6Image, class: "w-1/2 p-1 md:p-2" },
  ],
] as const;
