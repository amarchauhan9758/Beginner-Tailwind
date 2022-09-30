import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import image from './assets/wysbBMS.png'
import './App.css'
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className="App  ">
       {/* <!-- ================================================================= -->
    <!-- <hearder/navigation ================================================================= -->
    <!-- ================================================================= --> */}
    <div  class="bg-gradient-to-br from-white to-gray-300 ">
      {/* <!-- left circle decoration --> */}

      <div class="absolute top-0 left-0 tranform translate-x-4 translate-y-4">
        <div
          class="absolute bg- bg-gradient-to-br from-teal-100 to-teal-200 lg:w-64 w-32 lg:h-64 h-32 rounded-full opacity-50"
        ></div>
        <div
          class="absolute ml-10 mt-10 bg- bg-gradient-to-br from-purple-100 to-purple-200 lg:w-64 w-32 lg:h-64 h-32 rounded-full opacity-50"
        ></div>
        <div
          class="absolute ml-24 t-10 bg- bg-gradient-to-br from-red-100 to-red-200 lg:w-64 w-32 lg:h-64 h-32 rounded-full opacity-50"
        ></div>
      </div>

      {/* <!-- right circle decoration --> */}

      <div
        class="hidden lg:block absolute top-0 right-0 mr-48 tranform -translate-x-64 translate-y-64"
      >
        <div
          class="absolute bg- bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"
        ></div>
        <div
          class="absolute ml-10 mt-10 bg- bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"
        ></div>
        <div
          class="absolute ml-24 t-10 bg- bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"
        ></div>
      </div>

      <div class="relative text-gray-600">
        <div class="container mx-auto flex justify-between px-6 lg:px-0 py-6">
          {/* <!-- left header section --> */}
          <div class="space-x-4 flex items-center text-gray-500">
            <a href="#" class="font-bold text-2xl text-teal-800"
              >Beginner Tailwind</a
            >
            <a href="#About" class="hidden lg:inline-block hover:text-gray-900"
              >About</a
            >
            <a href="#Learn" class="hidden lg:inline-block hover:text-gray-900"
              >What you'll Learn</a
            >
            <a href="#Pricing" class="hidden lg:inline-block hover:text-gray-900"
              >Pricing</a
            >
            <a href="#Faq" class="hidden lg:inline-block hover:text-gray-900"
              >FAQ</a
            >
          </div>

          {/* <!-- right header section --> */}
          <div class="flex items-center space-x-2">
            <a href="#" class="text-gray-500 hover:text-gray-900">Login</a>
            <a
              href="#"
              class="hidden lg:inline-block p-3 bg-purple-400 hover:bg-purple-500 text-purple-700 rounded shadow hover:shadow-xl transition duration-500"
              >Get the Course</a
            >
          </div>
        </div>
      </div>
{/* 
      <!-- ============================================================= -->
      <!-- <Hero ================================================================= -->
      <!-- ================================================================= --> */}

      <div class="relative">
        {/* <!-- purple bar o help with the section transition --> */}
        <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" class="absolute bottom-0 bg-purple-700 inset-x-0 h-64"></div>

        <div class="container mx-auto lg:px-0 py-24 px-6 text-center">
          <div class="items-center px-12 py-6">
            {/* <!-- heading --> */}
            <h1 class="lg:text-5xl text-3xl font-bold mb-6">
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500"
              >
                Beginner</span
              >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500"
                >Tailwind</span
              >
            </h1>

            {/* <!-- paragraph --> */}
            <p class="lg:text-xl font-semibold text-gray-500 mb-8">
              Making good looking design quickly. All without a single line of
              custom CSS.
            </p>
{/* 
            <!-- big button/call  to action --> */}
            <a
              href="#"
              class="lg:inline-block lg:mb-36 py-4 px-8 bg-gradient-to-br from-purple-400 to-purple-700 hover:to-purple-600 tracking-wide hover:shadow-2xl text-purple-100 rounded shadow-xl mt-10 transition duration-500"
            >
              Get the Course</a
            >
          </div>

          <div class="relative">
            {/* <!-- img --> */}
            <img
              src={image}
              alt="img"
              class="rounded shadow-2xl border-4 border-purple-400"
            />
{/* 
            <!-- teaser image info box --> */}
            <div
              class="lg:absolute lg:top-0 lg:right-5 lg:mt-0 mt-10 bg-yellow-100 lg:tranform lg:translate-x-4 lg:-translate-y-4 py-4 px-3 border-t-4 border-yellow-500 text-yellow-800 text-left rouded shadow-lg"
            >
              <p>
                <strong class="font-bold">
                  We'll create BeginnerTailwind.com
                </strong>
                <span class="opacity-60 font-semibold">
                  (its the site you're on now)
                </span>
              </p>
              <p>We'll do it all without a single line of custom CSS!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* 
    <!-- ============================================================= -->
    <!-- overview Section ================================================================= -->
    <!-- ================================================================= --> */}

    <div class="relative bg-purple-700 pt-11 pb-24">
      {/* <!-- gray border to help section --> */}

      <div class="absolute bottom-0 inset-x-0 h-64 bg-gray-300"></div>

      <div class="relative container mx-auto px-6 lg:px-0">
        <h2 class="mb-10 lg:text-6xl text-4xl font-bold text-purple-100">
          Writing CSS is tough stuff
        </h2>

        <div class="lg:flex lg:space-x-16">
          {/* <!-- left side paragraph --> */}
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-center"
            class="lg:w-2/3 bg-white p-5 lg:p-16 rounded shadow-2xl text-gray-800 text-lg leading-relaxed space-y-8"
          >
            <p class="">
              Tailwind makes writing CSS easier and lets us customize our
              designs faster than any other CSS framework. If you want a CSS
              framework that has pre-built components, then Tailwind may not be
              for you. If you want a CSS framework that lets you desing quickly
              and customize your size, then
              <strong class="font-bold text-teal-500">
                Tailwind is gonna be a lot of fun.</strong
              >
            </p>
            <p class="">
              After using Bulma to build
              <a href="http://Scotch.io" class="text-blue-500 hover:underline">
                Scotch.io</a
              >, my CSS files became littered with my own
              <code
                class="text-blue-500 inline-block bg-gray-200 text-xs font-mono"
              >
                !important
              </code>
              classes to override the framework's styles. Tailwind doesn't have
              the
              <code
                class="text-blue-400 inline-block bg-gray-200 text-xs font-mono"
              >
                !important
              </code>
              problem since all our elements are designed on the fly.
            </p>
            <p class="">
              <strong class="font-blod"> Important Note </strong> Tailwind lets
              us design quickly, but this doesn't mean that you don't need CSS
              knowledge however. To use Tailwind, you need to have a good
              understanding of CSS properties. In this course,<strong
                class="font-blod"
              >
                we will learn Tailwind and we'll also learn CSS concepts
              </strong>
              to create good looking designs.
              <strong class="font-blod">
                Tailwind is the ultimate CSS shorthand </strong
              >, but we still need to learn the CSS, which we'll do in this
              course.
            </p>
            <p class="italic text-3xl relative">
              <span
                class="absolute top-0 left-0 transfrom -translate-x-8 -translate-y-10 text-purple-400 text-8xl opacity-50"
                >"</span
              >
              This isn't just a Tailwind course. This is also a "learn how to
              design with CSS" course.
            </p>
            <p class="">
              The hardest things about learning Tailwind is memorizing the
              classes and also knowing which classes go well together. We'll be
              writing a lot of Tailwind in this course so that the repetition
              will help us commit Tailwind classes to memory
            </p>
          </div>
{/* 
          <!-- right column --> */}
          <div class="flex-grow p-10 text-lg italic space-y-4">
            <div class="p-10 bg-purple-800 rounded-lg text-purple-100">
              What class should I use?
            </div>
            <div class="p-10 bg-purple-800 rounded-lg text-purple-100">
              How do I make things look good?
            </div>
            <div class="p-10 bg-purple-800 rounded-lg text-purple-100">
              My design looks basic?
            </div>
            <div class="p-10 bg-purple-800 rounded-lg text-purple-100">
              How do I do reponsive
            </div>
            <div class="p-10 bg-purple-800 rounded-lg text-purple-100">
              My typography looks bad?
            </div>
          </div>
        </div>
      </div>
    </div>
{/* 
    <!-- ============================================================= -->
    <!-- About me Section ================================================================= -->
    <!-- ================================================================= --> */}

    <div  id="About" class="p-10 bg-gradient-to-br from-gray-200 to-gray-300">
      {/* <!-- heading --> */}
      <div
        class="container mx-auto lg:text-6xl text-4xl text-black text-center"
      >
        <h2 class="text-teal-900 mb-5 font-bold">
          Some Tailwind Videos I've Done
        </h2>
      </div>
{/* 
      <!-- paragraph --> */}
      <div>
        <p class="lg:text-xl text-gray-800 leading-loose mb-10">
          Hey there! My name is
          <a
            href="https://www.Amarsinghchauhan.com"
            class="text-blue-500 hover:underline"
            >Amar singh chauhan</a
          >
          and I founded a web dev tutorial site
          <a href="https://scotch.io/" class="text-blue-500 hover:underline"
            >Scotch.io</a
          >
          We were able to grow to 4M monthly pageviews and $300,000 yearly
          revenue. Scotch.io was acquired by
          <a
            href="https://www.digitalocean.com/"
            class="text-blue-500 hover:underline"
            >DigitalOcean</a
          >
          in November 2019. Nowadays I'm in search of the best ways to develop
          and design a business. Hope you enjoy this course and my other one
          <a
            href="https://makereactapps.com/"
            class="text-blue-500 hover:underline"
            >MakeReactApps.com</a
          >
        </p>
      </div>

      <div class="lg:flex lg:space-x-8 space-y-8 lg:space-y-0">
        <div   data-aos="zoom-out-left"
          class="lg:w-1/2 flex flex-col justify-between rounded border-2 border-gray-700"
        >
          <p class="p-8">
            {/* I have a Getting started with Tailwind article on<!-- --> */}
            <a
              href="https://scotch.io/tutorials/get-started-with-tailwind-css-in-15-minutes"
              class="text-blue-500 hover:underline"
              >scotch.io</a
            >
            {/* <!-- -->and a<!-- --> */}
            <a href="#" class="text-blue-500 hover:underline"
              >15 minute starter YouTube video</a
            >.
          </p>
          <iframe
            width="full"
            height="400"
            src="https://www.youtube.com/embed/QxyFXlBcNEM?start=7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div  data-aos="zoom-out-right"
          class="lg:w-1/2 flex flex-col justify-between rounded border-2 border-gray-700"
        >
          <p class="p-8">
            I did a Build Your 1st Tailwind Site for---
            <a
              href="https://www.youtube.com/user/TechGuyWeb"
              class="text-blue-500 hover:underline"
              >Traversy Media</a
            >
            {/* <!-- -->on YouTube also. */}
          </p>
          <iframe
            width="full"
            height="400"
            src="https://www.youtube.com/embed/3UHrj5e6EUU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>




    {/* <!-- ============================================================= -->
    <!-- <what you'll learn ================================================================= -->
    <!-- ================================================================= --> */}

    <div  id="Learn" class="py-32 bg-gray-300">
      <div class="container mx-auto px-6 lg:px-0">
        {/* <!-- heading --> */}
        <h2
          class="mb-16 lg:text-6xl text-4xl text-center font-bold text-green-800"
        >
          What You'll Learn In This Course
        </h2>

        {/* <!-- grid area of things --> */}

        <div class="lg:grid grid-cols-6 gap-10 space-y-10 lg:space-y-0">
          <div   data-aos="fade-right"
            
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">How to use Tailwind classes</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              We'll dive into the most important Tailwind classes and use them a
              TON. There are a lot of useful classes like spacing, backgrounds,
              borders, shadows, and typography. We'll type the Tailwind classes
              many times over to ensure that repeitition is our greatest
              learning tool..
            </p>
          </div>

          <div data-aos="fade-up"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">Make good looking designs</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              There's a certain process to designing with Tailwind that we'll
              take to make our designs look good. Some easy to remember rules
              are all it takes to get a good design. We'll also talk about ideas
              and action items to take a good design and make it great.
            </p>
          </div>

          <div    data-aos="fade-right"
          class="col-span-2 border-2 border-gray-700 rounded shadow-lg leading-loose"
          >
            <div 
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">
                Why Tailwind is different/better
              </h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              To be completely honest, I didn't like Tailwind at first. It felt
              like inline styles to me (and maybe still does). After using it
              more and more though, I've come to absolutely love it. I dread
              jumping into a project without Tailwind now.
            </p>
          </div>

          <div  data-aos="fade-left"
            class="col-span-3 border-2 border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">
                How to build this site (
                <span class="text-teal-500 italic">site-ception!</span> )
              </h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              The site you're on (BeginnerTailwind.com) is built with Tailwind
              and has 0 custom css.
            </p>
            <p class="p-4">
              You can take all of the code from this site and use it for your
              own landing pages or sites! All the code is available to you with
              course purchase.
            </p>
          </div>

          <div  data-aos="fade-down"
            class="col-span-3 border-2 border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">
                A fun and methodical design process
              </h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              I struggle with making things look good and don't consider myself
              a designer. What I try to do is have a formula for making things
              look good. I focus on design in this order: spacing, box
              properties, typography, fun element to pop. We'll talk about this
              all throughout the course.
            </p>
          </div>

          <div data-aos="fade-up"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div  
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">Creating common components</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              One of the first things we want to do when using Tailwind is to
              create components like cards, buttons, and forms. We'll build
              these out and see how Tailwind compares to CSS frameworks like
              Bootstrap.
            </p>
          </div>

          <div data-aos="fade-down"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">Shrinking bundle sizes</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              Tailwind comes with so many classes. It doesn't make sense to send
              all of those to our users' browsers. With PostCSS and PurgeCSS, we
              can shrink the amount of CSS we send to our users.
            </p>
          </div>

          <div data-aos="fade-right"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">Using Tailwind w/ React</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              Tailwind's benefits really shine when you pair it with a
              JavaScript library/framework. Extracting classes into components
              is the recommended way to keep Tailwind DRY (don't repeat
              yourself).
            </p>
          </div>

          <div data-aos="fade-left"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">How to customize Tailwind</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              Tailwind is easily configurable for our own projects using the
              tailwind.js config file. We'll explore changing out fonts, colors,
              sizes, and more so that our Tailwind setups are custom and
              tailored to our projects.
            </p>
          </div>

          <div data-aos="fade-down-right"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">Using Tailwind in VS Code</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              VS Code is my favorite editor and Tailwind works fantastically in
              it. There are some essential plugins and setup for using Tailwind
              in VS Code. We'll go over each and use VS Code heavily in this
              course.
            </p>
          </div>

          <div data-aos="fade-down-left"
            class="col-span-2 border border-gray-700 rounded shadow-lg leading-loose"
          >
            <div
              class="p-4 border-b items-center flex justify-between border-gray-700"
            >
              <h3 class="font-bold text-lg">Extending Tailwind</h3>

              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <p class="p-4">
              Learning Tailwind is just the beginning. There are some great
              tools like Tailwind Typography, Tailwind UI, Tailwind Builder, and
              more. We'll talk about some ways to extend Tailwind and ways we
              can go further.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ============================================================= -->
    <!-- what we'll build ================================================================= -->
    <!-- ================================================================= --> */}

    <div data-aos="zoom-in-down" class="py-18 bg-gray-300  text-gray-400 ">
      <div class="container mx-auto lg:px-0 px-6 font-normal  ">
        <div class="mb-8 text-center">
          <h3 class="lg:text-6xl text-4xl mb-5 font-bold text-gray-700">What we'll build in this course</h3>
          <p class=" text-lg text-gray-500 ">
            These components are things you'll have to create in every project.
          </p>
        </div>

        <div class=" py-18 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div class="flex rounded hover:scale-105 hover:duration-500 shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-red-500 rounded" >&#128514;</div>
            <div class="p-4" >Button</div>
          </div>

          <div class="flex rounded hover:scale-105 transform duration-500 shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-blue-500  rounded" >&#128512;</div>
            <div class="p-4" >Cards</div>
          </div>
 
          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-purple-500  rounded">&#128512;</div>
            <div class="p-4" >Footer</div>
          </div>

          <div class="flex rounded  hover:scale-105 transform duration-500 shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-yellow-500  rounded" >&#128536;</div>
            <div class="p-4" >Love</div>
          </div>


          
        </div>



        
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-green-500 rounded ">&#128514;</div>
            <div class="p-4" >Button</div>
          </div>

          <div class="flex rounded hover:scale-105 transform duration-500 shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-yellow-500  rounded ">&#128512;</div>
            <div class="p-4" >Cards</div>
          </div>
 
          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-red-500  rounded  " >	&#128512;</div>
            <div class="p-4" >Footer</div>
          </div>

          <div class="flex rounded hover:scale-105 transform duration-500 shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-purple-500  rounded" >&#128536;</div>
            <div class="p-4" >Love</div>
          </div>


          
        </div>

        <div class="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-purple-500 rounded " >	&#128514;</div>
            <div class="p-4" >Button</div>
          </div>

          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-blue-500  rounded  " >&#128512;</div>
            <div class="p-4" >Cards</div>
          </div>
 
          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-yellow-500  rounded  " >	&#128512;</div>
            <div class="p-4" >Footer</div>
          </div>

          <div class="flex rounded hover:scale-105 transform duration-500  shadow bg-white">
            <div class=" w-1/5 flex justify-center items-center text-3xl p-4 bg-green-500  rounded" >	&#128536;</div>
            <div class="p-4" >Love</div>
          </div>


          
        </div>


        
      </div>
    </div>

    {/* <!-- ============================================================= -->
    <!-- pricing ================================================================= -->
    <!-- ================================================================= --> */}


    <div  id="Pricing" class=" relative bg-blue-600 py-32 text-blue-200">
      
      <div class="absolute bg-gray-300 inset-x-0 top-0 h-48  ">
        
      </div>
      <div class="container mx-auto lg:px-0 flex flex-col lg:flex-row items-center space-x-4 px-6">

