import Link from 'next/link';
import events from './events';

export const metadata = {
  title: 'SurabayaDev | event',
  description: 'Page description',
};

export default function Event() {
  return (
    <div className="max-w-6xl mx-auto sm:px-6 px-4">
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-green-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>

        <section className="relative pt-32 pb-12">
          <div className="text-center py-0 lg:py-12">
            <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-5">
              Event
            </h2>

            <p className="font-normal text-gray-500 text-base md:text-lg lg:text-xl mb-16">
              List event terbaru Surabayadev
            </p>
          </div>
        </section>

        <section className="my-5">
          {/* Items */}
          <div className=" mx-auto grid gap-6 md:grid-cols-1 items-start">
            {/* 1st item */}

            {events.map((event) => (
              <div className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded shadow-xl md:shadow-none md:hover:shadow-xl mb-8">
                <img
                  alt={event.title}
                  className="md:w-64 sm:w-full h-full object-cover mb-6 md:mb-0 md:mr-6 rounded"
                  src={event.imageUrl}
                />
                <div className="md:text-left p-4">
                  <div>
                    <a
                      className="mt-5 btn outline mr-3 outline-offset-1 hover:bg-green-700 hover:outline-none hover:text-white
                     outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                      </svg>
                      <span className="">{event.price}</span>
                    </a>
                    <a
                      target="_blank"
                      href={event.map}
                      className="mt-5 btn outline mr-3 outline-offset-1 hover:bg-green-700 hover:outline-none hover:text-white outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                      </svg>
                      <span className="">{event.place}</span>
                    </a>
                  </div>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-0 mt-3">
                    {event.title}
                  </h4>
                  <h4 className="text-sm text-gray-400 leading-snug tracking-tight mb-3">
                    {event.time}
                  </h4>

                  <p className="text-gray-600 text-justify overflow-ellipsis overflow-hidden">
                    {event.description}
                  </p>

                  <Link
                    href={event.link}
                    target="_blank"
                    className="btn text-sm md:mt-15 mt-10 py-2 px-6 text-white bg-black hover:bg-gray-200 hover:text-black hover:shadow-xl rounded-full">
                    Detail Event
                  </Link>
                </div>
              </div>
            ))}
            {/* {[1, 2].map(() => (
              <div className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded shadow-xl md:shadow-none md:hover:shadow-xl mb-8">
                <img
                  src='' alt=""
                  className="md:w-64 sm:w-full h-full object-cover mb-6 md:mb-0 md:mr-6 rounded"
                />
                <div className="md:text-left p-4">
                  <div>
                    <a className="btn outline mr-3 outline-offset-1 outline-green-700 hover:outline-white text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                      </svg>
                      <span className="">Gratis</span>
                    </a>
                    <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                      </svg>
                      <span className=""></span>
                    </a>
                  </div>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-0 mt-3">
                    
                  </h4>
                  <h4 className="text-sm text-gray-400 leading-snug tracking-tight mb-3">
                    Minggu, 13 Juni 2023
                  </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <Link
                    href="/event/event-detail"
                    className="btn text-sm md:mt-15 mt-10 py-2 px-6 text-white bg-black hover:bg-gray-200 hover:text-black hover:shadow-xl rounded-full">
                    Detail Event
                  </Link>
                </div>
              </div>
            ))} */}
          </div>
        </section>
      </section>
    </div>
  );
}
