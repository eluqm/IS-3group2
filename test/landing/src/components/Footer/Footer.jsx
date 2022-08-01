import React from "react";
import { FaGithub, FaLinkedin, FaFacebook,  } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import {
  FooterContainer,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItens,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SMwrap,
  Logo,
  Copy,
  SocialIcons,
  IconLink
} from "./footStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <LinksContainer>
          <LinksWrapper>

          </LinksWrapper>
        </LinksContainer>

        <SocialMedia>
          <SMwrap>
            <Logo to="home">BeResearcher</Logo>
            <Copy>
              ©️ BeResearcher Group - {new Date().getFullYear} All rights
              reserved.
            </Copy>

            <SocialIcons>
              <IconLink href="https://github.com/eluqm/IS-3group2" target="_blank">
                <FaGithub />
              </IconLink>

              <IconLink
                href=""
                target="_blank"
              >
                <FaFacebook />
              </IconLink>

              <IconLink
                href=""
                target="_blank"
              >
                <FaLinkedin />
              </IconLink>

              <IconLink href="https://thiagosl.vercel.app" target="_blank">
                <BiWorld />
              </IconLink>
            </SocialIcons>
          </SMwrap>
        </SocialMedia>
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
