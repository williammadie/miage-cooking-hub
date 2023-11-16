# 🥦🍔🍚 React Scholar Project: Culinary Hub 🍹🍸🥂

Welcome to the documentation for our delightful Culinary Hub built with *React* and *TypeScript*. 🍲🍹

This project was made in one month by four students.

## Project Overview

Our team of four first-year master's students in MIAGE proudly presents a comprehensive platform for culinary enthusiasts. This web application provides users with the ability to explore a vast collection of recipes, including culinary dishes, cocktails, and detailed nutrition information.

## Showcase 

### Homepage

![homepage](/docs/homepage.png)

### Search Results for Cocktails

![cocktail_page](/docs/cocktail_page.png)

### Recipe: Detailed Page

![detailed_page](/docs/detailed_page.png)

### Nutrition Page

![nutrition_page](/docs/nutrition_page.png)

## Features

### Culinary Recipes 🍽
Browse through a diverse range of culinary recipes, carefully curated to cater to various tastes and preferences.

### Cocktail Recipes 🍹
Discover and shake up your favorite cocktails with our extensive collection of cocktail recipes.

### Nutrition Information 🧁
Stay informed about the nutritional content of different products from various brands, including [Nutriscore ratings](https://www.santepubliquefrance.fr/determinants-de-sante/nutrition-et-activite-physique/articles/nutri-score) and the [Nova classification](https://fr.openfoodfacts.org/nova).

## Technologies Used 🤖

- **React**: The foundation of our project, facilitating the creation of interactive and dynamic user interfaces.
- **TypeScript**: Enhancing code quality and providing a more robust development experience.
- **Components**: Leveraging React's component-based architecture for modular and reusable code.
- **Hooks**: Utilizing essential React hooks such as `useState`, `useEffect`, `useNavigate`, `useLocation`, and custom hooks for efficient state management and navigation.

## External APIs ⚙️

- [TheMealDB](https://www.themealdb.com/)
- [TheCocktail](https://www.thecocktaildb.com/)
- [OpenFood Facts](https://fr.openfoodfacts.org/data)

## Team Members 🏈

- [William Madié](https://github.com/williammadie)
- [Fabien Rondan](https://github.com/BladeBuru)
- [Simon Crépin](https://github.com/OrieAYA)
- [Yewon Kang](https://github.com/YewonKan)

## Project Structure 🏗

```plaintext
culinary-hub/
.
├── jest.config.js
├── package.json
├── README.md
├── src
│   ├── api
│   │   └── datadb.ts
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   ├── fried-egg.png
│   │   ├── goBackIcon.png
│   │   ├── img-not-found.png
│   │   ├── magnifying-glass.png
│   │   ├── sample-recipe.jpg
│   │   ├── search.png
│   │   └── yt-logo.png
│   ├── components
│   │   ├── Category
│   │   │   ├── Category.stories.tsx
│   │   │   ├── Category.tsx
│   │   │   └── style.css
│   │   ├── DetailRecipeCard
│   │   │   ├── DetailRecipeCard.stories.tsx
│   │   │   ├── DetailRecipeCard.tsx
│   │   │   └── style.css
│   │   ├── Navbar
│   │   │   ├── Navbar.stories.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── style.css
│   │   ├── Novascore
│   │   │   ├── Novascore.stories.tsx
│   │   │   ├── Novascore.tsx
│   │   │   └── style.css
│   │   ├── Nutriscore
│   │   ├── NutritionInfoCard
│   │   ├── PreviewRecipeCard
│   │   ├── RandomRecipeCard
│   │   ├── SearchBar
│   │   ├── SwitchDakMode
│   │   ├── SwitchSetting
│   │   └── YouTubeVideo
│   ├── constants
│   │   ├── RecipeType.ts
│   │   └── RouteBuilder.ts
│   ├── context
│   │   └── DarkModeContext.tsx
│   ├── dto
│   │   ├── FullRecipeDTO.ts
│   │   └── PreviewRecipeDTO.ts
│   ├── errors
│   │   └── NoResultFoundError.ts
│   ├── hooks
│   │   ├── cocktails
│   │   │   ├── useCocktailById.ts
│   │   │   ├── useCocktailsByName.ts
│   │   │   ├── useCocktailsByTextQuery.ts
│   │   │   └── useRandomCocktail.ts
│   │   ├── meals
│   │   │   ├── useMealById.ts
│   │   │   ├── useMealsByName.ts
│   │   │   ├── useMealsByTextQuery.ts
│   │   │   └── useRandomMeal.ts
│   │   └── nutrition
│   │       └── useNutritionInfo.ts
│   ├── index.css
│   ├── index.tsx
│   ├── mappers
│   │   ├── FullDrinkMapper.ts
│   │   ├── FullMealMapper.ts
│   │   ├── NutritionInformationMappper.ts
│   │   ├── PreviewDrinkMapper.ts
│   │   └── PreviewMealMapper.ts
│   └── pages
│       ├── Cocktail
│       │   ├── Cocktail.tsx
│       │   └── style.css
│       ├── Cocktails
│       │   ├── Cocktails.tsx
│       │   └── style.css
│       ├── Home
│       │   ├── Home.tsx
│       │   └── style.css
│       ├── Meal
│       ├── Meals
│       ├── Nutrition
│       ├── NutritionResults
│       └── SearchRecipes
├── tsconfig.json
└── yarn.lock
```

## License 📖

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for exploring our Culinary Hub!


## Quickstart 🚀

In the project directory, you can run:

### `yarn`

Run this command for installing project related dependencies. Do it going further.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.