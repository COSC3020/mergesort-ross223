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

This implementationg of merge sort has 3 compnents:
Outer for loop, inner while loop, and the merge function.

Since the merge function, in essence, contains a loop, we can analyze the worst case scenerio
by using loop logic. Ex: a loop inside a loop is equivilant to n*n.

The outer for loop runs while size < the array length and since size is doubled each iteration and this loop 
is reminicent of an exponential, which results in log(n) run time.

The inner while loop runs while j < the array length and will happen length/2*size times,
which results in n runtime. Therefore these loops have a runtime of nlog(n) as we multiply them together.

The final piece is the merge function which has 2 loops: the outer while loop and the inner for loop.

The outer while loop runs while i is less then j or essentially n/size times as it runs once for each array 
needing to be "merged". This results in a runtime of n.

As we are analyzing the worst case scenerio, the inner for loop will run essentially every time as no elements 
are sorted in our array. This results in the inner for loop running as long as k <= size + j - 1 and since k 
is incremented by 1 each time, it will run size + j - 1 times. Since both of these variables are bounded by
the size of the array as determined by the previous loops, this loop will runtime of n as well.

This means that in the worst case the merge function runs n^2 times, as we multiply the loops together.

Now we multiply the merge function with the outer loops, since it is in essense a loop inside a loop, resulting in a 
total runtime of $\Theta (n^3log(n))$



