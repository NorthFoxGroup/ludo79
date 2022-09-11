import React from "react";
import BG from "../Assets/bg/game_dashboard.webp";

const GameDashboard = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen absolute top-0 z-10 w-screen">
        <img
          src={BG}
          className="w-screen h-screen block object-cover absolute -z-20"
          alt=""
        />
        <div className="bg-white w-[700px] h-[700px]">
          <div className="relative h-full flex justify-center items-center">
            <div className="main border h-[140px] w-[140px] relative">
              <div class="w-0 h-0 border-r-[70px] border-t-transparent border-t-[70px] border-t-green-500 border-l-[70px] border-b-transparent absolute top-0"></div>

              <div class="w-0 h-0 border-r-[70px] border-t-transparent border-b-[70px] border-b-blue-500 border-l-[70px] border-b-transparent absolute bottom-0"></div>

              <div class="w-0 h-0 border-t-[70px] border-t-transparent border-l-[70px] border-l-red-500 border-b-[70px] border-b-transparent absolute left-0"></div>

              <div class="w-0 h-0 border-t-[70px] border-t-transparent border-r-[70px] border-r-yellow-500 border-b-[70px] border-b-transparent absolute right-0"></div>
            </div>

            <div className="absolute top-0 left-0 bg-red-500 w-[280px] h-[280px] p-[50px]">
              <div className="bg-white rounded-sm h-full gap-5 flex justify-center items-center">
                <div className="flex flex-col gap-5">
                  <div className="bg-red-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-red-500 h-14 w-14 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="bg-red-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-red-500 h-14 w-14 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Green Grid */}
            <div className="absolute top-0 w-[140px] border h-[280px] grid grid-cols-3">
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-green-500"></div>
              <div className="border border-slate-600 bg-green-500"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-green-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-green-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-green-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-green-500"></div>
              <div className="border border-slate-600 bg-white"></div>
            </div>

            {/* Red Grid */}
            <div className="absolute left-0 h-[140px] border w-[280px] grid grid-cols-6">
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-red-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-red-500"></div>
              <div className="border border-slate-600 bg-red-500"></div>

              <div className="border border-slate-600 bg-red-500"></div>
              <div className="border border-slate-600 bg-red-500"></div>
              <div className="border border-slate-600 bg-red-500"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
            </div>

            {/* Green Grid */}
            <div className="absolute right-0 h-[140px] border w-[280px] grid grid-cols-6">
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-yellow-500"></div>
              <div className="border border-slate-600 bg-yellow-500"></div>
              <div className="border border-slate-600 bg-yellow-500"></div>

              <div className="border border-slate-600 bg-yellow-500"></div>
              <div className="border border-slate-600 bg-yellow-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-yellow-500"></div>
              <div className="border border-slate-600 bg-white"></div>
            </div>

            {/* Blue Grid */}
            <div className="absolute bottom-0 w-[140px] border h-[280px] grid grid-cols-3">
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-blue-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-blue-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-blue-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-blue-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-blue-500"></div>
              <div className="border border-slate-600 bg-blue-500"></div>
              <div className="border border-slate-600 bg-white"></div>

              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
              <div className="border border-slate-600 bg-white"></div>
            </div>

            <div className="absolute top-0 right-0 bg-green-500 w-[280px] h-[280px] p-[50px]">
              <div className="bg-white rounded-sm h-full gap-5 flex justify-center items-center">
                <div className="flex flex-col gap-5">
                  <div className="bg-green-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-green-500 h-14 w-14 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="bg-green-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-green-500 h-14 w-14 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-blue-500 w-[280px] h-[280px] p-[50px]">
              <div className="bg-white rounded-sm h-full gap-5 flex justify-center items-center">
                <div className="flex flex-col gap-5">
                  <div className="bg-blue-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-blue-500 h-14 w-14 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="bg-blue-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-blue-500 h-14 w-14 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-yellow-500 w-[280px] h-[280px] p-[50px]">
              <div className="bg-white rounded-sm h-full gap-5 flex justify-center items-center">
                <div className="flex flex-col gap-5">
                  <div className="bg-yellow-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-yellow-500 h-14 w-14 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="bg-yellow-500 h-14 w-14 rounded-full"></div>
                  <div className="bg-yellow-500 h-14 w-14 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDashboard;
