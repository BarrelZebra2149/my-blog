//import "https://www.w3schools.com/w3css/4/w3.css";

import React from "react";

const AboutSection = () => {
    return (
        <div className="w3-container w3-padding-32 w3-center">
            <div className={"horizontal-rule"}/>
            <h3>About Me, The FoodBlock Man</h3><br></br>
            <img src="/images/aboutImg.jpeg" alt="Me" className="w3-image" style={{display:"block", margin:"auto", width:"800px", height:"533px"}}/>
                <div className="w3-padding-32">
                    <h4><b>I am Who I Am!</b></h4>
                    <h6><i>With Passion For Real, Good FoodBlock</i></h6>
                    <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                </div>
        </div>
    );
}
export default AboutSection;
