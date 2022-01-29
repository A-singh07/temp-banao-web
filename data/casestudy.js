import Achievement1 from "../public/assets/images/achievement-logo-1.svg";
import playstore from "../public/assets/icons/playstore.png";
import users from "../public/assets/icons/people.png";
import eyeIcon from "../public/assets/icons/eye-icon.png";
import double_check_icon from '../public/assets/images/itemlogo(3).svg'
import profile1 from '../public/assets/images/user-1.png'
import profile2 from '../public/assets/images/profile1.jpg'
import profile3 from '../public/assets/images/profile2.jpeg'
import green_check_icon from '../public/assets/images/check.svg'
import project1 from '../public/assets/images/Thumbnail.jpg'
import project2 from '../public/assets/images/Thumbnail2.jpg'
import Blog1 from "../public/assets/images/Blog.jpg";
import Blog2 from "../public/assets/images/Blog2.png";
import Blog3 from "../public/assets/images/Blog3.png";
import Bulb from "../public/assets/images/bulb.svg";
import Tool from "../public/assets/images/developer_mode.svg";
import Merge from "../public/assets/images/merge.svg";
import Engineer from "../public/assets/images/engineer.svg";

import atgBanner from "../public/assets/images/casestudy/ATGCover.png"

export const developmentData = {
  article: {
    articleBanner: atgBanner.src,
    title: "HappiMynd",
    writer: "Banao",
    date: " Dec 17, 2020",
    para: [
      "The Mac mini has always been Apple’s most flexible desktop computer.Sure, most people go for the traditional experience and plug in a display, mouse, and keyboard — but you can also have it serve as a home theater PC, or put it to work with professional photo or audio editing, or turn a group of minis into a server farm. Apple opened new  possibilities for the mini with the big upgrade it got in 2018, and two years later."
    ],
  },
  achievement_data: [
    { icon: Achievement1.src, downloads: "40,000+", platform: "App Store Downloads" },
    { icon: Achievement1.src, downloads: "1,50,000+", platform: "Play store download" },
    { icon: Achievement1.src, downloads: "1,000+", platform: "Users in 2020" },
    { icon: Achievement1.src, downloads: "100+", platform: "Psychologists team" },
  ],
  challenge_data: {
    title: "Challenges",
    subtitle:
      "Each and every business needs to have an aspect evolution in their Business Model as a Survival of the Fittest.",
    para: [
      {
        title: "Architect the VAST & COMPLEX vision",
        text: "It has been tough to shape the vast vision of the client into the current system, workflow architecture and manage business logic to provide the best outcome.",
      },
      {
        title: "Continuous monitoring of System",
        text: "Keeping the system all time up 24x7 without any downtime of the website even in the high traffic.",
      },
      {
        title: "Innovative Algorithms",
        text: "Innovative algorithm to suggest restaurants and dishes to users based on their order, Browsing History.",
      },
    ],
  },
  features_data: [
    {
      logo: double_check_icon.src,
      title: "Mindfulness platform",
    },
    { logo: double_check_icon.src, title: "Automated assessment reports" },
    { logo: double_check_icon.src, title: "Calendar Blocking" },
    {
      logo: double_check_icon.src,
      title: "Complex mindfulness algorithms",
    },
    { logo: double_check_icon.src, title: "Payment Gateway" },
  ],
  outcome_data: {
    title: "Outcome",
    subtitle:
      "Each and every business needs to have an aspect evolution in their Business Model as a Survival of the Fittest.",
    para: [
      {
        title: "Architect the VAST & COMPLEX vision",
        text: "It has been tough to shape the vast vision of the client into the current system, workflow architecture and manage business logic to provide the best outcome.",
      },
      {
        title: "Continuous monitoring of System",
        text: "Keeping the system all time up 24x7 without any downtime of the website even in the high traffic.",
      },
      {
        title: "Innovative Algorithms",
        text: "Innovative algorithm to suggest restaurants and dishes to users based on their order, Browsing History.",
      },
    ],
  },
  testimony_data: [
    {
      val: 1,
      src: profile1.src,
      name: "Virat Kohli",
      work: "Captain, RCB",
      review: {
        title: "It was a great experience!",
        star: "5",
        comment:
          "Elit sint do laboris sunt duis consequat. Veniam nulla dolore reprehenderit fugiat. Aute est occaecat nulla occaecat mollit sint ad est tempor commodo laboris. Occaecat Lorem irure culpa ea aute consectetur sit et amet sit ut nisi incididunt aliquip. Mollit duis dolore aliqua irure esse ad aliquip consequat quis. Adipisicing culpa esse in eiusmod velit laboris.",
      },
    },
    {
      val: 2,
      src: profile2.src,
      name: "Cristiano Ronaldo",
      work: "UX Designer, ATG",
      review: {
        title: "It was a great experience!",
        star: "3",
        comment:
          "Elit sint do laboris sunt duis consequat. Veniam nulla dolore reprehenderit fugiat. Aute est occaecat nulla occaecat mollit sint ad est tempor commodo laboris. Occaecat Lorem irure culpa ea aute consectetur sit et amet sit ut nisi incididunt aliquip. Mollit duis dolore aliqua irure esse ad aliquip consequat quis. Adipisicing culpa esse in eiusmod velit laboris.",
      },
    },
    {
      val: 3,
      src: profile3.src,
      name: "Novak Djokovic",
      work: "UI Designer, Google",
      review: {
        title: "Not satisfied",
        star: "1",
        comment:
          "Dolore aliqua cupidatat ex excepteur non eiusmod laborum mollit et consectetur. Amet id esse sint eu. Elit culpa in in adipisicing laboris. Lorem dolor aute laborum voluptate laboris sunt nulla aliquip ipsum ut adipisicing velit. Ullamco culpa laboris laboris cillum dolore ullamco labore ullamco nisi duis mollit. Ea labore commodo ad magna esse. Laboris eiusmod amet et deserunt et quis id.",
      },
    },
  ],
  related_projects_data: [
    {
      src: project1.src,
      title: 'Cola Cola Website',
    },
    {
      src: project2.src,
      title: 'Pokemon Go App',
    },
    {
      src: project1.src,
      title: 'Pokemon Go App',
    },
  ],
  counts_data: [
    {
      downloads: "200+",
      category: "Team Size",
    },
    {
      downloads: "500+",
      category: "Clients worldwide",
    },
    {
      downloads: "1000+",
      category: "Projects",
    },
  ],
  form_data: [
    {
      logo: green_check_icon.src,
      title: "45 minutes of free consultation",
    },
    {
      logo: green_check_icon.src,
      title: "A strict non-disclosure agreement",
    },
    {
      logo: green_check_icon.src,
      title: "Free market & competitive analysis",
    },
    {
      logo: green_check_icon.src,
      title: "Suggestions on revenue models & planning",
    },
    {
      logo: green_check_icon.src,
      title: "Detailed feature list document",
    },
    {
      logo: green_check_icon.src,
      title: "No obligation proposal",
    },
    {
      logo: green_check_icon.src,
      title: "Action plan to kick start your project",
    },
  ],
  blogs_data: [
    {
      src: Blog1.src,
      title: "How much does React Native App Development Cost?",
    },
    {
      src: Blog2.src,
      title: "Less Talked About React Native App Development Considerations",
    },
    {
      src: Blog3.src,
      title: "React Native vs Native: What to choose for App Development",
    },
  ],
  faq_data: [
    {
      question: "Can React Native be used for both web and mobile?",
      answer:
        "Commodo qui ullamco excepteur reprehenderit duis qui aliquip aute deserunt reprehenderit ut mollit commodo ex. Voluptate qui sint amet id tempor aliqua fugiat sit officia. Officia ullamco elit anim ipsum mollit esse deserunt proident adipisicing dolor. Deserunt labore quis esse ea sit ex do est Lorem. Nisi mollit officia anim officia.",
    },
    {
      question: "How long does it take to build a React Native App?",
      answer:
        "React Native is a JavaScript library that allows app developers to construct apps that closely resemble native apps in terms of appearance, feel, and performance. It is built using the same basic UI components as standard iOS and Android apps.",
    },
    {
      question: "How can I develop React Native App myself?",
      answer:
        "Non dolore occaecat Lorem ut aute laboris. Consequat aute occaecat excepteur consequat ea. Adipisicing enim nulla et culpa anim incididunt minim dolor cillum. Enim veniam qui dolore nostrud amet aliquip Lorem cillum aute.",
    },
    {
      question: "What about Kotlin?",
      answer:
        "Laborum eu ipsum consequat id ullamco elit velit ad nisi voluptate ut ea elit elit. Sit nulla nostrud in in commodo quis ipsum. Est id proident quis ex cupidatat Lorem sit exercitation cupidatat minim culpa velit ex. Sunt ea amet elit nostrud ea ipsum. Est cillum ullamco enim labore. Labore sunt incididunt quis do veniam. Nostrud fugiat id in do minim fugiat exercitation deserunt do in.",
    },
    {
      question: "Will it work on iOS App?",
      answer:
        "Officia non sunt ad id eiusmod tempor reprehenderit minim velit esse.Laboris cillum cupidatat aliqua ea nulla ipsum in velit incididunt ipsum commodo ipsum.",
    },
  ]
}


