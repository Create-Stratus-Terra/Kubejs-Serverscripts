// priority: 0

console.info('Adding Custom Items')

StartupEvents.registry('item', event => {
    //register new items here
    //event.create('example_item').displayName('Example Item')
    event.create('steel_ingot').displayName('Steel Ingot')
})

StartupEvents.registry('block', event => {
    //Register new block here
    //event.create('example_block').material('wood').hardness(1.0).displayName('Example block)
})