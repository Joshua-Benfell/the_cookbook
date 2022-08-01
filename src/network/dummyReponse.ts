import { Recipe } from "../types";

let recipeList: Recipe[] = [
    {
        recipe_name: "Spicy Peanut Soba Noodle Salad Recipe",
        ref_link: new URL("https://pinchofyum.com/spicy-peanut-soba-noodle-salad"),
        ingredient_groups: [
            {
                group_name: "Spicy Peanut Sauce",
                ingredients: [
                    {
                        ingredient_name: "peanut butter",
                        measurement: 5,
                        units: "tbsp"
                    },
                    {
                        ingredient_name: "water",
                        measurement: 5,
                        units: "tbsp"
                    },
                    {
                        ingredient_name: "soy sauce",
                        measurement: 5,
                        units: "tbsp",
                        alternatives: [
                            {
                                ingredient_name: "tamari",
                                notes: "for gluten free"
                            }
                        ]
                    },
                    {
                        ingredient_name: "sesame oil",
                        measurement: 2,
                        units: "tbsp",
                        notes: "optional &ndash for flavour"
                    },
                    {
                        ingredient_name: "lime",
                        measurement: 2,
                        units: "tbsp",
                        notes: "Juice of 1 Lime"
                    },
                    {
                        ingredient_name: "garlic",
                        measurement: 1,
                        units: "clove"
                    },
                    {
                        ingredient_name: "sriracha",
                        measurement: 0.25,
                        units: "cup",
                        notes: "or alternative chilli sauce, add to tolerance"
                    },
                    {
                        ingredient_name: "peanuts",
                        measurement: 0.5,
                        units: "cup"
                    }
                ]
            },
            {
                group_name: "Salad",
                ingredients: [
                    {
                        ingredient_name: "chicken breast",
                        measurement: 1,
                        units: "pound"
                    },
                    {
                        ingredient_name: "red bell pepper",
                        measurement: 1
                    },
                    {
                        ingredient_name: "purple cabbage",
                        measurement: 4,
                        units: "cup"
                    },
                    {
                        ingredient_name: "soba noodles",
                        measurement: 10,
                        units: "ounce"
                    },
                    {
                        ingredient_name: "cilantro",
                        notes: "use fresh and add to taste",
                        alternatives: [
                            {
                                ingredient_name: "basil"
                            }
                        ]
                    },
                    {
                        ingredient_name: "peanuts",
                        notes: "crush for topping"
                    }
                ]
            }
        ],
        method: [
            {
                name: "Spicy Peanut Sauce",
                content: "Puree sauce ingredients in a food processor or blender. Add the peanuts last so you can control how chunky it is (I like to leave it a little more on the chunky side)."
            },
            {
                name: "Chicken",
                content: "Cook the chicken in a skillet over medium high heat. Season with salt and pepper. When the chicken is cooked through, set aside until cool enough to handle and shred the meat."
            },
            {
                name: "Vegetables",
                content: "Chop the red pepper, cabbage, and cilantro to your desired size for the salad."
            },
            {
                name: "Noodles",
                content: "Cook the noodles according to package directions (usually just boiling for a few minutes)."
            },
            {
                name: "Assemble",
                content: "Toss everything together with enough dressing to generously coat everything. Serve hot or cold!"
            }
        ]
    },
    {
        recipe_name: "A recipe starting with A",
        ingredient_groups: [
            {
                group_name: "Watery Peanut Butter",
                ingredients: [
                    {
                        ingredient_name: "peanut butter",
                        measurement: 5,
                        units: "tbsp"
                    },
                    {
                        ingredient_name: "water",
                        measurement: 5,
                        units: "tbsp"
                    },
                ]
            }
        ],
        method: [
            {
                name: "Mix",
                content: "Add peanut butter to water and mix"
            }
        ]
    },
    {
        recipe_name: "CC recipe starting with C",
        ingredient_groups: [
            {
                group_name: "Watery Peanut Butter",
                ingredients: [
                    {
                        ingredient_name: "peanut butter",
                        measurement: 5,
                        units: "tbsp"
                    },
                    {
                        ingredient_name: "water",
                        measurement: 5,
                        units: "tbsp"
                    },
                ]
            }
        ],
        method: [
            {
                name: "Mix",
                content: "Add peanut butter to water and mix"
            }
        ]
    },
    {
        recipe_name: "Cecond recipe starting with C",
        ingredient_groups: [
            {
                group_name: "Watery Peanut Butter",
                ingredients: [
                    {
                        ingredient_name: "peanut butter",
                        measurement: 5,
                        units: "tbsp"
                    },
                    {
                        ingredient_name: "water",
                        measurement: 5,
                        units: "tbsp"
                    },
                ]
            }
        ],
        method: [
            {
                name: "Mix",
                content: "Add peanut butter to water and mix"
            }
        ]
    }
]

export { recipeList }