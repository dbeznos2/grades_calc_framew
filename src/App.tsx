import React from "react";
import { SemesterBox } from "./SemesterBox.tsx";


function App() {
  return (
    <>
      <header className="bg-sky-600 pb-24">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center py-5 lg:justify-between">
            <div className="absolute left-0 flex-shrink-0 lg:static">
              <a className="text-sky-100" href="#">
                <span className="sr-only">Grades calculator</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </a>
            </div>

            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <button
                type="button"
                className="relative flex-shrink-0 rounded-full p-1 text-sky-100 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Reload</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
            <div className="grid grid-cols-3 items-center gap-8">
              <div className="col-span-2">
                <nav className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white font-bold rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
                  >
                    Math
                  </a>
                  <a
                    href="#"
                    className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                  >
                    Société
                  </a>
                  <a
                    href="#"
                    className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                  >
                    Anglais
                  </a>
                  <a
                    href="#"
                    className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                  >
                    Modules EPSIC
                  </a>
                  <a
                    href="#"
                    className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                  >
                    CIE
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="-mt-24 pb-8">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <h1 className="sr-only">Averages</h1>
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Grades
                </h2>
                <SemesterBox />
              </section>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Averages
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="col-span-2 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Moyenne générale
                      </dt>
                      <dd className="text-xs font-medium text-green-600">
                        +4.75%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-bold leading-10 tracking-tight text-gray-900">
                        5.5
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Maths
                      </dt>
                      <dd className="text-xs font-medium text-green-600">
                        +54.02%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        6
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Société
                      </dt>
                      <dd className="text-xs font-medium text-red-700">
                        -1.39%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        4.5
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Anglais
                      </dt>
                      <dd className="text-xs font-medium text-green-600">
                        +10.18%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        4.5
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Informatique
                      </dt>
                      <dd className="text-xs font-medium text-green-600">
                        +10.18%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        4.5
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Modules EPSIC
                      </dt>
                      <dd className="text-xs font-medium text-green-600">
                        +10.18%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        4.5
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
                      <dt className="text-sm font-medium leading-6 text-gray-500">
                        Modules CIE
                      </dt>
                      <dd className="text-xs font-medium text-red-600">
                        -10.18%
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        4.5
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
