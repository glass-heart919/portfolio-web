// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  FaTelegram,
  FaWhatsapp,
  FaGithub,
  FaHome,
  FaCode,
  FaSkype,
} from "react-icons/fa";
import {
  MdArrowForward,
  MdRecordVoiceOver,
  MdChat,
  MdHomeRepairService,
} from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: FaHome,
    },
    {
      link: "#skills",
      icon: FaCode,
    },
    {
      link: "#services",
      icon: MdHomeRepairService,
    },
    {
      link: "#projects",
      icon: HiOutlineDesktopComputer,
    },
    {
      link: "#testimonials",
      icon: MdRecordVoiceOver,
    },
    {
      link: "#contact",
      icon: MdChat,
    },
  ],
  hero: {
    title: "Senior Full Stack Engineer",
    firstName: "Andrew",
    LastName: "Thomas",
    btnText: "Hire Me",
    image: "/assets/images/Hero/StockCake-Coding Coffee Break_1748580567(1).png",
    hero_content: [
      {
        count: "6+",
        text: "Years of Experience in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React.js",
        para: "Frontend Development",
        logo: "/assets/images/Skills/react.webp",
      },
      {
        name: "Redux",
        para: "State Management",
        logo: "/assets/images/Skills/redux.webp",
      },
      {
        name: "Next.js",
        para: "Full Stack Development",
        logo: "/assets/images/Skills/nextjs.webp",
      },
      {
        name: "Node js",
        para: "Backend Development",
        logo: "/assets/images/Skills/node.webp",
      },
      {
        name: "MySQL",
        para: "Relational Database",
        logo: "/assets/images/Skills/mysql.webp",
      },
      {
        name: "PostgreSQL",
        para: "Relational Database",
        logo: "/assets/images/Skills/postgresql.webp",
      },
      {
        name: "MongoDB",
        para: "Non-relational Database",
        logo: "/assets/images/Skills/mongodb.webp",
      },
      {
        name: "Solidity",
        para: "Smart Contracts",
        logo: "/assets/images/Skills/solidity.webp",
      },
      {
        name: "Web3",
        para: "Web3 integration",
        logo: "/assets/images/Skills/web3.webp",
      },
      {
        name: "Figma",
        para: "UI/UX",
        logo: "/assets/images/Skills/figma.webp",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "As a web developer, my goal is to design and build websites that are visually appealing, user-friendly, and fully functional. I specialize in both the front-end and back-end aspects of web development, which means I have expertise in both the design and technical aspects of building a website. I have a strong understanding of web design principles and am skilled at creating responsive and mobile-friendly websites that work well on a variety of devices.",
        logo: "/assets/images/Services/web.webp",
      },
      {
        title: "Blockchain Development",
        para: "I have expertise in the Solidity programming language, which is commonly used to write smart contracts for the Ethereum blockchain. I also have a strong understanding of blockchain technology and how it can be leveraged to create robust and reliable smart contracts. In my smart contract development projects, I work closely with clients to understand their needs and develop customized contracts that meet their specific requirements. I also perform testing and debugging to ensure the contracts are functional and error-free before deployment.",
        logo: "/assets/images/Services/blockchain.webp",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Snippool",
        image: "/assets/images/Projects/snippool.webp",
        link: "https://www.snippool.xyz/Collections",
        description:
          "Snippool is an NFT AMM inspired by Sudoswap where users can create pools, buy and sell NFTs, add pools to vaults to get rewards.",
        techstack:
          "Next.js, Redux, Mateial UI, Styled Components, Apollo GraphQL, Subgraph, Solidity, Wagmi, Rainbowkit",
      },
      {
        title: "NFT Launchpad",
        image: "/assets/images/Projects/smr_launchpad.webp",
        link: "https://launchpad.iotaevm.snippool.xyz/",
        description:
          "NFT Collection launchapd on IOTA EVM network where users can easily launch NFT collections with custom settings like royalty, affiliate, bulk discount, etc.",
        techstack:
          "Next.js, Redux, Tailwind CSS, Apollo GraphQL, Subgraph, Solidity, Wagmi, Rainbowkit, Nest.js, PostgreSQL, Prisma",
      },
      {
        title: "Octopus Bridge",
        image: "/assets/images/Projects/octopus.webp",
        link: "https://octopusbridge.xyz/",
        description:
          "Octopus Bridge is an application where users can bridge assets between Ethereum and other EVM compatible chains, Bitcoin and Bitcoin L2 networks.",
        techstack:
          "Next.js, Tailwind CSS, Nest.js, Prisma, PostgreSQL, Solidity, Wagmi, RainbowKit, Ether.js, BitcoinJS, Docker, AWS",
      },
      {
        title: "Gydedao",
        image: "/assets/images/Projects/gyde.webp",
        link: "https://gydedao.netlify.app/",
        description:
          "Gydedao is an NFT-gated website that provides users with helpful information about their lives. They offer resources on topics such as investments, savings, insurance, planning for retirement, taxes, and more. They provide resources from experienced professionals who can assist in guiding users through their financial decisions. The website also offers up-to-date news and insights from the financial world.",
        techstack:
          "React.js, Node/Express, MySQL, TailwindCSS, Google Map API, NEAR CLI",
      },
      {
        title: "XDX Exchange",
        image: "/assets/images/Projects/xdx.webp",
        link: "https://xdx-frontend.vercel.app/",
        description:
          "XDX is a decentralized exchange deployed on Avalanche with low swap fees and no price impact. It engages a liquidity shared mechanism called XDX to faciliate trades. XDX is the utility and governance token of the protocol.",
        techstack:
          "React.js, Tailwind CSS, Web3-React, Ethers.js, Solidity, Hardhat, Subgraph",
      },
      {
        title: "NFTb",
        image: "/assets/images/Projects/nftb.webp",
        link: "https://nftb.io/",
        description:
          "NFTb is an NFT marketplace running on Binance Smart Chain. It provides services such as listing, sales and auction of NFTs. It also has DeFi as a service which empowers users to earn passively and support projects with customized staking and farming services. On the other hand, NFT and token launchpad is also part of the platform to help projects and creators launch in a fair way.",
        techstack: "React/Next.js, Node/Express, MongoDB, SCSS, Web3.js, Nginx",
      },
      {
        title: "Kupad Finance",
        image: "/assets/images/Projects/kupad.webp",
        link: "https://ku-pad.netlify.app",
        description:
          "KUPAD is a protocol built on Kucoin blockchain with the sole aim of helping projects raise capital in a decentralized way, an easy approach for both investors and project to either invest or raise funds.",
        techstack: "React.js, Material UI, Styled Components, Ethers.js",
      },
      {
        title: "Rubber Duck Bath Party",
        image: "/assets/images/Projects/rubber_duck.webp",
        link: "https://duck.art/",
        description: "NFT collection of 10, 000 ducks on Ethereum network.",
        techstack: "Solidity, Hardhat",
      },
      {
        title: "ABA Engine",
        image: "/assets/images/Projects/abaengine.webp",
        link: "https://schedule.abaengine.com/",
        description:
          "ABA Engine is a platform for clients to book services of providers depending on each other's availability, authorization, insurance provider, location and other criteria. It has seamless client intake and provider onboarding process.",
        techstack:
          "React.js, Redux, Material UI, Styled Components, Express.js, PostgreSQL, Typeorm, Socket.io, Stripe, Sentry",
      },
      {
        title: "Cibolo",
        image: "/assets/images/Projects/cibolo.webp",
        link: "https://ciboloai.com/",
        description:
          "A web based platform that is designed to help financial firms and advisors enhance portfolio management experience specifically in the alternative investment industry.",
        techstack:
          "React.js, Redux, Material UI, Styled Components, Express.js, PostgreSQL",
      },
      {
        title: "Car Parts Service Platform",
        image: "/assets/images/Projects/carparts.webp",
        link: "https://www.carparts.com/",
        description:
          "CarParts is an online automotive parts store that offers a wide selection of automotive parts, accessories, and tools for cars, trucks, and SUVs. Customers can easily find what they need by searching through the available categories, or by using the search bar to find the right part for their vehicle. The website is easy to navigate, and provides detailed product descriptions and images to help customers make an informed purchase. It also offers customer support, detailed shipping information, and special offers and discounts.",
        techstack:
          "React.js, GSAP, PHP, PostgreSQL, Styled Components, Payment Integration(Paypal, Apple Pay, Google Pay, Credit Card)",
      },
      // {
      //   title: "Gyapu E-commerce",
      //   image: "/assets/images/Projects/gyapu.webp",
      //   link: "https://www.gyapu.com/",
      //   description:
      //     "Gyapu is an online marketplace that provides small businesses with a platform to sell their products. You can find a wide range of products from different categories, such as clothing, home appliances, electronics, books, sports items, and more. Gyapu also offers competitive prices and discounts, making it a great option for bargain hunters. It provides secure payment options and fast delivery, so you can get your purchases quickly.",
      //   techstack:
      //     "React.js, Redux, ASP.NET, PostgreSQL, Material UI, Styled Components, Chart.js",
      // },
      {
        title: "Wedding Band Promotion & Reservation",
        image: "/assets/images/Projects/redsoda.webp",
        link: "https://redsoda.com/",
        description:
          "Redsoda is a website for wedding music band. Customers can visit the website and easily book their performance played by various types of band with harmony of several musical instruments in various parts of the world.",
        techstack: "React.js, Gatsby.js, Wordpress, AWS",
      },
      {
        title: "Insurance Service Platform",
        image: "/assets/images/Projects/veronicas.webp",
        link: "https://veronicasquote.com/",
        description:
          "Application where user get insurance quotes by choosing their insurance category and add required data. It provides various insurance services for automobiles, health, life, home, etc.",
        techstack: "React.js, Ionic, Node/Express, Google Cloud Platform",
      },
    ],
    archieved: [
      {
        title: "Openwaters",
        image: "/assets/images/Projects/openwaters.webp",
        link: "https://openwaters.uk/",
        description:
          "Openwaters is an NFT marketplace on CoreDAO blockchain that supports native token and custom WOOF token to offer, list, buy NFTs",
        techstack:
          "Next.js, Nest.js, PostgreSQL, Wagmi, Viem, TailwindCSS, Subgraph",
      },
      {
        title: "Rooster Wars",
        image: "/assets/images/Projects/rooster.webp",
        link: "https://www.roosterwars.io/",
        description:
          "Rooster Wars is a web3 game with a vision of having fun and rewarding experience. Its mechanics is based on traditional rock paper scissors which makes it one of the comprehensible P2E games in the market",
        techstack: "Solidity, Hardhat, Foundry",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "Andrew has been a great partner throughout the course of our build of our MVP. He was ready to dive right in and learned the NEAR SDK with little guidance, implementing complex features and on schedule within budget. His can do attitude is wonderful and he is very responsive to communications. Would definitely recommend working with him in the future!”",
        img: "/assets/images/Testimonials/max.webp",
        name: "Max Goodman",
        position: "Founder & Chief at Gyde",
        link: "https://www.linkedin.com/in/max-g-33665718/",
      },
      {
        review:
          "“I had the pleasure of working with Andrew on a company website project, where he served as the sole developer. The website was built using React, and Andrew played a crucial role in its development and maintenance from start to finish. \n\nThroughout the project, Andrew demonstrated a strong understanding of web technologies and was able to effectively integrate 3rd party services via their API's. He showed excellent problem-solving skills and was a true team player, consistently displaying a strong work ethic and willingness to take on any challenge. \nI was very impressed with Andrew's skills and dedication to the project, and I look forward to our ongoing work together. He is a valuable asset to any team, and I highly recommend him for any Web development work.”",
        img: "/assets/images/Testimonials/ben.webp",
        name: "Ben Blair",
        position: "Director at TraderDeepDive",
        link: "https://www.linkedin.com/in/ben-blair-6b0b191a/",
      },
      {
        review:
          "Andrew is an experienced developer I really enjoyed working with. While we were working together to explore DeFi stacks, Andrew has demonstrated great problem solving skills and fast execution to navigate both solution domain and tech domain through building working prototypes. I am very impressed his hands-on and system thinking. His high performing work has enabled us to make practical decision quicker as a product engineering team. Whether you are working web2 or web3 for your startup, Andrew is an amazing developer talent and rising tech lead I would like to recommend for any startup team.”",
        img: "/assets/images/Testimonials/hui.webp",
        name: "Hui Huang",
        position: "Entrepreneur & Startup CTO at Skyline Dev Labs",
        link: "https://www.linkedin.com/in/hui-huang-922757124/",
      },
      {
        review:
          "“I've enjoyed working with Andrew on a web3 project. He is a true expert in the field of web3 integration and blockchain technology. His deep knowledge and expertise have been crutial in our project's success. He has an excellent ability to understand complex blockchain concepts and turn them into practical solutions. One of Andrew's best qualities is his proficiency in developing subgraphs. His work in this area has significantly improved our project's data indexing and querying capabilities. I highly recommend Andrew to anyone seeking a skilled and knowledgeable developer in web3 integration, blockchain, and subgraph development.”",
        img: "/assets/images/Testimonials/boston.webp",
        name: "Boston TCHOUKOUA",
        position: "Head Of Development at IotaOrigin UG",
        link: "https://www.linkedin.com/in/boston-tchoukoua-583167105/",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    para: "Are you looking for a full stack developer who can bring your project from concept to deployment? Look no further! With a diverse set of technical skills and the ability to understand and optimize the full technology stack of a project, I am well-equipped to tackle a wide range of challenges. I have experience with both front-end and back-end technologies, and am comfortable working with both established and emerging platforms. I am a problem-solver at heart, and am always looking for ways to improve processes and find creative solutions. I am adaptable and able to learn new technologies as needed, making me a valuable asset to any team. My goal is to exceed your expectations and help bring your project to success. Contact me today to discuss how I can be a part of your next project.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "whiteiceberg1120@gmail.com",
        icon: GrMail,
        link: "mailto:whiteiceberg1120@gmail.com",
      },
      // {
      //   text: "Linkedin",
      //   icon: BsLinkedin,
      //   link: "https://www.linkedin.com/in/Andrew-Thomas-70b153235",
      // },
      {
        text: "AndrewThomas",
        icon: FaGithub,
        link: "https://github.com/glass-heart919",
      },
      // {
      //   text: "+1 231 821 5145",
      //   icon: MdCall,
      //   link: "tel:+1 231 821 5145",
      // },
      {
        text: "+1 231 821 5145",
        icon: FaWhatsapp,
        link: "https://wa.me/12318215145",
      },
      {
        text: "@GlassHeart0919",
        icon: FaTelegram,
        link: "https://t.me/GlassHeart0919",
      },
      // {
      //   text: "live:.cid.382c6bd556a26d6b",
      //   icon: FaSkype,
      //   link: "https://join.skype.com/invite/BpslfqV0kqaa",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
