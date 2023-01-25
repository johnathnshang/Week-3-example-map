import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import data from '../data/education.json'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Card from '../components/card/index.js'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data)
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div class="navBar">
          <div class="navTitle">Main Page</div>
            <div class="navButton">
              <Link className={styles.link} href="about">About</Link>
            </div>
        </div>
        
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business") {
              return(
                <Card 
                key={index} 
                degree={info.degree} 
                colour="red" 
                font="20px"
                />
              )
            }
          })
        }

        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing") {
              return(
                <Card 
                key={index} 
                degree={info.degree} 
                colour="blue" 
                font="20px"
                />
              )
            }
          })
        }
      </main>
    </>
  )
}
