/*
JavaScript Array Methods

Array length     
Array toString()    !!
Array pop()
Array push()
Array shift()
Array unshift()
Array join()        !!
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()

// */







// 1]Array toString()
// 2]Array join()


// const newArr = ["maths", "science", "history", "sport"]
// console.log(newArr.toString())


// const newArr = ["maths", "science", "history", "sport"]
// console.log(newArr.join(" * "))



// Popping and Pushing

// const headphones = ["oneplus", "airpods", "boat", "samsung", ["oneplus", "apples", ["samsung", "vivo"]]]

// const flatHeadphonesArray = headphones.flat(2)

// console.log(flatHeadphonesArray);



// Shifting Elements    1]shift()     2]unshift()

// shift() and pop() are kind of similar, only difference is that shift works on first index whereas pop()
// works on last index

//unshift() and push() are kind of similar, only difference is that

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8]

// const ar=["one", "two", "three", "four", "five", "six"]

// ar.unshift(newArr)

// console.log(ar)






/*
JavaScript Array delete()

Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.

*/








// Merging (Concatenating) Arrays


// const students=["abhishek","aish","mayuri","saurabh"]

// const newStudents=["vihas"]


// const anotherArr = students.concat("yadnyesh")

// console.log(anotherArr)



//Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.







//splice() and  slice()

//slice()

// const pen = ["cuboid", "parker", "cello", "tangonet"]

// const newPenArr=pen.slice(2)

// console.log(newPenArr)


//splice()

// const pen = ["cuboid", "parker", "cello", "tangonet"]

// const newArr = pen.splice(0, 2,"trimax","montex","pen")

// console.log(pen)

// console.log(pen)

