# Expose: Javascript Part 2

1. At line 12, 3 will be printed to the console because once the for loop iterates i 3 times, it will iterate again then exit the for loop and i will be 3.
2. At line 13, 150 will be printed to the console because once the for loop completes, discountedPrice's variable will be 150 after doing the arithmetic of prices[2] which is 300 and multiplying that by (1-discount) which is 0.5 which results in 150.
3. At line 14, 150 will be printed to the console because once the for loop completes, discountedPrice's variable will be 150 so multiplying 150 by 100 and using the built-in JS Math.round function to round to the nearest integer, it will be 15,000 / 100 which is 150.
4. The function will return an array with the elements [50, 100, 150] because the for loop calculates the final discounted price of each item given their original prices and the discount which is 50%.
5. The code will cause an error because i is being printed to the console but it is being declared by the let keyword and i is being accessed outside of its block scope.
6. The code will cause an error again because discountedPrice is being printed to the console but it is being declared by the let keyword inside the for loop and discountedPrice is being accessed outside of its block scope.
7. At line 14, 150 will be printed to the console because finalPrice is defined within the function and it is being accessed within its block scope so there will be no error.
8. The function will return an array with the elements [50, 100, 150] because the for loop calculates the final discounted price of each item given their original prices and the discount which is 50%. Although the let keyword is used to define discounted, it is still accessed within its block scope.
9. At line 11, an error will be thrown because i is defined by the let keyword in the for loop and it is being accessed outside of its block scope which is not allowed.
10. At line 12, 3 will be printed to the console because length is defined by the const keyword in the function and it is being accessed within the function which is a valid action.
11. The function will return an array with the elements [50, 100, 150]. Although discounted is defined by the const keyword, const means that it defines a constant reference to an array so the elements in the array can still be edited. 
12. a. student.name
12. b. student["Grad Year"]
12. c. student.greeting()
12. d. student["Favorite Teacher"].name
12. e. student.courseLoad[0]
13. A. '32' because the concatenation of the string '3' with the integer 2 will result in '32'
13. B. 1 because when doing arithmetic, strings are converted to integers so '3' is converted to 3 and subtracted by 2 which is 1
13. C. 3 because when concatenating an integer to a null value, the null value will be ignored thus leaving 3
13. D. '3null' because when concatenating a string to a null value, the null will be considered a string resulting in '3null'
13. E. 4 because as defined in the writeup true maps to 1 and added by 3 gives 4
13. F. 0 because false maps to 0 if true maps to 1 and a null value is essentially 0 and that addition gives 0
13. G. '3undefined' because when concatenating a string to undefined value, the undefined will be considered a string as well resulting in '3undefined'
13. H. NaN because undefined is NaN and if it is subtracted by a string that is converted to an integer 3, NaN will be the output
14. A. true because 2 is converted from a string to an integer and their integer values are compared which is true
14. B. false because when compared lexicographically, '2' is greater than '12'
14. C. true because '2' is converted from a string to an integer and their values are compared which is true
14. D. false because 2 is strictly compared to '2' and their types are not identical which results in false
14. E. false because true maps to 1 and 1 and is not equal to 2
14. F. true because any number other than 0, -0 or NaN in Boolean() returns true which is strictly equal to true
15. == operator checks if values are equal, the values can be converted to comapare their value, ==== operator strictly comapres values if they are equal not only with the same value but also the same type
16. in part2-question16.js file
17. There will be no errors thrown. The function modifyArray will return newArr which is an array with the values [2, 4, 6]. First, modifyArray is called with the parameters [1, 2, 3] and doSomething which is another function. We then go into modifyArray where there is an array instantiated and a for loop that iterates through the length of the array parameter. Then the values returned from the callback function are pushed to the new array. Going through the for loop, the new array will have the values [2, 4, 6].
18. in part2-question18.js file
19. 1 followed by 4 then 3 then 2