{/* 
          <!-- left box --> */}
              <div class=" order-2 lg:order-1  lg:w-1/3 lg:text-right text-center pt-12 text-xl space-y-2">

                <p> <strong class="font-bold text-white">Xy vides </strong> at a smooth pace</p>
                <p> <strong class="font-bold text-white">AB hours </strong> of learning + building</p>
                <p> <strong class="font-bold text-white">source code </strong> and Codepens</p>

              </div>


          {/* <!-- pricing box --> */}

           <div class=" order-1 lg:order-2 relative  w-full lg:w-1/3 bg-gray-300 p-8 border-8 text-gray-800 rounded shadow-2xl transform hover:scale-105 duration-500  border-purple-800  text-center space-y-8">
              
             {/* <!-- line section --> */}

             <div class="absolute top-0 inset-x-0 flex items-center justify-center  space-x-4 transform -translate-y-24  ">

                 <div class="bg-green-500 h-20 w-2 -rotate-45 origin-bottom rounded  mb-10"></div>
                 <div class="bg-red-500 h-20 w-2   rounded mb-10 "></div>
                 <div class="bg-yellow-500 h-20 w-2 rotate-45 origin-bottom  rounded mb-10 "></div>
                        


             </div>
            
            
            
            <h4 class="text-gray-600 text-sm">Start Tailwind <span class="italic">-ing</span> ! </h4>
              <div class="text-5xl text-purple-800  font-bold"> <span class="opacity-25" > $</span> 47</div>
              <a href="#" class="block p-3 bg-gradient-to-br from-yellow-600 to-orange-500 rounded hover:shadow-2xl shadow text-2xl transition-duration-500 " > Buy this course</a>
           </div>

          {/* <!-- right box --> */}

          <div class=" order-3  text-center lg:text-left lg:w-1/3  pt-12 text-xl space-y-2">
            <p> Use the code <strong class="text-white" >  in your own project</strong>  </p>
             <p> Access to Discord <strong class="text-white" >  for support</strong> </p>
             <p>  Lifrtime refund <strong class="text-white" >  guarantee </strong> </p>
          </div>

        </div>
    </div>

    {/* <!-- ============================================================= -->
    <!-- <faq ================================================================= -->
    <!-- ================================================================= --> */}

    <div id="Faq" class="py-32 bg-gray-800 text-gray-400 " >

    <div class="container mx-auto  lg:px-0 px-6" >
      
          <h3 class="text-center font-semibold text-4xl mb-10 " >Frequently Asked Questions</h3>

          
          
          <div  class="lg:grid grid-cols-2   border-gray-700   gap-8 lg:space-y-0 space-y-4 " >
            
            {/* <!-- Questions Section--> */}
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="border-2 border-gray-500 p-5 lg:p-10 rounded-lg" >
              
            <h3 class="font-semibold  text-gray-100  text-xl">Do I need to know CSS?</h3>
            <p>This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk through CSS concepts and why we're using certain classes all throughout the course so you don't need to be a CSS expert.</p>

            </div>


            {/* <!-- Questions Section--> */}
            <div  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="border-2 border-gray-500  p-5 lg:p-10 rounded-lg" >
              
              <h3 class="font-semibold  text-gray-100  text-xl">Is there course support?</h3>
              <p>You can email me directly at any time and we also have a Discord communitywhere you gain exclusive channel access.</p>
  
              </div>

