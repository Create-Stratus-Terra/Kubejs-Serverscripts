// priority: 0

console.info('Adding Custom Items')

StartupEvents.registry('item', event => {
    //register new items here
    //event.create('example_item').displayName('Example Item')
    
    //steel
    event.create('unpolished_steel_ingot').displayName('Unpolished Steel Ingot')
    event.create('unfired_steel_ingot').displayName('Unfired Steel Ingot')

    //bronze
    event.create('bronze_ingot').displayName('Bronze Ingot')

})

StartupEvents.registry('block', event => {
    //Register new block here
    //event.create('example_block').material('wood').hardness(1.0).displayName('Example block)
 main

    //steel
    event.create('unpolished_steel_block').displayName('Unpolished Steel Block')
    event.create('unfired_steel_block').displayName('Unfired Steel Block')

    //bronze
    event.create('bronze_block').displayName('Bronze Block')

})