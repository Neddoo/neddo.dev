import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div class="flex flex-col min-h-screen bg-black">
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
        </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="/" class="text-xl text-center flex-start font-bold text-white py-2 px-4 mt-10 transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110">
          HOME
        </a>
        <a href="/portfolio" class="text-xl text-center font-bold flex-start text-white py-2 px-4 mt-10 transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110">
          PORTFOLIO
        </a>
        <a href="/contact" class="text-xl text-center font-bold flex-start text-white py-2 px-4 mt-10 transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:-translate-y-1 hover:scale-110">
          CONTACT
        </a>
      </div>
      </div>
      </nav>
      <Component {...pageProps} />
      </div>
  )
}

export default MyApp
