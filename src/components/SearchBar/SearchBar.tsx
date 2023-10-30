import React, { useEffect, useState } from "react";
import fallbackImg from "../../assets/img-not-found.png";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import IRecipeService from "../../services/IRecipeService";
import ServiceContainer from "../../services/ServiceContainer";

import "./style.css";

type SearchBarProps = {
    receiveMeals: (meals: any) => void;
    img: string;
  };


const SearchBar: React.FC<SearchBarProps> = ({ receiveMeals ,img }) => {
    const mealService: IRecipeService = ServiceContainer.mealService;
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<PreviewRecipeDTO[]>([]);
    const [imgSrc, setImgSrc] = useState(img);
    
    const _handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter') {
          console.log('do validate');
        }
        //need to fix enter key search
      }

    return (
        <form>
            <input
                type="search"
                placeholder="Search here"
                value={searchInput}
                onChange={(s) => setSearchInput(s.target.value)}
                onKeyDown={_handleKeyDown}
                 />
            <button type="button" onClick={() => receiveMeals(searchInput)}>
                <img
                    src={imgSrc ? imgSrc : fallbackImg}
                    onError={() => setImgSrc(fallbackImg)}
                    className="magnifier-img"
                ></img>
            </button>
        </form >
    )
}


export default SearchBar;
export type { SearchBarProps };
