import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    } from "@fortawesome/free-brands-svg-icons";


    import {
    Box,
    Container,
    Row,
    FooterLink,
    Heading,
    } from "./FooterStyles";
    
    const Footer = () => {
    return (
        <Box>
        <h1 style={{ color: "blue",
                    textAlign: "center",
                    marginTop: "-50px" }}>
            Links
        </h1>
        <Container>
            <Row>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                    Facebook
                    </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                    Instagram
                    </span>
                </i>
                </FooterLink>
                <FooterLink href="#">
                <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                    Twitter
                    </span>
                </i>
                
                </FooterLink>
            </Row>
        </Container>
        </Box>
    );
    };
    export default Footer;
    

// export default function Footer() {
//   return (
//     <div class="social-container">
//       <h5>Links</h5>
//       <a href="https://www.github.com/YamCham0" target="_blank"
//         className="Github social" >
//         <FontAwesomeIcon icon={faGithub} size="2x" />
//       </a>
//       <a href="https://twitter.com/YamCham0" target="_blank"
//         className="Twitter social">
//         <FontAwesomeIcon icon={faTwitter} size="2x" />
//       </a>
//       <a href="https://www.linkedin.com/in/yamcham0-bab408220" target="_blank"
//         className="LinkedIn social">
//         <FontAwesomeIcon icon={faLinkedin} size="2x" />
//       </a>
//     </div>
//   );
// }


