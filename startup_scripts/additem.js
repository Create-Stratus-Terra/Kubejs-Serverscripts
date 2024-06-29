// priority: 0

console.info('Adding Custom Items')

StartupEvents.registry('item', event => {
    //register new items here
    //event.create('example_item').displayName('Example Item')
    
    event.create('steel_ingot').displayName('Steel Ingot')
    event.create('bronze_ingot').displayName('Bronze Ingot')
})

StartupEvents.registry('block', event => {
    //Register new block here
    //event.create('example_block').material('wood').hardness(1.0).displayName('Example block)
 main

    event.create('bronze_block').displayName('Bronze Block')
    event.create('steel_block').displayName('Steel Block')
    
=======
    event.create('bronze_block').displayName('Bronze Block')
    event.create('steel_block').displayName('Steel Block')

})