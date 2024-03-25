//onEvent('recipes', event => {
ServerEvents.recipes(event => {
    event.shapeless('create_central_kitchen:miners_cooking_guide', [
        'minecraft:book'
        'minecraft:iron_ingot'
])})