export const socialmediaData = {
  article: {
    articleBanner: atgBanner.src,
    title: "UI/UX Case Study for Across The Globe",
    writer: "Banao",
    date: " Dec 17, 2020",
    para: [
      "Across The Globe (ATG) is a social networking platform that brings individuals from all around the globe together to connect and collaborate. Make a connection with others that have similar interests or career fields to you.",
      'ATG helps you look for internships, jobs, and get answers to your questions, in addition to building connections. ATG also allows you to find a group that is related to your pursuits. You can learn about a career fair or other related events. We at ATG can also assist you in broadening your horizons of knowledge because the professionals on our platform write articles in fields in which they excel, which you can access.',
    ],
    para_list: [],
  },
  achievement_data: [
    { icon: playstore.src, downloads: "50,000+", platform: "Play store downloads" },
    { icon: users.src, downloads: "15,000+", platform: "Users in 2020" },
    { icon: eyeIcon.src, downloads: "10X", platform: "Retention on platform" },
  ],
  challenge_data: {
    title: "Challenges",
    introPara: "People are more likely to stay on a website if the UI/UX is good. Identifying the issues was the first step. Some of the flaws we encountered were applying for internships directly from the post, in publishing an article, and in managing the jobs we had already applied for.",
    subtitle: "",
    para: [
      {
        title: "Unimpactful color scheme",
        text: "The primary color on the platform was green. With green, as the main choice, the whole appearance of the page was mundane and monotonous. It was not the right choice for a platform that is focused on profession, clean, calm, recruitment, corporate. A much more attractive color palette was needed to attract the natural sense of the visitors. The green was giving senses like nature, ecological business, tourism. Instead contrasting solid colors following a theme was needed to shape the page for a more professional cut.",
      },
      {
        title: "User experience was not on point",
        text: "Every simple thing was two or three clicks away. The UX was not impactful. The user had to find the things in the app, sometimes it was confusing if the feature does exist on the platform or not?, figuring out the basics on the page was a tedious task. For example, if a user sees a job post, he can’t directly apply to that post, the user needs to open the post first scroll to the bottom, and then click apply. Fixed, high-resolution headers were making it difficult for mobile users to navigate through the page.",
      },
      {
        title: "Complex scanning",
        text: "As humans, we scan more, read less, especially on the web. On ATG there was too much text which was necessary but the hierarchy was totally missing. The content was all over the place. It was hard to focus on one thing when all the things are trying to catch your attention. The design and the text placing were also distractive.",
      },
      {
        title: "The 15 seconds rule was also failing",
        text: "The page was not able to hold the interest of the users for even 15 seconds properly. This was a major issue. The platform was failing to give users a reason to come back or stay longer on the platform. Users were getting overwhelmed by the pieces of information and features available so they were just leaving within seconds. Even just as a social media platform, the content, features, and theme were all too much. Focus points on the page were less and relevance was missing",
      },
    ],
  },
  techstack_data: {
    data_1:
    {
      title: "How we made ATG more user-friendly?",
      link: "",
      description: ''
    },
    data_2: [
      {
        image: Bulb.src,
        title: "Switched away from the green",
        description: "After research, we chose the color blue as the primary color for the platform as it was more calm, peaceful, and easy. Following the color theory, we added some contrasting colors to blue for our backdrop. We also kept in mind not to overuse blue. We maintained the subtlety. Yet with all the embellishments, we kept the overall design simple for the users.",
      },
      {
        image: Tool.src,
        title: "Made sure that the UX had a smooth flow",
        description: "We tried to place every action one or two clicks away, and every destructive action such as ‘delete’ two or more clicks away to avoid the user’s mistakes. We checked the text legibility on all major devices. We wanted our website to cater to all kinds of users and not just users with super-tuned monitors. With a much smoother flow,  the user can apply to jobs right from the home screen. Users can reach their profile page in a single click as it was a three-click thing previously.",
      },
      {
        image: Merge.src,
        title: "Enhanced the hierarchy",
        description: "In the old page setup and design, too many things were catching the user’s attention. Now it was easier for the users to scan the page. We simplified the content and made sure the star content has better visibility. We structured the elements in the order that we wanted them to see. We took care of Typography, Contrast, Shadows everything and made it a pleasant experience for the users. ",
      },
      {
        image: Engineer.src,
        title: "New salient features to the rescue.",
        description: "We added some new features for students and professionals on the platform. We added a hiring dashboard for the employers to track and manage the applications right on the platform. and added easy apply for the students so they can apply on the opportunities with just a single click. We added a one-click one-click event book also to help users. We added short videos so the educators can also create short content that users can consume.",
      },

    ]
  },

  planning_data: {
    title: "",
    introPara: "We started the planning phase of the website once we had a clear knowledge of the requirements",
    subtitle: "",
    para: [
      {
        title: "Simple Is Best",
        text: "The most important guideline for creating a successful mobile app is to keep the user interface simple. To create an appealing experience, we choose appropriate colors and typefaces.",
      },
      {
        title: "Creating Personas",
        text: "User personas are a useful tactic to connect the service and the people that use it. It is critical to reevaluate the potential users at each level of the development process to ensure that what is being built is still appropriate and engaging.",
      },
      {
        title: "Use Well-Known Icon",
        text: " It is easier to associate icons with specific functions without having to read the label. The use of well-known icons makes it easy to navigate through the options and promptly arrive at the desired result.",
      },
      {
        title: "Consistency is important",
        text: "For the user, changing the basic outline is rather perplexing. However, the primary defects in the previous outline must be updated to make it simpler, which streamlines the user experience and allows them to feel comfortable.",
      },
      {
        title: "Test it Out",
        text: "The elements that are incorporated in the user interface design are frequently ineffective. In such cases, they wreak havoc on the user experience. As a result, it is vital to test the newly introduced features to ensure a smooth experience.",
      },
      {
        title: "Eye to Eye",
        text: "The options are placed in such a way that they are easy to access. Having the most often used icons on the main screen allows the user to work more efficiently and without being distracted.",
      },
    ],
  },

  winning_formula: {
    title: "Our winning formula",
    subtitle: "",
    para: [
      {
        title: "",
        text: "Problem statements were formed after taking different points of view into consideration, such as from the user's perspective, a user research perspective, and focused on the four Ws—who, what, where, and why. The problem and its sources can be comprehended by linking previous studies and data. The information gathered pinpoints the source of the issue and paints a clear overview of it. We concentrated on building efficient and effective solutions. The ultimate objective is always to guide the team towards a workable alternative."
      },
      {
        title: "",
        text: "UX/UI is critical in determining how service experiences are created and ensuring that such services fit the demands of users."
      },
    ],
    list: {
      list_heading: '',
      list_item: []
    }
  },

  outcome_data: {
    title: "Outcome",
    subtitle:
      "As an outcome, the retention on the platform increased by 10X",
    para: [
      {
        title: "Users stayed longer than ever.",
        text: "Our solutions rendered increased visibility. After framing the website design in the hierarchy and Highlighting star content throughout the page, we were able to hold the user’s attention for several minutes on our website. ",
      },
      {
        title: "The features that were previously hidden as now usable by the users",
        text: "To facilitate the user with better navigation and user experience we added new and constructive features. For example, now the users can apply with a single click, can keep a track of their performance, had more settings, etc. This made a huge impact on the conversions. The users were now better invested in the website.",
      },
      {
        title: "Users started posting on the platform",
        text: "With easy-to-use functionalities, simpler navigation, trendy and eye-catching designs, the popularity of the platform as a social media space grew. People started posting many job applications and listings. The users became Interactive and started utilizing the platform for different professional needs. The overall growth of the platform reached its zenith.",
      },
    ],
  },

  testimony_data: [
    {
      val: 1,
      src: profile1.src,
      name: "Rahul Gupta",
      work: "CTO, ATG",
      review: {
        title: "It was a great experience!",
        star: "5",
        comment:
          "Banao has some great experienced developers and designers who know how to work. They’re masters in their craft. Overall the experience is perfect. All our expectations have been fulfilled with excellence",
      },
    },
  ],
  related_projects_data: [
    {
      src: project1.src,
      title: 'Cola Cola Website',
    },
    {
      src: project2.src,
      title: 'Pokemon Go App',
    },
    {
      src: project1.src,
      title: 'Pokemon Go App',
    },
  ],
  counts_data: [
    {
      downloads: "200+",
      category: "Team Size",
    },
    {
      downloads: "500+",
      category: "Clients worldwide",
    },
    {
      downloads: "1000+",
      category: "Projects",
    },
  ],
  form_data: [
    {
      logo: green_check_icon.src,
      title: "45 minutes of free consultation",
    },
    {
      logo: green_check_icon.src,
      title: "A strict non-disclosure agreement",
    },
    {
      logo: green_check_icon.src,
      title: "Free market & competitive analysis",
    },
    {
      logo: green_check_icon.src,
      title: "Suggestions on revenue models & planning",
    },
    {
      logo: green_check_icon.src,
      title: "Detailed feature list document",
    },
    {
      logo: green_check_icon.src,
      title: "No obligation proposal",
    },
    {
      logo: green_check_icon.src,
      title: "Action plan to kick start your project",
    },
  ],
  blogs_data: [
    {
      src: Blog1.src,
      title: "How much does React Native App Development Cost?",
    },
    {
      src: Blog2.src,
      title: "Less Talked About React Native App Development Considerations",
    },
    {
      src: Blog3.src,
      title: "React Native vs Native: What to choose for App Development",
    },
  ],
  faq_data: [
    {
      question: "Can React Native be used for both web and mobile?",
      answer:
        "Commodo qui ullamco excepteur reprehenderit duis qui aliquip aute deserunt reprehenderit ut mollit commodo ex. Voluptate qui sint amet id tempor aliqua fugiat sit officia. Officia ullamco elit anim ipsum mollit esse deserunt proident adipisicing dolor. Deserunt labore quis esse ea sit ex do est Lorem. Nisi mollit officia anim officia.",
    },
    {
      question: "How long does it take to build a React Native App?",
      answer:
        "React Native is a JavaScript library that allows app developers to construct apps that closely resemble native apps in terms of appearance, feel, and performance. It is built using the same basic UI components as standard iOS and Android apps.",
    },
    {
      question: "How can I develop React Native App myself?",
      answer:
        "Non dolore occaecat Lorem ut aute laboris. Consequat aute occaecat excepteur consequat ea. Adipisicing enim nulla et culpa anim incididunt minim dolor cillum. Enim veniam qui dolore nostrud amet aliquip Lorem cillum aute.",
    },
    {
      question: "What about Kotlin?",
      answer:
        "Laborum eu ipsum consequat id ullamco elit velit ad nisi voluptate ut ea elit elit. Sit nulla nostrud in in commodo quis ipsum. Est id proident quis ex cupidatat Lorem sit exercitation cupidatat minim culpa velit ex. Sunt ea amet elit nostrud ea ipsum. Est cillum ullamco enim labore. Labore sunt incididunt quis do veniam. Nostrud fugiat id in do minim fugiat exercitation deserunt do in.",
    },
    {
      question: "Will it work on iOS App?",
      answer:
        "Officia non sunt ad id eiusmod tempor reprehenderit minim velit esse.Laboris cillum cupidatat aliqua ea nulla ipsum in velit incididunt ipsum commodo ipsum.",
    },
  ]
}

