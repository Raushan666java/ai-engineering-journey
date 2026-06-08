@extends('auth.layouts.app')


@section('content')

<main>
      <section class="py-10 md:p-10 xl:p-36">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="w-full">
            <div class="flex flex-col lg:items-center lg:flex-row">
              <div class="w-full p-5 lg:w-1/2 lg:p-10">
                <div class="flex flex-col items-center text-center">
                  <img src="assets/img/Illustration.svg" class="mb-8" alt="">
                  <h3 class="mb-4 text-2xl font-semibold sm:text-4xl text-slate-900">
                    Transform your Phone into <br>
                    a Classroom
                  </h3>
                  <p class="text-base leading-6 text-slate-700">
                    Seize the moment and help shape the future by starting
                    <br>
                    a career in blockchain now
                  </p>
                </div>
              </div>
              <div class="w-full p-5 lg:w-1/2 lg:p-10">
                <div>
                  <div class="text-center">
                    <h3 class="mb-4 text-2xl font-semibold sm:text-4xl text-slate-800">
                      Sign In
                    </h3>
                    <p class="text-base leading-6 text-slate-400">
                      Welcome back, you’ve been missed!
                    </p>
                  </div>
                  <div class="mt-6">
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <a href="#" class="flex items-center justify-center w-full gap-3 p-4 border rounded-lg border-slate-300 text-slate-400">
                        <svg width="21" height="20" viewbox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clippath="url(#clip0_3367_29970)">
                            <path d="M4.93242 12.0863L4.23625 14.6852L1.69176 14.739C0.931328 13.3286 0.5 11.7149 0.5 10C0.5 8.34179 0.903281 6.77804 1.61812 5.40112H1.61867L3.88398 5.81644L4.87633 8.06815C4.66863 8.67366 4.55543 9.32366 4.55543 10C4.55551 10.7341 4.68848 11.4374 4.93242 12.0863Z" fill="#8247FF"></path>
                            <path d="M20.3242 8.13184C20.439 8.73676 20.4989 9.36148 20.4989 9.99996C20.4989 10.7159 20.4236 11.4143 20.2802 12.0879C19.7934 14.3802 18.5214 16.3818 16.7594 17.7983L16.7588 17.7978L13.9055 17.6522L13.5017 15.1313C14.6709 14.4456 15.5847 13.3725 16.066 12.0879H10.7188V8.13184H16.144H20.3242Z" fill="#8247FF"></path>
                            <path d="M16.7595 17.7977L16.7601 17.7983C15.0464 19.1757 12.8694 19.9999 10.4996 19.9999C6.69141 19.9999 3.38043 17.8713 1.69141 14.7389L4.93207 12.0862C5.77656 14.34 7.95074 15.9444 10.4996 15.9444C11.5952 15.9444 12.6216 15.6483 13.5024 15.1312L16.7595 17.7977Z" fill="#28B446"></path>
                            <path d="M16.882 2.30219L13.6425 4.95437C12.7309 4.38461 11.6534 4.05547 10.4991 4.05547C7.89246 4.05547 5.67762 5.73348 4.87543 8.06812L1.61773 5.40109H1.61719C3.28148 2.1923 6.63422 0 10.4991 0C12.9254 0 15.1502 0.864297 16.882 2.30219Z" fill="#F14336"></path>
                          </g>
                          <defs>
                            <clippath id="clip0_3367_29970">
                              <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                            </clippath>
                          </defs>
                        </svg>
                        <span class="text-base font-medium leading-6">Sign With Google</span>
                      </a>
                      <a href="#" class="flex items-center justify-center w-full gap-3 p-4 border rounded-lg border-slate-300 text-slate-400">
                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.8471 0C13.8936 0 13.9401 0 13.9893 0C14.1035 1.41044 13.5651 2.46432 12.9109 3.22751C12.2689 3.98542 11.3898 4.7205 9.9679 4.60897C9.87305 3.21872 10.4123 2.24301 11.0657 1.48158C11.6717 0.771967 12.7826 0.140517 13.8471 0Z" fill="#64748B"></path>
                          <path d="M18.1529 14.6805C18.1529 14.6945 18.1529 14.7068 18.1529 14.72C17.7533 15.9302 17.1834 16.9674 16.4878 17.9299C15.8528 18.8038 15.0747 19.9797 13.6854 19.9797C12.4848 19.9797 11.6874 19.2078 10.457 19.1867C9.15543 19.1656 8.43967 19.8322 7.24967 19.9999C7.11354 19.9999 6.97742 19.9999 6.84392 19.9999C5.97008 19.8735 5.26486 19.1814 4.75109 18.5579C3.23614 16.7153 2.06546 14.3353 1.84766 11.2896C1.84766 10.991 1.84766 10.6933 1.84766 10.3947C1.93987 8.21493 2.99902 6.44266 4.40683 5.58374C5.14981 5.12706 6.1712 4.73801 7.30851 4.9119C7.79593 4.98742 8.29389 5.15429 8.73037 5.3194C9.14402 5.47836 9.66129 5.76027 10.1513 5.74534C10.4833 5.73568 10.8135 5.56267 11.1481 5.44059C12.1283 5.08667 13.089 4.68092 14.3555 4.8715C15.8774 5.10159 16.9577 5.77783 17.6251 6.82118C16.3376 7.64057 15.3197 8.87536 15.4936 10.984C15.6482 12.8994 16.7618 14.0201 18.1529 14.6805Z" fill="#64748B"></path>
                        </svg>

                        <span class="text-sm font-semibold leading-6">Sign With Apple</span>
                      </a>
                    </div>
                    <div class="relative py-4">
                      <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-slate-300"></div>
                      </div>
                      <div class="relative flex justify-center text-sm font-medium leading-6">
                        <span class="px-6 text-gray-900 uppercase bg-white">OR</span>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div class="grid gap-4">
                      <div>
                        <label for="email" class="block text-sm font-medium text-slate-800">Email</label>
                        <div class="relative mt-1.5 rounded-md">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1.66797" y="2.5" width="16.6667" height="15" rx="4" stroke="#475569" stroke-width="1.5"></rect>
                              <path d="M1.66797 5.83325L7.50252 10.5009C8.9634 11.6696 11.0392 11.6696 12.5001 10.5009L18.3346 5.83325" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                          <input type="text" name="name" id="email" class="block w-full p-4 pl-10 text-gray-800 border bg-slate-50 rounded-xl border-slate-300 placeholder:text-gray-400 sm:text-sm ring-0 focus:ring-0 focus:border-primary" placeholder="Your Email">
                        </div>
                      </div>
                      <div>
                        <label for="password" class="block text-sm font-medium text-slate-800">Password</label>
                        <div class="relative mt-1.5 rounded-md">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clippath="url(#clip0_3367_30130)">
                                <rect x="1.66797" y="5" width="16.6667" height="13.3333" rx="4" stroke="#475569" stroke-width="1.5"></rect>
                                <ellipse cx="9.9987" cy="11.6667" rx="1.66667" ry="1.66667" stroke="#475569" stroke-width="1.5"></ellipse>
                                <path d="M13.3346 5.00008C13.3346 3.15913 11.8423 1.66675 10.0013 1.66675C8.16035 1.66675 6.66797 3.15913 6.66797 5.00008" stroke="#475569" stroke-width="1.5"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_3367_30130">
                                  <rect width="20" height="20" fill="white"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                          <input type="text" name="name" id="password" class="block w-full p-4 pl-10 text-gray-800 border bg-slate-50 rounded-xl border-slate-300 placeholder:text-gray-400 sm:text-sm ring-0 focus:ring-0 focus:border-primary" placeholder="Your Email">
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 border border-gray-300 rounded text-primary focus:ring-0 focus:border-primary">
                          <label for="remember-me" class="block ml-3 text-sm leading-6 text-gray-900">Remember me</label>
                        </div>
                        <div class="text-sm leading-6">
                          <a href="forgot-pass.html" class="font-medium text-red-500 hover:text-violet-500">Forgot password?</a>
                        </div>
                      </div>
                      <div>
                        <button type="submit" class="flex justify-center w-full px-8 py-4 text-sm font-medium leading-6 text-white transition bg-primary rounded-xl hover:bg-violet-500">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  <p class="mt-4 text-sm leading-6 text-center text-gray-500">
                    Don't have an account yet?
                    <a href="sign-up.html" class="font-semibold text-primary hover:text-primary">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center mt-8">
            <nav>
              <ul class="flex flex-wrap justify-center gap-5 md:gap-10">
                <li>
                  <a href="#" class="text-base text-slate-900">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" class="text-base text-slate-900">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" class="text-base text-slate-900">Help</a>
                </li>
                <li>
                  <a href="#" class="text-base text-slate-900">English</a>
                </li>
              </ul>
            </nav>
            <p class="mt-4 text-base text-slate-600">
              &copy; 2023 Taildo, All Right Reserved.
            </p>
          </div>
        </div>
      </section>
    </main>

@endsection