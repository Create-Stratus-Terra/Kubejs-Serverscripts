//onEvent('recipes', event => {
ServerEvents.recipes(event => {
    event.shapeless('create_central_kitchen:miners_cooking_guide', [
        'miners_delight:cave_carrot'
        'farmersdelight:canvas'
        'create:sturdy_sheet'
])})
