function newImage(address, left, bottom){
    let item = document.createElement('img')
    item.src = address
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
        
}

function newItem(address, left, bottom){
    let newestItem = newImage(address, left, bottom)

newestItem.addEventListener('dblclick', function() {
    newestItem.remove()
})
}
for(let index = 0; index < 20; index++){
    newImage('./assets/sky.png', 500)
}


newImage('./assets/greenCharacter.gif', 100, 100)
newImage('./assets/pineTree.png', 450, 200)
newImage('./assets/tree.png', 200, 300)
newImage('./assets/pillar.png', 350, 100)
newImage('./assets/crate.png', 150, 200)
newImage('./assets/well.png', 500, 425)
newImage('./assets/red-character.gif', 250, 250)



newItem('./assets/sheild.png', 165, 185)
newItem('./assets/staff.png', 600, 100)
newItem('./assets/sword.png', 500, 405)
newItem('./assets/rock.png', 400, 400)








