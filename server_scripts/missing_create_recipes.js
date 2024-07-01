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

    //making bronze
    event.recipes.create.mixing('2x kubejs:bronze_ingot', '2x create:brass_ingot', 'create:zinc').heated()
    //pressing bronze block back to ingots
    event.recipes.create.pressing(['kubejs:bronze_block', Item.of('kubejs:bronze_ingot').withChance(50)], '8x kubejs:bronze_ingot')
    //block from ingot
    event.shapeless(
      Item.of('kubejs:bronze_ingot', 9), [
        'kubejs:bronze_block',
      ])
    //9 ingot to 1 block
    event.shaped('kubejs:bronze_block', [
    'AAA', 
    'AAA',
    'AAA'  
  ], {
    A: 'kubejs:bronze_ingot' 
  })
  //steel

  //pressing steel block back to ingots
   event.recipes.create.pressing(['kubejs:unpolished_steel_block', Item.of('kubejs:unpolished_steel_ingot').withChance(50)], '8x kubejs:unpolished_steel_ingot')
  
   //block from ingot
   event.shaped('kubejs:unpolished_steel_block', [
     'AAA', 
     'AAA',
     'AAA'  
   ], {
     A: 'kubejs:unpolished_steel_ingot' 
   })

   //polish unpolished block/item
   ServerEvents.recipes(event => {
    event.recipes.create.sandpaper_polishing('#createbigcannons:nethersteel_ingot', 'kubejs:unpolished_steel_block')
   })
   ServerEvents.recipes(event => {
    event.recipes.create.sandpaper_polishing('#createbigcannons:nethersteel_ingot', 'kubejs:unpolished_steel_ingot')
   })

   //block from ingot
   event.shaped('kubejs:unfired_steel_block', [
     'AAA', 
     'AAA',
     'AAA'  
    ], {
     A: 'kubejs:unfired_steel_ingot' 
   })
   //9 ingot to 1 block
   event.shapeless('9x unfired_steel_ingot', [
     'unfired_steel_block',
   ])
})