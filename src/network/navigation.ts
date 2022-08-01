import { recipeList } from "./dummyReponse"

export const getAlphabetNavOptions = recipeList
.map( recipe => recipe.recipe_name.charAt(recipe.recipe_name.search(/\S/)))
.filter((item, pos, self) => self.indexOf(item) === pos)
.sort()