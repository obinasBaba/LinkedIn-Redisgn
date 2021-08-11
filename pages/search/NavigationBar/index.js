import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {heightWidth, spacing, text} from "../../../styles/mixins";
import {Text} from "@chakra-ui/react";
import {AnimateSharedLayout, motion} from "framer-motion";
import {AppStateContext} from "../../../contexts/AppStateContext";


const NavigationBarContainer = styled(motion.ul)`
  padding: 0;
  border-bottom: 1.5px solid #E2E8F0;
  background-color: rgba(245, 245, 245, 0.73);
  backdrop-filter: blur(4px);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: ${({top}) => `${top}px`};

  ${heightWidth('gap', 1)};
`

const LinkItem = styled( motion.li )`
  padding: 0;
  margin: 0;
  //border: thin solid red;
  cursor: pointer;
  align-self: stretch;
  display: flex;
  flex-flow: column;
  justify-content: center;

  .link-txt {
    margin: auto;
    color: gray;
    
    ${spacing('pv', 1.5)};
    ${spacing('ph', 1.5)};
    ${text(.9)};
    
    &.active{
      font-weight: 600;
      color: black;
    }
  }

  .link-line {
    width: 100%;
    //margin-right: 50px;
    //transform: translateX(-10%);
    //border: thin solid red;
    height: 2px;
    border-radius: 1500px;
    background-color: blue;
    margin-top: auto;
  }
`

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};

const NavigationBar = () => {

    const navLink = ['All', 'People', 'Companies', 'Groups', 'Jobs', 'More'];
    const [selected, setSelected] = useState(0);
    const innerNavRef = useRef(null );

    const {
        navBarHeight,
        setInnerNavBarHeight
    } = useContext(AppStateContext);

    useEffect(() => {

        if (innerNavRef.current){
            let height = innerNavRef.current.getBoundingClientRect().bottom;
            setInnerNavBarHeight(height)
        }

        return () => {};

    }, []);


    return (
        <AnimateSharedLayout type='crossfade'>

            <NavigationBarContainer layout top={navBarHeight} ref={innerNavRef}>

                {
                    navLink.map((linkTxt, index) =>
                        <LinkItem layout onClick={() => {
                            setSelected(index)
                        }}
                        >

                            <motion.p layout
                                  className={`link-txt ${index === selected && 'active'}`}
                            >
                                {linkTxt}
                            </motion.p>

                            {
                                index === selected &&
                                <motion.div
                                    layoutId="link-line"
                                    className="link-line"
                                    initial={false}
                                    animate={{
                                        background: '#123'
                                    }}
                                    transition={spring}
                                />
                            }

                        </LinkItem>
                    )
                }


            </NavigationBarContainer>
        </AnimateSharedLayout>

    );
};

export default NavigationBar;
