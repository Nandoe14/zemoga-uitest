import React from 'react'
import { Header } from './Header'
import { BodyHome } from './bodyhome/BodyHome'
import { Footer } from '../footer/Footer'
import { NavBarDesktop } from '../navbar/NavBarDesktop'

export const HomePage = () => {
    return (
        <>
            <NavBarDesktop />
            <Header />
            <BodyHome />
            <Footer />
        </>
    )
}
