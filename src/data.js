import { LoremIpsum } from "lorem-ipsum";
import tour1Img from "./images/tour-1.jpeg"
import tour2Img from "./images/tour-2.jpeg"
import tour3Img from "./images/tour-3.jpeg"
import tour4Img from "./images/tour-4.jpeg"


const lorem = new LoremIpsum();

const pageLinks =
    [
        { id: 1, href: "#home", text: "home" },
        { id: 2, href: "#about", text: "about" },
        { id: 3, href: "#services", text: "services" },
        { id: 4, href: "#tours", text: "tours" }
    ];

const socialLinks =
    [
        { id: 1, href: " https://www.twitter.com", name: "twitter" },
        { id: 2, href: " https://www.facebook.com", name: "facebook" },
        { id: 3, href: " https://www.squarespace.com", name: "squarespace" }
    ];

const services =
    [
        { id: 1, title: "saving money", icon: "fa-wallet ", text: `lorem ipsum ${lorem.generateParagraphs(1)}` },
        { id: 1, title: "endless hiking", icon: "fa-tree", text: `lorem ipsum ${lorem.generateParagraphs(1)}` },
        { id: 1, title: "amazing comfort", icon: "fa-socks", text: `lorem ipsum ${lorem.generateParagraphs(1)}` }
    ];

const tours =
    [
        { id: 1, img: tour1Img, date: `september 15th, ${new Date().getFullYear()}`, title: "tibet advanture", text: `lorem ipsum ${lorem.generateParagraphs(1)}`, destination: "china", duration: "6 days", cost: "from 2100$" },
        { id: 2, img: tour2Img, date: `december 5th, ${new Date().getFullYear()}`, title: "best oof java", text: `lorem ipsum ${lorem.generateParagraphs(1)}`, destination: "indonesia", duration: "11 days", cost: "from 1400$" },
        { id: 3, img: tour3Img, date: `october 1st, ${new Date().getFullYear()}`, title: "explore hong kong", text: `lorem ipsum ${lorem.generateParagraphs(1)}`, destination: "hong kong", duration: "8 days", cost: "5000$" },
        { id: 4, img: tour4Img, date: `august 26th, ${new Date().getFullYear()}`, title: "kenya highlights", text: `lorem ipsum ${lorem.generateParagraphs(1)}`, destination: "kenya", duration: "20 days", cost: "3300$" }
    ]




export { pageLinks, socialLinks, services, tours };