export const uiuxData = {
  article: {
    articleBanner: atgBanner.src,
    title: "Our Contribution to a 31% Increase in Conversion Rate",
    writer: "Banao",
    date: " Dec 17, 2020",
    para: ["With our experience and deep industry knowledge, we can bring together user, business, and technical requirements to provide a satisfying experience for millions of end-users. Our graphic designers and web developers are flexible and versatile, allowing us to work with clients from many industries. Our professionals can help you with thorough fundamental cause analysis, interface architecture, and animation design knowledge.",],
  },
  achievement_data: [
    { icon: Achievement1.src, downloads: "40,000+", platform: "App Store Downloads" },
    { icon: Achievement1.src, downloads: "1,50,000+", platform: "Play store download" },
    { icon: Achievement1.src, downloads: "1,000+", platform: "Users in 2020" },
    { icon: Achievement1.src, downloads: "100+", platform: "Psychologists team" },
  ],
  challenge_data: {
    title: "Challenges",
    subtitle:
      "Each and every business needs to have an aspect evolution in their Business Model as a Survival of the Fittest.",
    para: [
      {
        title: "Architect the VAST & COMPLEX vision",
        text: "It has been tough to shape the vast vision of the client into the current system, workflow architecture and manage business logic to provide the best outcome.",
      },
      {
        title: "Continuous monitoring of System",
        text: "Keeping the system all time up 24x7 without any downtime of the website even in the high traffic.",
      },
      {
        title: "Innovative Algorithms",
        text: "Innovative algorithm to suggest restaurants and dishes to users based on their order, Browsing History.",
      },
    ],
  },
  features_data: [
    {
      logo: double_check_icon.src,
      title: "Mindfulness platform",
    },
    { logo: double_check_icon.src, title: "Automated assessment reports" },
    { logo: double_check_icon.src, title: "Calendar Blocking" },
    {
      logo: double_check_icon.src,
      title: "Complex mindfulness algorithms",
    },
    { logo: double_check_icon.src, title: "Payment Gateway" },
  ],
  outcome_data: {
    title: "Outcome",
    subtitle:
      "Each and every business needs to have an aspect evolution in their Business Model as a Survival of the Fittest.",
    para: [
      {
        title: "Architect the VAST & COMPLEX vision",
        text: "It has been tough to shape the vast vision of the client into the current system, workflow architecture and manage business logic to provide the best outcome.",
      },
      {
        title: "Continuous monitoring of System",
        text: "Keeping the system all time up 24x7 without any downtime of the website even in the high traffic.",
      },
      {
        title: "Innovative Algorithms",
        text: "Innovative algorithm to suggest restaurants and dishes to users based on their order, Browsing History.",
      },
    ],
  },
  testimony_data: [
    {
      val: 1,
      src: profile1.src,
      name: "Ravikant suman",
      work: "Founder, HappiMynd",
      review: {
        title: "It was a great experience!",
        star: "5",
        comment:
          "It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience It was a great experience ",
      },
    },
    {
      val: 2,
      src: profile2.src,
      name: "Jeniffer White",
      work: "Vice President, Google",
      review: {
        title: "It was a great experience!",
        star: "3",
        comment:
          "Elit sint do laboris sunt duis consequat. Veniam nulla dolore reprehenderit fugiat. Aute est occaecat nulla occaecat mollit sint ad est tempor commodo laboris. Occaecat Lorem irure culpa ea aute consectetur sit et amet sit ut nisi incididunt aliquip. Mollit duis dolore aliqua irure esse ad aliquip consequat quis. Adipisicing culpa esse in eiusmod velit laboris.",
      },
    },
    {
      val: 3,
      src: profile3.src,
      name: "Niromi Taylor",
      work: "Senior Manager, IKEA",
      review: {
        title: "Not satisfied",
        star: "1",
        comment:
          "Dolore aliqua cupidatat ex excepteur non eiusmod laborum mollit et consectetur. Amet id esse sint eu. Elit culpa in in adipisicing laboris. Lorem dolor aute laborum voluptate laboris sunt nulla aliquip ipsum ut adipisicing velit. Ullamco culpa laboris laboris cillum dolore ullamco labore ullamco nisi duis mollit. Ea labore commodo ad magna esse. Laboris eiusmod amet et deserunt et quis id.",
      },
    },
  ],
  related_projects_data: [
    {
      src: project1.src,
      title: 'Cola Cola Website',
    },
    {
      src: project2.src,
      title: 'Pokemon Go App',
    },
    {
      src: project1.src,
      title: 'Pokemon Go App',
    },
  ],
  counts_data: [
    {
      downloads: "200+",
      category: "Team Size",
    },
    {
      downloads: "500+",
      category: "Clients worldwide",
    },
    {
      downloads: "1000+",
      category: "Projects",
    },
  ],
  form_data: [
    {
      logo: green_check_icon.src,
      title: "45 minutes of free consultation",
    },
    {
      logo: green_check_icon.src,
      title: "A strict non-disclosure agreement",
    },
    {
      logo: green_check_icon.src,
      title: "Free market & competitive analysis",
    },
    {
      logo: green_check_icon.src,
      title: "Suggestions on revenue models & planning",
    },
    {
      logo: green_check_icon.src,
      title: "Detailed feature list document",
    },
    {
      logo: green_check_icon.src,
      title: "No obligation proposal",
    },
    {
      logo: green_check_icon.src,
      title: "Action plan to kick start your project",
    },
  ],
  blogs_data: [
    {
      src: Blog1.src,
      title: "How much does React Native App Development Cost?",
    },
    {
      src: Blog2.src,
      title: "Less Talked About React Native App Development Considerations",
    },
    {
      src: Blog3.src,
      title: "React Native vs Native: What to choose for App Development",
    },
  ],
  faq_data: [
    {
      question: "Can React Native be used for both web and mobile?",
      answer:
        "Commodo qui ullamco excepteur reprehenderit duis qui aliquip aute deserunt reprehenderit ut mollit commodo ex. Voluptate qui sint amet id tempor aliqua fugiat sit officia. Officia ullamco elit anim ipsum mollit esse deserunt proident adipisicing dolor. Deserunt labore quis esse ea sit ex do est Lorem. Nisi mollit officia anim officia.",
    },
    {
      question: "How long does it take to build a React Native App?",
      answer:
        "React Native is a JavaScript library that allows app developers to construct apps that closely resemble native apps in terms of appearance, feel, and performance. It is built using the same basic UI components as standard iOS and Android apps.",
    },
    {
      question: "How can I develop React Native App myself?",
      answer:
        "Non dolore occaecat Lorem ut aute laboris. Consequat aute occaecat excepteur consequat ea. Adipisicing enim nulla et culpa anim incididunt minim dolor cillum. Enim veniam qui dolore nostrud amet aliquip Lorem cillum aute.",
    },
    {
      question: "What about Kotlin?",
      answer:
        "Laborum eu ipsum consequat id ullamco elit velit ad nisi voluptate ut ea elit elit. Sit nulla nostrud in in commodo quis ipsum. Est id proident quis ex cupidatat Lorem sit exercitation cupidatat minim culpa velit ex. Sunt ea amet elit nostrud ea ipsum. Est cillum ullamco enim labore. Labore sunt incididunt quis do veniam. Nostrud fugiat id in do minim fugiat exercitation deserunt do in.",
    },
    {
      question: "Will it work on iOS App?",
      answer:
        "Officia non sunt ad id eiusmod tempor reprehenderit minim velit esse.Laboris cillum cupidatat aliqua ea nulla ipsum in velit incididunt ipsum commodo ipsum.",
    },
  ]
}
