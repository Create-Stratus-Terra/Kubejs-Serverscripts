/* 
 * This Script is used to remove items from the server.
 * Specifically Items that are too OP or unbalanced.
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    console.log('[KubeJS] Removing OP Recipes');
    // Remove the Dimensional Carver recipe from Alex's Mobs
    event.remove({ output: 'alexmobs:dimensional_carver' });
});