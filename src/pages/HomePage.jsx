import React from "react";
import CategorySection from "../components/CategorySection";
import RecentArticles from "../components/RecentArticles";
import AuthorCard from "../components/AuthorCard";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-[240px]">
        <CategorySection />
        <div className="flex">
          <RecentArticles />
          <div>
            <AuthorCard />
            <Destination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;