import Head from 'next/head'

export default function Home() {
  return (
    <div class="text-center text-white center-custom">
      <Head>
        <meta content="Neddo" property="og:title"/>
        <meta property="og:type" content="website"/>
        <meta content="Hi! I'm Sven! Software Developer" property="og:description"/>
        <meta content="https://neddo.codes" property="og:url"/>
        <meta content='https://i.imgur.com/nhM2zxl.png' property='og:image'></meta>
        <meta content="#10B981" data-react-helmet="true" name="theme-color"/>
        <title>Neddo</title>
      </Head>
      {/*<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">*/}
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 fadeIn transform hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out">
          <div class="flex justify-center md:justify-end -mt-16">
          <a class="w-20 h-20 object-cover rounded-full"/>
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">Personal Website</h2>
            <p class="mt-2 text-gray-600">Personal website. Made with Next.JS</p>
          </div>
          <div class="flex justify-end mt-4">
            <a target="_blank" href="https://github.com/Neddoo/neddo.codes" class="text-xl font-medium underline text-black">GitHub Repository</a>
          </div>
        </div>  
      {/*</div>*/}
    </div>
    
  )
}