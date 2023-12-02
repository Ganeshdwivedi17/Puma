import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="font-[FFDINforPumaW07-Regular-latin] md:mt-20">
      <div className="flex footer FootHead justify-between bg-[#181818] text-white gap-10 px-5 py-5">
        <div className="sm:m-0 md:block lg:m-5 Foothead">
          <h1 className="uppercase text-lg font-bold mb-3">Supports</h1>
          <div className="foot-part">
            <p className="text-sm text-slate-200 font-light pb-2">Contact us</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Promotions & Sale
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Track Order
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Privacy Policy
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Terms & Conditions
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Cookie Settings
            </p>
          </div>
        </div>
        <div className="sm:m-0 md:block sm:mt-0 lg:m-5 Foothead lg:mt-12">
          <div className=" foot-part">
            <p className="text-sm text-slate-200 font-light pb-2">FAQs</p>
            <p className="text-sm text-slate-200 font-light pb-2">My Account</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Return Policy
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Tech Glossary
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Initiate Return
            </p>
          </div>
        </div>
        <div className="sm:m-0 md:block lg:m-5 Foothead">
          <h1 className="uppercase text-lg font-bold mb-3">About</h1>
          <div className=" foot-part">
            <p className="text-sm text-slate-200 font-light pb-2">Company</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Corporate News
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Press Center
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">Investors</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Sustainability
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">Careers</p>
            <p className="text-sm text-slate-200 font-light pb-2">
              Store Finder
            </p>
            <p className="text-sm text-slate-200 font-light pb-2">PUMA DNA</p>
          </div>
        </div>
        <div className="sm:m-0 lg:m-5 Foothead bg-[#181818]">
          <h1 className="uppercase text-lg font-bold mb-3">Stay up to Date</h1>
          <div className="flex flex-row ">
            <div className="my-4 mx-4">
              <YouTubeIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <TwitterIcon fontSize="medium" />
            </div>
            <div  className="my-4 mx-4">
              <PinterestIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <InstagramIcon fontSize="medium" />
            </div>
            <div className="my-4 mx-4">
              <FacebookIcon fontSize="medium" />
            </div>
          </div>
          <h1 className="uppercase text-lg font-bold mb-3">Explore</h1>
          <div className="flex flex-row">
            <div>
              <div>
                <img
                  alt="Footer-img"
                  className="w-[60px] mr-5 rounded-md border-white border-solid border-[1px]"
                  src="https://appcheck.mobilsicher.de/wp-content/uploads/2020/10/xhPDUD0i5MEguK1BBDge4CuOTsE7HdJjqol4OQqE5ecOih7akpcqF2LM3b8XE4tyPA.png"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  alt="Footer-img"
                  className="w-[60px] rounded-md border-white border-solid border-[1px]"
                  src="https://www.networthspot.com/ezoimgfmt/yt3.ggpht.com/ytc/AMLnZu-958nknFKv2iFaKl2vciXTS-vRF_8EA4XZagDCQQ=s768-c-k-c0x00ffffff-no-rj?ezimgfmt=ngcb6/notWebP"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-full" />
      <div className="bg-[#131313] flex flex-row justify-between">
        <div className="py-4 px-3">
          <img
            alt="visa-icon"
            className="w-[250px]"
            src="https://www.iugg2023berlin.org/wp-content/uploads/2022/10/GOWNO.png"
          />
        </div>
        <div className="py-4 px-3">
          <img
            alt="Country-icon"
            className="w-12"
            src="data:image/png;base64,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"
          />
        </div>
      </div>
    </div>
  ); //
}

export default Footer;
