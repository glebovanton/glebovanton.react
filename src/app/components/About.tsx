import Link from 'next/link';

export default function About() {
  return (
      <section
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          id="about"
          style={{opacity: 1, transform: 'none'}}
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">About me</h2>
        <p className="mb-3">
          I used to work as a sound engineer. But one way or another, I came across
          programming, though I considered it too difficult to start WEB developing.
          I created my first simple landing pages in
          <span className="font-medium">WordPress</span> and native
          <span className="font-medium">HTML</span> +
          <span className="font-medium">CSS</span>. But then I came up with the idea of
          making the websites more interactive. And started learning
          <span className="font-medium">JS</span> with
          <span className="font-medium">Jquery</span>. It seemed to be just another way
          of self-development until I realized that I was really into programming.
          So, my hobby has become my new profession. And I really hope to become a
          good full-stack developer. Now I have started to study
          <span className="underline"> BE</span> technologies.
          <span className="font-medium"> Node.js</span> +
          <span className="font-medium"> Nest.js</span> +
          <span className="font-medium"> AWS</span>.
          <Link className="inline-block bg-gray-100 rounded-full inset-0 px-3 dark:bg-gray-800" href={{ pathname: '/about' }}> More
            details </Link>
        </p>
      </section>
  )
}
