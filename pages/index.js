import Head from 'next/head'
import Image from 'next/image'
import NavBarSide from '../components/NavBarSide'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Feature from '../components/Feature'

export default function Home() {
  return (
      <div className='snap-y w-full overflow-y-auto overflow-x-hidden snap-mandatory bg-black flex flex-col justify-start items-start'>
        <Hero/>
        <Feature/>
        <Feature/>
      </div>
  )
}
