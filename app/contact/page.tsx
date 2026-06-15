import ( useState, useEffect ) from "react";
import Image from "next/image";

  useEffect(() => {
      // Attach event handlers here
      const handleClick = () => {
        // Handle click
         event.preventDefault();
         const formData = new FormData(event.currentTarget);
         const data = Object.fromEntries(formData.entries());
         console.log("Form Data:", data);
      };
  
      // Attach event listener
      document.addEventListener('click', handleClick);
  
      // Cleanup
      return () => {
        // Remove event listener on component unmount
        document.removeEventListener('click', handleClick);
      };
    }, []); // Empty dependency array ensures this effect runs only once on mount
  
export default function ContactUs() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center sm:text-left">
          Contact Us
        </h1>
        <p className="mt-3 text-2xl text-center sm:text-left">
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        <form onClick={handleClick} className="w-full mt-10">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@example.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
            <textarea id="message" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue 600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
          
      </form>
      </main>
    </div>
  );
}
