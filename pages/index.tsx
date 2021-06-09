import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-center text-white center-index">
      <Head>
        <meta content="Neddo" property="og:title"/>
        <meta property="og:type" content="website"/>
        <meta content="Hi! I'm Sven! Software Developer" property="og:description"/>
        <meta content="https://neddo.codes" property="og:url"/>
        <meta content='https://i.imgur.com/nhM2zxl.png' property='og:image'></meta>
        <meta content="#10B981" data-react-helmet="true" name="theme-color"/>
        <title>Neddo</title>
      </Head>
        <h1 className="text-white font-bold text-6xl transition duration-300 ease-in-out hover:text-green-400 transform hover:-translate-y-1 hover:scale-110 cursor-default">Heyo! 👋🏼</h1><br></br>
        <h1 className="text-white font-bold text-6xl transition duration-300 ease-in-out hover:text-green-400 transform hover:-translate-y-1 hover:scale-110 cursor-default">I'm Sven.</h1><br></br>
        <h1 className="text-white font-bold text-6xl transition duration-300 ease-in-out hover:text-green-400 transform hover:-translate-y-1 hover:scale-110 cursor-default">Software Developer. 👨🏼‍💻</h1><br></br>
    </div>
    
  )
}
