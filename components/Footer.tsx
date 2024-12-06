import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-primaryBG text-white">
      {/* Links Section */}
      <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-y-0 text-sm">
        <Link href="/contact" className="hover:text-darkYellow">
          Contact Us
        </Link>
        <Link href="/FAQ" className="hover:text-darkYellow">
          FAQs
        </Link>
        <Link href="/about" className="hover:text-darkYellow">
          About Us
        </Link>
        <Link href="/tos" className="hover:text-darkYellow">
          Terms of Service
        </Link>
        <Link href="/privacy" className="hover:text-darkYellow">
          Privacy Policy
        </Link>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-4 text-center text-sm">
        <p className="mb-2">
          Āgāzi uses publicly available APIs provided by publishers to fetch and
          display game-related statistics. Āgāzi is not affiliated with, endorsed
          by, or in partnership with these companies.
        </p>
        <p className="mb-2">
          If you are a trademark owner and believe your rights have been
          infringed upon, please contact us at <a href="mailto:contact@agazi.com" className="hover:text-darkYellow">contact@agazi.com</a>.
        </p>
        <p className="mt-4">© 2024 Agazi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
