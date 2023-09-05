import React from "react";
import "./UI/footer-items.css";

const FooterItem = (props) =>{
    return(
        <div className="footer-items">
            <div className="about">
                <div>
                    <h3>About</h3>
                </div>
                {props.text}
            </div>
            <div className="quick_link">
                <div>
                <h3>Quick Link</h3>
                </div>
                <div>
                    <img src=""></img>
                    <a href={props.link_1}>GitHub</a>

                </div>
                <div><a href={props.link_1}>GitHub</a></div>
            </div>
            <div className="contact">
                <div>
                    <h3>Contact</h3>
                </div>
                <a href={props.tel}>{props.tel}</a>
                <a href={props.email}>E-mail : xyz@abc.com</a>
                <a> {props.address}</a>

            </div>

        </div>
    );

}

export default FooterItem;