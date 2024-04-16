import React from "react";

function Page() {
  return (
    <>
      <div className="w-full bg-primary py-4 lg:px-64 md:px-24 px-4 text-white">
        Our ‘About Us’ page would like to thank you from the bottom of its heart
        for visiting. It doesn‘t get a lot of attention usually, as people are
        busy surfing other, ‘cooler’ pages. The fact that you voluntarily
        decided to come here means a lot. Honestly. *sniff sniff*
      </div>
      <div className="container">
        <div>
          <div className="grid grid-cols-12 m-8 gap-8">
            <div className="md:col-span-4 col-span-12">
              <img
                src="https://tss-static-images.gumlet.io/banners/about-whoweare.jpg"
                alt=""
              />
            </div>
            <div className="md:col-span-8 col-span-12">
              <h4 className="text-lg font-semibold">
                We are your favourite, online store.
              </h4>
              <h5 className="text-base">
                We create and curate stunning designs and print them on all
                sorts of equally stunning products- from t-shirts to phone
                covers to backpacks to boxers to mugs to socks to badges to pins
                to hoodies and many, many more! Our funky products are designed
                and printed specifically to spread happiness, right down to the
                bottom of your ‘soul’. A recent study by our internal,
                self-funded, fashion forward (and totally unbiased) team showed
                that if you buy from www.thesouledstore.com, it increases your
                lifespan by 7.5%. So if you’re looking for great products, with
                even greater deals and discounts, you’ve come to the right
                place!
              </h5>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 my-16">
            <div className="md:col-span-8 col-span-12">
              <h4 className="text-lg font-semibold">
                We are your favourite, online store.
              </h4>
              <h5 className="text-base">
                We create and curate stunning designs and print them on all
                sorts of equally stunning products- from t-shirts to phone
                covers to backpacks to boxers to mugs to socks to badges to pins
                to hoodies and many, many more! Our funky products are designed
                and printed specifically to spread happiness, right down to the
                bottom of your ‘soul’. A recent study by our internal,
                self-funded, fashion forward (and totally unbiased) team showed
                that if you buy from www.thesouledstore.com, it increases your
                lifespan by 7.5%. So if you’re looking for great products, with
                even greater deals and discounts, you’ve come to the right
                place!
              </h5>
            </div>
            <div className="md:col-span-4 col-span-12">
              <img
                src="https://tss-static-images.gumlet.io/banners/about-whoweare.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-primary py-8 rounded lg:px-64 md:px-24 px-4 text-white mb-8 ">
            <h4 className="text-center mb-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, libero.</h4>
        For starters, it makes for a great pun on the word ‘sold’, since we ‘sell' stuff. Smart, right? But more importantly, The Souled Store was born out of the idea of loving what you do - “following your soul”. Our philosophy is that life is short. Don’t spend it doing something you don’t like. There are too many Monday mornings, and you can’t go dreading every single one of them.

We, at The Souled Store, love what we do- designs, products, marketing, and everything in between. Our goal is to give everyone something they'll love, something they can use to express themselves, and, simply put, something to put a smile on their face. So, whether it's superheroes, TV shows, pop culture, music, sports, or quirky, funny stuff you're looking for, we have something for everyone. Because each person is a special snowflake (whether or not they believe it), and they deserve only the most insane merchandise available out there! So, if you relate to the feeling, and believe in following one's heart (soul), hop along on this wonderful journey of ours, and help us spread the love!
      </div>
      </div>
    </>
  );
}

export default Page;
