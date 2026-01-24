import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">Contact Me</h1>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
              Get in touch or learn more about my work.
            </p>
          </div>

          <div class="px-4 py-6 sm:p-8">
            <section class="mb-10">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div class="prose dark:prose-invert text-gray-600 dark:text-gray-300">
                <p>
                  Frontend Developer with 6+ years of experience building scalable web and mobile
                  applications using Angular, TypeScript, and modern state management (RxJS, NGXS).
                  Skilled in creating reusable Angular libraries and UI components, leading teams,
                  and delivering enterprise solutions across fintech, banking, ERP, and logistics.
                  Experienced with Ionic, Nx monorepos, and Node.js automation.
                </p>
                <p>
                  A freelancer and part-time technical blog writer, contributing developer-focused
                  content on Angular and frontend best practices. An active learner, continuously
                  exploring new frameworks, tools, and architectural patterns to stay aligned with
                  modern web development trends.
                </p>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Social Links</h2>
              <div class="flex flex-wrap gap-6">
                <!-- LinkedIn -->
                <a
                  href="https://www.linkedin.com/in/vetriselvan-panneerselvam"
                  target="_blank"
                  rel="noopener"
                  class="group flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300"
                >
                  <svg
                    class="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                  <div>
                    <span class="block text-sm font-semibold text-gray-900 dark:text-white"
                      >LinkedIn</span
                    >
                  </div>
                </a>

                <!-- GitHub -->
                <a
                  href="https://github.com/vetriselvan-pv"
                  target="_blank"
                  rel="noopener"
                  class="group flex items-center space-x-3 p-4 bg-gray-100 dark:bg-gray-700/50 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <svg
                    class="w-8 h-8 text-gray-900 dark:text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  <div>
                    <span class="block text-sm font-semibold text-gray-900 dark:text-white"
                      >GitHub</span
                    >
                  </div>
                </a>

                <!-- Medium -->
                <a
                  href="https://medium.com/@vetriselvan_11"
                  target="_blank"
                  rel="noopener"
                  class="group flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/40 transition-all duration-300"
                >
                  <svg
                    class="w-8 h-8 text-black dark:text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.17-.51 5.75-1.14 5.75s-1.14-2.58-1.14-5.75.51-5.75 1.14-5.75 1.14 2.58 1.14 5.75z"
                    />
                  </svg>
                  <div>
                    <span class="block text-sm font-semibold text-gray-900 dark:text-white"
                      >Medium</span
                    >
                  </div>
                </a>

                <!-- dev.to -->
                <a
                  href="https://dev.to/vetriselvan_11"
                  target="_blank"
                  rel="noopener"
                  class="group flex items-center space-x-3 p-4 bg-gray-100 dark:bg-gray-700/50 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <svg
                    class="w-8 h-8 text-gray-900 dark:text-white group-hover:scale-110 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="dev.to"
                    role="img"
                    viewBox="0 0 512 512"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="512" height="512" rx="15%"></rect>
                      <path
                        fill="#ffffff"
                        d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                      ></path>
                    </g>
                  </svg>
                  <div>
                    <span class="block text-sm font-semibold text-gray-900 dark:text-white"
                      >dev.to</span
                    >
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Contact {}
