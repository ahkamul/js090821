// Class 045: Array Insert, Remove and Replace

// Ex. 1 

// var arr = [1,2,3,4,5,6,7,8]
// // arr[3] = 44
// arr.push(9)
// console.log(arr)

// Ex. 2 

// var arr = [1,2,3,4,5,6,7,8]
// arr.unshift(9)
// console.log(arr)

// Ex. 3

// var arr = [1,2,3,4,5,6,7,8] 

// // arr.splice(3,0,9)
// // arr.splice(3,0,9,10)
// // arr.splice(3,1,9)
// // arr.splice(3,2,9)
// // arr.splice(3,2,9,9,9,9,9,9,9,9)
// // arr[3] = undefined
// // arr.pop()
// // arr.push()
// arr.shift()
// console.log(arr)


// Class 046: JS Search value in Array 

// var arr = [4,7,2,6,8,4,55,9,89,27]

// //var find = 7
// //var find = 4
// //var find = 44
// //var find = 27
// var find = 89
// var isFound = false

// for (var i = 0; i < arr.length; i++){
//     if(arr[i] === find){
//         console.log('Data Found at Index ' + i)
//         isFound = true
//         break;
//     }
// }

// if (! isFound){
//     console.log('Data Not Found')
// }


// 047: Multidimensional Array 

var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 80]
]

// console.log(arr[0][0])
// console.log(arr[1][1])
// console.log(arr[2][3])

// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

for (var i = 0; i <arr.length; i ++){
    for (j = 0; j < arr[i].length; j ++){
        //console.log(arr[i][j])
        console.log('Element ' + i + ': ' + arr[i][j])
    }
}

