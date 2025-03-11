import Navbar from "@/components/Header";
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
        <Navbar activeTab={-1}/>
        <div className="relative flex flex-col items-center text-lightYellow px-8 py-10 gap-8 md:px-18 xl:px-40 md:gap-16">
        
        <h1 className="text-9xl md:text-[300px] select-none pt-10 text-center animate-pulse">
            404</h1>
        <p className="text-3xl font-bold capitalize">You have discovered a secret place</p>
        <p className="text-2xl font-medium break-words">Unfortunately, this is only a 404 page. You may have
            mistyped the address, or the page has been moved to another URL.</p>
        <div className="flex flex-col justify-between w-full gap-8 md:flex-row md:gap-32 xl:px-16">
            <Link href="/"
                className="flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 bg-secondaryBG rounded shadow-lg md:w-fit hover:bg-blue-500 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl ">
                <span className="rotate-180 material-symbols-outlined">{" > "}</span>
                Go back to Previous Page
            </Link>
            <Link href="/"
                className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 border-green-500 font-semibold bg-secondaryBG hover:text-black hover:bg-green-500 p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl ">
                <span className="material-symbols-outlined">home</span>
                Go back to Home Page
            </Link>
        </div>
    </div>
    </div>
  );
};
