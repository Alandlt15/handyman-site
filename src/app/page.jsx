import {
  CheckCircle,
  ShieldCheck,
  DraftingCompass,
  Handshake,
} from "lucide-react";

const highlights = [
  "Licensed apprentice electrician",
  "Custom shed construction",
  "Exterior wall replacement",
  "Full plumbing & carpentry services",
  "Treat every home like my own",
];

const hours = [
  "Monday - Saturday:",
  "7:00am - 5:00pm",
  "Sunday & Holidays:",
  "by request",
  "Telephone",
  "(956) 111-1111",
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
          <h1 className="font-serif text-4xl text-black md:text-6xl md:text-wrap">
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
            <p className="text-gray-700 md:text-2xl">Years of Experience</p>
            <hr className="border-t-2 border-sky-700 w-28 mx-auto my-6" />
            <h1 className="font-serif text-black text-4xl md:text-7xl">50+</h1>
            <p className="text-gray-700 md:text-2xl">Projects Completed</p>
            <hr className="border-t-2 border-sky-700 w-28 mx-auto my-6" />
            <h1 className="font-serif text-black text-4xl md:text-7xl">100%</h1>
            <p className="text-gray-700 md:text-2xl">Satisfaction Guarantee</p>
          </article>
        </div>
      </article>

      <article className="px-8 pt-18 text-black">
        <article className="md:justify-items-center">
          <h1 className="text-4xl text-sky-700 font-serif md:text-6xl">
            A Family-Run <span className="text-black">Business</span>
          </h1>
          <p className="text-gray-700 py-4 md:text-2xl">
            Built on trust, hardwork, and the Laredo Community.
          </p>
        </article>

        <article className="md:flex md:flex-row md:text-2xl md:pt-8 justify-center">
          <article className="justify-items-center text-center py-4 md:text-wrap md:w-125 md:px-10">
            <ShieldCheck className="h-20 w-20 md:h-40 md:w-40" />
            <h1 className="font-serif text-2xl text-sky-700 pt-4 md:text-3xl">
              Integrity
            </h1>
            <p className="text-gray-700 md:pt-2">
              As a family business, our reputation is our livelihood. We provide
              fair, transparent pricing and treat every repair as if we were
              working on our own home.
            </p>
          </article>

          <article className="justify-items-center text-center py-4 md:text-wrap md:w-125 md:px-10">
            <DraftingCompass className="h-20 w-20 md:h-40 md:w-40" />
            <h1 className="font-serif text-2xl text-sky-700 pt-4 md:text-3xl">
              Craftsmanship
            </h1>
            <p className="text-gray-700 md:pt-2">
              We don’t believe in quick fixes. From licensed electrical work to
              custom carpentry, we combine professional expertise with the
              attention to detail only a family-run shop provides.
            </p>
          </article>

          <article className="justify-items-center text-center py-4 md:text-wrap md:w-125 md:px-10">
            <Handshake className="h-20 w-20 md:h-40 md:w-40" />
            <h1 className="font-serif text-2xl text-sky-700 pt-4 md:text-3xl">
              Commitment
            </h1>
            <p className="text-gray-700 md:pt-2">
              We’re more than just your contractors; we’re your neighbors. We
              are committed to improving our community, one project and one
              satisfied family at a time.
            </p>
          </article>
        </article>

        <article className="pt-18 md:flex md:flex-row md:justify-evenly md:pr-25">
          <img
            src="/laredo-map.png"
            alt="Service Area Map of Laredo, Texas"
            className="h-100 w-100 md:h-150 md:w-130"
          />

          <article className="text-center pt-8 text-gray-700 md:content-center md:justify-center md:pt-0">
            <h1 className="text-4xl pt-2 md:text-6xl">Business Hours</h1>
            <h2 className="text-3xl pt-2 md:text-4xl">Laredo</h2>
            {hours.map((item) => (
              <p className="text-3xl pt-2 md:text-4xl" key={item}>
                {item}
              </p>
            ))}
          </article>
        </article>
      </article>
    </main>
  );
}
