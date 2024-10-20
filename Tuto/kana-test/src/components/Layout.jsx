import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const bgColorsBody = ['#ffb457', '#1e293b', '#9999fb', '#ffe797', '#cffff1']

const Container = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  align-items: baseline;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  transition: background-color .7s;
`

const Navbar = styled.nav`
  margin: 0;
  margin-bottom: 50px;
  display: flex;
  /* Works well with 100% width  */
  width: 100%;
  height: 80px;
  font-size: 1.5em;
  padding: 0 2.85em;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1d1d27;
`

const Item = styled(NavLink)`
  all: unset;
  flex-grow: 1;
  z-index: 100;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  align-items: center;
  will-change: transform;
  justify-content: center;
  padding: 0.55em 0 0.85em;
  transition: transform var(1000, .7s);

  &::before {
    content: "";
    z-index: -1;
    width: 4.2em;
    height: 4.2em;
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
    transition: background-color .7s, transform .7s;
  }

  &.active {
    transform: translate3d(0, .8em, 0);
  }

  &.active::before {
    transform: scale(1);
  }

  &.active:nth-child(1)::before {
    background-color: ${bgColorsBody[0]};
  }

  &.active:nth-child(2)::before {
    background-color: ${bgColorsBody[1]};
  }

  &.active:nth-child(3)::before {
    background-color: ${bgColorsBody[2]};
  }

  &.active:nth-child(4)::before {
    background-color: ${bgColorsBody[3]};
  }

  &.active:nth-child(5)::before {
    background-color: ${bgColorsBody[4]};
  }

  &.active .icon {
    animation: strok 1.5s reverse
  }
`

const Icon = styled.svg`
  width: 2.6em;
  height: 2.6em;
  stroke: white;
  fill: transparent;
  stroke-width: 1pt;
  stroke-miterlimit: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 400;
`

const Border = styled.div`
  left: 0;
  top: 100%;
  width: 10.9em;
  height: 2.4em;
  position: absolute;
  clip-path: url(#menu);
  will-change: transform;
  background-color: #1d1d27;
  /* transition: transform var(--timeOut, .7s); */
  transition: transform translate3d(200px, 0 , 0);
`

const SVGContainer = styled.div`
  width: 0;
  height: 0;
`

const Main = styled.div`
  margin: auto;
  width: 80%;
  height: 50%;
  color: #fff;
  text-align: center;
`

export default function Layout () {
  // const body = document.getElementById('main')
  // const menu = body.querySelector('.menu')
  // const menuBorder = menu.querySelector('.menu__border')

  // function handleClickItem (msg) {
  // menu.style.removeProperty("--timeOut");

  // body.style.backgroundColor = bgColorsBody[0]
  // offsetMenuBorder(menuBorder)
  // console.log(msg)
  // }

  // function offsetMenuBorder (element, menuBorder) {
  // const offsetActiveItem = element.getBoundingClientRect();
  // const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
  // menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  // }

  // offsetMenuBorder(menuBorder)

  // menuItems.forEach((item, index) => {
  //   item.addEventListener("click", () => clickItem(item, index));
  // })

  // window.addEventListener("resize", () => {
  //   offsetMenuBorder(activeItem, menuBorder);
  //   menu.style.setProperty("--timeOut", "none");
  // });

  const [bgColor, setBgColor] = useState(bgColorsBody[0])

  const changeBackground = (color) => {
    setBgColor(color)
  }

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <Navbar>
        <Item to='/' color={bgColorsBody[0]} onClick={() => changeBackground(bgColorsBody[0])}>
          <Icon viewBox='0 0 24 24'>
            <path d='M3.8,6.6h16.4' />
            <path d='M20.2,12.1H3.8' />
            <path d='M3.8,17.5h16.4' />
          </Icon>
        </Item>

        <Item to='/hiragana' color={bgColorsBody[1]} isActive={() => changeBackground('prout')} onClick={() => changeBackground(bgColorsBody[1])}>
          <Icon viewBox='0 0 24 24'>
            <path d='M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z' />
            <path d='M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6' />
          </Icon>
        </Item>

        <Item to='/test' color={bgColorsBody[2]} onClick={() => changeBackground(bgColorsBody[2])}>
          <Icon viewBox='0 0 24 24'>
            <path d='M3.4,11.9l8.8,4.4l8.4-4.4' />
            <path d='M3.4,16.2l8.8,4.5l8.4-4.5' />
            <path d='M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z' />
          </Icon>
        </Item>

        <Item to='/page4' color={bgColorsBody[3]} onClick={() => changeBackground(bgColorsBody[3])}>
          <Icon viewBox='0 0 24 24'>
            <path d='M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z' />
            <path d='M4.2,9.3h15.6' />
            <path d='M9.1,9.5v10.3' />
          </Icon>
        </Item>

        <Item to='/page5' color={bgColorsBody[4]} onClick={() => changeBackground(bgColorsBody[4])}>
          <Icon viewBox='0 0 24 24'>
            <path d='M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z' />
            <path d='M5.5,20l9.9-9.9l4.7,4.7' />
            <path d='M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z' />
          </Icon>
        </Item>

        <Border />

        <SVGContainer>
          <svg viewBox='0 0 202.9 45.5'>
            <clipPath id='menu' clipPathUnits='objectBoundingBox' transform='scale(0.0049285362247413 0.021978021978022)'>
              <path d='M6.7-.5c5.7-.1 14.1.4 23.3 4 5.7 2.3 9.9 5 18.1 10.5 10.7 7.1 11.8 9.2 20.6 14.3 5 2.9 9.2 5.2 15.2 7 7.1 2.1 13.3 2.3 17.6 2.1 4.2.2 10.5-.1 17.6-2.1 6.1-1.8 10.2-4.1 15.2-7 8.8-5 9.9-7.1 20.6-14.3 8.3-5.5 12.4-8.2 18.1-10.5 9.2-3.6 17.6-4.2 23.3-4H6.7z' />
            </clipPath>
          </svg>
        </SVGContainer>
      </Navbar>

      <Main>
        <Outlet />
      </Main>

    </Container>
  )
}
