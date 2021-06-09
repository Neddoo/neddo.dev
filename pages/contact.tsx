import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-center text-white center-custom">
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
        <meta content="Neddo" property="og:title"/>
        <meta property="og:type" content="website"/>
        <meta content="Hi! I'm Sven! Software Developer" property="og:description"/>
        <meta content="https://neddo.codes" property="og:url"/>
        <meta content='https://i.imgur.com/nhM2zxl.png' property='og:image'></meta>
        <meta content="#10B981" data-react-helmet="true" name="theme-color"/>
        <title>Neddo</title>
      </Head>
      <a href="https://twitter.com/ItsNeddo" target="_blank" className="fadeIn text-6xl text-center flex-start text-white font-bold py-2 px-4 mt-10 transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:translate-y-1 hover:scale-110"><i className="fab fa-twitter"></i> Twitter</a>
      <br></br><br></br><br></br>
      <a href="https://github.com/Neddoo" target="_blank" className="fadeIn text-6xl text-center flex-start text-white font-bold py-2 px-4 mt-10 transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:translate-y-1 hover:scale-110"><i className="fab fa-github"></i> GitHub</a>
      <br></br><br></br><br></br>
      <a href="mailto:me@neddo.dev" target="_blank" className="fadeIn text-6xl text-center flex-start text-white font-bold py-2 px-4 mt-10 transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:translate-y-1 hover:scale-110"><i className="fas fa-envelope-square"></i> Email</a>
    </div>
  )
}