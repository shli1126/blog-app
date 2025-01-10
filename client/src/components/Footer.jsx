import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";

export default function FooteCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="">
        <div className="">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 ">
                <div className="px-2 py-1  text-4xl font-bold font-serif tracking-widest text-gray-800">
                  Photo blog
                </div>
              </span>
            </Link>
          </div>
          <div className="grid gird-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  test link
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
