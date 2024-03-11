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
Outer for loop, inner while loop, and merge.

Since the merge function contains a in essence a loop we can analyze the worst case scenerio
by using loop logic. Ex: a loop inside a loop is equivilant to n*n.

The outer for loop runs while size < the array length, and the inner while loop runs when j < the array length.
Since size is doubled each iteration and j is incremented by size, these loops are reminicent of an exponential,
which results in log(n) run time.

The final piece is merge which has 2 loops. The outer while loop runs while i is less then j or
essentially n/size times as it runs once for each array needing to be "merged". As we are analyzing the worst case
scenerio, the inner loop will run essentially every time as no elements are sorted in our array. This results
in the inner for loop running as long as k <= size + j - 1 and since k is incremented by 1 each time, it will run
size + j - 1 times. Size and j are both elements of O(n) so this loop will run O(n) times in the wost case.

Now we multiply our run times together to get the wost case which results in $\Theta (n^2log(n))$ as our
worst case runtime.



