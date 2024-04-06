import { useEffect, useState } from "react";
import data from "./data"
import Cookies from 'js-cookie';
import Logo from "./assets/logo.png"
import Avatar from "./assets/avatar.jpg"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [votes, setVotes] = useState({});

  useEffect(() => {
    const currentIndexFromCookie = Cookies.get("currentIndex");
    if (currentIndexFromCookie !== undefined) {
      setCurrentIndex(parseInt(currentIndexFromCookie));
    }
  }, []);

  const handleClick = (vote) => {
    if (currentIndex < data.length) {
      setCurrentIndex(currentIndex + 1);
      const updatedVotes = { ...votes, [currentIndex]: vote };
      setVotes(updatedVotes);
      Cookies.set("currentIndex", currentIndex + 1);
      Cookies.set("votes", JSON.stringify(updatedVotes));
    }
  }

  const jokeContent = () => {
    if (currentIndex < data.length) {
      return (
        <>
          {data[currentIndex].content}
        </>
      );
    } else if (currentIndex === data.length) {
      return (
        <span className=" flex justify-center">That&apos;s all the jokes for today! Come back another day!</span>
      );
    }
  };
  const lastIndex = currentIndex === data.length

  return (
    <div>
      <header className="shadow-header z-50 relative">
        <div className="w-[80%] lg:w-[70%] mx-auto h-20  flex justify-between items-center">
          <div className="h-14 w-14">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex font-Poppins  items-center">
            <div className="text-[0.8rem] text-right">
              <div className="text-gray-500 italic">Handicrafted by</div>
              <div>Jim HLS</div>
            </div>
            <div className="h-12 w-12 bg-slate-400 rounded-full ml-4">
              <img className="h-full w-full  object-right rounded-full" src={Avatar} alt="avatar" />
            </div>

          </div>
        </div>
      </header>
      <section className="bg-[#29B363] text-white text-center py-7 lg:py-[4.3rem] font-Poppins z-10 relative  tracking-wide">
        <h1 className="text-[1.1rem] lg:text-[1.7rem] font-medium ">A joke a day keeps the doctor away</h1>
        <p className="text-[0.6rem] mt-2">If you joke wrong way, your teeth have to pay. (Serious)</p>
      </section>
      <section className="w-4/5 lg:w-2/3 text-[0.98rem] mx-auto lg:px-8 py-11 text-[#5e5e5e]">
        {jokeContent()}
      </section>
      <hr className=" w-[48%] mx-auto" />
      <div className=" mt-10 mb-20 flex justify-center space-x-6 font-Poppins text-white text-[0.98rem] ">
        <span onClick={() => handleClick("like")} className={`${lastIndex ? "bg-gray-200  cursor-not-allowed" : "bg-[#2C7EDB] cursor-pointer "} px-4 lg:px-0 py-2 lg:w-52 whitespace-nowrap flex justify-center shadow-btn`}>This is Funny!</span>
        <span onClick={() => handleClick("dislike")} className={`${lastIndex ? "bg-gray-200  cursor-not-allowed" : "bg-[#29B365] cursor-pointer "} px-4  lg:px-0 py-2 lg:w-52 whitespace-nowrap flex justify-center shadow-btn`}>This is not funny.</span>
      </div>
      <hr />
      <footer className="py-7 text-center text-[0.7rem]">
        <div className="text-[#858585]">This website is created as part of HLsolutions program. The materials contained on this website are provided for general<br></br> infomation only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and <br></br> accepts no liability for any loss or damage which may arise from reliance on the infomation contained on this site.</div>
        <p className="text-[#5e5e5e] mt-5">Copyright 2021 HLS</p>
      </footer>
    </div>
  )
}

export default App;
