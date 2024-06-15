

export default function Reviews() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16 max-w-6xl mx-auto">
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Customer Reviews</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          See what our customers have to say about our products.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <p className="p-2 rounded-full">HD</p>
            <div className="grid gap-0.5">
              <h3 className="font-semibold">Hetvi Dodiya</h3>
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm leading-loose text-gray-500 dark:text-gray-400">
            <p>
            The bracelets and chains are very pretty and creative 💗 and Loved the packaging . Will definitely placing more orders 🫶🏻

            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <p className="p-2 rounded-full">CM</p>
            <div className="grid gap-0.5">
              <h3 className="font-semibold">Maithili Chudasama</h3>
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm leading-loose text-gray-500 dark:text-gray-400">
            <p>
            Your service and packaging are lovely, and I appreciate the great work you do. The handmade earrings you were made for me are wonderful, and the crochet case you were crafted is beautiful. I am thrilled to receive these handmade items from you. Great work, KCreations! 


            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function StarIcon(props :any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
