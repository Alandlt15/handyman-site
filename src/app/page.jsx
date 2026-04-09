import Image from "next/image";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Licensed apprentice electrician",
  "Custom shed construction",
  "Exterior wall replacement",
  "Full plumbing & carpentry services",
  "Treat every home like my own",
];

export default function Home() {
  return (
    <main className="flex flex-col text-white">
      <article
        className="bg-sky-50 flex flex-col pt-24 text-center md:pt-26        
           min-w-0 md:flex-1 md:flex-row"
      >
        <article className="px-6 md:flex-col md:flex md:items-center md:justify-center md:px-20">
          <h1 className="font-serif text-sky-700 text-4xl pt-7 pb-6 md:pt-0 md:text-wrap md:text-7xl">
            Your Local Craftsman, <span className="text-black">Done Right</span>
          </h1>
          <h2 className="text-gray-700 text-1xl pb-6 md:text-wrap md:text-3xl">
            From repairs and installations to woodworking, plumbing, and
            electrical — <span className="text-sky-700">Ray</span> handles it
            all with care and professionalism. Proudly serving the Laredo
            community, one job at a time.
          </h2>
        </article>

        <img
          src="/holding-blueprint.png"
          alt="hand holding blueprint with finished wall in background"
          className="h-full w-full md:w-1/2 md:shrink-0"
        />
      </article>

      <article className="px-8 md:flex md:flex-row md:px-20 pt-18 bg-sky-50">
        <article className="flex flex-col min-w-0 md:w-250">
          <h1 className="font-serif text-4xl text-black text-new york md:text-6xl md:text-wrap">
            Honest Work, <span className="text-sky-700">Fair Prices</span>
          </h1>
          <p className="text-gray-700 py-4 md:text-2xl md:text-wrap md:pr-4">
            With hands-on experience across carpentry, plubming, and electrical
            work, I bring a well-rounded skill set to every project. Whether
            it's building a custom shed from scratch or replacing the exterior
            walls on a home, I approach every job with the same attention to
            detail and pride in craftsmanship.
          </p>
          <p className="text-gray-700 py-4 md:text-2xl md:text-wrap md:pr-4">
            I'm not a big company with big overhead - I'm your neighbor who
            happens to be really good with tools. That means better prices,
            better communication, and better results.
          </p>
          <ul className="text-gray-700 py-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="text-sky-700 h-4.5 w-4.5 shrink-0 md:h-6 md:w-6" />{" "}
                <span className="py-1 md:text-2xl">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="pt-9 pb-9 bg-sky-50 md:pt-0 md:flex md:items-center md:w-250 md:pl-55">
          <article className="flex flex-col items-center gap-2 rounded-lg bg-sky-200 px-8 py-7 md:w-130 md:h-130 md:items-center md:justify-center">
            <h1 className="font-serif text-black text-4xl md:text-7xl">5+</h1>
            <p className="text-gray-700 md:text-lg">Years of Experience</p>
            <hr className="border-t-2 border-sky-700 w-28 mx-auto my-6" />
            <h1 className="font-serif text-black text-4xl md:text-7xl">50+</h1>
            <p className="text-gray-700 md:text-lg">Projects Completed</p>
            <hr className="border-t-2 border-sky-700 w-28 mx-auto my-6" />
            <h1 className="font-serif text-black text-4xl md:text-7xl">100%</h1>
            <p className="text-gray-700 md:text-lg">Satisfaction Guarantee</p>
          </article>
        </div>
      </article>
    </main>
  );
}
