//blog cards
import Computer from '../Assets/Computer.jpg';
import Computer2 from '../Assets/WebPage.jpg';
import Computer3 from '../Assets/nature.jpg';

//details data 
import { FaRegAddressCard } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

// project summury
import Todo from '../Assets/TodoManagement.jpg';
import TextUtils from '../Assets/TextUtils.jpg';
import BubbleGame from '../Assets/BubbleGame.jpg';
import TechnoSignia from '../Assets/WebPage.jpg';
import FlipkartClone from '../Assets/Flipkart.jpg';
import TriveniWebPage from '../Assets/BeautyHub.jpg';
import CabService from '../Assets/Taxi.jpg';
import Calculator from '../Assets/Calculator.jpg';
import Portfolio from '../Assets/Portfolio.jpg';

export const ResumeDownload = () => {
    const handleDownload = () => {
        // Use the 'a' tag to trigger the download
        const link = document.createElement('a');
        link.href = '/Resume.pdf'; // Path to your resume file
        link.download = 'Amol_Resume.pdf'; // Name for the downloaded file
        link.click();
      };
}

export const projectSummury = [
    {
      img: Todo,
      subtitle: "Todo Mangement",
      title: "Software Appliaction",
      link: "https://github.com/amolmahor50/TodoManagement.git"
    },
    {
      img: TextUtils,
      subtitle: "TextUtils App",
      title: "Aplication Building",
      link: "https://github.com/amolmahor50/Text-Utils-App.git"
    },
    {
      img: BubbleGame,
      subtitle: "Bubble Game",
      title: "Play Game",
      link: "https://github.com/amolmahor50/Bubble-Game.git"
    },
    {
      img: TechnoSignia,
      subtitle: "TechnoSignia WebPage",
      title: "web design",
      link: "https://github.com/amolmahor50/TechnoSignia-Software-training-Institute.git"
    },
    {
      img: FlipkartClone,
      subtitle: "Flipkart clone",
      title: "web design",
      link: "https://github.com/amolmahor50/flipkard-shopping-app-clone.git"
    },
    {
      img: TriveniWebPage,
      subtitle: "Triveni BeautyHub Website",
      title: "web design",
      link: "https://amolmahor50.github.io/TriveniBeautyHub/"
    },
    {
      img: CabService,
      subtitle: "cab booking service",
      title: "Front-end UI/UX",
      link: "https://github.com/amolmahor50/cab-booking-app.git"
    },
    {
      img: Calculator,
      subtitle: "Birthday Calculator",
      title: "Mobile Appliaction",
      link: "https://github.com/amolmahor50/Birthday-Calculator.git"
    },
    {
      img: Portfolio,
      subtitle: "Potfolio",
      title: "Front-end UI/UX",
      link: "https://amolmahor50.github.io/Portfolio/"
    }
  ]

export const BlogSummury = [
    {
        img: Computer,
        date: "Dec 21, 2023",
        profession: "Devop",
        commentCount: 8,
        title: "Why Lead Generation is Key for Business Growth",
        subtitle: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        img: Computer2,
        date: "Aug 26, 2020",
        profession: "Team Lead",
        commentCount: 5,
        title: "Why Lead Generation is Key for Business Growth",
        subtitle: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
        img: Computer3,
        date: "Sept 01, 2024",
        profession: "Manager",
        commentCount: 12,
        title: "Why Lead Generation is Key for Business Growth",
        subtitle: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
]

export const BlogsCard = [
    {
        couter: 100,
        title: "Awards"
    },
    {
        couter: 25,
        title: "Completed Projects"
    },
    {
        couter: 800,
        title: "Happy Customers"
    },
    {
        couter: 500,
        title: "Cups of Coffee"
    }
]

export const DetailsData = [
    {
        icon: <FaRegAddressCard />,
        title: "Address",
        subTitle: "102, Bhoir Apartment, Dange Chowk, Pune"
    },
    {
        icon: <IoCallOutline />,
        title: "conatct number",
        subTitle: "+91 9673170912"
    },
    {
        icon: <AiOutlineMail />,
        title: "email address",
        subTitle: "amolmahor50@gmail.com"
    },
    {
        icon: <TiWorld />,
        title: "website",
        subTitle: "yoursite.com"
    },
]

export const resumeDetails = [
    {
        year: "2024-2015",
        degeree: "Master Degree of Design",
        university_name: "Cambridge University",
        comment: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year: "2024-2015",
        degeree: "UI/UX Designer",
        university_name: "Cambridge University",
        comment: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year: "2024-2015",
        degeree: "Diploma in Computer",
        university_name: "Cambridge University",
        comment: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
        year: "2024-2015",
        degeree: "Art & Creative Director",
        university_name: "Cambridge University",
        comment: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    }
]

export const Progress_Sills = [
    {
        skill_name: "HTML5",
        progress_per: "95",
    },
    {
        skill_name: "CSS",
        progress_per: "80",
    },
    {
        skill_name: "BootStrap",
        progress_per: "60",
    },
    {
        skill_name: "TailWind CSS",
        progress_per: "50",
    },
    {
        skill_name: "Git",
        progress_per: "80",
    },
    {
        skill_name: "GitHub",
        progress_per: "85",
    },
    {
        skill_name: "JavaScript",
        progress_per: "80",
    },
    {
        skill_name: "Java",
        progress_per: "60",
    },
    {
        skill_name: "ReactJs",
        progress_per: "75",
    },
    {
        skill_name: "Redux",
        progress_per: "50",
    },
]