import Link from "next/link";

export default function TermsCondition() {
  return (
    <div className="bg-white pt-10 pb-5 text-gray-900 dark:bg-gray-950 dark:text-gray-50 min-h-screen">
      <header className=" pt-5 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold">Terms and Conditions</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment & Cancellation Policy</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <ul className="flex flex-col gap-2 text-lg pl-8 list-disc ">
                <li>When the order is confirmed half payment you have to pay and half will be after order received</li>
                
                <li>No refund if the order is already accepted or dispatched </li>
                <li>For any queries on cancellations, please chat with us at <a className="text-primary hover:underline transition-all hover:underline-offset-4 duration-200" href="mailto://kcreationartist@gmail.com">kcreationartist@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Delivery</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <ul className="flex flex-col gap-2 text-lg pl-8 list-disc ">
                <li>Delivery across India</li>
                <li>Delivery fee will apply</li>
                <li>All orders will be delivered by KCreation </li>
                <li>Delivery per order Normally 4 to 5 Working Days</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Returns and Refunds</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <p className="leading-8">
                No return, no exchange, no refund At KCreation, we take pride in
                the quality and craftmanship of our handmade crochet products
                and jewelry. We do not offer returns, exchange or refund, but we
                are committed to ensuring your satisfaction with every purchase.
                If you have any questions or concerns, please don’t hesitate to
                contact us.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Privacy and Security</h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                We take the privacy and security of your personal information
                seriously. Our privacy policy outlines how we collect, use, and
                protect your data.
              </p>
              <p>
                All transactions on our website are secured using
                industry-standard encryption technology to protect your payment
                information.
              </p>
              <p>
                We do not share or sell your personal information to third
                parties without your consent, except as required by law.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="bg-purple-500 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <p>© 2024 Your Company</p>
          <nav className="flex gap-4">
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Refund Policy
            </Link>
            <Link className="hover:underline" href="#">
              Shipping Policy
            </Link>
          </nav>
        </div>
      </footer> */}
    </div>
  );
}
