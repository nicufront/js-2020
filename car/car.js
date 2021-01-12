let dacia = {
    make: "Dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    consumption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,
    paint: function(color) {
        this.color = color
    },
    move(distance) {
        consumption = this.averageConsumtion * distance / 100
        if (consumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()
        } else {
            this.batteryCharge -= consumption
            this.mileage += distance
        }
    },
    
    recharge() {
        this.batteryCharge = this.batteryCapacity
    },
    
    distanceToEmpty() {
        return 100 * this.batteryCharge / this.averageConsumption / this.averageConsumption
    }
   
}
  
let ferrari = {
    make: "Ferrari",
    model: "Dino",
    color: "rosu",
    year: 1978,
    mileage: 525737,
    maxSpeed: 180,
    paint: function (color) {
        this.color = color
    }
}
dacia.paint("galben")
dacia.move(100)
console.log(dacia)
console.log(ferrari)

