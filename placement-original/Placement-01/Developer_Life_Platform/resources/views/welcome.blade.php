<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>StudyQ - Dashboard</title>
    <link rel="stylesheet" href="npm/jsvectormap/dist/css/jsvectormap.min.css">
    <link rel="stylesheet" href="assets/css/output.css">
  </head>
  <body class="overflow-x-hidden">
    <!-- layout start -->
    <div class="w-full layout-wrapper active">
      <div class="relative w-full sm:flex">
        <!-- Large Sidebar -->
        <aside class="block xl:block sm:hidden overflow-style-none overflow-y-auto sidebar-wrapper w-[264px] fixed top-0 bg-white h-full z-30">
          <div class="sidebar-header sticky top-0 w-full h-[92px] flex items-center pl-[50px] z-30 bg-white border-b border-violet-50">
            <a href="index.html">
              <img src="assets/img/logo/logo-full.svg" class="block" alt="logo">
            </a>
            <button type="button" title="Ctrl+b" class="absolute right-0 inline-flex items-center justify-center w-4 transform -translate-y-1/2 rounded-l-lg bg-violet-50 drawer-btn h-9 top-1/2">
              <svg width="6" height="12" viewbox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.90613 6.42566C1.82803 6.34819 1.76603 6.25602 1.72372 6.15447C1.68142 6.05293 1.65963 5.944 1.65963 5.83399C1.65963 5.72398 1.68142 5.61506 1.72372 5.51351C1.76603 5.41196 1.82803 5.3198 1.90613 5.24233L5.73113 1.42566C5.80924 1.34819 5.87124 1.25602 5.91354 1.15447C5.95585 1.05293 5.97763 0.944004 5.97763 0.833994C5.97763 0.723984 5.95585 0.615062 5.91354 0.513513C5.87124 0.411964 5.80924 0.319796 5.73113 0.242327C5.575 0.0871179 5.36379 0 5.14363 0C4.92348 0 4.71227 0.0871179 4.55613 0.242327L0.731133 4.06733C0.262965 4.53608 0 5.17149 0 5.83399C0 6.4965 0.262965 7.13191 0.731133 7.60066L4.55613 11.4257C4.71135 11.5796 4.92085 11.6664 5.13947 11.6673C5.24914 11.668 5.35786 11.6469 5.45939 11.6055C5.56092 11.564 5.65327 11.5029 5.73113 11.4257C5.80924 11.3482 5.87124 11.256 5.91354 11.1545C5.95585 11.0529 5.97763 10.944 5.97763 10.834C5.97763 10.724 5.95585 10.6151 5.91354 10.5135C5.87124 10.412 5.80924 10.3198 5.73113 10.2423L1.90613 6.42566Z" fill="#8247FF"></path>
              </svg>
            </button>
          </div>
          <div class="relative z-20 w-full h-screen p-5 overflow-y-scroll sidebar-body overflow-style-none">
            <div class="nav-wrapper mb-[36px]">
              <div class="mb-5 item-wrapper">
                <h4 class="text-sm font-medium leading-7 text-slate-600">
                  Menu
                </h4>
                <ul class="mt-2.5">
                  <li class="space-y-1 item">
                    <button class="p-2.5 gap-2 w-full flex items-center rounded-lg hover:bg-violet-50 transition text-base font-medium cursor-pointer text-mainblue">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66663 3.66602C1.66663 2.56145 2.56206 1.66602 3.66663 1.66602H7.16663C8.2712 1.66602 9.16663 2.56145 9.16663 3.66602V5.49935C9.16663 6.60392 8.2712 7.49935 7.16663 7.49935H3.66663C2.56206 7.49935 1.66663 6.60392 1.66663 5.49935V3.66602Z" fill="#7C3AED"></path>
                        <path opacity="0.4" d="M1.66663 11.166C1.66663 10.0614 2.56206 9.16602 3.66663 9.16602H7.16663C8.2712 9.16602 9.16663 10.0614 9.16663 11.166V16.3327C9.16663 17.4373 8.2712 18.3327 7.16663 18.3327H3.66663C2.56206 18.3327 1.66663 17.4373 1.66663 16.3327V11.166Z" fill="#7C3AED"></path>
                        <path opacity="0.4" d="M10.8333 3.66602C10.8333 2.56145 11.7287 1.66602 12.8333 1.66602H16.3333C17.4378 1.66602 18.3333 2.56145 18.3333 3.66602V8.83268C18.3333 9.93725 17.4378 10.8327 16.3333 10.8327H12.8333C11.7287 10.8327 10.8333 9.93725 10.8333 8.83268V3.66602Z" fill="#7C3AED"></path>
                        <path d="M10.8333 14.5C10.8333 13.3954 11.7287 12.5 12.8333 12.5H16.3333C17.4378 12.5 18.3333 13.3954 18.3333 14.5V16.3333C18.3333 17.4379 17.4378 18.3333 16.3333 18.3333H12.8333C11.7287 18.3333 10.8333 17.4379 10.8333 16.3333V14.5Z" fill="#7C3AED"></path>
                      </svg>
                      <span class="item-text">Dashboards</span>
                      <svg class="ml-auto" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5917 6.8422C15.5142 6.76409 15.422 6.7021 15.3205 6.65979C15.2189 6.61748 15.11 6.5957 15 6.5957C14.89 6.5957 14.7811 6.61748 14.6795 6.65979C14.578 6.7021 14.4858 6.76409 14.4083 6.8422L10.5917 10.6589C10.5142 10.737 10.422 10.799 10.3205 10.8413C10.2189 10.8836 10.11 10.9054 10 10.9054C9.89 10.9054 9.78108 10.8836 9.67953 10.8413C9.57798 10.799 9.48581 10.737 9.40834 10.6589L5.59168 6.8422C5.51421 6.76409 5.42204 6.7021 5.32049 6.65979C5.21894 6.61748 5.11002 6.5957 5.00001 6.5957C4.89 6.5957 4.78108 6.61748 4.67953 6.65979C4.57798 6.7021 4.48581 6.76409 4.40834 6.8422C4.25313 6.99834 4.16602 7.20955 4.16602 7.4297C4.16602 7.64986 4.25313 7.86107 4.40834 8.0172L8.23334 11.8422C8.70209 12.3104 9.33751 12.5733 10 12.5733C10.6625 12.5733 11.2979 12.3104 11.7667 11.8422L15.5917 8.0172C15.7469 7.86107 15.834 7.64986 15.834 7.4297C15.834 7.20955 15.7469 6.99834 15.5917 6.8422Z" fill="#8247FF"></path>
                      </svg>
                    </button>
                    <ul class="pl-8 space-y-1 sub-menu">
                      <li>
                        <a href="index.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Dashboard One
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Dashboard Two
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <a href="teachers-list.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M6.66675 4.16667V10.8333C6.66675 11.7538 7.41294 12.5 8.33341 12.5H16.6667C17.5872 12.5 18.3334 11.7538 18.3334 10.8333V4.16667C18.3334 3.24619 17.5872 2.5 16.6667 2.5H8.33341C7.41294 2.5 6.66675 3.24619 6.66675 4.16667Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58337 11.2493C4.58337 10.0988 5.51611 9.16602 6.66671 9.16602C7.8173 9.16602 8.75004 10.0988 8.75004 11.2493C8.75004 12.3999 7.8173 13.3327 6.66671 13.3327C5.51611 13.3327 4.58337 12.3999 4.58337 11.2493Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.927 11.932C12.2408 12.0758 12.3786 12.4468 12.2348 12.7606C11.7306 13.8606 9.94355 15.8524 6.66662 15.8524C3.88295 15.8524 2.5156 17.2535 2.21426 17.8014C2.04791 18.1038 1.66787 18.2141 1.36542 18.0478C1.06297 17.8814 0.952637 17.5014 1.11899 17.199C1.65097 16.2317 3.45029 14.6024 6.66662 14.6024C9.38969 14.6024 10.7693 12.9579 11.0985 12.2397C11.2423 11.926 11.6132 11.7882 11.927 11.932Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 5.83398C9.375 5.48881 9.65482 5.20898 10 5.20898L15 5.20898C15.3452 5.20898 15.625 5.48881 15.625 5.83398C15.625 6.17916 15.3452 6.45898 15 6.45898L10 6.45898C9.65482 6.45898 9.375 6.17916 9.375 5.83398Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.875 9.16602C11.875 8.82084 12.1548 8.54102 12.5 8.54102H15C15.3452 8.54102 15.625 8.82084 15.625 9.16602C15.625 9.51119 15.3452 9.79102 15 9.79102H12.5C12.1548 9.79102 11.875 9.51119 11.875 9.16602Z" fill="#8247FF"></path>
                      </svg>
                      <span class="item-text">Teachers</span>
                    </a>
                  </li>
                  <li class="item">
                    <a href="students-list.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.865 8.84624V9.66848C16.865 10.6904 16.0366 11.5188 15.0147 11.5188C13.9928 11.5188 13.1644 10.6904 13.1644 9.66848V8.84624L14.4511 9.4181C14.8099 9.57757 15.2195 9.57757 15.5783 9.4181L16.865 8.84624ZM12.008 8.33227V10.3624C12.008 10.554 11.8526 10.7094 11.661 10.7094C11.4694 10.7094 11.3141 10.554 11.3141 10.3624V8.02344C11.3183 8.02561 11.3227 8.02768 11.3271 8.02965L12.008 8.33227Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M18.7022 7.60766L15.5782 6.21921C15.2194 6.05974 14.8098 6.05974 14.451 6.21921L11.327 7.60766C11.1439 7.68906 11.1439 7.94897 11.327 8.03037L14.451 9.41882C14.8098 9.57829 15.2194 9.57829 15.5782 9.41882L18.7022 8.03037C18.8854 7.94897 18.8854 7.68906 18.7022 7.60766Z" fill="#8247FF"></path>
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M13.5973 15.2195H17.7901C18.301 15.2195 18.7152 14.8053 18.7152 14.2943C18.7152 13.2919 17.81 12.4297 16.5124 12.0481C16.3576 12.0026 16.1919 12.0515 16.0783 12.1663L15.3435 12.9093C15.1625 13.0924 14.8668 13.0924 14.6857 12.9093L13.9509 12.1663C13.8374 12.0515 13.6717 12.0026 13.5168 12.0481C13.0622 12.1818 12.6558 12.3745 12.3196 12.6115C13.1206 13.3445 13.594 14.2453 13.5973 15.2195Z" fill="#8247FF"></path>
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M9.81824 6.92318V8.17774C9.81824 9.73667 8.55448 11.0004 6.99555 11.0004C5.43663 11.0004 4.17287 9.73667 4.17287 8.17774V6.92318L6.13575 7.79557C6.68314 8.03886 7.30796 8.03886 7.85535 7.79557L9.81824 6.92318ZM2.40869 6.1391V9.23625C2.40869 9.52855 2.17174 9.7655 1.87944 9.7655C1.58714 9.7655 1.35019 9.52855 1.35019 9.23625V5.66797C1.35662 5.67128 1.36321 5.67445 1.36997 5.67745L2.40869 6.1391Z" fill="#8247FF"></path>
                        <path d="M12.6212 5.03301L7.85537 2.91488C7.30799 2.6716 6.68316 2.6716 6.13577 2.91488L1.36999 5.03301C1.09061 5.15718 1.09061 5.55369 1.36999 5.67786L6.13577 7.79598C6.68316 8.03927 7.30799 8.03927 7.85537 7.79598L12.6212 5.67786C12.9005 5.55369 12.9005 5.15718 12.6212 5.03301Z" fill="#8247FF"></path>
                        <path d="M5.37277 11.9892L6.49375 13.1227C6.76995 13.402 7.22105 13.402 7.49725 13.1227L8.61823 11.9892C8.7914 11.8141 9.0442 11.7395 9.28047 11.809C11.26 12.3911 12.6409 13.7063 12.6409 15.2356C12.6409 16.0151 12.009 16.647 11.2295 16.647H2.76148C1.98201 16.647 1.35013 16.0151 1.35013 15.2356C1.35013 13.7063 2.73103 12.3911 4.71054 11.809C4.9468 11.7395 5.19961 11.8141 5.37277 11.9892Z" fill="#8247FF"></path>
                      </svg>
                      Students
                    </a>
                  </li>
                  <li class="item">
                    <a href="course-list.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.43065 4.52037C7.6609 3.28027 5.17721 2.71829 3.32857 2.50939C2.41365 2.40601 1.66663 3.17002 1.66663 4.11265V13.5C1.66663 14.4426 2.41365 15.2069 3.32857 15.3103C5.17721 15.5192 7.6609 16.0811 9.43065 17.3212C9.60071 17.4404 9.80033 17.5 9.99996 17.5V4.69913C9.80034 4.69913 9.60071 4.63954 9.43065 4.52037ZM3.54908 6.7833C3.60191 6.44219 3.92126 6.20849 4.26237 6.26132C5.34801 6.42945 6.57064 6.71048 7.72547 7.15705C8.04741 7.28155 8.20748 7.64346 8.08298 7.96541C7.95848 8.28735 7.59657 8.44741 7.27463 8.32292C6.22576 7.91732 5.09504 7.65517 4.07106 7.49659C3.72995 7.44376 3.49625 7.12441 3.54908 6.7833ZM4.26237 9.59465C3.92126 9.54182 3.60191 9.77552 3.54908 10.1166C3.49625 10.4577 3.72995 10.7771 4.07106 10.8299C4.5871 10.9098 5.13183 11.0163 5.68049 11.1547C6.01518 11.2392 6.35495 11.0363 6.43939 10.7016C6.52383 10.3669 6.32097 10.0272 5.98628 9.94271C5.39544 9.79364 4.81215 9.67979 4.26237 9.59465Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M10.5693 4.52037C12.3391 3.28027 14.8227 2.71829 16.6714 2.50939C17.5863 2.40601 18.3333 3.17002 18.3333 4.11265V13.5C18.3333 14.4426 17.5863 15.2069 16.6714 15.3103C14.8227 15.5192 12.3391 16.0811 10.5693 17.3212C10.3992 17.4404 10.1996 17.5 10 17.5V4.69913C10.1996 4.69913 10.3992 4.63954 10.5693 4.52037Z" fill="#8247FF"></path></svg>Course
                    </a>
                  </li>
                  <li class="space-y-1 item">
                    <button class="p-2.5 gap-2 w-full flex items-center rounded-lg hover:bg-violet-50 transition text-base font-medium cursor-pointer text-mainblue">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M18.3333 14.168V9.16797C18.3333 7.78726 17.214 6.66797 15.8333 6.66797H4.16663C2.78591 6.66797 1.66663 7.78726 1.66663 9.16797V14.168C1.66663 15.5487 2.78591 16.668 4.16663 16.668H15.8333C17.214 16.668 18.3333 15.5487 18.3333 14.168Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37496 4.53794C8.15709 3.81037 6.54696 3.47122 5.32998 3.34025C4.68954 3.27132 4.16663 3.78066 4.16663 4.40908V10.6673C4.16663 11.2957 4.68954 11.8052 5.32998 11.8742C6.62404 12.0134 8.36262 12.3881 9.60144 13.2148C9.83953 13.3737 10.1604 13.3737 10.3985 13.2148C11.6373 12.3881 13.3759 12.0134 14.6699 11.8742C15.3104 11.8052 15.8333 11.2957 15.8333 10.6673V4.40908C15.8333 3.78066 15.3104 3.27132 14.6699 3.34025C13.453 3.47122 11.8428 3.81037 10.625 4.53794V13.0718C10.5478 13.1179 10.4723 13.1655 10.3985 13.2148C10.1604 13.3737 9.83953 13.3737 9.60144 13.2148C9.52765 13.1655 9.45209 13.1179 9.37496 13.0718V4.53794Z" fill="#8247FF"></path>
                      </svg>
                      <span class="item-text">Resource</span>
                      <svg class="ml-auto" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5917 6.8422C15.5142 6.76409 15.422 6.7021 15.3205 6.65979C15.2189 6.61748 15.11 6.5957 15 6.5957C14.89 6.5957 14.7811 6.61748 14.6795 6.65979C14.578 6.7021 14.4858 6.76409 14.4083 6.8422L10.5917 10.6589C10.5142 10.737 10.422 10.799 10.3205 10.8413C10.2189 10.8836 10.11 10.9054 10 10.9054C9.89 10.9054 9.78108 10.8836 9.67953 10.8413C9.57798 10.799 9.48581 10.737 9.40834 10.6589L5.59168 6.8422C5.51421 6.76409 5.42204 6.7021 5.32049 6.65979C5.21894 6.61748 5.11002 6.5957 5.00001 6.5957C4.89 6.5957 4.78108 6.61748 4.67953 6.65979C4.57798 6.7021 4.48581 6.76409 4.40834 6.8422C4.25313 6.99834 4.16602 7.20955 4.16602 7.4297C4.16602 7.64986 4.25313 7.86107 4.40834 8.0172L8.23334 11.8422C8.70209 12.3104 9.33751 12.5733 10 12.5733C10.6625 12.5733 11.2979 12.3104 11.7667 11.8422L15.5917 8.0172C15.7469 7.86107 15.834 7.64986 15.834 7.4297C15.834 7.20955 15.7469 6.99834 15.5917 6.8422Z" fill="#8247FF"></path>
                      </svg>
                    </button>
                    <ul class="pl-8 space-y-1 sub-menu">
                      <li>
                        <a href="resource-blog.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="resource-ebook.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Ebook
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <a href="certificate-list.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M10.8334 17.4993V12.916H14.1667V17.4993L12.5 16.666L10.8334 17.4993Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M18.3334 12.5L18.3334 4.16667C18.3334 3.24619 17.5872 2.5 16.6667 2.5L3.33337 2.5C2.4129 2.5 1.66671 3.24619 1.66671 4.16667L1.66671 12.5C1.66671 13.4205 2.4129 14.1667 3.33337 14.1667L7.91671 14.1667L16.6667 14.1667C17.5872 14.1667 18.3334 13.4205 18.3334 12.5Z" fill="#8247FF"></path>
                        <path d="M15 12.5C15 13.8807 13.8807 15 12.5 15C11.1193 15 10 13.8807 10 12.5C10 11.1193 11.1193 10 12.5 10C13.8807 10 15 11.1193 15 12.5Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 5.83398C4.375 5.48881 4.65482 5.20898 5 5.20898H15C15.3452 5.20898 15.625 5.48881 15.625 5.83398C15.625 6.17916 15.3452 6.45898 15 6.45898H5C4.65482 6.45898 4.375 6.17916 4.375 5.83398Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 9.16602C4.375 8.82084 4.65482 8.54102 5 8.54102H8.33333C8.67851 8.54102 8.95833 8.82084 8.95833 9.16602C8.95833 9.51119 8.67851 9.79102 8.33333 9.79102H5C4.65482 9.79102 4.375 9.51119 4.375 9.16602Z" fill="#8247FF"></path>
                      </svg>
                      Certificate
                    </a>
                  </li>
                  <li class="item">
                    <a href="messages.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M10.8333 3.33203H9.16663C5.02449 3.33203 1.66663 6.6899 1.66663 10.832V14.9987C1.66663 16.8396 3.15901 18.332 4.99996 18.332H10.8333C14.9754 18.332 18.3333 14.9742 18.3333 10.832C18.3333 6.6899 14.9754 3.33203 10.8333 3.33203Z" fill="#8247FF"></path>
                        <path d="M18.3333 4.99935C18.3333 6.8403 16.8409 8.33268 15 8.33268C13.159 8.33268 11.6666 6.8403 11.6666 4.99935C11.6666 3.1584 13.159 1.66602 15 1.66602C16.8409 1.66602 18.3333 3.1584 18.3333 4.99935Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04163 9.16602C6.04163 8.82084 6.32145 8.54102 6.66663 8.54102H9.99996C10.3451 8.54102 10.625 8.82084 10.625 9.16602C10.625 9.51119 10.3451 9.79102 9.99996 9.79102H6.66663C6.32145 9.79102 6.04163 9.51119 6.04163 9.16602ZM6.04163 12.4993C6.04163 12.1542 6.32145 11.8743 6.66663 11.8743H13.3333C13.6785 11.8743 13.9583 12.1542 13.9583 12.4993C13.9583 12.8445 13.6785 13.1243 13.3333 13.1243H6.66663C6.32145 13.1243 6.04163 12.8445 6.04163 12.4993Z" fill="#8247FF"></path>
                      </svg>
                      Chat
                    </a>
                  </li>
                  <li class="space-y-1 item">
                    <button class="p-2.5 gap-2 w-full flex items-center rounded-lg hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66663 4.99935C1.66663 3.1584 3.15901 1.66602 4.99996 1.66602H9.99996V9.99935L1.66663 9.99935V4.99935Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M1.66663 14.9987C1.66663 16.8396 3.15901 18.332 4.99996 18.332H9.99996V9.9987L1.66663 9.9987V14.9987Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M18.3333 4.99935C18.3333 3.1584 16.8409 1.66602 14.9999 1.66602H9.99992V9.99935L18.3333 9.99935V4.99935Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 15C18.3333 16.841 16.8409 18.3333 15 18.3333H10V10H18.3333V15ZM16.4583 12.9167C16.4583 13.2618 16.1785 13.5417 15.8333 13.5417L12.5 13.5417C12.1548 13.5417 11.875 13.2618 11.875 12.9167C11.875 12.5715 12.1548 12.2917 12.5 12.2917L15.8333 12.2917C16.1785 12.2917 16.4583 12.5715 16.4583 12.9167ZM15.8333 16.0417C16.1785 16.0417 16.4583 15.7618 16.4583 15.4167C16.4583 15.0715 16.1785 14.7917 15.8333 14.7917L12.5 14.7917C12.1548 14.7917 11.875 15.0715 11.875 15.4167C11.875 15.7618 12.1548 16.0417 12.5 16.0417H15.8333Z" fill="#8247FF"></path>
                      </svg>
                      <span class="item-text"> Pages</span>
                      <svg class="ml-auto" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5917 6.8422C15.5142 6.76409 15.422 6.7021 15.3205 6.65979C15.2189 6.61748 15.11 6.5957 15 6.5957C14.89 6.5957 14.7811 6.61748 14.6795 6.65979C14.578 6.7021 14.4858 6.76409 14.4083 6.8422L10.5917 10.6589C10.5142 10.737 10.422 10.799 10.3205 10.8413C10.2189 10.8836 10.11 10.9054 10 10.9054C9.89 10.9054 9.78108 10.8836 9.67953 10.8413C9.57798 10.799 9.48581 10.737 9.40834 10.6589L5.59168 6.8422C5.51421 6.76409 5.42204 6.7021 5.32049 6.65979C5.21894 6.61748 5.11002 6.5957 5.00001 6.5957C4.89 6.5957 4.78108 6.61748 4.67953 6.65979C4.57798 6.7021 4.48581 6.76409 4.40834 6.8422C4.25313 6.99834 4.16602 7.20955 4.16602 7.4297C4.16602 7.64986 4.25313 7.86107 4.40834 8.0172L8.23334 11.8422C8.70209 12.3104 9.33751 12.5733 10 12.5733C10.6625 12.5733 11.2979 12.3104 11.7667 11.8422L15.5917 8.0172C15.7469 7.86107 15.834 7.64986 15.834 7.4297C15.834 7.20955 15.7469 6.99834 15.5917 6.8422Z" fill="#8247FF"></path>
                      </svg>
                    </button>
                    <ul class="pl-8 space-y-1 sub-menu">
                      <li>
                        <a href="integrations.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a href="projects.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a href="transaction-list.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Transaction
                        </a>
                      </li>
                      <li>
                        <a href="calenders-month-events.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Calender Events
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="space-y-1 item">
                    <button class="p-2.5 gap-2 w-full flex items-center rounded-lg hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.625 15.8262V17.7077H12.5C12.8452 17.7077 13.125 17.9875 13.125 18.3327C13.125 18.6779 12.8452 18.9577 12.5 18.9577H7.5C7.15482 18.9577 6.875 18.6779 6.875 18.3327C6.875 17.9875 7.15482 17.7077 7.5 17.7077H9.375V15.8262H10.625Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M1.66663 4.99935C1.66663 3.1584 3.15901 1.66602 4.99996 1.66602H15C16.8409 1.66602 18.3333 3.1584 18.3333 4.99935V12.4993C18.3333 14.3403 16.8409 15.8327 15 15.8327H4.99996C3.15901 15.8327 1.66663 14.3403 1.66663 12.4993V4.99935Z" fill="#8247FF"></path>
                        <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 8.33325 8.33203)" fill="#8247FF"></ellipse>
                        <rect x="6.66663" y="9.16602" width="6.66667" height="3.33333" rx="1.66667" fill="#8247FF"></rect>
                      </svg>
                      <span class="item-text"> Authentication</span>
                      <svg class="ml-auto" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5917 6.8422C15.5142 6.76409 15.422 6.7021 15.3205 6.65979C15.2189 6.61748 15.11 6.5957 15 6.5957C14.89 6.5957 14.7811 6.61748 14.6795 6.65979C14.578 6.7021 14.4858 6.76409 14.4083 6.8422L10.5917 10.6589C10.5142 10.737 10.422 10.799 10.3205 10.8413C10.2189 10.8836 10.11 10.9054 10 10.9054C9.89 10.9054 9.78108 10.8836 9.67953 10.8413C9.57798 10.799 9.48581 10.737 9.40834 10.6589L5.59168 6.8422C5.51421 6.76409 5.42204 6.7021 5.32049 6.65979C5.21894 6.61748 5.11002 6.5957 5.00001 6.5957C4.89 6.5957 4.78108 6.61748 4.67953 6.65979C4.57798 6.7021 4.48581 6.76409 4.40834 6.8422C4.25313 6.99834 4.16602 7.20955 4.16602 7.4297C4.16602 7.64986 4.25313 7.86107 4.40834 8.0172L8.23334 11.8422C8.70209 12.3104 9.33751 12.5733 10 12.5733C10.6625 12.5733 11.2979 12.3104 11.7667 11.8422L15.5917 8.0172C15.7469 7.86107 15.834 7.64986 15.834 7.4297C15.834 7.20955 15.7469 6.99834 15.5917 6.8422Z" fill="#8247FF"></path>
                      </svg>
                    </button>
                    <ul class="pl-8 space-y-1 sub-menu">
                      <li>
                        <a href="sign-in.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a href="sign-up.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Sign Up
                        </a>
                      </li>
                      <li>
                        <a href="forgot-pass.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a href="otp.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          OTP
                        </a>
                      </li>
                      <li>
                        <a href="new-password.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          New Password
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="mb-5 item-wrapper">
                <h4 class="text-sm font-medium leading-7 text-slate-600">
                  Help
                </h4>
                <ul class="mt-2.5">
                  <li class="item">
                    <a href="settings.html" class="flex items-center gap-2 p-2.5 rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M10.7955 2.5H9.20454C8.3259 2.5 7.61363 3.17157 7.61363 4C7.61363 4.94801 6.5993 5.55073 5.76667 5.09747L5.6821 5.05144C4.92117 4.63722 3.94819 4.88304 3.50887 5.60048L2.71341 6.89951C2.27409 7.61695 2.5348 8.53434 3.29572 8.94855C4.12876 9.40202 4.12876 10.598 3.29572 11.0514C2.5348 11.4657 2.27409 12.383 2.71341 13.1005L3.50887 14.3995C3.94818 15.117 4.92117 15.3628 5.6821 14.9486L5.76667 14.9025C6.5993 14.4493 7.61363 15.052 7.61363 16C7.61363 16.8284 8.3259 17.5 9.20454 17.5H10.7955C11.6741 17.5 12.3864 16.8284 12.3864 16C12.3864 15.052 13.4007 14.4493 14.2333 14.9025L14.3179 14.9486C15.0788 15.3628 16.0518 15.117 16.4911 14.3995L17.2866 13.1005C17.7259 12.383 17.4652 11.4657 16.7043 11.0514C15.8712 10.598 15.8712 9.40203 16.7043 8.94856C17.4652 8.53435 17.7259 7.61696 17.2866 6.89952L16.4911 5.60049C16.0518 4.88305 15.0788 4.63723 14.3179 5.05145L14.2333 5.09748C13.4007 5.55074 12.3864 4.94801 12.3864 4C12.3864 3.17157 11.6741 2.5 10.7955 2.5Z" fill="#8247FF"></path>
                        <circle cx="10" cy="10" r="2.5" fill="#8247FF"></circle>
                      </svg>
                      Settings
                    </a>
                  </li>
                  <li class="space-y-1 item">
                    <button class="p-2.5 gap-2 w-full flex items-center rounded-lg hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                      <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M17.2368 8.22704L7.87794 3.55044C6.21339 2.71867 4.42235 4.42912 5.17818 6.1287L6.54182 9.19503C6.76977 9.70761 6.76977 10.2927 6.54182 10.8053L5.17818 13.8716C4.42235 15.5712 6.21339 17.2817 7.87793 16.4499L17.2368 11.7733C18.6988 11.0427 18.6988 8.9576 17.2368 8.22704Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45829 10.0002C6.45829 9.65498 6.73811 9.37516 7.08329 9.37516H9.99996C10.3451 9.37516 10.625 9.65498 10.625 10.0002C10.625 10.3453 10.3451 10.6252 9.99996 10.6252H7.08329C6.73811 10.6252 6.45829 10.3453 6.45829 10.0002Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04163 8.3335C1.04163 7.98832 1.32145 7.7085 1.66663 7.7085H3.33329C3.67847 7.7085 3.95829 7.98832 3.95829 8.3335C3.95829 8.67867 3.67847 8.9585 3.33329 8.9585H1.66663C1.32145 8.9585 1.04163 8.67867 1.04163 8.3335Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04163 11.6668C1.04163 11.3217 1.32145 11.0418 1.66663 11.0418H3.33329C3.67847 11.0418 3.95829 11.3217 3.95829 11.6668C3.95829 12.012 3.67847 12.2918 3.33329 12.2918H1.66663C1.32145 12.2918 1.04163 12.012 1.04163 11.6668Z" fill="#8247FF"></path>
                      </svg>
                      <span class="item-text"> Support</span>
                      <svg class="ml-auto" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5917 6.84171C15.5142 6.76361 15.422 6.70161 15.3205 6.6593C15.2189 6.617 15.11 6.59521 15 6.59521C14.89 6.59521 14.7811 6.617 14.6795 6.6593C14.578 6.70161 14.4858 6.76361 14.4083 6.84171L10.5917 10.6584C10.5142 10.7365 10.422 10.7985 10.3205 10.8408C10.2189 10.8831 10.11 10.9049 10 10.9049C9.89 10.9049 9.78108 10.8831 9.67953 10.8408C9.57798 10.7985 9.48581 10.7365 9.40834 10.6584L5.59168 6.84171C5.51421 6.76361 5.42204 6.70161 5.32049 6.6593C5.21894 6.617 5.11002 6.59521 5.00001 6.59521C4.89 6.59521 4.78108 6.617 4.67953 6.6593C4.57798 6.70161 4.48581 6.76361 4.40834 6.84171C4.25313 6.99785 4.16602 7.20906 4.16602 7.42921C4.16602 7.64937 4.25313 7.86058 4.40834 8.01671L8.23334 11.8417C8.70209 12.3099 9.33751 12.5728 10 12.5728C10.6625 12.5728 11.2979 12.3099 11.7667 11.8417L15.5917 8.01671C15.7469 7.86058 15.834 7.64937 15.834 7.42921C15.834 7.20906 15.7469 6.99785 15.5917 6.84171Z" fill="#8247FF"></path>
                      </svg>
                    </button>
                    <ul class="pl-8 space-y-1 sub-menu">
                      <li>
                        <a href="support-ticket-list.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Support Ticket
                        </a>
                      </li>
                      <li>
                        <a href="support-ticket.html" class="p-2.5 gap-2 w-full flex items-center rounded-lg bg-transparent hover:bg-violet-50 transition text-base font-medium text-mainblue cursor-pointer">
                          Ticket Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="relative p-3 rounded-lg bg-violet-50">
              <button class="absolute top-3 right-3">
                <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7128 16.7729C16.0057 17.0658 16.4805 17.0658 16.7734 16.7729C17.0663 16.48 17.0663 16.0052 16.7734 15.7123L13.0611 12L16.7734 8.2877C17.0663 7.99481 17.0663 7.51993 16.7734 7.22704C16.4805 6.93415 16.0057 6.93415 15.7128 7.22704L12.0005 10.9393L8.28815 7.22699C7.99526 6.9341 7.52038 6.9341 7.22749 7.22699C6.9346 7.51989 6.9346 7.99476 7.22749 8.28765L10.9398 12L7.22748 15.7123C6.93459 16.0052 6.93459 16.4801 7.22748 16.773C7.52038 17.0659 7.99525 17.0659 8.28814 16.773L12.0005 13.0606L15.7128 16.7729Z" fill="#EF4444"></path>
                </svg>
              </button>
              <h4 class="mb-2 text-sm font-semibold text-mainblue">
                New Features available
              </h4>
              <p class="text-sm text-slate-600">
                Check out the new dashboard view. Pages now load faster.
              </p>
              <div class="relative py-3">
                <img src="assets/img/green-men.png" class="w-full" alt="">
                <button class="absolute inline-flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-7 h-7 top-1/2 left-1/2">
                  <svg width="10" height="10" viewbox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clippath="url(#clip0_3942_1479)">
                      <path d="M8.09604 3.53047L4.61865 0.980574C4.34704 0.781688 4.02567 0.661896 3.69015 0.634476C3.35463 0.607056 3.01807 0.673079 2.71778 0.825226C2.41749 0.977374 2.16519 1.2097 1.98885 1.49646C1.81251 1.78322 1.71903 2.11321 1.71875 2.44984V7.55219C1.71823 7.88916 1.81123 8.21966 1.9874 8.50691C2.16356 8.79416 2.41599 9.02688 2.71658 9.17918C3.01717 9.33147 3.35412 9.39737 3.68993 9.36952C4.02575 9.34168 4.34725 9.22118 4.61865 9.02146L8.09604 6.47156C8.32678 6.30223 8.51441 6.08095 8.64373 5.82563C8.77306 5.57031 8.84044 5.28813 8.84044 5.00193C8.84044 4.71572 8.77306 4.43354 8.64373 4.17822C8.51441 3.9229 8.32678 3.70162 8.09604 3.53229V3.53047Z" fill="#8247FF"></path>
                    </g>
                    <defs>
                      <clippath id="clip0_3942_1479">
                        <rect width="8.75" height="8.75" fill="white" transform="translate(0.625 0.625)"></rect>
                      </clippath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div class="space-x-4">
                <button class="bg-primary rounded-md py-1.5 px-3 text-sm font-medium text-white">
                  Dismiss
                </button>
                <button class="text-sm underline text-primary">
                  What’s new?
                </button>
              </div>
            </div>
            <div class="relative bottom-0 w-full py-5 bg-white">
              <div class="flex items-center gap-2.5 justify-between">
                <div class="flex items-center">
                  <img src="assets/img/sidebar/ajay.png" class="w-10 h-10 mr-2 rounded-full" alt="">
                  <div>
                    <h4 class="text-sm font-semibold text-slate-800">
                      Neurotic Spy
                    </h4>
                    <p class="text-sm text-slate-500">neurotic@taildo.com</p>
                  </div>
                </div>
                <div>
                  <a href="sign-in.html">
                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 14L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L18 10" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M19 12L13 12M4 17.2663V7.26633M16 17.2663C16 18.3709 15.1046 19.2663 14 19.2663H10M16 7.26633C16 6.16176 15.1046 5.26633 14 5.26633H10M4.8906 19.8601L6.8906 21.1934C8.21971 22.0795 10 21.1267 10 19.5293V5.00336C10 3.40597 8.21971 2.45319 6.8906 3.33926L4.8906 4.6726C4.3342 5.04353 4 5.66799 4 6.3367V18.196C4 18.8647 4.3342 19.4891 4.8906 19.8601Z" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <!-- Overlay -->
        <div style="z-index: 25" class="fixed top-0 left-0 block w-full h-full bg-black aside-overlay sm:hidden bg-opacity-30"></div>
        <!-- Mini Sidebar -->
        <aside class="sm:block hidden relative w-[96px] bg-white">
          <div class="relative top-0 z-30 w-full sidebar-wrapper-collapse">
            <div class="sidebar-header bg-slate-50 sticky top-0 w-full h-[92px] flex items-center justify-center z-20">
              <a href="index.html">
                <img src="assets/img/logo/logo-icon.svg" class="block" alt="logo">
              </a>
              <button type="button" title="Ctrl+b" class="absolute right-0 items-center justify-center hidden w-4 transform -translate-y-1/2 bg-white rounded-l-lg xl:inline-flex drawer-btn h-9 top-1/2">
                <svg width="6" height="12" viewbox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.90613 6.42566C1.82803 6.34819 1.76603 6.25602 1.72372 6.15447C1.68142 6.05293 1.65963 5.944 1.65963 5.83399C1.65963 5.72398 1.68142 5.61506 1.72372 5.51351C1.76603 5.41196 1.82803 5.3198 1.90613 5.24233L5.73113 1.42566C5.80924 1.34819 5.87124 1.25602 5.91354 1.15447C5.95585 1.05293 5.97763 0.944004 5.97763 0.833994C5.97763 0.723984 5.95585 0.615062 5.91354 0.513513C5.87124 0.411964 5.80924 0.319796 5.73113 0.242327C5.575 0.0871179 5.36379 0 5.14363 0C4.92348 0 4.71227 0.0871179 4.55613 0.242327L0.731133 4.06733C0.262965 4.53608 0 5.17149 0 5.83399C0 6.4965 0.262965 7.13191 0.731133 7.60066L4.55613 11.4257C4.71135 11.5796 4.92085 11.6664 5.13947 11.6673C5.24914 11.668 5.35786 11.6469 5.45939 11.6055C5.56092 11.564 5.65327 11.5029 5.73113 11.4257C5.80924 11.3482 5.87124 11.256 5.91354 11.1545C5.95585 11.0529 5.97763 10.944 5.97763 10.834C5.97763 10.724 5.95585 10.6151 5.91354 10.5135C5.87124 10.412 5.80924 10.3198 5.73113 10.2423L1.90613 6.42566Z" fill="#8247FF"></path>
                </svg>
              </button>
            </div>
            <div class="sidebar-body pt-[14px] w-full">
              <div class="flex flex-col items-center">
                <div class="nav-wrapper mb-[36px]">
                  <div class="mb-5 item-wrapper">
                    <ul class="mt-2.5 space-y-2 flex justify-center items-center flex-col">
                      <!-- Dashboard Home -->
                      <li class="px-7 item">
                        <a href="index.html" class="block">
                          <span class="flex items-center justify-center w-10 h-10 transition rounded-lg hover:bg-violet-50 item-ico">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.66663 3.66602C1.66663 2.56145 2.56206 1.66602 3.66663 1.66602H7.16663C8.2712 1.66602 9.16663 2.56145 9.16663 3.66602V5.49935C9.16663 6.60392 8.2712 7.49935 7.16663 7.49935H3.66663C2.56206 7.49935 1.66663 6.60392 1.66663 5.49935V3.66602Z" fill="#7C3AED"></path>
                              <path opacity="0.4" d="M1.66663 11.166C1.66663 10.0614 2.56206 9.16602 3.66663 9.16602H7.16663C8.2712 9.16602 9.16663 10.0614 9.16663 11.166V16.3327C9.16663 17.4373 8.2712 18.3327 7.16663 18.3327H3.66663C2.56206 18.3327 1.66663 17.4373 1.66663 16.3327V11.166Z" fill="#7C3AED"></path>
                              <path opacity="0.4" d="M10.8333 3.66602C10.8333 2.56145 11.7287 1.66602 12.8333 1.66602H16.3333C17.4378 1.66602 18.3333 2.56145 18.3333 3.66602V8.83268C18.3333 9.93725 17.4378 10.8327 16.3333 10.8327H12.8333C11.7287 10.8327 10.8333 9.93725 10.8333 8.83268V3.66602Z" fill="#7C3AED"></path>
                              <path d="M10.8333 14.5C10.8333 13.3954 11.7287 12.5 12.8333 12.5H16.3333C17.4378 12.5 18.3333 13.3954 18.3333 14.5V16.3333C18.3333 17.4379 17.4378 18.3333 16.3333 18.3333H12.8333C11.7287 18.3333 10.8333 17.4379 10.8333 16.3333V14.5Z" fill="#7C3AED"></path>
                            </svg>
                          </span>
                        </a>
                        <ul class="sub-menu bg-white px-5 py-2 rounded-lg shadow-lg min-w-[200px]">
                          <li>
                            <a href="index.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Dashboard One</a>
                          </li>
                          <li>
                            <a href="index-2.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Dashboard Two</a>
                          </li>
                        </ul>
                      </li>
                      <!-- Teacher -->
                      <li class="item px-7">
                        <a href="teachers-list.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M6.66675 4.16667V10.8333C6.66675 11.7538 7.41294 12.5 8.33341 12.5H16.6667C17.5872 12.5 18.3334 11.7538 18.3334 10.8333V4.16667C18.3334 3.24619 17.5872 2.5 16.6667 2.5H8.33341C7.41294 2.5 6.66675 3.24619 6.66675 4.16667Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58337 11.2493C4.58337 10.0988 5.51611 9.16602 6.66671 9.16602C7.8173 9.16602 8.75004 10.0988 8.75004 11.2493C8.75004 12.3999 7.8173 13.3327 6.66671 13.3327C5.51611 13.3327 4.58337 12.3999 4.58337 11.2493Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.927 11.932C12.2408 12.0758 12.3786 12.4468 12.2348 12.7606C11.7306 13.8606 9.94355 15.8524 6.66662 15.8524C3.88295 15.8524 2.5156 17.2535 2.21426 17.8014C2.04791 18.1038 1.66787 18.2141 1.36542 18.0478C1.06297 17.8814 0.952637 17.5014 1.11899 17.199C1.65097 16.2317 3.45029 14.6024 6.66662 14.6024C9.38969 14.6024 10.7693 12.9579 11.0985 12.2397C11.2423 11.926 11.6132 11.7882 11.927 11.932Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 5.83398C9.375 5.48881 9.65482 5.20898 10 5.20898L15 5.20898C15.3452 5.20898 15.625 5.48881 15.625 5.83398C15.625 6.17916 15.3452 6.45898 15 6.45898L10 6.45898C9.65482 6.45898 9.375 6.17916 9.375 5.83398Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.875 9.16602C11.875 8.82084 12.1548 8.54102 12.5 8.54102H15C15.3452 8.54102 15.625 8.82084 15.625 9.16602C15.625 9.51119 15.3452 9.79102 15 9.79102H12.5C12.1548 9.79102 11.875 9.51119 11.875 9.16602Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="item px-7">
                        <a href="students-list.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.865 8.84624V9.66848C16.865 10.6904 16.0366 11.5188 15.0147 11.5188C13.9928 11.5188 13.1644 10.6904 13.1644 9.66848V8.84624L14.4511 9.4181C14.8099 9.57757 15.2195 9.57757 15.5783 9.4181L16.865 8.84624ZM12.008 8.33227V10.3624C12.008 10.554 11.8526 10.7094 11.661 10.7094C11.4694 10.7094 11.3141 10.554 11.3141 10.3624V8.02344C11.3183 8.02561 11.3227 8.02768 11.3271 8.02965L12.008 8.33227Z" fill="#8247FF"></path>
                              <path opacity="0.4" d="M18.7022 7.60766L15.5782 6.21921C15.2194 6.05974 14.8098 6.05974 14.451 6.21921L11.327 7.60766C11.1439 7.68906 11.1439 7.94897 11.327 8.03037L14.451 9.41882C14.8098 9.57829 15.2194 9.57829 15.5782 9.41882L18.7022 8.03037C18.8854 7.94897 18.8854 7.68906 18.7022 7.60766Z" fill="#8247FF"></path>
                              <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M13.5973 15.2195H17.7901C18.301 15.2195 18.7152 14.8053 18.7152 14.2943C18.7152 13.2919 17.81 12.4297 16.5124 12.0481C16.3576 12.0026 16.1919 12.0515 16.0783 12.1663L15.3435 12.9093C15.1625 13.0924 14.8668 13.0924 14.6857 12.9093L13.9509 12.1663C13.8374 12.0515 13.6717 12.0026 13.5168 12.0481C13.0622 12.1818 12.6558 12.3745 12.3196 12.6115C13.1206 13.3445 13.594 14.2453 13.5973 15.2195Z" fill="#8247FF"></path>
                              <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M9.81824 6.92318V8.17774C9.81824 9.73667 8.55448 11.0004 6.99555 11.0004C5.43663 11.0004 4.17287 9.73667 4.17287 8.17774V6.92318L6.13575 7.79557C6.68314 8.03886 7.30796 8.03886 7.85535 7.79557L9.81824 6.92318ZM2.40869 6.1391V9.23625C2.40869 9.52855 2.17174 9.7655 1.87944 9.7655C1.58714 9.7655 1.35019 9.52855 1.35019 9.23625V5.66797C1.35662 5.67128 1.36321 5.67445 1.36997 5.67745L2.40869 6.1391Z" fill="#8247FF"></path>
                              <path d="M12.6212 5.03301L7.85537 2.91488C7.30799 2.6716 6.68316 2.6716 6.13577 2.91488L1.36999 5.03301C1.09061 5.15718 1.09061 5.55369 1.36999 5.67786L6.13577 7.79598C6.68316 8.03927 7.30799 8.03927 7.85537 7.79598L12.6212 5.67786C12.9005 5.55369 12.9005 5.15718 12.6212 5.03301Z" fill="#8247FF"></path>
                              <path d="M5.37277 11.9892L6.49375 13.1227C6.76995 13.402 7.22105 13.402 7.49725 13.1227L8.61823 11.9892C8.7914 11.8141 9.0442 11.7395 9.28047 11.809C11.26 12.3911 12.6409 13.7063 12.6409 15.2356C12.6409 16.0151 12.009 16.647 11.2295 16.647H2.76148C1.98201 16.647 1.35013 16.0151 1.35013 15.2356C1.35013 13.7063 2.73103 12.3911 4.71054 11.809C4.9468 11.7395 5.19961 11.8141 5.37277 11.9892Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="item px-7">
                        <a href="course-list.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.43065 4.52037C7.6609 3.28027 5.17721 2.71829 3.32857 2.50939C2.41365 2.40601 1.66663 3.17002 1.66663 4.11265V13.5C1.66663 14.4426 2.41365 15.2069 3.32857 15.3103C5.17721 15.5192 7.6609 16.0811 9.43065 17.3212C9.60071 17.4404 9.80033 17.5 9.99996 17.5V4.69913C9.80034 4.69913 9.60071 4.63954 9.43065 4.52037ZM3.54908 6.7833C3.60191 6.44219 3.92126 6.20849 4.26237 6.26132C5.34801 6.42945 6.57064 6.71048 7.72547 7.15705C8.04741 7.28155 8.20748 7.64346 8.08298 7.96541C7.95848 8.28735 7.59657 8.44741 7.27463 8.32292C6.22576 7.91732 5.09504 7.65517 4.07106 7.49659C3.72995 7.44376 3.49625 7.12441 3.54908 6.7833ZM4.26237 9.59465C3.92126 9.54182 3.60191 9.77552 3.54908 10.1166C3.49625 10.4577 3.72995 10.7771 4.07106 10.8299C4.5871 10.9098 5.13183 11.0163 5.68049 11.1547C6.01518 11.2392 6.35495 11.0363 6.43939 10.7016C6.52383 10.3669 6.32097 10.0272 5.98628 9.94271C5.39544 9.79364 4.81215 9.67979 4.26237 9.59465Z" fill="#8247FF"></path>
                              <path opacity="0.4" d="M10.5693 4.52037C12.3391 3.28027 14.8227 2.71829 16.6714 2.50939C17.5863 2.40601 18.3333 3.17002 18.3333 4.11265V13.5C18.3333 14.4426 17.5863 15.2069 16.6714 15.3103C14.8227 15.5192 12.3391 16.0811 10.5693 17.3212C10.3992 17.4404 10.1996 17.5 10 17.5V4.69913C10.1996 4.69913 10.3992 4.63954 10.5693 4.52037Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="item px-7">
                        <a href="index.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M18.3333 14.168V9.16797C18.3333 7.78726 17.214 6.66797 15.8333 6.66797H4.16663C2.78591 6.66797 1.66663 7.78726 1.66663 9.16797V14.168C1.66663 15.5487 2.78591 16.668 4.16663 16.668H15.8333C17.214 16.668 18.3333 15.5487 18.3333 14.168Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.37496 4.53794C8.15709 3.81037 6.54696 3.47122 5.32998 3.34025C4.68954 3.27132 4.16663 3.78066 4.16663 4.40908V10.6673C4.16663 11.2957 4.68954 11.8052 5.32998 11.8742C6.62404 12.0134 8.36262 12.3881 9.60144 13.2148C9.83953 13.3737 10.1604 13.3737 10.3985 13.2148C11.6373 12.3881 13.3759 12.0134 14.6699 11.8742C15.3104 11.8052 15.8333 11.2957 15.8333 10.6673V4.40908C15.8333 3.78066 15.3104 3.27132 14.6699 3.34025C13.453 3.47122 11.8428 3.81037 10.625 4.53794V13.0718C10.5478 13.1179 10.4723 13.1655 10.3985 13.2148C10.1604 13.3737 9.83953 13.3737 9.60144 13.2148C9.52765 13.1655 9.45209 13.1179 9.37496 13.0718V4.53794Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                        <ul class="sub-menu border-l border-success-100 bg-white px-5 py-2 rounded-lg shadow-lg min-w-[200px]">
                          <li>
                            <a href="resource-blog.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Blog</a>
                          </li>
                          <li>
                            <a href="resource-ebook.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Ebook</a>
                          </li>
                        </ul>
                      </li>
                      <li class="item px-7">
                        <a href="certificate-list.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M10.8334 17.4993V12.916H14.1667V17.4993L12.5 16.666L10.8334 17.4993Z" fill="#8247FF"></path>
                              <path opacity="0.4" d="M18.3334 12.5L18.3334 4.16667C18.3334 3.24619 17.5872 2.5 16.6667 2.5L3.33337 2.5C2.4129 2.5 1.66671 3.24619 1.66671 4.16667L1.66671 12.5C1.66671 13.4205 2.4129 14.1667 3.33337 14.1667L7.91671 14.1667L16.6667 14.1667C17.5872 14.1667 18.3334 13.4205 18.3334 12.5Z" fill="#8247FF"></path>
                              <path d="M15 12.5C15 13.8807 13.8807 15 12.5 15C11.1193 15 10 13.8807 10 12.5C10 11.1193 11.1193 10 12.5 10C13.8807 10 15 11.1193 15 12.5Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 5.83398C4.375 5.48881 4.65482 5.20898 5 5.20898H15C15.3452 5.20898 15.625 5.48881 15.625 5.83398C15.625 6.17916 15.3452 6.45898 15 6.45898H5C4.65482 6.45898 4.375 6.17916 4.375 5.83398Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 9.16602C4.375 8.82084 4.65482 8.54102 5 8.54102H8.33333C8.67851 8.54102 8.95833 8.82084 8.95833 9.16602C8.95833 9.51119 8.67851 9.79102 8.33333 9.79102H5C4.65482 9.79102 4.375 9.51119 4.375 9.16602Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="item px-7">
                        <a href="messages.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M10.8333 3.33203H9.16663C5.02449 3.33203 1.66663 6.6899 1.66663 10.832V14.9987C1.66663 16.8396 3.15901 18.332 4.99996 18.332H10.8333C14.9754 18.332 18.3333 14.9742 18.3333 10.832C18.3333 6.6899 14.9754 3.33203 10.8333 3.33203Z" fill="#8247FF"></path>
                              <path d="M18.3333 4.99935C18.3333 6.8403 16.8409 8.33268 15 8.33268C13.159 8.33268 11.6666 6.8403 11.6666 4.99935C11.6666 3.1584 13.159 1.66602 15 1.66602C16.8409 1.66602 18.3333 3.1584 18.3333 4.99935Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04163 9.16602C6.04163 8.82084 6.32145 8.54102 6.66663 8.54102H9.99996C10.3451 8.54102 10.625 8.82084 10.625 9.16602C10.625 9.51119 10.3451 9.79102 9.99996 9.79102H6.66663C6.32145 9.79102 6.04163 9.51119 6.04163 9.16602ZM6.04163 12.4993C6.04163 12.1542 6.32145 11.8743 6.66663 11.8743H13.3333C13.6785 11.8743 13.9583 12.1542 13.9583 12.4993C13.9583 12.8445 13.6785 13.1243 13.3333 13.1243H6.66663C6.32145 13.1243 6.04163 12.8445 6.04163 12.4993Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="item px-7">
                        <a href="#">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.66663 4.99935C1.66663 3.1584 3.15901 1.66602 4.99996 1.66602H9.99996V9.99935L1.66663 9.99935V4.99935Z" fill="#8247FF"></path>
                              <path opacity="0.4" d="M1.66663 14.9987C1.66663 16.8396 3.15901 18.332 4.99996 18.332H9.99996V9.9987L1.66663 9.9987V14.9987Z" fill="#8247FF"></path>
                              <path opacity="0.4" d="M18.3333 4.99935C18.3333 3.1584 16.8409 1.66602 14.9999 1.66602H9.99992V9.99935L18.3333 9.99935V4.99935Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 15C18.3333 16.841 16.8409 18.3333 15 18.3333H10V10H18.3333V15ZM16.4583 12.9167C16.4583 13.2618 16.1785 13.5417 15.8333 13.5417L12.5 13.5417C12.1548 13.5417 11.875 13.2618 11.875 12.9167C11.875 12.5715 12.1548 12.2917 12.5 12.2917L15.8333 12.2917C16.1785 12.2917 16.4583 12.5715 16.4583 12.9167ZM15.8333 16.0417C16.1785 16.0417 16.4583 15.7618 16.4583 15.4167C16.4583 15.0715 16.1785 14.7917 15.8333 14.7917L12.5 14.7917C12.1548 14.7917 11.875 15.0715 11.875 15.4167C11.875 15.7618 12.1548 16.0417 12.5 16.0417H15.8333Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                        <ul class="sub-menu border-l border-success-100 bg-white px-5 py-2 rounded-lg shadow-lg min-w-[200px]">
                          <li>
                            <a href="integrations.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Integrations</a>
                          </li>
                          <li>
                            <a href="projects.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Projects</a>
                          </li>
                          <li>
                            <a href="transaction-list.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Transaction</a>
                          </li>
                          <li>
                            <a href="calenders-month-events.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">
                              Calender Events</a>
                          </li>
                        </ul>
                      </li>
                      <li class="item px-7">
                        <a href="#">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.625 15.8262V17.7077H12.5C12.8452 17.7077 13.125 17.9875 13.125 18.3327C13.125 18.6779 12.8452 18.9577 12.5 18.9577H7.5C7.15482 18.9577 6.875 18.6779 6.875 18.3327C6.875 17.9875 7.15482 17.7077 7.5 17.7077H9.375V15.8262H10.625Z" fill="#8247FF"></path>
                              <path opacity="0.4" d="M1.66663 4.99935C1.66663 3.1584 3.15901 1.66602 4.99996 1.66602H15C16.8409 1.66602 18.3333 3.1584 18.3333 4.99935V12.4993C18.3333 14.3403 16.8409 15.8327 15 15.8327H4.99996C3.15901 15.8327 1.66663 14.3403 1.66663 12.4993V4.99935Z" fill="#8247FF"></path>
                              <ellipse cx="1.66667" cy="1.66667" rx="1.66667" ry="1.66667" transform="matrix(1 0 0 -1 8.33325 8.33203)" fill="#8247FF"></ellipse>
                              <rect x="6.66663" y="9.16602" width="6.66667" height="3.33333" rx="1.66667" fill="#8247FF"></rect>
                            </svg>
                          </span>
                        </a>
                        <ul class="sub-menu border-l border-success-100 bg-white px-5 py-2 rounded-lg shadow-lg min-w-[200px]">
                          <li>
                            <a href="sign-in.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Sign In</a>
                          </li>
                          <li>
                            <a href="sign-up.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Sign Up</a>
                          </li>
                          <li>
                            <a href="forgot-pass.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Forgot Password</a>
                          </li>
                          <li>
                            <a href="otp.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">OTP</a>
                          </li>
                          <li>
                            <a href="new-password.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">New Password</a>
                          </li>
                        </ul>
                      </li>
                      <li class="item px-7">
                        <a href="settings.html">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M10.7955 2.5H9.20454C8.3259 2.5 7.61363 3.17157 7.61363 4C7.61363 4.94801 6.5993 5.55073 5.76667 5.09747L5.6821 5.05144C4.92117 4.63722 3.94819 4.88304 3.50887 5.60048L2.71341 6.89951C2.27409 7.61695 2.5348 8.53434 3.29572 8.94855C4.12876 9.40202 4.12876 10.598 3.29572 11.0514C2.5348 11.4657 2.27409 12.383 2.71341 13.1005L3.50887 14.3995C3.94818 15.117 4.92117 15.3628 5.6821 14.9486L5.76667 14.9025C6.5993 14.4493 7.61363 15.052 7.61363 16C7.61363 16.8284 8.3259 17.5 9.20454 17.5H10.7955C11.6741 17.5 12.3864 16.8284 12.3864 16C12.3864 15.052 13.4007 14.4493 14.2333 14.9025L14.3179 14.9486C15.0788 15.3628 16.0518 15.117 16.4911 14.3995L17.2866 13.1005C17.7259 12.383 17.4652 11.4657 16.7043 11.0514C15.8712 10.598 15.8712 9.40203 16.7043 8.94856C17.4652 8.53435 17.7259 7.61696 17.2866 6.89952L16.4911 5.60049C16.0518 4.88305 15.0788 4.63723 14.3179 5.05145L14.2333 5.09748C13.4007 5.55074 12.3864 4.94801 12.3864 4C12.3864 3.17157 11.6741 2.5 10.7955 2.5Z" fill="#8247FF"></path>
                              <circle cx="10" cy="10" r="2.5" fill="#8247FF"></circle>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="item px-7">
                        <a href="#">
                          <span class="flex items-center justify-center w-10 h-10 rounded-lg item-ico hover:bg-violet-50">
                            <svg class="item-ico" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M17.2368 8.22704L7.87794 3.55044C6.21339 2.71867 4.42235 4.42912 5.17818 6.1287L6.54182 9.19503C6.76977 9.70761 6.76977 10.2927 6.54182 10.8053L5.17818 13.8716C4.42235 15.5712 6.21339 17.2817 7.87793 16.4499L17.2368 11.7733C18.6988 11.0427 18.6988 8.9576 17.2368 8.22704Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45829 10.0002C6.45829 9.65498 6.73811 9.37516 7.08329 9.37516H9.99996C10.3451 9.37516 10.625 9.65498 10.625 10.0002C10.625 10.3453 10.3451 10.6252 9.99996 10.6252H7.08329C6.73811 10.6252 6.45829 10.3453 6.45829 10.0002Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04163 8.3335C1.04163 7.98832 1.32145 7.7085 1.66663 7.7085H3.33329C3.67847 7.7085 3.95829 7.98832 3.95829 8.3335C3.95829 8.67867 3.67847 8.9585 3.33329 8.9585H1.66663C1.32145 8.9585 1.04163 8.67867 1.04163 8.3335Z" fill="#8247FF"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04163 11.6668C1.04163 11.3217 1.32145 11.0418 1.66663 11.0418H3.33329C3.67847 11.0418 3.95829 11.3217 3.95829 11.6668C3.95829 12.012 3.67847 12.2918 3.33329 12.2918H1.66663C1.32145 12.2918 1.04163 12.012 1.04163 11.6668Z" fill="#8247FF"></path>
                            </svg>
                          </span>
                        </a>
                        <ul class="sub-menu border-l border-success-100 bg-white px-5 py-2 rounded-lg shadow-lg min-w-[200px]">
                          <li>
                            <a href="support-ticket-list.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Support Ticket</a>
                          </li>
                          <li>
                            <a href="support-ticket.html" class="text-md font-medium text-bgray-600 py-1.5 inline-block hover:text-bgray-800">Support Details</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div class="flex-1 min-h-screen overflow-x-hidden body-wrapper bg-slate-50">
          <!-- Header Start-->
          <header class="sticky top-0 z-10 flex items-center h-[92px] justify-between p-6 bg-white">
            <div class="block sm:hidden">
              <button class="flex items-center justify-center transition drawer-btn text-slate-700 hover:text-blue-600">
                <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clippath="url(#clip0_508_6544)">
                    <path d="M23 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11Z" fill="currentColor"></path>
                    <path d="M23 4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4Z" fill="currentColor"></path>
                    <path d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clippath id="clip0_508_6544">
                      <rect width="24" height="24" fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
              </button>
            </div>

            <div class="hidden md:block">
              <div class="relative w-[350px]">
                <input type="text" placeholder="Search" class="w-full p-3 pl-10 border rounded-full border-violet-50 ring-0 focus:ring-0 focus:border-primary">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_354_7230)">
                      <path d="M16.25 13.9231L17.8514 15.5245C18.494 16.1671 18.494 17.2089 17.8514 17.8515C17.2088 18.4941 16.167 18.4941 15.5244 17.8515L13.923 16.2501" stroke="#8247FF" stroke-width="1.5" stroke-linecap="round"></path>
                      <path opacity="0.4" d="M1.66667 8.75008C1.66667 4.83806 4.83799 1.66675 8.75001 1.66675C12.662 1.66675 15.8333 4.83806 15.8333 8.75008C15.8333 12.6621 12.662 15.8334 8.75001 15.8334C4.83799 15.8334 1.66667 12.6621 1.66667 8.75008Z" stroke="#8247FF" stroke-width="1.5" stroke-linecap="round"></path>
                    </g>
                    <defs>
                      <clippath id="clip0_354_7230">
                        <rect width="20" height="20" fill="white"></rect>
                      </clippath>
                    </defs>
                  </svg>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.875 5.83325C1.875 5.48807 2.15482 5.20825 2.5 5.20825H5.83333C6.17851 5.20825 6.45833 5.48807 6.45833 5.83325C6.45833 6.17843 6.17851 6.45825 5.83333 6.45825H2.5C2.15482 6.45825 1.875 6.17843 1.875 5.83325Z" fill="#8247FF"></path>
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.875 14.1665C1.875 13.8213 2.15482 13.5415 2.5 13.5415H7.5C7.84518 13.5415 8.125 13.8213 8.125 14.1665C8.125 14.5117 7.84518 14.7915 7.5 14.7915H2.5C2.15482 14.7915 1.875 14.5117 1.875 14.1665Z" fill="#8247FF"></path>
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 14.1665C13.5417 13.8213 13.8215 13.5415 14.1667 13.5415L17.5 13.5415C17.8452 13.5415 18.125 13.8213 18.125 14.1665C18.125 14.5117 17.8452 14.7915 17.5 14.7915H14.1667C13.8215 14.7915 13.5417 14.5117 13.5417 14.1665Z" fill="#8247FF"></path>
                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M11.875 5.83325C11.875 5.48807 12.1548 5.20825 12.5 5.20825L17.5 5.20825C17.8452 5.20825 18.125 5.48807 18.125 5.83325C18.125 6.17843 17.8452 6.45825 17.5 6.45825L12.5 6.45825C12.1548 6.45825 11.875 6.17843 11.875 5.83325Z" fill="#8247FF"></path>
                    <circle cx="12.5" cy="14.1665" r="2.5" fill="#8247FF"></circle>
                    <circle cx="7.5" cy="5.83325" r="2.5" fill="#8247FF"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex items-center divide-x-0 lg:divide-x divide-violet-200">
              <nav class="lg:flex gap-3.5 items-center hidden relative">
                <!-- Notification -->
                <button onclick="notificationAction()" id="notification-btn" class="relative inline-flex items-center justify-center border rounded-full w-11 h-11 border-violet-200">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2884 3.76303C15.4194 3.37008 15.8442 3.15771 16.2371 3.28869L16.3911 3.34001C18.4067 4.01187 19.9883 5.5935 20.6602 7.60908L20.7115 7.76303C20.8425 8.15599 20.6301 8.58073 20.2371 8.71172C19.8442 8.8427 19.4194 8.63033 19.2884 8.23737L19.2371 8.08342C18.7146 6.51575 17.4844 5.28559 15.9167 4.76303L15.7628 4.71172C15.3698 4.58073 15.1575 4.15599 15.2884 3.76303Z" fill="#8247FF"></path>
                    <path d="M12 21C13.385 21 14.5633 20.1652 15 19H9C9.43668 20.1652 10.615 21 12 21Z" fill="#8247FF"></path>
                    <path opacity="0.4" d="M5.67964 10.794C6.05382 7.49085 8.77095 5 12 5C15.2291 5 17.9462 7.49085 18.3204 10.794L18.6652 13.8385C18.7509 14.595 19.0575 15.3069 19.5445 15.88C20.5779 17.0964 19.7392 19 18.1699 19H5.83014C4.26081 19 3.42209 17.0964 4.45549 15.88C4.94246 15.3069 5.24906 14.595 5.33476 13.8385L5.67964 10.794Z" fill="#8247FF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.71155 3.76303C8.58057 3.37008 8.15583 3.15771 7.76287 3.28869L7.60892 3.34001C5.59334 4.01187 4.01171 5.5935 3.33984 7.60908L3.28853 7.76303C3.15754 8.15599 3.36991 8.58073 3.76287 8.71172C4.15583 8.8427 4.58057 8.63033 4.71155 8.23737L4.76287 8.08342C5.28543 6.51575 6.51559 5.28559 8.08326 4.76303L8.23721 4.71172C8.63017 4.58073 8.84254 4.15599 8.71155 3.76303Z" fill="#8247FF"></path>
                  </svg>
                  <span class="w-3.5 h-3.5 inline-flex justify-center items-center text-white rounded-full text-center absolute top-0 right-0 bg-red-500 text-[10px] font-medium">2</span>
                </button>
                <!-- Heart -->
                <button onclick="wishlistAction()" type="button" id="message-btn" class="inline-flex items-center justify-center border rounded-full w-11 h-11 border-violet-200">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z" fill="#8247FF"></path>
                    <circle cx="12" cy="12" r="1" fill="#8247FF"></circle>
                    <circle cx="16" cy="12" r="1" fill="#8247FF"></circle>
                    <circle cx="8" cy="12" r="1" fill="#8247FF"></circle>
                  </svg>
                </button>
                <!-- Gift -->
                <button onclick="storeAction()" class="inline-flex items-center justify-center border rounded-full w-11 h-11 border-violet-200">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M12.9545 3H11.0455C9.99109 3 9.13635 3.80589 9.13635 4.8C9.13635 5.93761 7.91917 6.66087 6.92 6.11697L6.81852 6.06172C5.90541 5.56467 4.73782 5.85964 4.21064 6.72057L3.25609 8.27942C2.72891 9.14034 3.04176 10.2412 3.95487 10.7383C4.95451 11.2824 4.95451 12.7176 3.95487 13.2617C3.04176 13.7588 2.72891 14.8597 3.25609 15.7206L4.21064 17.2794C4.73782 18.1404 5.90541 18.4353 6.81851 17.9383L6.92 17.883C7.91917 17.3391 9.13635 18.0624 9.13635 19.2C9.13635 20.1941 9.99109 21 11.0455 21H12.9545C14.0089 21 14.8636 20.1941 14.8636 19.2C14.8636 18.0624 16.0808 17.3391 17.08 17.883L17.1815 17.9383C18.0946 18.4353 19.2622 18.1403 19.7894 17.2794L20.7439 15.7206C21.2711 14.8596 20.9582 13.7588 20.0451 13.2617C19.0455 12.7176 19.0455 11.2824 20.0451 10.7383C20.9582 10.2412 21.2711 9.14036 20.7439 8.27943L19.7894 6.72058C19.2622 5.85966 18.0946 5.56468 17.1815 6.06174L17.08 6.11698C16.0808 6.66088 14.8636 5.93762 14.8636 4.8C14.8636 3.80589 14.0089 3 12.9545 3Z" fill="#8247FF"></path>
                    <circle cx="12" cy="12" r="3" fill="#8247FF"></circle>
                  </svg>
                </button>
                <!-- Notification -->
                <div class="notification-popup-wrapper">
                  <div onclick="notificationAction()" id="noti-outside" class="fixed inset-0 top-0 hidden w-full h-full"></div>
                  <div id="notification-box" class="bg-white w-[354px] absolute shadow-lg -left-[260px] top-16 rounded-lg hidden">
                    <div class="p-6">
                      <h4 class="pb-4 text-base font-medium border-b text-slate-900 border-slate-100">
                        Notification
                      </h4>
                      <ul class="py-4 space-y-1.5">
                        <li class="relative flex p-2 transition bg-transparent rounded-lg group hover:bg-slate-50">
                          <div class="mr-2">
                            <img src="assets/img/cards/pro-1.png" class="w-12 h-12 rounded" alt="">
                          </div>
                          <div>
                            <h4 class="text-base font-medium leading-6 text-slate-900">
                              Short Top New collection
                            </h4>
                            <p class="text-base leading-6 text-slate-500">
                              10 minutes ago
                            </p>
                          </div>
                          <button class="absolute invisible transition opacity-0 group-hover:visible group-hover:opacity-100 text-slate-500 right-2 top-2">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </button>
                        </li>
                        <li class="relative flex p-2 transition bg-transparent rounded-lg group hover:bg-slate-50">
                          <div class="mr-2">
                            <img src="assets/img/cards/pro-2.png" class="w-12 h-12 rounded" alt="">
                          </div>
                          <div>
                            <h4 class="text-base font-medium leading-6 text-slate-900">
                              Short Top New collection
                            </h4>
                            <p class="text-base leading-6 text-slate-500">
                              10 minutes ago
                            </p>
                          </div>
                          <button class="absolute invisible transition opacity-0 group-hover:visible group-hover:opacity-100 text-slate-500 right-2 top-2">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </button>
                        </li>
                        <li class="relative flex p-2 transition bg-transparent rounded-lg group hover:bg-slate-50">
                          <div class="mr-2">
                            <img src="assets/img/cards/pro-3.png" class="w-12 h-12 rounded" alt="">
                          </div>
                          <div>
                            <h4 class="text-base font-medium leading-6 text-slate-900">
                              Short Top New collection
                            </h4>
                            <p class="text-base leading-6 text-slate-500">
                              10 minutes ago
                            </p>
                          </div>
                          <button class="absolute invisible transition opacity-0 group-hover:visible group-hover:opacity-100 text-slate-500 right-2 top-2">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                      <a href="#" class="block w-full px-5 py-3 text-sm font-medium text-center transition border rounded-lg text-primary border-primary hover:bg-primary hover:border-transparent hover:text-white">
                        See all notification
                      </a>
                    </div>
                  </div>
                </div>
                <!-- Wishlist -->
                <div class="message-popup-wrapper">
                  <div onclick="wishlistAction()" id="mes-outside" class="fixed inset-0 top-0 hidden w-full h-full"></div>
                  <div id="message-box" class="bg-white w-[354px] absolute -left-[200px] top-16 rounded-lg hidden">
                    <div class="p-6">
                      <h4 class="pb-4 text-base font-medium border-b text-slate-900 border-slate-100">
                        All Wishlist
                      </h4>
                      <ul class="py-4 space-y-1.5">
                        <li class="relative flex p-2 transition bg-transparent rounded-lg hover:bg-slate-50">
                          <div class="mr-2">
                            <img src="assets/img/cards/pro-1.png" class="w-12 h-12 rounded" alt="">
                          </div>
                          <div>
                            <h4 class="text-base font-medium leading-6 text-slate-900">
                              Short Top New collection
                            </h4>
                            <p class="text-base leading-6 text-slate-500">
                              10 minutes ago
                            </p>
                          </div>
                          <button class="absolute grid transition -translate-y-1/2 rounded-full w-7 h-7 bg-red-50 right-2 place-items-center top-1/2">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.60352L10.6375 3.91857C12.3981 2.02714 15.2524 2.02714 17.0129 3.91857C18.7735 5.81 18.7735 8.87661 17.0129 10.768L11.2751 16.9326C10.5709 17.6891 9.42913 17.6891 8.72492 16.9326L2.98706 10.768C1.22654 8.87662 1.22654 5.81 2.98706 3.91857C4.74758 2.02714 7.60194 2.02714 9.36246 3.91857L10 4.60352ZM14.1667 4.375C13.8215 4.375 13.5417 4.65482 13.5417 5C13.5417 5.34518 13.8215 5.625 14.1667 5.625C14.742 5.625 15.2083 6.09137 15.2083 6.66667C15.2083 7.01184 15.4882 7.29167 15.8333 7.29167C16.1785 7.29167 16.4583 7.01184 16.4583 6.66667C16.4583 5.40101 15.4323 4.375 14.1667 4.375Z" fill="#EF4444"></path>
                            </svg>
                          </button>
                        </li>
                        <li class="relative flex p-2 transition bg-transparent rounded-lg hover:bg-slate-50">
                          <div class="mr-2">
                            <img src="assets/img/cards/pro-2.png" class="w-12 h-12 rounded" alt="">
                          </div>
                          <div>
                            <h4 class="text-base font-medium leading-6 text-slate-900">
                              Short Top New collection
                            </h4>
                            <p class="text-base leading-6 text-slate-500">
                              10 minutes ago
                            </p>
                          </div>
                          <button class="absolute grid transition -translate-y-1/2 rounded-full w-7 h-7 bg-red-50 right-2 place-items-center top-1/2">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.60352L10.6375 3.91857C12.3981 2.02714 15.2524 2.02714 17.0129 3.91857C18.7735 5.81 18.7735 8.87661 17.0129 10.768L11.2751 16.9326C10.5709 17.6891 9.42913 17.6891 8.72492 16.9326L2.98706 10.768C1.22654 8.87662 1.22654 5.81 2.98706 3.91857C4.74758 2.02714 7.60194 2.02714 9.36246 3.91857L10 4.60352ZM14.1667 4.375C13.8215 4.375 13.5417 4.65482 13.5417 5C13.5417 5.34518 13.8215 5.625 14.1667 5.625C14.742 5.625 15.2083 6.09137 15.2083 6.66667C15.2083 7.01184 15.4882 7.29167 15.8333 7.29167C16.1785 7.29167 16.4583 7.01184 16.4583 6.66667C16.4583 5.40101 15.4323 4.375 14.1667 4.375Z" fill="#EF4444"></path>
                            </svg>
                          </button>
                        </li>
                        <li class="relative flex p-2 transition bg-transparent rounded-lg hover:bg-slate-50">
                          <div class="mr-2">
                            <img src="assets/img/cards/pro-3.png" class="w-12 h-12 rounded" alt="">
                          </div>
                          <div>
                            <h4 class="text-base font-medium leading-6 text-slate-900">
                              Short Top New collection
                            </h4>
                            <p class="text-base leading-6 text-slate-500">
                              10 minutes ago
                            </p>
                          </div>
                          <button class="absolute grid transition -translate-y-1/2 rounded-full w-7 h-7 bg-red-50 right-2 place-items-center top-1/2">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.60352L10.6375 3.91857C12.3981 2.02714 15.2524 2.02714 17.0129 3.91857C18.7735 5.81 18.7735 8.87661 17.0129 10.768L11.2751 16.9326C10.5709 17.6891 9.42913 17.6891 8.72492 16.9326L2.98706 10.768C1.22654 8.87662 1.22654 5.81 2.98706 3.91857C4.74758 2.02714 7.60194 2.02714 9.36246 3.91857L10 4.60352ZM14.1667 4.375C13.8215 4.375 13.5417 4.65482 13.5417 5C13.5417 5.34518 13.8215 5.625 14.1667 5.625C14.742 5.625 15.2083 6.09137 15.2083 6.66667C15.2083 7.01184 15.4882 7.29167 15.8333 7.29167C16.1785 7.29167 16.4583 7.01184 16.4583 6.66667C16.4583 5.40101 15.4323 4.375 14.1667 4.375Z" fill="#EF4444"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                      <a href="#" class="block w-full px-5 py-3 text-sm font-medium text-center transition border rounded-lg text-primary border-primary hover:bg-primary hover:border-transparent hover:text-white">
                        Check Wishlist
                      </a>
                    </div>
                  </div>
                </div>
                <!-- Gift -->
                <div class="store-wrapper">
                  <div id="store-outside" onclick="storeAction()" class="fixed inset-0 top-0 hidden w-full h-full"></div>
                  <div id="store-box" class="overflow-hidden w-[325px] shadow-md bg-white absolute -left-[180px] top-16 rounded-lg hidden">
                    <div class="p-6">
                      <div class="px-5 py-4 text-center border border-blue-100 border-dashed rounded-lg bg-slate-50">
                        <h3 class="text-2xl font-semibold text-slate-900">
                          60% Bonus
                        </h3>
                        <p class="mb-5 text-slate-500">
                          Create an account and get Bonus
                        </p>
                        <a href="#" class="inline-block w-full px-5 py-3 text-sm font-medium text-center text-white transition rounded-lg bg-primary hover:bg-violet-600">
                          Grab the deal
                        </a>
                      </div>
                      <div class="mt-4 text-center">
                        <p class="mb-2 text-sm text-slate-500">
                          More friends also here
                        </p>
                        <div class="flex justify-center -space-x-2 isolate">
                          <img class="relative z-30 inline-block w-8 h-8 rounded-full" src="assets/img/cards/gg-1.png" alt=""><img class="relative z-30 inline-block w-8 h-8 rounded-full" src="assets/img/cards/gg-2.png" alt=""><img class="relative z-30 inline-block w-8 h-8 rounded-full" src="assets/img/cards/gg-3.png" alt="">
                          <div class="relative z-40 inline-flex items-center justify-center w-8 h-8 text-base font-normal rounded-full text-primarybg-blue-100 ring-2 ring-white">
                            +3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div class="pl-8 flex items-center gap-2.5 relative">
                <div class="flex">
                  <img src="assets/img/sidebar/avatar.png" class="w-10 h-10 rounded-full" alt="">
                </div>
                <div>
                  <button onclick="profileAction()" class="inline-flex items-center justify-center">
                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.7101 8.21C18.6171 8.11627 18.5065 8.04188 18.3846 7.99111C18.2628 7.94034 18.1321 7.9142 18.0001 7.9142C17.868 7.9142 17.7373 7.94034 17.6155 7.99111C17.4936 8.04188 17.383 8.11627 17.2901 8.21L12.7101 12.79C12.6171 12.8837 12.5065 12.9581 12.3846 13.0089C12.2628 13.0597 12.1321 13.0858 12.0001 13.0858C11.868 13.0858 11.7373 13.0597 11.6155 13.0089C11.4936 12.9581 11.383 12.8837 11.2901 12.79L6.71006 8.21C6.6171 8.11627 6.5065 8.04188 6.38464 7.99111C6.26278 7.94034 6.13207 7.9142 6.00006 7.9142C5.86805 7.9142 5.73734 7.94034 5.61548 7.99111C5.49362 8.04188 5.38302 8.11627 5.29006 8.21C5.10381 8.39736 4.99927 8.65081 4.99927 8.915C4.99927 9.17918 5.10381 9.43264 5.29006 9.62L9.88006 14.21C10.4426 14.7718 11.2051 15.0874 12.0001 15.0874C12.7951 15.0874 13.5576 14.7718 14.1201 14.21L18.7101 9.62C18.8963 9.43264 19.0009 9.17918 19.0009 8.915C19.0009 8.65081 18.8963 8.39736 18.7101 8.21Z" fill="#475569"></path>
                    </svg>
                  </button>
                </div>
                <div class="profile-wrapper">
                  <div onclick="profileAction()" class="fixed inset-0 top-0 hidden w-full h-full profile-outside"></div>
                  <div class="absolute w-[315px] right-0 hidden overflow-hidden bg-white rounded-lg shadow-md profile-box top-16">
                    <div class="p-6">
                      <div class="flex items-center pb-5 border-b border-slate-100">
                        <div class="mr-3">
                          <img src="assets/img/cards/av-lg.png" class="w-12 h-12 rounded-full" alt="">
                        </div>
                        <div class="flex-1">
                          <h4 class="text-xl font-semibold text-slate-900">
                            Neurotic Spy
                          </h4>
                          <p class="text-sm text-slate-500">
                            neurotic@taildo.com
                          </p>
                        </div>
                      </div>
                      <ul class="py-5">
                        <li>
                          <a href="settings.html" class="flex gap-2.5 items-center text-slate-600 font-medium text-base px-2 py-3 rounded-md hover:bg-slate-100 transition">
                            <svg class="text-slate-700" width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clippath="url(#clip0_4024_31755)">
                                <path d="M9 12C12.309 12 15 9.309 15 6C15 2.691 12.309 0 9 0C5.691 0 3 2.691 3 6C3 9.309 5.691 12 9 12ZM9 2C11.206 2 13 3.794 13 6C13 8.206 11.206 10 9 10C6.794 10 5 8.206 5 6C5 3.794 6.794 2 9 2ZM10.75 16.22C10.182 16.074 9.593 16 9 16C5.14 16 2 19.14 2 23C2 23.552 1.552 24 1 24C0.448 24 0 23.552 0 23C0 18.038 4.038 14 9 14C9.762 14 10.519 14.095 11.25 14.284C11.785 14.422 12.106 14.967 11.969 15.502C11.832 16.037 11.289 16.358 10.751 16.221L10.75 16.22ZM23.121 11.879C21.987 10.745 20.011 10.745 18.878 11.879L12.171 18.586C11.416 19.341 10.999 20.346 10.999 21.415V23.001C10.999 23.553 11.447 24.001 11.999 24.001H13.585C14.654 24.001 15.658 23.584 16.413 22.829L23.12 16.122C23.687 15.555 23.999 14.802 23.999 14C23.999 13.198 23.687 12.445 23.121 11.879ZM21.706 14.707L14.998 21.414C14.621 21.792 14.119 22 13.584 22H12.998V21.414C12.998 20.88 13.206 20.378 13.584 20L20.292 13.293C20.669 12.915 21.328 12.915 21.706 13.293C21.895 13.481 21.999 13.732 21.999 14C21.999 14.268 21.895 14.518 21.706 14.707Z" fill="currentColor"></path>
                              </g>
                              <defs>

                                <!DOCTYPE html>
                                <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
                                <head>
                                  <meta charset="utf-8">
                                  <meta name="viewport" content="width=device-width, initial-scale=1">
                                  <title>Legendary Platform</title>
                                  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600&display=swap" rel="stylesheet">
                                  <style>
                                    html, body {
                                      height: 100vh;
                                      margin: 0;
                                      font-family: 'Nunito', sans-serif;
                                      background: linear-gradient(120deg, #232526 0%, #414345 100%);
                                    }
                                    .legend-glass {
                                      background: rgba(255,255,255,0.08);
                                      backdrop-filter: blur(12px);
                                      border-radius: 24px;
                                      box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
                                      padding: 48px 32px;
                                      margin: 48px auto;
                                      max-width: 600px;
                                    }
                                    .legend-title {
                                      font-size: 3.2em;
                                      font-weight: bold;
                                      color: #fff;
                                      letter-spacing: 2px;
                                      margin-bottom: 18px;
                                      text-shadow: 0 2px 8px rgba(0,0,0,0.18);
                                    }
                                    .legend-links {
                                      display: flex;
                                      flex-wrap: wrap;
                                      gap: 18px;
                                      justify-content: center;
                                      margin-top: 32px;
                                    }
                                    .legend-links a {
                                      background: linear-gradient(90deg,#6a11cb,#2575fc);
                                      color: #fff;
                                      padding: 12px 28px;
                                      border-radius: 12px;
                                      font-size: 1.08em;
                                      font-weight: bold;
                                      text-decoration: none;
                                      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                                      transition: background 0.2s, transform 0.2s;
                                    }
                                    .legend-links a:hover {
                                      background: linear-gradient(90deg,#2575fc,#6a11cb);
                                      transform: translateY(-2px) scale(1.04);
                                    }
                                    .legend-emoji {
                                      font-size: 2.2em;
                                      margin-bottom: 12px;
                                    }
                                    .legend-auth {
                                      position: absolute;
                                      right: 32px;
                                      top: 32px;
                                      display: flex;
                                      gap: 16px;
                                    }
                                    .legend-auth a {
                                      color: #fff;
                                      background: linear-gradient(90deg,#6a11cb,#2575fc);
                                      padding: 8px 18px;
                                      border-radius: 8px;
                                      font-weight: bold;
                                      text-decoration: none;
                                      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                                      transition: background 0.2s;
                                    }
                                    .legend-auth a:hover {
                                      background: linear-gradient(90deg,#2575fc,#6a11cb);
                                    }
                                  </style>
                                </head>
                                <body>
                                  @if (Route::has('login'))
                                    <div class="legend-auth">
                                      @auth
                                        <a href="{{ url('/home') }}">🏠 Home</a>
                                      @else
                                        <a href="{{ route('login') }}">🔑 Login</a>
                                        @if (Route::has('register'))
                                          <a href="{{ route('register') }}">📝 Register</a>
                                        @endif
                                      @endauth
                                    </div>
                                  @endif
                                  <div class="legend-glass">
                                    <div class="legend-emoji">🏆</div>
                                    <div class="legend-title">Legendary Platform</div>
                                    <div class="legend-links">
                                      <a href="https://laravel.com/docs">📖 Docs</a>
                                      <a href="https://laracasts.com">🎬 Laracasts</a>
                                      <a href="https://laravel-news.com">📰 News</a>
                                      <a href="https://blog.laravel.com">📝 Blog</a>
                                      <a href="https://nova.laravel.com">🌟 Nova</a>
                                      <a href="https://forge.laravel.com">⚒️ Forge</a>
                                      <a href="https://vapor.laravel.com">💨 Vapor</a>
                                      <a href="https://github.com/laravel/laravel">🐙 GitHub</a>
                                    </div>
                                  </div>
                                </body>
                                </html>
                  <div class="flex items-center gap-3">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M5.68429 10.2103C6.46705 7.7055 8.78686 6 11.4112 6H12.5889C15.2132 6 17.533 7.7055 18.3158 10.2104L19.5658 14.2104C20.7731 18.0739 17.8867 22 13.8389 22H10.1612C6.11332 22 3.22692 18.0739 4.43429 14.2104L5.68429 10.2103Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.75C12.4142 8.75 12.75 9.08579 12.75 9.5V10.3462C13.856 10.6338 14.75 11.5427 14.75 12.75C14.75 13.1642 14.4142 13.5 14 13.5C13.5858 13.5 13.25 13.1642 13.25 12.75C13.25 12.2887 12.7876 11.75 12 11.75C11.2124 11.75 10.75 12.2887 10.75 12.75C10.75 13.2113 11.2124 13.75 12 13.75C13.4216 13.75 14.75 14.7783 14.75 16.25C14.75 17.4573 13.856 18.3662 12.75 18.6538V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V18.6538C10.144 18.3662 9.25 17.4573 9.25 16.25C9.25 15.8358 9.58579 15.5 10 15.5C10.4142 15.5 10.75 15.8358 10.75 16.25C10.75 16.7113 11.2124 17.25 12 17.25C12.7876 17.25 13.25 16.7113 13.25 16.25C13.25 15.7887 12.7876 15.25 12 15.25C10.5784 15.25 9.25 14.2217 9.25 12.75C9.25 11.5427 10.144 10.6338 11.25 10.3462V9.5C11.25 9.08579 11.5858 8.75 12 8.75Z" fill="#8247FF"></path>
                        <path d="M15.375 19.875C15.375 18.9775 16.1025 18.25 17 18.25H21.875C22.7725 18.25 23.5 18.9775 23.5 19.875C23.5 20.7725 22.7725 21.5 21.875 21.5H17C16.1025 21.5 15.375 20.7725 15.375 19.875Z" fill="#8247FF"></path>
                        <path d="M15.375 16.625C15.375 15.7275 16.1025 15 17 15H21.3333H21.875C22.7725 15 23.5 15.7275 23.5 16.625C23.5 17.5225 22.7725 18.25 21.875 18.25H17C16.1025 18.25 15.375 17.5225 15.375 16.625Z" fill="#8247FF"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        $72,056.00
                      </h4>
                      <div class="flex items-center gap-1">
                        <div class="flex items-center -space-x-1">
                          <button>
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8319)">
                                <path d="M8.55046 11.4302L12.2838 6.34223C12.5748 5.94484 12.75 5.47462 12.7901 4.98371C12.8302 4.4928 12.7335 4.00038 12.5108 3.56106C12.2881 3.12173 11.9481 2.75267 11.5284 2.4948C11.1088 2.23692 10.6259 2.1003 10.1334 2.1001L2.66673 2.1001C2.17396 2.10019 1.69086 2.23681 1.27103 2.4948C0.8512 2.7528 0.511066 3.12208 0.288377 3.56165C0.0656881 4.00123 -0.0308467 4.49392 0.00948607 4.98503C0.0498188 5.47614 0.225442 5.94647 0.516864 6.34383L4.2502 11.4318C4.49788 11.7696 4.82163 12.0442 5.19523 12.2335C5.56883 12.4229 5.98177 12.5215 6.4006 12.5215C6.81942 12.5215 7.23236 12.4229 7.60596 12.2335C7.97956 12.0442 8.30331 11.7696 8.551 11.4318L8.55046 11.4302ZM5.11046 10.7988L1.37713 5.71076C1.20293 5.47237 1.09809 5.19043 1.07421 4.89614C1.05034 4.60184 1.10836 4.30669 1.24186 4.04333C1.37536 3.77998 1.57913 3.5587 1.83061 3.40399C2.08209 3.24928 2.37147 3.16718 2.66673 3.16676L10.1334 3.16676C10.4292 3.1638 10.7199 3.24436 10.9719 3.39918C11.224 3.554 11.4273 3.77679 11.5585 4.04196C11.6732 4.26751 11.7331 4.51692 11.7334 4.76996C11.7321 5.10911 11.622 5.43888 11.4193 5.71077L7.68593 10.7988C7.53729 11.0012 7.3431 11.1657 7.11907 11.2792C6.89503 11.3926 6.64744 11.4517 6.39633 11.4517C6.14522 11.4517 5.89763 11.3926 5.67359 11.2792C5.44956 11.1657 5.25537 11.0012 5.10673 10.7988L5.11046 10.7988Z" fill="#86EFAC"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8319">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(12.8 0.5) rotate(90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                          <button class="mt-2">
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8320)">
                                <path d="M4.45012 2.57083L0.719988 7.65777C0.429046 8.05508 0.253808 8.52521 0.213696 9.01603C0.173584 9.50684 0.270166 9.99918 0.492737 10.4385C0.715307 10.8778 1.05517 11.2468 1.47466 11.5048C1.89414 11.7627 2.37687 11.8995 2.86932 11.8999L10.3333 11.8999C10.8263 11.9007 11.3097 11.7646 11.7299 11.5069C12.1501 11.2492 12.4906 10.8799 12.7134 10.4402C12.9362 10.0005 13.0326 9.50759 12.9918 9.01634C12.9511 8.52509 12.7748 8.05478 12.4827 7.65777L8.75252 2.57083C8.50482 2.2333 8.18111 1.95883 7.80762 1.76964C7.43412 1.58046 7.02133 1.48188 6.60266 1.48188C6.18398 1.48188 5.77119 1.58046 5.39769 1.76964C5.0242 1.95883 4.70049 2.2333 4.45279 2.57083L4.45012 2.57083Z" fill="#22C55E"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8320">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(0.199951 13.5) rotate(-90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                        <span class="text-sm font-medium text-green-500">+12.05%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Single -->
                <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
                  <div class="mb-3">
                    <h4 class="text-sm font-medium text-slate-600">
                      Average Earning
                    </h4>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z" fill="#8247FF"></path>
                        <path opacity="0.4" d="M5.68429 10.2103C6.46705 7.7055 8.78686 6 11.4112 6H12.5889C15.2132 6 17.533 7.7055 18.3158 10.2104L19.5658 14.2104C20.7731 18.0739 17.8867 22 13.8389 22H10.1612C6.11332 22 3.22692 18.0739 4.43429 14.2104L5.68429 10.2103Z" fill="#8247FF"></path>
                        <path d="M11.9998 20C11.9998 18.8954 12.8952 18 13.9998 18H19.9998C21.1043 18 21.9998 18.8954 21.9998 20C21.9998 21.1046 21.1043 22 19.9998 22H13.9998C12.8952 22 11.9998 21.1046 11.9998 20Z" fill="#8247FF"></path>
                        <path d="M11.9998 16C11.9998 14.8954 12.8952 14 13.9998 14H19.3331H19.9998C21.1043 14 21.9998 14.8954 21.9998 16C21.9998 17.1046 21.1043 18 19.9998 18H13.9998C12.8952 18 11.9998 17.1046 11.9998 16Z" fill="#8247FF"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        12,056
                      </h4>
                      <div class="flex items-center gap-1">
                        <div class="flex items-center -space-x-1">
                          <button>
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8319)">
                                <path d="M8.55046 11.4302L12.2838 6.34223C12.5748 5.94484 12.75 5.47462 12.7901 4.98371C12.8302 4.4928 12.7335 4.00038 12.5108 3.56106C12.2881 3.12173 11.9481 2.75267 11.5284 2.4948C11.1088 2.23692 10.6259 2.1003 10.1334 2.1001L2.66673 2.1001C2.17396 2.10019 1.69086 2.23681 1.27103 2.4948C0.8512 2.7528 0.511066 3.12208 0.288377 3.56165C0.0656881 4.00123 -0.0308467 4.49392 0.00948607 4.98503C0.0498188 5.47614 0.225442 5.94647 0.516864 6.34383L4.2502 11.4318C4.49788 11.7696 4.82163 12.0442 5.19523 12.2335C5.56883 12.4229 5.98177 12.5215 6.4006 12.5215C6.81942 12.5215 7.23236 12.4229 7.60596 12.2335C7.97956 12.0442 8.30331 11.7696 8.551 11.4318L8.55046 11.4302ZM5.11046 10.7988L1.37713 5.71076C1.20293 5.47237 1.09809 5.19043 1.07421 4.89614C1.05034 4.60184 1.10836 4.30669 1.24186 4.04333C1.37536 3.77998 1.57913 3.5587 1.83061 3.40399C2.08209 3.24928 2.37147 3.16718 2.66673 3.16676L10.1334 3.16676C10.4292 3.1638 10.7199 3.24436 10.9719 3.39918C11.224 3.554 11.4273 3.77679 11.5585 4.04196C11.6732 4.26751 11.7331 4.51692 11.7334 4.76996C11.7321 5.10911 11.622 5.43888 11.4193 5.71077L7.68593 10.7988C7.53729 11.0012 7.3431 11.1657 7.11907 11.2792C6.89503 11.3926 6.64744 11.4517 6.39633 11.4517C6.14522 11.4517 5.89763 11.3926 5.67359 11.2792C5.44956 11.1657 5.25537 11.0012 5.10673 10.7988L5.11046 10.7988Z" fill="#FEE2E2"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8319">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(12.8 0.5) rotate(90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                          <button class="mt-2">
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8320)">
                                <path d="M4.45012 2.57083L0.719988 7.65777C0.429046 8.05508 0.253808 8.52521 0.213696 9.01603C0.173584 9.50684 0.270166 9.99918 0.492737 10.4385C0.715307 10.8778 1.05517 11.2468 1.47466 11.5048C1.89414 11.7627 2.37687 11.8995 2.86932 11.8999L10.3333 11.8999C10.8263 11.9007 11.3097 11.7646 11.7299 11.5069C12.1501 11.2492 12.4906 10.8799 12.7134 10.4402C12.9362 10.0005 13.0326 9.50759 12.9918 9.01634C12.9511 8.52509 12.7748 8.05478 12.4827 7.65777L8.75252 2.57083C8.50482 2.2333 8.18111 1.95883 7.80762 1.76964C7.43412 1.58046 7.02133 1.48188 6.60266 1.48188C6.18398 1.48188 5.77119 1.58046 5.39769 1.76964C5.0242 1.95883 4.70049 2.2333 4.45279 2.57083L4.45012 2.57083Z" fill="#EF4444"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8320">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(0.199951 13.5) rotate(-90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                        <span class="text-sm font-medium text-red-500">-12.25%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Single -->
                <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
                  <div class="mb-3">
                    <h4 class="text-sm font-medium text-slate-700">
                      Last Year Earning
                    </h4>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V7.35352C13.9043 7.67998 14.75 8.74122 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10C13.25 9.30964 12.6904 8.75 12 8.75C11.3096 8.75 10.75 9.30964 10.75 10C10.75 10.6904 11.3096 11.25 12 11.25C13.5188 11.25 14.75 12.4812 14.75 14C14.75 15.2588 13.9043 16.32 12.75 16.6465V17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5V16.6465C10.0957 16.32 9.25 15.2588 9.25 14C9.25 13.5858 9.58579 13.25 10 13.25C10.4142 13.25 10.75 13.5858 10.75 14C10.75 14.6904 11.3096 15.25 12 15.25C12.6904 15.25 13.25 14.6904 13.25 14C13.25 13.3096 12.6904 12.75 12 12.75C10.4812 12.75 9.25 11.5188 9.25 10C9.25 8.74122 10.0957 7.67998 11.25 7.35352V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z" fill="#8247FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88623 8.71859C5.18371 5.51328 8.32661 3.25 11.9999 3.25C16.3508 3.25 19.9599 6.42553 20.6362 10.5853L21.5499 9.9C21.8813 9.65147 22.3514 9.71863 22.5999 10.05C22.8484 10.3814 22.7813 10.8515 22.4499 11.1L21.4388 11.8584C20.6055 12.4833 19.4906 12.5839 18.5589 12.118L17.6645 11.6708C17.294 11.4856 17.1439 11.0351 17.3291 10.6646C17.5143 10.2941 17.9648 10.1439 18.3353 10.3292L19.1393 10.7311C18.5393 7.33207 15.5711 4.75 11.9999 4.75C8.95848 4.75 6.35272 6.62306 5.27664 9.28141C5.12122 9.66536 4.68398 9.85062 4.30003 9.6952C3.91608 9.53978 3.73081 9.10254 3.88623 8.71859ZM3.32872 13.1794C3.29531 13.1926 3.26229 13.2073 3.22976 13.2236L2.33533 13.6708C1.96485 13.8561 1.51434 13.7059 1.3291 13.3354C1.14386 12.9649 1.29403 12.5144 1.66451 12.3292L2.55894 11.882C3.49059 11.4161 4.60548 11.5167 5.43877 12.1416L6.44992 12.9C6.78129 13.1485 6.84845 13.6186 6.59992 13.95C6.35139 14.2814 5.88129 14.3485 5.54992 14.1L4.93611 13.6396C5.67922 16.8539 8.55975 19.25 11.9999 19.25C15.0414 19.25 17.6471 17.3769 18.7232 14.7186C18.8786 14.3346 19.3159 14.1494 19.6998 14.3048C20.0838 14.4602 20.269 14.8975 20.1136 15.2814C18.8161 18.4867 15.6732 20.75 11.9999 20.75C7.56738 20.75 3.90465 17.4541 3.32872 13.1794Z" fill="#8247FF"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        31,056
                      </h4>
                      <div class="flex items-center gap-1">
                        <div class="flex items-center -space-x-1">
                          <button>
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8319)">
                                <path d="M8.55046 11.4302L12.2838 6.34223C12.5748 5.94484 12.75 5.47462 12.7901 4.98371C12.8302 4.4928 12.7335 4.00038 12.5108 3.56106C12.2881 3.12173 11.9481 2.75267 11.5284 2.4948C11.1088 2.23692 10.6259 2.1003 10.1334 2.1001L2.66673 2.1001C2.17396 2.10019 1.69086 2.23681 1.27103 2.4948C0.8512 2.7528 0.511066 3.12208 0.288377 3.56165C0.0656881 4.00123 -0.0308467 4.49392 0.00948607 4.98503C0.0498188 5.47614 0.225442 5.94647 0.516864 6.34383L4.2502 11.4318C4.49788 11.7696 4.82163 12.0442 5.19523 12.2335C5.56883 12.4229 5.98177 12.5215 6.4006 12.5215C6.81942 12.5215 7.23236 12.4229 7.60596 12.2335C7.97956 12.0442 8.30331 11.7696 8.551 11.4318L8.55046 11.4302ZM5.11046 10.7988L1.37713 5.71076C1.20293 5.47237 1.09809 5.19043 1.07421 4.89614C1.05034 4.60184 1.10836 4.30669 1.24186 4.04333C1.37536 3.77998 1.57913 3.5587 1.83061 3.40399C2.08209 3.24928 2.37147 3.16718 2.66673 3.16676L10.1334 3.16676C10.4292 3.1638 10.7199 3.24436 10.9719 3.39918C11.224 3.554 11.4273 3.77679 11.5585 4.04196C11.6732 4.26751 11.7331 4.51692 11.7334 4.76996C11.7321 5.10911 11.622 5.43888 11.4193 5.71077L7.68593 10.7988C7.53729 11.0012 7.3431 11.1657 7.11907 11.2792C6.89503 11.3926 6.64744 11.4517 6.39633 11.4517C6.14522 11.4517 5.89763 11.3926 5.67359 11.2792C5.44956 11.1657 5.25537 11.0012 5.10673 10.7988L5.11046 10.7988Z" fill="#86EFAC"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8319">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(12.8 0.5) rotate(90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                          <button class="mt-2">
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8320)">
                                <path d="M4.45012 2.57083L0.719988 7.65777C0.429046 8.05508 0.253808 8.52521 0.213696 9.01603C0.173584 9.50684 0.270166 9.99918 0.492737 10.4385C0.715307 10.8778 1.05517 11.2468 1.47466 11.5048C1.89414 11.7627 2.37687 11.8995 2.86932 11.8999L10.3333 11.8999C10.8263 11.9007 11.3097 11.7646 11.7299 11.5069C12.1501 11.2492 12.4906 10.8799 12.7134 10.4402C12.9362 10.0005 13.0326 9.50759 12.9918 9.01634C12.9511 8.52509 12.7748 8.05478 12.4827 7.65777L8.75252 2.57083C8.50482 2.2333 8.18111 1.95883 7.80762 1.76964C7.43412 1.58046 7.02133 1.48188 6.60266 1.48188C6.18398 1.48188 5.77119 1.58046 5.39769 1.76964C5.0242 1.95883 4.70049 2.2333 4.45279 2.57083L4.45012 2.57083Z" fill="#22C55E"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8320">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(0.199951 13.5) rotate(-90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                        <span class="text-sm font-medium text-green-500">+25.21%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Single -->
                <div class="relative w-full p-5 bg-white rounded-lg xl:p-6">
                  <div class="mb-3">
                    <h4 class="text-sm font-medium text-slate-700">
                      Annual Growth
                    </h4>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16Z" fill="#22C55E"></path>
                        <path opacity="0.4" d="M10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="#22C55E"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H18C19.5188 3.25 20.75 4.48122 20.75 6V10C20.75 10.4142 20.4142 10.75 20 10.75C19.5858 10.75 19.25 10.4142 19.25 10V6C19.25 5.93994 19.2458 5.88088 19.2376 5.82308L4.53033 20.5303C4.23744 20.8232 3.76256 20.8232 3.46967 20.5303C3.17678 20.2374 3.17678 19.7626 3.46967 19.4697L18.1769 4.76242C18.1191 4.75424 18.0601 4.75 18 4.75H14C13.5858 4.75 13.25 4.41421 13.25 4Z" fill="#22C55E"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="mb-1 text-xl font-semibold leading-none text-mainblack">
                        $8,05,056
                      </h4>
                      <div class="flex items-center gap-1">
                        <div class="flex items-center -space-x-1">
                          <button>
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8319)">
                                <path d="M8.55046 11.4302L12.2838 6.34223C12.5748 5.94484 12.75 5.47462 12.7901 4.98371C12.8302 4.4928 12.7335 4.00038 12.5108 3.56106C12.2881 3.12173 11.9481 2.75267 11.5284 2.4948C11.1088 2.23692 10.6259 2.1003 10.1334 2.1001L2.66673 2.1001C2.17396 2.10019 1.69086 2.23681 1.27103 2.4948C0.8512 2.7528 0.511066 3.12208 0.288377 3.56165C0.0656881 4.00123 -0.0308467 4.49392 0.00948607 4.98503C0.0498188 5.47614 0.225442 5.94647 0.516864 6.34383L4.2502 11.4318C4.49788 11.7696 4.82163 12.0442 5.19523 12.2335C5.56883 12.4229 5.98177 12.5215 6.4006 12.5215C6.81942 12.5215 7.23236 12.4229 7.60596 12.2335C7.97956 12.0442 8.30331 11.7696 8.551 11.4318L8.55046 11.4302ZM5.11046 10.7988L1.37713 5.71076C1.20293 5.47237 1.09809 5.19043 1.07421 4.89614C1.05034 4.60184 1.10836 4.30669 1.24186 4.04333C1.37536 3.77998 1.57913 3.5587 1.83061 3.40399C2.08209 3.24928 2.37147 3.16718 2.66673 3.16676L10.1334 3.16676C10.4292 3.1638 10.7199 3.24436 10.9719 3.39918C11.224 3.554 11.4273 3.77679 11.5585 4.04196C11.6732 4.26751 11.7331 4.51692 11.7334 4.76996C11.7321 5.10911 11.622 5.43888 11.4193 5.71077L7.68593 10.7988C7.53729 11.0012 7.3431 11.1657 7.11907 11.2792C6.89503 11.3926 6.64744 11.4517 6.39633 11.4517C6.14522 11.4517 5.89763 11.3926 5.67359 11.2792C5.44956 11.1657 5.25537 11.0012 5.10673 10.7988L5.11046 10.7988Z" fill="#86EFAC"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8319">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(12.8 0.5) rotate(90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                          <button class="mt-2">
                            <svg width="13" height="14" viewbox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_8320)">
                                <path d="M4.45012 2.57083L0.719988 7.65777C0.429046 8.05508 0.253808 8.52521 0.213696 9.01603C0.173584 9.50684 0.270166 9.99918 0.492737 10.4385C0.715307 10.8778 1.05517 11.2468 1.47466 11.5048C1.89414 11.7627 2.37687 11.8995 2.86932 11.8999L10.3333 11.8999C10.8263 11.9007 11.3097 11.7646 11.7299 11.5069C12.1501 11.2492 12.4906 10.8799 12.7134 10.4402C12.9362 10.0005 13.0326 9.50759 12.9918 9.01634C12.9511 8.52509 12.7748 8.05478 12.4827 7.65777L8.75252 2.57083C8.50482 2.2333 8.18111 1.95883 7.80762 1.76964C7.43412 1.58046 7.02133 1.48188 6.60266 1.48188C6.18398 1.48188 5.77119 1.58046 5.39769 1.76964C5.0242 1.95883 4.70049 2.2333 4.45279 2.57083L4.45012 2.57083Z" fill="#22C55E"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_1_8320">
                                  <rect width="12.8" height="12.8" fill="white" transform="translate(0.199951 13.5) rotate(-90)"></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                        <span class="text-sm font-medium text-green-500">+12.05%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-12">
                <div class="flex flex-col gap-6 xl:col-span-7">
                  <div class="p-5 bg-white rounded-lg">
                    <div class="flex items-center justify-between mb-5">
                      <div>
                        <h3 class="text-xl font-semibold text-mainblack">
                          Student Analysis
                          <span class="inline-flex items-center gap-1 px-2 py-1 ml-2 text-xs font-medium text-red-500 bg-red-100 rounded-full">
                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 3.5L4.5 6.5L6.5 4.5L10.5 8.5" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M7 8.5H10.5V5" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            3.5%
                          </span>
                        </h3>
                      </div>
                      <div class="flex items-center gap-5">
                        <p class="inline-flex items-center text-sm text-slate-600">
                          <span class="w-1.5 mr-2 h-1.5 rounded-full bg-primary inline-block"></span>
                          Enrolled
                        </p>
                        <p class="inline-flex items-center text-sm text-slate-600">
                          <span class="w-1.5 mr-2 h-1.5 rounded-full bg-red-500 inline-block"></span>Left
                        </p>
                      </div>
                      <div class="relative">
                        <button onclick="dropdownFilterAction('#dateFilter')" class="flex items-center gap-2 p-3 text-sm font-medium border rounded-lg text-mainblack">
                          Apr 25 - Apr 29
                          <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 4.16675H4.99998C4.07951 4.16675 3.33331 4.91294 3.33331 5.83341V15.8334C3.33331 16.7539 4.07951 17.5001 4.99998 17.5001H15C15.9205 17.5001 16.6666 16.7539 16.6666 15.8334V5.83341C16.6666 4.91294 15.9205 4.16675 15 4.16675Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.3333 2.5V5.83333" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.66663 2.5V5.83333" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M3.33331 9.16675H16.6666" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9.16663 12.5H9.99996" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10 12.5V15" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div id="dateFilter" class="absolute right-0 z-10 hidden w-full overflow-hidden bg-white rounded-lg shadow-lg top-full">
                          <ul>
                            <li onclick="dropdownFilterAction('#dateFilter')" class="px-2 py-2 text-sm font-semibold text-gray-500 cursor-pointer hover:bg-gray-50">
                              Jan 11 - Jan 24
                            </li>
                            <li onclick="dropdownFilterAction('#dateFilter')" class="px-2 py-2 text-sm font-semibold text-gray-500 cursor-pointer hover:bg-gray-50">
                              Feb 11 - Feb 24
                            </li>
                            <li onclick="dropdownFilterAction('#dateFilter')" class="px-2 py-2 text-sm font-semibold text-gray-500 cursor-pointer hover:bg-gray-50">
                              Mar 11 - Mar 24
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="h-[300px]">
                      <canvas class="w-full studentAnalysis"></canvas>
                    </div>
                  </div>
                </div>
                <div class="p-5 bg-white rounded-lg xl:col-span-5">
                  <div class="flex items-center justify-between mb-5">
                    <div>
                      <h3 class="text-xl font-semibold text-mainblack">
                        Geo Location
                      </h3>
                    </div>
                    <div class="relative text-sm font-medium rounded-lg cursor-pointer group w-28 text-slate-500">
                      <div class="flex gap-2.5 justify-between items-center w-full px-4 py-2.5 border group-hover:border-b-transparent rounded-lg group-hover:rounded-b-none border-slate-500">
                        <span> Monthly</span>
                        <svg width="12" height="7" viewbox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.5917 0.841668C11.5142 0.763561 11.422 0.701565 11.3205 0.659258C11.2189 0.616951 11.11 0.595169 11 0.595169C10.89 0.595169 10.7811 0.616951 10.6795 0.659258C10.578 0.701565 10.4858 0.763561 10.4083 0.841668L6.59168 4.65833C6.51421 4.73644 6.42204 4.79844 6.32049 4.84074C6.21894 4.88305 6.11002 4.90483 6.00001 4.90483C5.89 4.90483 5.78108 4.88305 5.67953 4.84074C5.57798 4.79844 5.48581 4.73644 5.40834 4.65833L1.59168 0.841668C1.51421 0.763561 1.42204 0.701565 1.32049 0.659258C1.21894 0.616951 1.11002 0.595169 1.00001 0.595169C0.89 0.595169 0.781078 0.616951 0.679529 0.659258C0.577979 0.701565 0.485812 0.763561 0.408343 0.841668C0.253134 0.997803 0.166016 1.20901 0.166016 1.42917C0.166016 1.64932 0.253134 1.86053 0.408343 2.01667L4.23334 5.84167C4.70209 6.30984 5.33751 6.5728 6.00001 6.5728C6.66251 6.5728 7.29792 6.30984 7.76668 5.84167L11.5917 2.01667C11.7469 1.86053 11.834 1.64932 11.834 1.42917C11.834 1.20901 11.7469 0.997803 11.5917 0.841668Z" fill="#64748B"></path>
                        </svg>
                      </div>
                      <div class="absolute z-50 w-full overflow-hidden transition-all duration-300 origin-top scale-y-0 bg-white border-b rounded-b-lg border-x border-slate-500 group-hover:scale-y-100">
                        <p class="hover:bg-blue-200 px-4 py-2.5 w-full transition-all duration-300">
                          Yearly
                        </p>
                        <p class="hover:bg-blue-200 px-4 py-2.5 w-full transition-all duration-300">
                          Weekly
                        </p>
                        <p class="hover:bg-blue-200 px-4 py-2.5 w-full transition-all duration-300 rounded-b-lg">
                          Daily
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="h-[180px]">
                    <div id="world-map" class="w-full h-full p-3 rounded-md"></div>
                  </div>
                  <div class="mt-5 space-y-5">
                    <div class="flex items-center justify-between">
                      <div class="flex gap-3">
                        <img src="assets/img/uk.png" class="rounded-full w-9 h-9 shrink-0" alt="">
                        <div>
                          <h4 class="text-sm font-semibold text-mainblack">
                            United Kingdom
                          </h4>
                          <p class="text-sm text-slate-600">340 Sales</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-sm font-semibold text-mainblack">
                          $17,678
                        </h4>
                        <span class="px-2 py-1 text-xs font-semibold text-green-500 bg-green-100 rounded-md">+12%</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex gap-3">
                        <img src="assets/img/spain.png" class="rounded-full w-9 h-9 shrink-0" alt="">
                        <div>
                          <h4 class="text-sm font-semibold text-mainblack">
                            Spain
                          </h4>
                          <p class="text-sm text-slate-600">100 Sales</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-sm font-semibold text-mainblack">
                          $5,500
                        </h4>
                        <span class="px-2 py-1 text-xs font-semibold text-red-500 bg-red-100 rounded-md">-5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Transaction -->
              <div class="py-5 bg-white rounded-lg">
                <div class="flex items-center justify-between px-5">
                  <h4 class="text-xl font-semibold text-slate-900">
                    Top Courses
                  </h4>
                  <a href="course-list.html" class="inline-flex items-center justify-center gap-1 px-5 py-3 text-sm font-medium transition ease-in-out border rounded-lg border-slate-300 text-slate-500 hover:bg-violet-600 hover:text-blue-50 hover:border-transparent">
                    View All
                    <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8334 8.23334L9.00841 4.40834C8.85228 4.25313 8.64107 4.16602 8.42091 4.16602C8.20076 4.16602 7.98955 4.25313 7.83341 4.40834C7.75531 4.48581 7.69331 4.57798 7.651 4.67953C7.6087 4.78108 7.58691 4.89 7.58691 5.00001C7.58691 5.11002 7.6087 5.21894 7.651 5.32049C7.69331 5.42204 7.75531 5.51421 7.83341 5.59168L11.6667 9.40834C11.7449 9.48581 11.8068 9.57798 11.8492 9.67953C11.8915 9.78108 11.9132 9.89 11.9132 10C11.9132 10.11 11.8915 10.2189 11.8492 10.3205C11.8068 10.422 11.7449 10.5142 11.6667 10.5917L7.83341 14.4083C7.67649 14.5642 7.5879 14.7759 7.58712 14.9971C7.58633 15.2182 7.67343 15.4306 7.82925 15.5875C7.98506 15.7444 8.19683 15.833 8.41797 15.8338C8.6391 15.8346 8.85149 15.7475 9.00841 15.5917L12.8334 11.7667C13.3016 11.2979 13.5645 10.6625 13.5645 10C13.5645 9.33751 13.3016 8.70209 12.8334 8.23334Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
                <div class="-m-1.5 overflow-x-auto">
                  <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                      <table class="min-w-full divide-y divide-slate-100">
                        <thead>
                          <tr>
                            <th scope="col" class="px-5 py-3 text-base font-medium capitalize text-start text-slate-900">
                              Course Name
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-start text-mainblack">
                              Instructor
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-start text-mainblack">
                              Sale
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-start text-mainblack">
                              Price
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-start text-mainblack">
                              Lesson
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-start text-mainblack">
                              Total Time
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-start text-mainblack">
                              Status
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-medium capitalize text-end text-mainblack">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                          <tr class="transition hover:bg-slate-50">
                            <td class="px-5 py-3 text-sm text-gray-800 whitespace-nowrap">
                              <div class="flex items-center gap-2">
                                <div class="hidden shrink-0 xl:block">
                                  <img src="assets/img/courses/c-1.png" class="w-full rounded" alt="">
                                </div>
                                <div>
                                  <a href="course-details.html" class="text-sm font-medium leading-6 transition hover:underline text-mainblack text-wrap sm:text-nowrap">
                                    Machine Learning Algorithms
                                  </a>
                                  <p class="text-xs text-slate-600">
                                    #54204152
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td class="px-5 py-3 text-sm font-medium whitespace-nowrap text-slate-500">
                              Annette Black
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-mainblack">
                              562
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              $400
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              24
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              248 Hours
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <span class="inline-block px-5 py-2 text-sm text-center text-green-600 bg-green-100 rounded-md">Published</span>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                              <div class="flex justify-end gap-2">
                                <a href="course-list.html" class="inline-flex items-center justify-center w-8 h-8 text-white rounded bg-primary">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6084 8.71075C18.5748 9.72748 18.5748 11.2722 17.6084 12.2889C15.9786 14.0037 13.1794 16.3332 9.99984 16.3332C6.82024 16.3332 4.02108 14.0037 2.39126 12.2889C1.42492 11.2722 1.42492 9.72748 2.39126 8.71075C4.02108 6.99595 6.82024 4.6665 9.99984 4.6665C13.1794 4.6665 15.9786 6.99595 17.6084 8.71075Z" stroke="currentColor" stroke-width="1.5"></path>
                                    <path d="M12.4998 10.4998C12.4998 11.8805 11.3805 12.9998 9.99984 12.9998C8.61913 12.9998 7.49984 11.8805 7.49984 10.4998C7.49984 9.11913 8.61913 7.99984 9.99984 7.99984C11.3805 7.99984 12.4998 9.11913 12.4998 10.4998Z" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </a>
                                <a href="edit-course.html" class="inline-flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_67_6479)">
                                      <path d="M17.5 8.83317V6.74984C17.5 4.90889 16.0076 3.4165 14.1667 3.4165H5.83333C3.99238 3.4165 2.5 4.90889 2.5 6.74984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H7.5M6.66667 2.1665V4.6665M13.3333 2.1665V4.6665M10 18.8332L12.5506 18.106C12.6874 18.067 12.8119 17.9938 12.9125 17.8933L17.0915 13.7143C17.6362 13.1696 17.6362 12.2864 17.0915 11.7417C16.5468 11.197 15.6636 11.197 15.1189 11.7417L10.9399 15.9207C10.8394 16.0213 10.7661 16.1458 10.7271 16.2825L10 18.8332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                                    </g>
                                    <defs>
                                      <clippath id="clip0_67_6479">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect>
                                      </clippath>
                                    </defs>
                                  </svg>
                                </a>
                                <button data-modal-target="#modal1" class="inline-flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16667 7.1665V15.4998C4.16667 17.3408 5.65905 18.8332 7.5 18.8332H12.5C14.3409 18.8332 15.8333 17.3408 15.8333 15.4998V7.1665M11.6667 9.6665V14.6665M8.33333 9.6665L8.33333 14.6665M13.3333 4.6665L12.1614 2.90867C11.8523 2.44501 11.3319 2.1665 10.7747 2.1665H9.22531C8.66805 2.1665 8.14767 2.44501 7.83856 2.90867L6.66667 4.6665M13.3333 4.6665H6.66667M13.3333 4.6665H17.5M6.66667 4.6665H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr class="transition hover:bg-slate-50">
                            <td class="px-5 py-3 text-sm text-gray-800 whitespace-nowrap">
                              <div class="flex items-center gap-2">
                                <div class="hidden shrink-0 xl:block">
                                  <img src="assets/img/courses/c-2.png" class="w-full rounded" alt="">
                                </div>
                                <div>
                                  <a href="course-details.html" class="text-sm font-medium leading-6 transition hover:underline text-mainblack text-wrap sm:text-nowrap">
                                    Recipes for a Balanced Diet
                                  </a>
                                  <p class="text-xs text-slate-600">
                                    #54204152
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-3 text-sm font-medium whitespace-nowrap text-slate-500">
                              Annette Black
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-mainblack">
                              562
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              $400
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              24
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              248 Hours
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <span class="inline-block px-5 py-2 text-sm text-center text-red-500 bg-red-100 rounded-md">Pause</span>
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <div class="flex justify-end gap-2">
                                <a href="course-list.html" class="inline-flex items-center justify-center w-8 h-8 text-white rounded bg-primary">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6084 8.71075C18.5748 9.72748 18.5748 11.2722 17.6084 12.2889C15.9786 14.0037 13.1794 16.3332 9.99984 16.3332C6.82024 16.3332 4.02108 14.0037 2.39126 12.2889C1.42492 11.2722 1.42492 9.72748 2.39126 8.71075C4.02108 6.99595 6.82024 4.6665 9.99984 4.6665C13.1794 4.6665 15.9786 6.99595 17.6084 8.71075Z" stroke="currentColor" stroke-width="1.5"></path>
                                    <path d="M12.4998 10.4998C12.4998 11.8805 11.3805 12.9998 9.99984 12.9998C8.61913 12.9998 7.49984 11.8805 7.49984 10.4998C7.49984 9.11913 8.61913 7.99984 9.99984 7.99984C11.3805 7.99984 12.4998 9.11913 12.4998 10.4998Z" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </a>
                                <a href="edit-course.html" class="inline-flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_67_6479)">
                                      <path d="M17.5 8.83317V6.74984C17.5 4.90889 16.0076 3.4165 14.1667 3.4165H5.83333C3.99238 3.4165 2.5 4.90889 2.5 6.74984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H7.5M6.66667 2.1665V4.6665M13.3333 2.1665V4.6665M10 18.8332L12.5506 18.106C12.6874 18.067 12.8119 17.9938 12.9125 17.8933L17.0915 13.7143C17.6362 13.1696 17.6362 12.2864 17.0915 11.7417C16.5468 11.197 15.6636 11.197 15.1189 11.7417L10.9399 15.9207C10.8394 16.0213 10.7661 16.1458 10.7271 16.2825L10 18.8332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                                    </g>
                                    <defs>
                                      <clippath id="clip0_67_6479">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect>
                                      </clippath>
                                    </defs>
                                  </svg>
                                </a>
                                <button data-modal-target="#modal1" class="inline-flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16667 7.1665V15.4998C4.16667 17.3408 5.65905 18.8332 7.5 18.8332H12.5C14.3409 18.8332 15.8333 17.3408 15.8333 15.4998V7.1665M11.6667 9.6665V14.6665M8.33333 9.6665L8.33333 14.6665M13.3333 4.6665L12.1614 2.90867C11.8523 2.44501 11.3319 2.1665 10.7747 2.1665H9.22531C8.66805 2.1665 8.14767 2.44501 7.83856 2.90867L6.66667 4.6665M13.3333 4.6665H6.66667M13.3333 4.6665H17.5M6.66667 4.6665H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr class="transition hover:bg-slate-50">
                            <td class="px-5 py-3 text-sm text-gray-800 whitespace-nowrap">
                              <div class="flex items-center gap-2">
                                <div class="hidden shrink-0 xl:block">
                                  <img src="assets/img/courses/c-3.png" class="w-full rounded" alt="">
                                </div>
                                <div>
                                  <a href="course-details.html" class="text-sm font-medium leading-6 transition hover:underline text-mainblack text-wrap sm:text-nowrap">
                                    Machine Learning Algorithms
                                  </a>
                                  <p class="text-xs text-slate-600">
                                    #54204152
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td class="px-5 py-3 text-sm font-medium whitespace-nowrap text-slate-500">
                              Annette Black
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-mainblack">
                              562
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              $400
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              24
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              248 Hours
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <span class="inline-block px-5 py-2 text-sm text-center text-green-600 bg-green-100 rounded-md">Published</span>
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <div class="flex justify-end gap-2">
                                <a href="course-list.html" class="inline-flex items-center justify-center w-8 h-8 text-white rounded bg-primary">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6084 8.71075C18.5748 9.72748 18.5748 11.2722 17.6084 12.2889C15.9786 14.0037 13.1794 16.3332 9.99984 16.3332C6.82024 16.3332 4.02108 14.0037 2.39126 12.2889C1.42492 11.2722 1.42492 9.72748 2.39126 8.71075C4.02108 6.99595 6.82024 4.6665 9.99984 4.6665C13.1794 4.6665 15.9786 6.99595 17.6084 8.71075Z" stroke="currentColor" stroke-width="1.5"></path>
                                    <path d="M12.4998 10.4998C12.4998 11.8805 11.3805 12.9998 9.99984 12.9998C8.61913 12.9998 7.49984 11.8805 7.49984 10.4998C7.49984 9.11913 8.61913 7.99984 9.99984 7.99984C11.3805 7.99984 12.4998 9.11913 12.4998 10.4998Z" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </a>
                                <a href="edit-course.html" class="inline-flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_67_6479)">
                                      <path d="M17.5 8.83317V6.74984C17.5 4.90889 16.0076 3.4165 14.1667 3.4165H5.83333C3.99238 3.4165 2.5 4.90889 2.5 6.74984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H7.5M6.66667 2.1665V4.6665M13.3333 2.1665V4.6665M10 18.8332L12.5506 18.106C12.6874 18.067 12.8119 17.9938 12.9125 17.8933L17.0915 13.7143C17.6362 13.1696 17.6362 12.2864 17.0915 11.7417C16.5468 11.197 15.6636 11.197 15.1189 11.7417L10.9399 15.9207C10.8394 16.0213 10.7661 16.1458 10.7271 16.2825L10 18.8332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                                    </g>
                                    <defs>
                                      <clippath id="clip0_67_6479">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect>
                                      </clippath>
                                    </defs>
                                  </svg>
                                </a>
                                <button data-modal-target="#modal1" class="inline-flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16667 7.1665V15.4998C4.16667 17.3408 5.65905 18.8332 7.5 18.8332H12.5C14.3409 18.8332 15.8333 17.3408 15.8333 15.4998V7.1665M11.6667 9.6665V14.6665M8.33333 9.6665L8.33333 14.6665M13.3333 4.6665L12.1614 2.90867C11.8523 2.44501 11.3319 2.1665 10.7747 2.1665H9.22531C8.66805 2.1665 8.14767 2.44501 7.83856 2.90867L6.66667 4.6665M13.3333 4.6665H6.66667M13.3333 4.6665H17.5M6.66667 4.6665H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr class="transition hover:bg-slate-50">
                            <td class="px-5 pr-3 text-sm text-gray-800 whitespace-nowrap">
                              <div class="flex items-center gap-2">
                                <div class="hidden shrink-0 xl:block">
                                  <img src="assets/img/courses/c-4.png" class="w-full rounded" alt="">
                                </div>
                                <div>
                                  <a href="course-details.html" class="text-sm font-medium leading-6 transition hover:underline text-mainblack text-wrap sm:text-nowrap">
                                    Recipes for a Balanced Diet
                                  </a>
                                  <p class="text-xs text-slate-600">
                                    #54204152
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-3 text-sm font-medium whitespace-nowrap text-slate-500">
                              Annette Black
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-mainblack">
                              562
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              $400
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              24
                            </td>
                            <td class="px-5 py-3 text-sm whitespace-nowrap text-slate-600">
                              248 Hours
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <span class="inline-block px-5 py-2 text-sm text-center text-yellow-500 bg-yellow-100 rounded-md">Upcoming</span>
                            </td>
                            <td class="px-5 py-3 whitespace-nowrap">
                              <div class="flex justify-end gap-2">
                                <a href="course-list.html" class="inline-flex items-center justify-center w-8 h-8 text-white rounded bg-primary">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6084 8.71075C18.5748 9.72748 18.5748 11.2722 17.6084 12.2889C15.9786 14.0037 13.1794 16.3332 9.99984 16.3332C6.82024 16.3332 4.02108 14.0037 2.39126 12.2889C1.42492 11.2722 1.42492 9.72748 2.39126 8.71075C4.02108 6.99595 6.82024 4.6665 9.99984 4.6665C13.1794 4.6665 15.9786 6.99595 17.6084 8.71075Z" stroke="currentColor" stroke-width="1.5"></path>
                                    <path d="M12.4998 10.4998C12.4998 11.8805 11.3805 12.9998 9.99984 12.9998C8.61913 12.9998 7.49984 11.8805 7.49984 10.4998C7.49984 9.11913 8.61913 7.99984 9.99984 7.99984C11.3805 7.99984 12.4998 9.11913 12.4998 10.4998Z" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </a>
                                <a href="edit-course.html" class="inline-flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_67_6479)">
                                      <path d="M17.5 8.83317V6.74984C17.5 4.90889 16.0076 3.4165 14.1667 3.4165H5.83333C3.99238 3.4165 2.5 4.90889 2.5 6.74984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H7.5M6.66667 2.1665V4.6665M13.3333 2.1665V4.6665M10 18.8332L12.5506 18.106C12.6874 18.067 12.8119 17.9938 12.9125 17.8933L17.0915 13.7143C17.6362 13.1696 17.6362 12.2864 17.0915 11.7417C16.5468 11.197 15.6636 11.197 15.1189 11.7417L10.9399 15.9207C10.8394 16.0213 10.7661 16.1458 10.7271 16.2825L10 18.8332Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                                    </g>
                                    <defs>
                                      <clippath id="clip0_67_6479">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect>
                                      </clippath>
                                    </defs>
                                  </svg>
                                </a>
                                <button data-modal-target="#modal1" class="inline-flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded">
                                  <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16667 7.1665V15.4998C4.16667 17.3408 5.65905 18.8332 7.5 18.8332H12.5C14.3409 18.8332 15.8333 17.3408 15.8333 15.4998V7.1665M11.6667 9.6665V14.6665M8.33333 9.6665L8.33333 14.6665M13.3333 4.6665L12.1614 2.90867C11.8523 2.44501 11.3319 2.1665 10.7747 2.1665H9.22531C8.66805 2.1665 8.14767 2.44501 7.83856 2.90867L6.66667 4.6665M13.3333 4.6665H6.66667M13.3333 4.6665H17.5M6.66667 4.6665H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Pagination -->
                <div class="flex flex-col items-center justify-between gap-5 px-5 mt-6 md:gap-10 md:flex-row">
                  <div>
                    <p class="text-sm font-medium text-slate-600">
                      Showing 1 to 10 of 97 results
                    </p>
                  </div>
                  <nav>
                    <ul class="flex flex-wrap items-center gap-2">
                      <li>
                        <button class="flex items-center justify-center rounded-full bg-violet-100 text-primary h-7 w-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none">
                            <path d="M10.6 12.71C10.5063 12.617 10.4319 12.5064
                        10.3811 12.3846C10.3303 12.2627 10.3042 12.132 10.3042
                        12C10.3042 11.868 10.3303 11.7373 10.3811
                        11.6154C10.4319 11.4936 10.5063 11.383 10.6 11.29L15.19
                        6.71C15.2837 6.61704 15.3581 6.50644 15.4089
                        6.38458C15.4596 6.26272 15.4858 6.13201 15.4858
                        6C15.4858 5.86799 15.4596 5.73728 15.4089
                        5.61542C15.3581 5.49356 15.2837 5.38296 15.19
                        5.29C15.0026 5.10375 14.7492 4.99921 14.485
                        4.99921C14.2208 4.99921 13.9673 5.10375 13.78
                        5.29L9.18998 9.88C8.62818 10.4425 8.31262 11.205 8.31262
                        12C8.31262 12.795 8.62818 13.5575 9.18998 14.12L13.78
                        18.71C13.9662 18.8947 14.2176 18.9989 14.48 19C14.6116
                        19.0008 14.7421 18.9755 14.8639 18.9258C14.9857 18.876
                        15.0965 18.8027 15.19 18.71C15.2837 18.617 15.3581
                        18.5064 15.4089 18.3846C15.4596 18.2627 15.4858 18.132
                        15.4858 18C15.4858 17.868 15.4596 17.7373 15.4089
                        17.6154C15.3581 17.4936 15.2837 17.383 15.19 17.29L10.6
                        12.71Z" fill="currentColor"></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary h-7 w-7">
                          1
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm text-white rounded-full bg-primary h-7 w-7">
                          2
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary text-blue h-7 w-7">
                          2
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary h-7 w-7">
                          3
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary h-7 w-7">
                          4
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary h-7 w-7">
                          ...
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary h-7 w-7">
                          20
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center text-sm rounded-full text-primary h-7 w-7">
                          21
                        </button>
                      </li>
                      <li>
                        <button class="flex items-center justify-center rounded-full bg-violet-100 text-primary h-7 w-7">
                          <svg width="7" height="12" viewbox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16662 5.40832C4.24473 5.48579 4.30672 5.57796 4.34903 5.67951C4.39134 5.78106 4.41312 5.88998 4.41312 5.99999C4.41312 6.11 4.39134 6.21892 4.34903 6.32047C4.30672 6.42202 4.24473 6.51419 4.16662 6.59166L0.341621 10.4083C0.263514 10.4858 0.201518 10.578 0.159211 10.6795C0.116903 10.7811 0.0951224 10.89 0.0951224 11C0.0951224 11.11 0.116903 11.2189 0.159211 11.3205C0.201518 11.422 0.263514 11.5142 0.341621 11.5917C0.497756 11.7469 0.708966 11.834 0.929121 11.834C1.14928 11.834 1.36049 11.7469 1.51662 11.5917L5.34162 7.76666C5.80979 7.29791 6.07275 6.66249 6.07275 5.99999C6.07275 5.33749 5.80979 4.70207 5.34162 4.23332L1.51662 0.408324C1.3614 0.25437 1.15191 0.167576 0.933289 0.166656C0.823617 0.166022 0.714897 0.187043 0.613366 0.228513C0.511835 0.269984 0.419488 0.331089 0.341622 0.408324C0.263515 0.485793 0.201519 0.57796 0.159212 0.679509C0.116904 0.781059 0.0951233 0.88998 0.0951233 0.99999C0.0951233 1.11 0.116904 1.21892 0.159212 1.32047C0.201519 1.42202 0.263514 1.51419 0.341622 1.59166L4.16662 5.40832Z" fill="currentColor"></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- write your code here-->
          </main>
        </div>
      </div>
    </div>

    <!-- Delete Modal -->
    <div>
      <div id="overlay" class="fixed top-0 left-0 z-30 hidden w-full h-full bg-gray-800 bg-opacity-50"></div>
      <div id="modal1" class="fixed z-50 hidden transform -translate-x-1/2 -translate-y-1/2 modal top-1/2 left-1/2">
        <div class="max-w-[320px] p-5 rounded-lg bg-white relative">
          <button class="absolute top-6 right-6" data-close-modal="">
            <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_64_3174)">
                <path d="M15.8048 0.195191C15.6798 0.0702103 15.5102 0 15.3334 0C15.1567 0 14.9871 0.0702103 14.8621 0.195191L8.0001 7.05719L1.1381 0.195191C1.01308 0.0702103 0.843545 0 0.666768 0C0.489992 0 0.320454 0.0702103 0.195435 0.195191C0.0704544 0.320209 0.000244141 0.489748 0.000244141 0.666524C0.000244141 0.8433 0.0704544 1.01284 0.195435 1.13786L7.05744 7.99986L0.195435 14.8619C0.0704544 14.9869 0.000244141 15.1564 0.000244141 15.3332C0.000244141 15.51 0.0704544 15.6795 0.195435 15.8045C0.320454 15.9295 0.489992 15.9997 0.666768 15.9997C0.843545 15.9997 1.01308 15.9295 1.1381 15.8045L8.0001 8.94252L14.8621 15.8045C14.9871 15.9295 15.1567 15.9997 15.3334 15.9997C15.5102 15.9997 15.6798 15.9295 15.8048 15.8045C15.9298 15.6795 16 15.51 16 15.3332C16 15.1564 15.9298 14.9869 15.8048 14.8619L8.94277 7.99986L15.8048 1.13786C15.9298 1.01284 16 0.8433 16 0.666524C16 0.489748 15.9298 0.320209 15.8048 0.195191Z" fill="#475569"></path>
              </g>
              <defs>
                <clippath id="clip0_64_3174">
                  <rect width="15.9997" height="15.9997" fill="white" transform="translate(0.000244141)"></rect>
                </clippath>
              </defs>
            </svg>
          </button>
          <div class="flex flex-col items-center gap-3">
            <img src="assets/img/delete-modal.png" alt="">
            <h3 class="text-xl font-semibold text-center text-mainblack">
              Delete Course
            </h3>
            <p class="text-base leading-6 text-center text-slate-600">
              Do you want to delete this product? This action can’t be undone
            </p>
          </div>
          <div class="flex gap-6 mt-5">
            <button class="px-10 py-2.5 border border-slate-200 text-sm text-mainblack rounded-md" data-close-modal="">
              Cancel
            </button>
            <button class="px-10 py-2.5 border border-slate-200 text-sm text-white bg-red-500 rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- layout end -->
    <!--scripts -->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/chart.js"></script>
    <script src="assets/js/chartjs-plugin-annotation.min.js"></script>
    <script src="assets/js/full-calendar.js"></script>
    <script src="npm/jsvectormap-1"></script>
    <script src="npm/jsvectormap/dist/maps/world.js"></script>
    <script>
      const studentAnalysisChart =
        document.querySelectorAll(".studentAnalysis");
      studentAnalysisChart.forEach((chart) => {
        const ctx_bids = chart.getContext("2d");
        const labels = [
          "",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "",
        ];
        const data = {
          labels: labels,
          datasets: [
            {
              label: false,
              data: [
                40, 30, 60, 30, 40, 25, 55, 40, 45, 30, 40, 20, 30, 0, 0, 0,
              ],
              borderColor: "#8247FF",
              pointStyle: false,
              borderWidth: 1.5,
              fill: true, // Fill under the line
              backgroundColor: "rgba(130, 71, 255, 0.15)", // Fill color
              tension: 0.0,
              type: "line",
            },
            {
              label: false,
              data: [0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Extend data to fill the end
              borderWidth: 0,
              stack: "",
              backgroundColor: () => {
                const gradient = ctx_bids.createLinearGradient(0, 0, 0, 450);
                gradient.addColorStop(0.2, "rgba(139, 92, 246, 1)");
                gradient.addColorStop(0.7, "rgba(139, 92, 246, 0)");
                return gradient;
              },
              type: "bar",
              barThickness: 24,
            },
          ],
        };
        const config = {
          type: "line",
          data: data,
          options: {
            layout: {},
            maintainAspectRatio: false,
            showAllTooltips: true,
            tooltips: {
              displayColors: true,
              callbacks: {
                mode: "x",
              },
            },
            scales: {
              x: {
                border: {
                  display: false,
                  dash: [4, 8],
                  color: "#E2E8F0",
                  pointStyle: false,
                },
                grid: {
                  dash: [4, 8],
                  color: "#E2E8F0",
                },
                min: 1,
                max: 12.4,
                barThickness: 0.1, // number (pixels) or 'flex'
                maxBarThickness: 0.1,
                ticks: {
                  color: "#64748B",
                },
              },
              y: {
                border: {
                  dash: [4, 8],
                  display: false,
                },
                grid: {
                  dash: [4, 8],
                  color: "#E2E8F0",
                },
                ticks: {
                  callback: (value, index, ticks) => {
                    if (value === 0) {
                      return "00";
                    } else if (value % 20 === 0) {
                      return value;
                    }
                  },
                  color: "#475569",
                },
                min: 0,
                max: 80,
              },
            },
            plugins: {
              legend: {
                position: "top",
                display: false,
              },
              annotation: {
                annotations: {
                  point1: {
                    type: "point",
                    xValue: 2,
                    yValue: 60,
                    backgroundColor: "#ffff",
                    borderColor: "#8B5CF6",
                    borderWidth: 3,
                    radius: 4,
                  },
                },
                drawTime: "afterDatasetsDraw",
              },
            },
          },
        };

        // Set canvas width to parent container width
        chart.width = chart.parentNode.clientWidth;

        const myChart = new Chart(ctx_bids, config);
      });
    </script>
    <script>
      const mapMaker = ({ selector, background, mapColor }) => {
        const markers = [
          {
            name: "Brazil",
            coords: [-14.2400732, -53.1805017],
            style: { fill: "#EF4444" },
          },
          {
            name: "Canada",
            coords: [56.0, -96.0],
            style: { fill: "#22C55E" },
          },
          {
            name: "France",
            coords: [46.71109, 1.7191036],
            style: { fill: "#2563EB" },
          },
          {
            name: "Bangladesh",
            coords: [23.6943117, 90.344352],
            style: { fill: "  #475569" },
          },
        ];
        const map = new jsVectorMap({
          map: "world",
          selector: selector,
          backgroundColor: background ? background : "#F8FAFC",
          markerStyle: {
            initial: {
              fill: "#8247FF",
              r: 6,
            },
          },
          markersSelectable: true,
          showTooltip: false,
          markers: markers,
          // series: series,
          draggable: true,
          zoomButtons: false,
          zoomOnScroll: false,
          zoomOnScrollSpeed: 3,
          zoomMax: 12,
          zoomMin: 1,
          zoomAnimate: true,
          showTooltip: true,
          zoomStep: 1.5,
          bindTouchEvents: true,
          regionLabelStyle: {
            initial: {
              fill: "#35373e",
              fontWeight: 500,
              fontSize: 13,
              backgroundColor: "#FFFFF",
              border: "#35373e",
            },
            // Same properties in initial object can be overwritten in hover and selected states.
            hover: {},
            selected: {},
            selectedHover: {},
          },
          regionStyle: {
            // Region style
            initial: {
              fill: mapColor ? mapColor : "#DBEAFE",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
              strokeOpacity: 1,
            },
            hover: {
              fillOpacity: 0.7,
              cursor: "pointer",
              // fill: "#8247FF",
            },
            selected: {
              fill: "#000",
            },
            selectedHover: {},
          },
          visualizeData: {
            scale: ["#8247FF", "#EAB308", "#8247FF", "#F97316"],
          },
        });
      };
      mapMaker({ selector: "#world-map" });
    </script>
    <script src="assets/js/main.js"></script>
  </body>
</html>
