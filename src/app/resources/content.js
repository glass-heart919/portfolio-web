const person = {
  firstName: 'Nicholas',
  lastName: 'Hearne',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Senior Software Engineer',
  avatar: '/images/avatar.jpg',
  city: 'Watauga, Texas, US',
  location: 'America/Chicago', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of creativity and
      engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'nicholas.hearne.dev@gmail.com',
    icon: 'email',
    link: 'mailto:nicholas.hearne.dev@gmail.com',
  },
  {
    name: '+1 (224) 328 1725',
    icon: 'phone',
    link: 'tel:+12243281725',
  },
  // {
  //   name: 'https://linkedin.com/in/Nicholas-Hearne',
  //   icon: 'linkedin',
  //   link: 'https://linkedin.com/in/Nicholas-Hearne',
  // },
  {
    name: 'Github',
    icon: 'github',
    link: 'https://github.com/glass-heart919',
  },
  {
    name: 'Discord',
    icon: 'discord',
    link: 'https://discord.com/users/present.02919_80952',
  },
  // {
  //   name: 'Telegram',
  //   icon: 'telegram',
  //   link: '"https://t.me/@bLaze_ok',
  // },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Senior Full Stack Developer</>,
  subline: (
    <>
      Hi, I’m Nicholas Hearne — a Senior Full Stack Developer passionate about building high-performance web applications
      with modern JavaScript frameworks and TypeScript. I’ve developed everything from AI-integrated tools and eCommerce
      platforms to data-driven dashboards, always aiming for clean architecture, intuitive UX, and real-world impact.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.city}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        I’m Nicholas Hearne, a Senior Software Engineer based in Conroe, Texas. I love building sleek, scalable web apps
        and exploring how AI can make products smarter and more intuitive. Whether it’s dashboards, eCommerce, or
        interactive tools, I bring ideas to life with clean code and thoughtful design.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Altos Research',
        timeframe: '01/2024 - 05/2025',
        role: 'Senior Full Stack Developer',
        achievements: [
          <>
            Slashed dashboard load times by 30% through server-side pagination, Redis caching, and lazy data fetching—delivering real-time insights at
            scale for data-intensive workflows.
          </>,
          <>
            Engineered backend services with Java, Python, and Django, supporting high-availability systems for enterprise clients.
          </>,
          <>
            Spearheaded CI/CD automation using Docker and GitHub Actions, reducing release cycle time by 40% and ensuring consistent deployments
            across environments.
          </>,
          <>
            Re-engineered frontend systems with Next.js and Tailwind CSS to ensure pixel-perfect responsiveness, driving a 35% increase in user
            satisfaction across devices.
          </>,
          <>
            Utilized Cypress to automate UI testing workflows, improving frontend reliability and catching visual regressions early in development.
          </>,
          <>
           Mentored junior developers on modern full-stack best practices, accelerating team productivity and elevating overall code quality.
          </>,
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-01.png',
            alt: 'Altos',
            width: 30,
            height: 15,
          },
        ],
      },
      {
        company: 'Liongard',
        timeframe: '05/2022 – 11/2023',
        role: 'Software Engineer',
        achievements: [
          <>
            Spearheaded the development of a custom internal application that streamlined operational processes and saved 15% in manual work time.
          </>,
          <>
            Migrated static React pages to Next.js to enable server-side rendering and dynamic routing, improving load times by 35%.
          </>,
          <>
            Improved user interfaces for client-facing websites, implementing React and JavaScript solutions to enhance the user experience.
          </>,
          <>
            Worked in a cross-functional team to deliver high-quality technical solutions that contributed to the company’s digital marketing goals.
          </>,
          <>
            Utilized Python and Django to manage back-end services, ensuring data was handled efficiently and securely.
          </>,
          <>
            Maintained and enhanced legacy codebases, implementing patches and updates to improve system performance and security.
          </>,
          <>
            Led a migration project from legacy AngularJS to modern Angular 14, reducing tech debt and improving maintainability by 40%.
          </>,
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-02.png',
            alt: 'Liongard',
            width: 30,
            height: 15,
          },
        ],
      },
      {
        company: 'Meltwater, Inc',
        timeframe: '07/2020 – 04/2022',
        role: 'Senior React Developer',
        achievements: [
          <>
            Led the architecture, design, and development of secure, performant single-page frontend web applications using React, Angular, and ES6
            within Agile environments.
          </>,
          <>
            Planned, designed, and implemented user interfaces with TypeScript, React, React Native, Next.js, styled-components, Material UI, and Tailwind
            CSS on AWS EC2.
          </>,
          <>
            Analyzed business models and logical specifications to design and build internet solutions using various technologies.
          </>,
          <>
            Automated NPM package publishing with GitHub Actions, streamlining the build, testing, and deployment process.
          </>,
          <>
            Implemented React components with hooks for reusability, creating singular modal components for user login and email.
          </>,
          <>
            Spearheaded the creation of over 200 React UI components using React Hook, TypeScript, and Tailwind CSS, enhancing the overall user
            experience.
          </>,
          <>
            Developed dynamic and interactive websites using React, Redux, TypeScript, Node.js, Prisma, and GraphQL, resulting in a
            30% increase in sales revenue and page views.
          </>
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-03.png',
            alt: 'Meltwater',
            width: 30,
            height: 15,
          },
        ],
      },
      {
        company: 'Kanda Software',
        timeframe: '02/2018 – 04/2020',
        role: 'Senior MERN Developer',
        achievements: [
          <>
            Built a customer support platform using Node.js, Express.js, and React, improving ticket resolution time by 30%.
          </>,
          <>
            Implemented real-time notifications with WebSockets, enhancing user engagement and satisfaction.
          </>,
          <>
            Enhanced server efficiency with AWS Lambda for background task processing during peak loads.
          </>,
          <>
            Designed secure authentication systems using JWT and OAuth2, safeguarding sensitive user data.
          </>,
          <>
            Created reusable React components, reducing development time and code redundancy.
          </>,
          <>
            Achieved 98% test coverage using Jest and Cypress, ensuring platform stability and fewer bugs.
          </>,
          <>
            Optimized AWS infrastructure, cutting costs by 25% without sacrificing performance.
          </>,
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-04.png',
            alt: 'Kandasoft',
            width: 30,
            height: 15,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Education',
    institutions: [
      {
        name: 'University of Texas at Arlington (UTA)',
        description: <>Bachelor of Science in Computer Science</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    // {
    //   src: '/images/gallery/img-01.jpeg',
    //   alt: 'image',
    //   orientation: 'vertical',
    // },
    {
      src: '/images/gallery/img-02.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },

    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-05.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },

    // {
    //   src: '/images/gallery/img-06.jpeg',
    //   alt: 'image',
    //   orientation: 'vertical',
    // },
    {
      src: '/images/gallery/img-07.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },
    // {
    //   src: '/images/gallery/img-08.jpeg',
    //   alt: 'image',
    //   orientation: 'vertical',
    // },
    {
      src: '/images/gallery/img-09.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },

    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    // {
    //   src: '/images/gallery/img-11.jpeg',
    //   alt: 'image',
    //   orientation: 'vertical',
    // },
    {
      src: '/images/gallery/img-12.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpeg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
