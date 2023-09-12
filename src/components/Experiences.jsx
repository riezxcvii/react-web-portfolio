import React from "react";
// import "flowbite/dist/flowbite.css";
import st1 from "../assets/img/stacktrek/stacktrek-photoshoot.jpg";
import st2 from "../assets/img/stacktrek/stacktrek-working.jpeg";
import st3 from "../assets/img/stacktrek/stacktrek-meeting.jpg";
import st4 from "../assets/img/stacktrek/stacktrek-group.JPG";
import st5 from "../assets/img/stacktrek/stacktrek-working2.jpg";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dirtyWhite to-lightPeach">
      <h1 className="name p-8 md:text-4xl">Experiences</h1>

      <div className="px-8 py-4">
        <div className="bg-dirtyWhite p-6 w-2/5 rounded-lg shadow-md">
          <div>
            <h1>On-The-Job Training</h1>
            <h2>Stacktrek Academy</h2>
            <h2>February 2023 - May 2023</h2>
          </div>

          <div>
            <div
              id="default-carousel"
              class="relative w-full"
              data-carousel="slide"
            >
              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={st1}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={st2}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={st3}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={st4}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img
                    src={st5}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>

              <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>

              <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
