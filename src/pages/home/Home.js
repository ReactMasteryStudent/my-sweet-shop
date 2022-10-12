import React from "react";
import {useReducer} from 'react';
import OverviewCarousel from "../../components/overview-carousel/OverviewCarousel.js";
import PopularProduct from "../../components/popular-products/PopularProduct.jsx";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Header from "../../components/header";
import Panier from "../../components/panier.js";
import PanierContext from "../../context/contextPanier.js";
import reducer from "../../context/panierReducer.js";
import Reviews from "../../components/Reviews.js";
import Footer from "../../components/Footer.js";


const DUMMY_IMAGES = [
  "https://assets.rpgsite.net/images/images/000/117/434/original/Harvestella_Strawberry-Shortcake.png",
  "https://www.clipartmax.com/png/full/249-2498606_strawberry-pie-food-anime-cake-illustration-strawberry-cake-pixiv.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c46896f-4488-4abd-ad5c-8412f6871598/dbjjkcl-633b34c6-f690-45f9-8e26-fd1d3fd5caa9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjNDY4OTZmLTQ0ODgtNGFiZC1hZDVjLTg0MTJmNjg3MTU5OFwvZGJqamtjbC02MzNiMzRjNi1mNjkwLTQ1ZjktOGUyNi1mZDFkM2ZkNWNhYTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zuu8Ntm6NDr5q__vS2CFdbcH-gRkwI6s-MPBe656h-E",
  "https://www.ediblecakeimage.com/pub/media/wysiwyg/Cake3.png",
  "https://cdn131.picsart.com/322349642117211.png",
];

const initalState = []


export default function Home() {

  const [state, dispatch] = useReducer(reducer, initalState)

  
  return (    
      <div className="home">
      <PanierContext.Provider value={[state, dispatch]}>
        <Header />
        <OverviewCarousel imagesArray={DUMMY_IMAGES} />
        <Section1 />
        <Section2 />
        <PopularProduct />  
        <Reviews />
        <Footer />      
        <Panier />
      </PanierContext.Provider>
      </div>
    

  );
}
