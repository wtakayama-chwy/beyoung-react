import React, { useState } from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'

import { useTheme } from '../Themes/ThemeContext'
import { colors } from '../Helpers/colors'
import logo from '../../assets/logo/beyoung-logo.png'

const StyledHeader = styled.header`
    height: 54px;
    width: 100%;
    position: sticky;
    background-color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 30px;
    }
    .switch {
      position: absolute !important;
      right: 1.5em;
    }
`

function Header() {

    const setTheme = () => {
        themeToggle.toggle()
        checked ? setChecked(!true) : setChecked(!false)
    }

    const themeToggle = useTheme()
    const [checked, setChecked] = useState(true)


    return (
        <>
            <StyledHeader>
                <img src={logo} alt="logo beyoung" />
                <Switch
                    className="switch"
                    onChange={setTheme}
                    checked={checked}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={35}
                    handleDiameter={12}
                    onColor="#c2c2c2"
                    offColor="#000"
                />
            </StyledHeader>
        </>
    )
}

export default Header;