import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-center text-white center-custom">
      <Head>
        <meta content="Neddo" property="og:title"/>
        <meta property="og:type" content="website"/>
        <meta content="Hi! I'm Sven! Software Developer" property="og:description"/>
        <meta content="https://neddo.codes" property="og:url"/>
        <meta content='https://i.imgur.com/nhM2zxl.png' property='og:image'></meta>
        <meta content="#10B981" data-react-helmet="true" name="theme-color"/>
        <title>Neddo</title>
      </Head>
      {/*<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">*/}
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 fadeIn transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center md:justify-end -mt-16">
          <a className="w-20 h-20 object-cover rounded-full"/>
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">Personal Website 👨🏼‍💻</h2>
            <p className="mt-2 text-gray-600">Personal website. Made with Next.JS. Styled with TailwindCSS. Deployed using Vercel. <br></br><br></br></p>
          </div>
          <div className="flex justify-end mt-4">
            <a target="_blank" href="https://github.com/Neddoo/neddo.codes" className="text-xl font-medium underline text-black">GitHub Repository</a>
          </div>
        </div>  
      {/*</div>*/}
    </div>
    
  )
}