type Recipe = {
    recipe_name: string,
    ref_link?: URL,
    ingredient_groups: {
            group_name: string,
            ingredients: SuperIngredient[]
    }[],
    method: {
            name: string,
            content: string
    }[]
}

type Ingredient = {
    ingredient_name: string,
    measurement?: number,
    units?: string,
    notes?: string
}

type SuperIngredient = Ingredient & {
    alternatives?: [
        Ingredient
    ]
}

export type { Recipe, Ingredient }
