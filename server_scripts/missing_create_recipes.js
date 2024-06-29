/* 
 * This script is used to add missing recipes to the server.
 * Specifically Recipes for the Create mod.
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    console.log('[KubeJS] Modifying Recipes');
    // Cast iron Boiler
    event.stonecutting('4x design_decor:cast_iron_boiler', '#createbigcannons:cast_iron_block')
    event.stonecutting('1x design_decor:cast_iron_boiler_large', '#createbigcannons:cast_iron_block')
    // Industrial Iron Boiler
    event.stonecutting('4x design_decor:industrial_iron_boiler', '#create:industrial_iron_block')
    //bronze
main
    event.recipes.create.mixing('kubejs:bronze_ingot', '2x create:brass_ingot', 'create:zinc').heated()
    event.recipes.create.mixing('kubejs:bronze_ingot', 'minecraft:copper', 'create:zinc').heated()
    event.recipes.create.pressing(['kubejs:bronze_block', Item.of('kubejs:bronze_ingot').withChance(50)], '7x kubejs:bronze_ingot')
    event.shapeless(
      Item.of('kubejs:bronze_ingot', 9), // arg 1: output
      [
        'kubejs:bronze_block',
      ]
    )
    event.shaped('kubejs:bronze_block', [
    'AAA', 
    'AAA',
    'AAA'  
  ], {
    A: 'kubejs:bronze_ingot' 
  }
)
  //steel

})