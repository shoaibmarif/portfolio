import progressive from "../../public/images/services/progressive.svg"
import Ecommerce from "../../public/images/services/e-commerce.svg"
import Seo from "../../public/images/services/seo.svg"
import responsive from "../../public/images/services/responsive.svg"
import solutions from "../../public/images/services/solutions.svg"
import admin from "../../public/images/services/admin.svg"
const servicesData = [
    {
        title: "Personalize Solutions",
        text: "We provide customized digital solutions tailored to your specific business needs. Our team works cl innovation.",
        imgUrl:solutions
    },
    {
        title: "E-Commerce Website",
        text: "Build a seamless online shopping experience with our robust e-commerce solutions. From product catalog managence customer engagement and boost sales.",
        imgUrl:Ecommerce
    },
    {
        title: "SEO-Friendly Code",
        text: "Our development process ensures that all code is optimized for search engines, improving your website's visibi optimized for search engines, litybsite achieve better performance and faster load times.",
        imgUrl:Seo
    },
    {
        title: "Admin Panel",
        text: "Manage your website or application effortlessly with our intuitive and powerful admin panels. We create custom admin dashbamless user experience.",
        imgUrl:admin
    },
    {
        title: "Progressive Web App",
        text: "Experience the best of both worlds with our Progressibine thng fast loading, offline functionality, and high performance across all devices.",
        imgUrl:progressive
    },
    {
        title: "User-Friendly Design",
        text: "We focus on creating visually appealing and intuitive designs t your website or app is easy to navigate and engages your audience effectively.",
        imgUrl:responsive
    }
];

const navLinks = [
    {
        name:"Home",
        href:"home"
    },
    {
        name:"Services",
        href:"services"
    },
    {
        name:"About",
        href:"about"
    },
    {
        name:"Certificates",
        href:"certificates"
    },
    {
        name:"Pricing",
        href:"pricing"
    },
    {
        name:"Testimnonials",
        href:"testimonials"
    },
    {
        name:"Contact",
        href:"contact"
    }
]

const pricing = [
  {
    "plan": "Basic",
    "price": "$500",
    "features": [
      "Delivery Time: 1 - 2 Weeks",
      "Revisions: 1 - 2 Revisions",
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form Integration",
      "Cross-Browser Compatibility",
    ]
  },
  {
    "plan": "Standard",
    "price": "$1,000",
    "features": [
      "Delivery Time: 2 - 4 Weeks",
      "Revisions: 2 - 3 Revisions",
      "Up to 10 Pages",
      "Custom Design",
      "1 Year Free Maintenance",
      "Content Upload"
    ]
  },
  {
    "plan": "Premium",
    "price": "$2,000",
    "features": [
      "Delivery Time: 4 - 6 Weeks",
      "Revisions: Unlimited Revisions",
      "Unlimited Pages",
      "Fully Custom Design",
      "Performance Optimization",
      "API Integration",
    ]
  }
]

export { servicesData , navLinks,pricing }