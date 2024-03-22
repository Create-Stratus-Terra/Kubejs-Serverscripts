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
});