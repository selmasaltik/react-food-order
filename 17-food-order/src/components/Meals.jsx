import MealItem from "./MealItem.jsx";
import ErrorPage from "./Error.jsx";
import useHttp from "../hooks/useHttp.js";

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading, 
        error 
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading) {
        return <p className="center">Fetching meals...</p>;
    }

    if(error) {
        return <ErrorPage title="Failed to fetch meals" message={error} />;
    }

    // if(!data) {
    //     return <p className="center">No meals found.</p>;
    // }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}