{/* 
               <!-- Questions Section--> */}
            <div data-aos="fade-down-right" class="border-2 border-gray-500 p-5  lg:p-10 rounded-lg" >
              
              <h3 class="font-semibold  text-gray-100  text-xl">Can I use the code in my own projects?</h3>
              <p>Definitely! All of the code in this course is yours to use in your sites, apps, projects, whatever.</p>
              </div>


{/* 
               <!-- Questions Section--> */}
            <div data-aos="fade-down-left" class="border-2 border-gray-500  p-5 lg:p-10 rounded-lg" >
              
              <h3 class="font-semibold  text-gray-100  text-xl">What if I don't like it?
              </h3>
              <p>I offer a lifetime refund policy. If you ever feel like you didn't gain value from this course, then you can request a refund from your course dashboard (totally automated process, no questions asked).</p>
              </div>


{/* 
               <!-- Questions Section--> */}
            <div data-aos="fade-up-right" class="border-2 border-gray-500  p-5 lg:p-10 rounded-lg" >
              
              <h3 class="font-semibold  text-gray-100  text-xl">Do I need to know CSS?</h3>
              <p>This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk through CSS concepts and why we're using certain classes all throughout the course so you don't need to be a CSS expert.</p>
  
              </div>

               {/* <!-- Questions Section--> */}
            <div data-aos="fade-down-left" class="border-2 border-gray-500  p-5 lg:p-10 rounded-lg" >
              
              <h3 class="font-semibold  text-gray-100  text-xl">How do I login and view the course?</h3>
              <p>You can login at learn.better.dev. Use the login button in the top right.</p>
              </div>

          </div>


    </div>

    </div>
{/* 
    <!-- ============================================================= -->
    <!-- <footer =================================================================-->
    <!-- ================================================================= --> */}

    <div class="bg-gray-300  text-gray-400 py-24" > 
      <div class="container mx-auto py-20  mb-5 lg:p-0  lg:flex  lg:justify-between  gap-10 "  >


        {/* <!-- Upper section --> */}
         <div class="lg:flex lg:flex-col justify-center pr-5 ">

           <h3 class=" text-5xl mb-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 " > Get updates on this course</h3>
           <form action="" class="flex" >
   
             
             <input class=" lg:w-full  text-start p-3 border-2 border-r-0  outline-none border-gray-400 focus:border-purple-500 rounded " type="email" placeholder="Super@secret.com" />
             <button class="bg-purple-500 text-purple-100 rounded p-3 ">Subscribe</button>
           </form>
         </div>   
        

        <div class="lg:flex lg:space-x-10 lg:mb-5 px-2">
            
          <div class=" flex flex-col items-center space-y-5" >
          {/* <!-- company Section --> */}

            <h3 class=" font-bold tracking-widest text-gray-400 uppercase ">Company</h3>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">About</a>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Blog</a>
            <a class=" text-gray-700  hover:underline hover:text-gray-600" href="#">Careers</a>
          </div>

          <div class=" flex flex-col items-center space-y-5 ">
            {/* <!-- Product section --> */}
            <h3  class="font-bold tracking-widest text-gray-400 uppercase ">Product</h3>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Pricing</a>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Documentation</a>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Guides</a>           
          </div>
        

          <div class="flex flex-col items-center space-y-5">

            {/* <!-- Legal staff --> */}
            <h3 class=" font-bold text-gray-400 uppercase ">Legal staff</h3>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Terms</a>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Privacy</a>
            <a class=" text-gray-700 hover:underline hover:text-gray-800" href="#">Rules</a>
          </div>
          <div class="flex flex-col items-center space-y-5">

            {/* <!-- Legal staff --> */}
            <h3 class=" font-bold text-gray-400 uppercase ">Legal staff</h3>
              <a class="hover:underline text-gray-700 hover:text-gray-800" href="#">Twitter</a>
              <a class="hover:underline text-gray-700 hover:text-gray-800" href="#">Discord</a>
              <a class="hover:underline text-gray-700 hover:text-gray-800" href="#">Login</a>
            
          </div>
            

         </div>
      </div>
      



    </div>

        <div className='text-center  bg-gray-300 font-semibold text-purple-600'>
          <h1>&#169; 2022    <span className=' text-black shadow-lg text-lg font-thin italic duration-300 animate-ping' > Amar Signh Chauhan </span> </h1>
        </div>

    </div>
  )
}

export default App
