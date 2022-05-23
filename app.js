const allPackages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany' },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz' },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' }
]

let currentPackages = allPackages
let missingBox = null

function drawPackages() {
    let template = ''
    currentPackages.forEach(box => {
        template += `
        <div class="col-md-3 p-1 bg-success">
        <img class="img-fluid" src="download.jpg" alt="">
        <p class="text-center"><b>Heavy Box</b></p>
    </div>
    `

    })

    document.getElementById('packages').innerHTML = currentPackages
}

function heavyPackages() {
    let heavyPackages = currentPackages.filter(b => b.heavy == true)
    console.log(heavyPackage);
    currentPackages = heavyPackages

    drawPackages()
}

function priorityPackages() {
    let priorityPackages = currentPackages.filter(b => b.priority == true)
    console.log(priorityPackages);
    currentPackages = priorityPackages

    drawPackages()
}

function fragilePackages() {
    let fragilePackages = currentPackages.filter(b => b.fragile == true)
    console.log(fragilePackages);
    currentPackages = fragilePackages

    drawPackages()
}

function find(classification) {
    let filteredPackages = currentPackages.filter(b => b[classification] == missingPackage[classification])
    console.log(filteredPackages);
    currentPackages = filteredPackages

    drawPackages()

}

