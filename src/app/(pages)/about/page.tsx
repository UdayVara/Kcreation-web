/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gLOlSSIo2lU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Reviews from "@/components/Custom/Review";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <SyringeIcon className="h-6 w-6" />
          <span className="sr-only">Handmade Creations</span>
        </Link>
        {/* <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Shop
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav> */}
      {/* </header> */}
      <main className="flex-1">
        <section className="w-full my-4">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Handmade Creations
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover our passion for crafting unique and high-quality
                    handmade  crochet, and Jewellery.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/shop"
                  >
                    Shop Now
                  </Link>
                  {/* <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link> */}
                </div>
              </div>
              <img
                alt="Handmade Products"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="450"
                src="/Images/about.jpg"
                width="650"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Our Handmade Creations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify dark:text-gray-400">
                  At just 19 years old, I embarked on a remarkable journey of
                  creativity and entrepreneurship. What began as a simple hobby,
                  creating crochet products and handmade jewelry for my own
                  pleasure, soon blossomed into something much greater. As
                  friends, family, and even strangers began to admire and
                  inquire about my creations, I realized there was a genuine
                  demand for the unique pieces I crafted with love and
                  dedication. <br /><br />Driven by the desire to share my passion with
                  others and provide them with high-quality goods that wouldn’t
                  break the bank, I made the bold decision to turn my hobby into
                  a business venture. Thus, KCreation was born from Rajkot,
                  Gujarat, started in 2023. <br /><br />Every stitch, every bead, every
                  detail is a testament to the countless hours of practice,
                  experimentation, and refinement that have shaped my craft. But
                  beyond the technical skill lies something far more profound –
                  a story of growth, resilience, and unwavering determination.
                  <br /><br />
                  With each handmade item, I pour not only my creativity and
                  expertise but also a piece of my heart. KCreation is more than
                  just a brand; it’s a reflection of my journey, my values, and
                  my commitment to offering products that bring joy and beauty
                  into people’s lives. Whether it’s a cozy crochet tank top or a
                  dazzling beaded bracelet, each piece tells a story – a story
                  of passion, dedication, and the simple pleasure of creating
                  something beautiful from scratch.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div>
                <img
                  alt="Embroidery"
                  className="mx-auto w-full h-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/Images/category4.png"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Embroidery</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover our exquisite handmade embroidery pieces, each
                    meticulously crafted with intricate designs and vibrant
                    colors.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/shop"
                  >
                    Explore Embroidery
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Crochet"
                  className="mx-auto w-full h-auto  overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/Images/category2.png"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Crochet</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover our cozy and charming handmade crochet pieces,
                    crafted with the utmost care and attention to detail.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/shop"
                  >
                    Explore Crochet
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Bracelets"
                  className="mx-auto w-full h-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/Images/category7.png"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Bracelets</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover our unique and stylish handmade bracelets, each one
                    a reflection of our commitment to quality and craftsmanship.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/shop"
                  >
                    Explore Bracelets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Commitment to Sustainability
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Handmade Creations, we are committed to sustainable and
                  ethical production. We source our materials locally, support
                  small-scale artisans, and ensure that our entire supply chain
                  aligns with our values of environmental responsibility and
                  social impact.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-slate-200 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Reviews />
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Handmade Creations. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  );
}

function SyringeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  );
}
