var nArray = require('./loop.js')
var mArray = require('./main.js')
Array.prototype.trasform = function (){
  var r2 = mArray(this[0].length)
  var r3 = nArray(this[0].length)
  this.forEach(function(v,i,arr){ 
    v.forEach(function(vo,io){
      r2[io][i] = vo
      r3[io][i] = vo
    })
  })

console.log(r2)
console.log(r3)
return r3
}

var input = [[1,2,3],[4,5,6]]
input.trasform()
