/* 
 * This script is used to add missing recipes to the server.
 * Specifically Recipes for the Create mod.
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    console.log('[KubeJS] Modifying Recipes');
    // Cast iron Boiler
    event.stonecutting('4x design_decor:cast_iron_boiler', 'createbigcannons:cast_iron_block')
    
    event.stonecutting('1x design_decor:cast_iron_boiler_large', 'createbigcannons:cast_iron_block')
    // Industrial Iron Boiler
    event.stonecutting('4x design_decor:industrial_iron_boiler', 'create:industrial_iron_block')



   event.shapeless('1x createdeco:andesite_sheet', [
     'create_dd:andesite_sheet',
   ])

   event.shapeless('1x create_dd:andesite_sheet', [
     'createdeco:andesite_sheet',
   ])

   event.shapeless('1x createdeco:zinc_sheet', [
     'createaddition:zinc_sheet',
   ])

   event.shapeless('1x createaddition:zinc_sheet', [
     'createdeco:zinc_sheet',
   ])
  
    event.shapeless('2x createdeco:zinc_sheet', [
     '2x create_dd:zinc_sheet',
   ])
    
   event.shaped('kubejs:steel_block', [
     ' A ', 
     ' B ',
     'CCC'  
    ], {
    A: 'minecraft:stick',
    B: 'create:brass_sheet',
    C: 'minecraft:redstone'
   })
})
