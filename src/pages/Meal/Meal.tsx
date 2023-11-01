import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DetailPage, {FullRecipe} from "../../components/DetailPage/DetailPage";
import ServiceContainer from "../../services/ServiceContainer";


export default function Meal() {
    const id: string = "" + useParams().id;
    const mealService = ServiceContainer.mealService;
    const [meal, setMeal] = useState<FullRecipe>();
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        async function fetchMealsById() {
            const mealData = await mealService.getFullRecipeById(id);
            setMeal(mealData);
            setLoading(false);
        }

        fetchMealsById();

    }, [id, mealService]);

    if(loading)
    {
        // Afficher un message de chargement tant que les données sont en cours de récupération
        return (
            <section className="main">
                <div>Chargement en cours...</div>;
            </section>
        );
    }

    if (!meal) {
        // Gérer le cas où aucune donnée n'est trouvée pour cet ID
        return (
            <section className="main">
                <div>Aucune recette trouvée pour cet ID.</div>
            </section>
        );
    }


// Les données sont prêtes, affichez-les
    return (
        <section className="main">
            <DetailPage id={meal.id}
                        name={meal.name}
                        instruction={meal.instruction}
                        area={meal.area}
                        category={meal.category}
                        thumbnailUrl={meal.thumbnailUrl}
                        youtubeRecipe={meal.youtubeRecipe}
                        tags={meal.tags}
                        source={meal.source}
                        ingredients={meal.ingredients}
            ></DetailPage>
        </section>
    );
}
