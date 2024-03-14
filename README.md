[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

This implementationg of merge sort has 2 compnents:
The outer loops and the merge function.

Since the merge function, in essence, contains a loop, we can analyze the worst case scenerio
by using loop logic. Ex: a loop inside a loop is equivilant to n*n.

The outer loops run while size < the length of the array. The size variable starts at 1 and doubles each iteration
of the loop, effectively resulting in an exponential-like equation. This results in logn runtime.

The other piece is the merge function which has 2 loops: the outer while loop and the inner for loop. The outer 
while loop runs while the left starting variable is < the middle of the array being "merged" and the right starting
variable is < the end of the other array being "merged". As both of these requirements are in terms of the array length
this loop will run in terms of the array length n as well, resulting in a runtime of n.

As we are analyzing the worst case scenerio, the inner for loop will run essentially every time as no elements 
are sorted in our array. Because of this we can see that each element from the second "array" is going to be swaped
with one from the first and will run as long as the variable i < the left start point. "i" is a placeholder at the 
begining of the loop and eventually becomes the index of where the element needs to be put to make a sorted array.
Since the loop runs while this is less than the left starting point, which is a variable in terms of n as well,
we can see that this loop will have a runtime of n as well.

This means that in the worst case the merge function runs n^2 times, as we multiply the loops together.

Now we multiply the merge function with the outer loops, since it is in essense a loop inside a loop, so we can
use loop logic again. This results in a final runtime analysis of $\Theta (n^2log(n))$



