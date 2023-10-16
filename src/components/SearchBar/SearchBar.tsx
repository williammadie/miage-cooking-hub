import React, { useState } from "react";
import fallbackImg from "../../assets/img-not-found.png";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import IRecipeService from "../../services/IRecipeService";
import ServiceContainer from "../../services/ServiceContainer";

import "./style.css";

type SearchBarProps = {
    img: string;
}


const SearchBar: React.FC<SearchBarProps> = ({ img }) => {
    const mealService: IRecipeService = ServiceContainer.mealService;
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<PreviewRecipeDTO[]>([]);
    const [imgSrc, setImgSrc] = useState(img);

    const search = async (_input: string) => {
        try{            
            const result = await mealService.getRecipesByName(_input);
            setSearchResults(result);
        }catch(error){
            console.error("Error:", error);
        }
    };

    return (
        <form>
            <input
                type="search"
                placeholder="Search here"
                value={searchInput}
                onChange={(s) => setSearchInput(s.target.value.toLowerCase())} />
            <button onClick={() => search(searchInput)}>
                {/* <ul>
                    {searchResults.map((result) => (
                        <li>{result.name}</li>
                    ))} //search suggestion
                </ul> */}
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
