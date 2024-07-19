//1.Array Creation and Initialization

let arr = [1,2,3,4,5]
console.log(arr);

//2.Array Manipulation

// Add elements
function arrayManipulation(arr){

arr.push(6);
arr.unshift(0);
console.log(arr)

// Remove elements
arr.pop();
arr.shift();
console.log(arr);
}
arrayManipulation(arr);

//3.Array Searching

function arraySearching(arr1){
   console.log(arr1.indexOf(5));
   console.log(arr1.lastIndexOf(5));
   console.log(arr1.includes(3,2));
   let answer = arr1.find((element) => element>3);
   console.log(answer);

}
let arr1=[2,3,4,5,6,7,5,8];
arraySearching(arr1);

//4.Array filter

function arrayfilter(arr2)
{
    let ans = arr2.filter((element)=>element>3)
    console.log(ans);
    
}
let arr2 =[1,2,3,4,5,6]
arrayfilter(arr2)

//5.Array Sorting

let arr3=[2,5,6,8,90,1];
console.log(arr3.sort());
console.log(arr3.reverse());


// 6.Array MAximum & Minimum

function maximum(arr3)
{
    console.log(Math.max(...arr3));
}
function minimum(arr3)
{
    console.log(Math.min(...arr3));
}
maximum(arr3)
minimum(arr3)

// 7.Array spliting and joining

let arr4=["Irshad","Raja"];
let word=arr4.join()
console.log(word);

let name="Irshad Raja";
// let word1=arr5.split(" ");
console.log(name.split(' '));

// 8.Checking array element

function checkelement(arr6,target)
{
    let flag=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr6[i]===target)
        {
            console.log("Element is present")
            flag=1;
            break;}

    }
    if(flag==0)
    console.log("Element not present")
}

let arr6 =[1,2,3,4,5];
checkelement(arr6,9);


//9.Array merging

let list1 = ["Hari","Sudhan","hesventh"]
let list2 = ["kabil","gokul"]
function arrmerge(list1,list2)
{
console.log(list1.concat(list2))
}
arrmerge(list1,list2)

//10. Array spreading

function arrspread(list1,list2) 
{
 console.log(...list1 ,...list2);
}
arrspread(list1,list2)

// 11.array  remove duplication

let arrlist1=[20,20,40,50,60]
let newarr=[...new Set(arrlist1) ]
console.log(newarr)

//12.Array slice

function arrslice(arrlist1)
{
    console.log(arrlist1.slice(0,3));
}
arrslice(arrlist1)

//13.Array Rotation

let array1=[10,2,13,4,5,6]
function arrRot(array1)
{
    console.log(array1.reverse());
}
arrRot(array1)

//14.Array flattening

let array2=[1,[10,3],4,5,[56,78]]
let array3=array2.flat(0)
let array4=array2.flat(2)
console.log(array3);
console.log(array4);

// 15.Array- index of first occurences


function firstOcuurences(array7,target)
{
    
    for(let i=0;i<array7.length;i++)
    {
        if(array7[i]===target)
        {
            console.log(target+" index of first occurences is "+i)
           return;
        }

    console.log("target not found");
}
}
let array7=[20,34,56,78,90]
firstOcuurences(array7,78)








