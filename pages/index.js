import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Layout from '../components/layout'


export default function Home() {
  return (
   <Layout title="Bienvenido">                                
      <h1>Estas en index home</h1>{/* aqui ya estamos usando el layout que construimos y le pasamos title como prop al layout.js que valida si va y lo imprime en el head */}
   </Layout>
  )
}
