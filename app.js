//---------------------------------------------chapter17-20------------------------------------------------

// Question 1
// var Arr=[[],[],[]];

// Question 2
// var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Question 3
// for (var index = 1; index < 11; index++) {
//     console.log(index);
//      }

// Question 4
// var num=prompt("Enter Number");
// var len=prompt("Enter Length");
// for (var index = 1; index <= len; index++) {
//     console.log(num," * ",index," = ",num*index);
// }

// Question 5
// var fruits=["apple","banana","mango","orange","strawberry"]
// for (var index = 0; index < fruits.length; index++) {
//     console.log("Element at Index ",index," is ",fruits[index]);
// }

// Question 6
// console.log("Counting : \n");
// var Result="";
// for (var index = 1; index < 16; index++) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);
// Result="";
// console.log("Reversed Counting : \n");
// for (var index = 10; index > 0; index--) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);
// Result="";
// console.log("Even Counting : \n");
// for (var index = 0; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);
// Result="";
// console.log("Odd Counting : \n");
// for (var index = 0; index <= 20; index++) {
//     if (index%2!=0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);
// Result="";
// console.log("Series : \n");
// for (var index = 2; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+"k, ";   
//     }
// }
// console.log(Result);

// // QUESTION 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var B=prompt("What u want in our Bakery"); 
// var flag=0;
// for (var index = 0; index < A.length; index++) {
//     if (A[index]==B) {
//         console.log(B," is available at index ",index);
//         flag=1;
//         break
//     } 
// }
// if (flag==0) {
//     console.log(B," is not available at out store");
// }

// // QUESTION 8
// var A = [24, 53, 78, 91, 12];
// var a=0;
// for (var index = 0; index < A.length; index++) {
//     if (A[index]>a) {
//         a=A[index]
//     }
    
// }
// console.log("The Largest Number is ",a);

// // QUESTION 9
// var A = [24, 53, 78, 91, 12];
// var a=1000;
// for (var index = 0; index < A.length; index++) {
//     if (A[index]<a) {
//         a=A[index]
//     }
    
// }
// console.log("The Smallest Number is ",a);

// // QUESTION 10
// var Result="";
// for (var index = 1; index <= 100; index++) {
//     if (index%5==0) {
//     Result=Result+index;   
//     Result=Result+", "   
//     }
// }
// console.log(Result);

//---------------------------------------chapter21-25----------------------------------------

// //question 1
// var a= prompt("Enter your First name");
// var b= prompt("Enter your First name");
// document.write("Hello "+a+" "+b)

// //question 2
// var a = prompt("Enter your Favourute phone");
// document.write("My Favourute phone is  "+a+"<br>");
// document.write("length of string : "+(a.length));

// //question 3
// a="Pakistani"
// document.write("String : "+a+"<br>")
// document.write("Index Of n :  ")
// document.write(a.indexOf("n"))
// n="asdf"
// if (n.match("e")) {
// 	document.write("yes")
// }

// //question 4
// a="Hello world"
// var b =a.lastIndexOf("l");
// document.write("String : "+a)
// document.write("<br>last inex of l : "+b)

// //question 5
// var a="Pakistani"
// document.write("String : "+a)
// var b=a.charAt(3)
// document.write("<br>Character at inedx 3 : "+b)

// //question 6
// var a= prompt("Enter your First name");
// var b= prompt("Enter your First name");
// var c = a.concat(b);
// document.write("Hello "+c);

// //question 7
// var str ="Hyedrabad";
// var res =str.replace("Hyedr", "islam");
// document.write(res);

// //question 8
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var mes =message.replace("and", "&");
// var mess =mes.replace("and", "&");
// document.write(mess);

// //question 9
// var a ="472"
// document.write("Value : "+ a+"<br>"+"type : ")
// document.write(typeof a);
// var b =Number(a)
// document.write("<br>Value : "+ b+"<br>"+"type : ")

// document.write(typeof b);
// //question 10
// var a = prompt("enter lowercase input")
// document.write("User input : "+a+"<br>")
// var b =a.toUpperCase();
// document.write("Upper case : "+b)

// //question 11
// var a = prompt("enter lowercase input")
// document.write("User input : "+a+"<br>")
// var b= a.slice(0,1)
// var b = b.toUpperCase()
// //document.write(b)
// var a =a.slice(1,a.length)
// var c= b.concat(a)
// document.write("<br>Titel case : "+c)

// //question 12
// var a =35.36;
// document.write("Number : "+a+"<br>")
// var b =a.toString()
// var c =b.replace(".","");
// document.write("Result  : "+c)

// //question 13
// var a = prompt("Enter username")
// for (var i = 0; i < a.length; i++) {
// 	b = a.charAt(i)
// 	b=b.charCodeAt(0)
// 	if (b ==33 || b==44 || b==46 || b==64){
// 		document.write("Enter a valid username")
// 	}
// }

// //question 16
// var university ="University of Karachi";
// var str = []
// var str =university.split('');
// for (var i = 0; i < str.length; i++) {
// 	document.write(str[i]+"<br>")
// }

// //question 17
// var a = prompt("Enter input");
// document.write("User Input: "+a)
// var b= a.charAt(a.length-1)
// document.write("<br>last Character of input : "+b)

// //question 18
// var a ="the quick brown fox jumps over the lazy dog"
// document.write("there are "+a.match(/the/g).length+" occurences of word the");
