import { assets } from "@/assets";

export const projects = [
  {
    name: "Tasty Drop",
    description:
      "A full-stack food delivery project with user-friendly features: food search, multiple payment methods (e.g., Nogod, Bkash), partner business applications, rider job applications, and three distinct dashboards for Admin, Rider, and Partner roles. Plus, a subscription service.",

    techIcons: [
      assets.reactJs,
      assets.expressJs,
      assets.tailwind,
      assets.mongodb,
      assets.redux,
    ],
    image: assets.tasty,
    type: "Team project",
    server_link: "https://github.com/ImranSarkerWeb/tasty-drop-server",
    client_link: "https://github.com/BakiAbdullah/Tasty-drop-client",
    live_link: "https://tasty-drops.web.app/",
  },
  {
    name: "RetrieveX",
    description:
      "RetrieveX is a community-driven platform designed to help individuals report and reclaim lost items. The goal is to create a seamless process for reuniting people with their belongings, making it easier and faster for lost items to find their way back to their rightful owners. Key features include user accounts, detailed reporting for lost and found items, a claim system with ownership verification, an admin dashboard, and a secure login system with password hashing. Users can easily search and filter through reports, and the site supports both dark and light modes for accessibility.",

    techIcons: [
      assets.reactJs,
      assets.prisma,
      assets.tailwind,
      assets.postgresql,
      assets.supabase,
      assets.redux,
      assets.typescript,
    ],
    image: assets.rtx,
    type: "Personal project",
    server_link: "https://github.com/naimur-reza/Lost-And-Found-Server",
    client_link: "https://github.com/naimur-reza/Lost-And-Found-Frontend",
    live_link: "https://lost-and-found-live-swart.vercel.app/",
  },
  {
    name: "Camp Sun Shine",
    description:
      "Web-based platform that allows students to search, Language Courses. There are three  dashboard for three role Instructor, Student and Admin. Also have payment-gateway using stripe for enroll student.",

    techIcons: [
      assets.reactJs,
      assets.expressJs,
      assets.tailwind,
      assets.mongodb,
    ],
    image: assets.campsunshine,
    type: "Personal project",
    server_link: "https://github.com/naimur-reza/Campsunshine-Server",
    client_link: "https://github.com/naimur-reza/Campsunshine-Client",
    live_link: "https://campsunshine-c653c.web.app/",
  },
  {
    name: "Tinker Land",
    description:
      "Web application that enables users to search for trendy toys, Avengers toys, and other toys. Users can also add toys to their cart and checkout using Stripe. Applied authentication using firebase",
    techIcons: [
      assets.reactJs,
      assets.expressJs,
      assets.tailwind,
      assets.mongodb,
      assets.redux,
    ],
    image: assets.tinkerland,
    type: "Personal project",
    server_link: "https://github.com/naimur-reza/TinkerLand-Server",
    client_link: "https://github.com/naimur-reza/TinkerLand-Client",
    live_link: "https://tinkerr-land.web.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "A Next.js website for issue tracking, allowing authenticated users to add, filter by name, date, and status, featuring a dashboard for summaries and the latest issues, with user update and delete capabilities.",
    techIcons: [
      assets.nextJs,
      assets.prisma,
      assets.tailwind,
      assets.mongodb,
      assets.typescript,
    ],
    image: assets.issueTracker,
    type: "Personal project",
    server_link: "https://github.com/naimur-reza/Issue-Tracker-NextJs",
    client_link: "https://github.com/naimur-reza/Issue-Tracker-NextJs",
    live_link: "https://issue-tracker-next-js.vercel.app/",
  },
  {
    name: "Air Cnc",
    description:
      "A hotel booking service web-application. Airbnb clone web-application. Available best hotel's with their best services. User's can book their hotel after make payment",
    techIcons: [
      assets.reactJs,
      assets.expressJs,
      assets.tailwind,
      assets.mongodb,
    ],
    image: assets.aircnc,
    type: "Personal project",
    server_link: "https://github.com/naimur-reza/AirCnc-Server",
    client_link: "https://github.com/naimur-reza/AirCnc-Client",
    live_link: "https://air-cnc-d27d2.web.app/",
  },
  {
    name: "Sessrail",
    description:
      "Sessrail is a regional railway network website, created to address the critical need for rail infrastructure in the region. It provides updates, project details, and interactive features for users to stay informed and engaged with the progress.",
    techIcons: [assets.reactJs, assets.tailwind],
    image: assets.sessrail,
    type: "Client project",
    client_link: "https://github.com/holapepgit/portfolio-1",
    live_link: "https://sessrail.com/",
  },
  {
    name: "CHEF HUNTER",
    description:
      "A Recipe Services Web Application. Where users can search for food based on Chef. Available valuable chef's with their best recipes. User's can bookmark their favorite Foods.",
    techIcons: [
      assets.reactJs,
      assets.expressJs,
      assets.tailwind,
      assets.mongodb,
    ],
    image: assets.cookdens,
    type: "Personal project",
    server_link: "https://github.com/naimur-reza/CHEF_HUNTER_SERVER",
    client_link: "https://github.com/naimur-reza/CHEF-HUNTER-CLIENT",
    live_link: "https://chef-master-pro.web.app/home/",
  },

  {
    name: "Lit Lounge",
    description:
      "A book shop frontend only web-application, where user can find their favorite book and order price. Available valuable books. ",
    techIcons: [
      assets.reactJs,
      assets.expressJs,
      assets.tailwind,
      assets.mongodb,
    ],
    image: assets.booksite,
    type: "Personal project",
    client_link: "https://github.com/naimur-reza/Lit-lounge",
    live_link: "http://dadur-boi.surge.sh/",
  },
];
