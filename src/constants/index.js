import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    fridge,
    ott,
    ongoing,
    news
  } from "../assets";

  const bio = {
    name: "Sajal Mahajan",
    roles: [
      "Competitive Programmer",
      "Mobile App Developer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/sajalg364",
    resume:
      "https://drive.google.com/file/d/10f9j7-onuvQYQFRDy97vlBqtGv5t3Tti/view",
    linkedin: "https://www.linkedin.com/in/sajal-mahajan-a58b9524a/",
    twitter: "https://twitter.com/SAJALMAHAJ84389?s=08",
    insta: "https://www.instagram.com/sajal_gupta2/",
    facebook: "https://www.facebook.com/sajalg364",
  };

  const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
          },
          {
          name: "Bootstrap",
          image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "Material UI",
          image:
            "data:image/png;base64,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",
          },
          {
            name: "Tailwind CSS",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          },
          {
            name: "Three.js",
            image:
              "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png",
          },
  
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
      ],
    },
    {
      title: "Android",
      skills: [
        {
          name: "React Native",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "XML",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
        },
        {
          name: "Native Wind",
          image:
            "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
        },
        {
          name: "Android Studio",
          image:
            "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
        },
        {
          name: "Figma",
          image:
            "https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png",
        },
      ],
    },
  ];
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Stack Developer",
      icon: web,
      img: "",
      url: ""
    },
    {
      title: "React.Js Developer",
      icon: creator,
      img: "",
      url: ""
    },
    {
      title: "React Native Developer",
      icon: mobile,
      img: "",
      url: ""
    },
    {
      title: "Data Structures & Algorithms",
      icon: backend,
      img: "data:image/png;base64,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",
      url: "https://leetcode.com/u/sajalg364/"
    },
  ];
  
  const projects = [
    {
      name: "Fridge Insider",
      description:
        "App-based platform that allows users to manage their fridge contents, filtering food items by recency, expiry date, and upcoming expiration, along with notifications for soon-to-expire items. Planned future enhancements involve scheduling for expired food.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: fridge,
      source_code_link: "https://github.com/Antriksh1305/Fridge-Insider",
    },
    
    {
      name: "News App",
      description:
        "Built a customizable news app allowing users to categorize and filter news content for a personalized experience. The app features real-time updates to deliver the latest news.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: news,
      source_code_link: "https://github.com/Sajalg364/News-App",
    },
    {
      name: "OTT App",
      description:
        "Developed an OTT platform empowering users to discover and explore movies effortlessly by providing essential information such as ratings, trailers, reviews, and cast details, enhancing their decision-making process.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: ott,
      source_code_link: "https://github.com/Sajalg364/OTT_APP",
    },
    {
      name: "Chat App",
      description:
        "Developed a real-time chat application empowering users to engage in instant messaging, share files of various formats, and create groups for collaborative communication.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: ongoing,
      source_code_link: "https://github.com/Sajalg364/Chat_App",
    },
  ];

  const education = [
    {
      id: 0,
      img: "https://scontent.fdel25-5.fna.fbcdn.net/v/t39.30808-6/300940919_3311407159130084_3581130512268892008_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jPTkavoAQoEQ7kNvgEV70_L&_nc_ht=scontent.fdel25-5.fna&oh=00_AYCQaudVbJ6ScSEJcKQCJX57cMRdpmW8g2Q8pzIFNiH-xA&oe=6672712F",
      school: "Indian Institute of Information Technology, Surat",
      date: "Nov 2021 - Sep 2025",
      grade: "8.54 CGPA",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at IIIT, Surat. I have completed 5 semesters and have a CGPA of 8.54. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
      school: "C.R.B Public School",
      date: "Apr 2019 - Apr 2020",
      grade: "93.4%",
      desc: "I completed my class 12 high school education at C.R.B Public School, Mainpuri, where I studied Science with Computer Science.",
      degree: "CBSE(XII), Science with Computer",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
      school: "C.R.B Public School",
      date: "Apr 2017 - Apr 2018",
      grade: "87%",
      desc: "I completed my class 10 education at C.R.B Public School, Mainpuri, where I studied Science with Computer Application.",
      degree: "CBSE(X)",
    },
  ];
  
  export { services, projects, bio, skills, education};