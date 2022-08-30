import styled from "styled-components";

const NavBar = styled.nav`
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const NavLinkCustom = styled.a`
  font-size: 14px;
  margin-bottom: -13px;
  color: #fff;

  &.active {
    &::after {
      content: "";
      display: block;
      margin-top: 5px;
      width: 100%;
      height: 3px;
      background: #3366ff;
      transition: width 0.3s;
    }
  }

  &::after {
    content: "";
    display: block;
    margin-top: 5px;
    width: 0;
    height: 3px;
    background: #3366ff;
    transition: width 0.3s;
  }

  &:hover {
    color: #fff;
    &::after {
      width: 100%;
    }
  }
`;

const ButtonNavbarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { NavLinkCustom, NavBar, ButtonNavbarSection };
