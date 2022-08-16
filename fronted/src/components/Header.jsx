import Nav from "./Nav";
import HeaderRow from "./HeaderRow";
import { headerNavigate } from "../utils/data.util";

const image = require('../assets/Analyze.svg').default;

export default function Header() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Nav />
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline"> Una casa para </span>{' '}
                <span className="block text-cyan-700 xl:inline"> Compartir Investigaciones </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Bienvenido a Be Rearcher una plataforma para investigadores
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {headerNavigate.map((e) => (
                  <HeaderRow
                    href={e.href}
                    content={e.content}
                    divsty={e.div}
                    asty={e.asty} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-11 lg:right-0 lg:w-1/2">
        <img src={image} />
      </div>
    </div>
  )
}