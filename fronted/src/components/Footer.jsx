import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2 '>
            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>2022 BeResearcher, Todos los derechos reservados </p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaTwitch />
                    <a href={'https://github.com/eluqm/IS-3group2'}> <FaGithub /> </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
