//onEvent('client.generate_assets', event => {
ItemEvents.tooltip(event => {
    event.addAdvanced(['alexsmobs:shattered_dimensional_carver'], (item, advanced, text) => {
            text.add(1, [
                Text.of('Stupid OP.').darkPurple()
            ])
    })
    
    event.addAdvanced(['alexsmobs:shattered_dimensional_carver'], (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [
                Text.of('Hold ').gold(), 
                Text.of('[Shift] ').yellow(), 
                Text.of('to see description.').gold()
            ])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('FROM A LITERAL GOD BRO WTH.').gold(),
            ])
        }
    })

    
})