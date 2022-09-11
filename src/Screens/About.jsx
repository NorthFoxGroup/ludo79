import React from "react";
import Banner from "../Assets/bg/about.webp";

const About = () => {
  return (
    <>
      <img
        src={Banner}
        alt=""
        className="h-80 w-screen block object-cover shadow-lg"
      />
      <div className="px-40 py-10">
        <div className="my-10 text-slate-500">
          <p className="font-medium text-sm">
            KhelBro is a real-money gaming product owned and operated by Gazick
            Private Limited ("KhelBro" or "We" or "Us" or "Our").
          </p>
          <p className="text-lg font-medium my-5 text-black">
            Our Business & Products
          </p>
          <p className="my-5">
            We are an HTML5 game-publishing company and our mission is to make
            accessing games fast and easy by removing the friction of
            app-installs.
          </p>
          <p className="my-5">
            KhelBro is a skill-based real-money gaming platform accessible only
            for our users in India. It is accessible on https://www.khelbro.com.
            On KhelBro, users can compete for real cash in Tournaments and
            Battles. They can encash their winnings via popular options such as
            Paytm Wallet, Amazon Pay, Bank Transfer, Mobile Recharges etc.
          </p>
          <p className="text-lg font-medium my-5 text-black">Our Games</p>
          <p className="my-5">
            KhelBro has a wide-variety of high-quality, premium HTML5 games. Our
            games are especially compressed and optimised to work on low-end
            devices, uncommon browsers, and patchy internet speeds.
          </p>
          <p className="my-5">
            We have games across several popular categories: Arcade, Action,
            Adventure, Sports & Racing, Strategy, Puzzle & Logic. We also have a
            strong portfolio of multiplayer games such as Ludo, Chess, 8 Ball
            Pool, Carrom, Tic Tac Toe, Archery, Quiz, Chinese Checkers and more!
            Some of our popular titles are: Escape Run, Bubble Wipeout, Tower
            Twist, Cricket Gunda, Ludo With Friends. If you have any suggestions
            around new games that we should add or if you are a game developer
            yourself and want to work with us, don't hesitate to drop in a line
            at info@khelbro.com!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
