import "./UI/Footer.css";
import React from "react";
import FooterItem from "./FooterItem";
const Footer = () => {

    const footerItem = [
        {
            id: "about",
            text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        },
        {
            id: "Quick-link-1",
            link_1: "https://github.com/ajayvirmoti/expense-tracker",

        },
        {
            id: "contact",
            tel: "tel : +91 xxxxxXXXXX",
            email: "mailto:abc@xyz",
            address: "12 -A TC Road, Delhi, INDIA",
        }

    ]
    return (
        <div className="footer">
            <FooterItem
                text={footerItem[0].text} 
                link_1={footerItem[1].link_1}
                tel = {footerItem[2].tel}
                email={footerItem[2].email}
                address={footerItem[2].address}
            />
        </div>
    )
}

export default Footer;

