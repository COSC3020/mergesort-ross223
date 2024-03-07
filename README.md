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
Outer for loop, inner for loop, and merge.

The outer for loop runs while size < the array length, and since size is double each time,
this is reminicent of log(n).

The inner for loop runs while start < the array length, and start is incremented by
2 times size each iteration so in the worst case this runs n/2 times.

The final piece is merge which has 2 loops. The while loop runs while i <= mid and 
j <= end. Since we are looking at the worst case scenerio, we need the inner loop 
to run as many times as possible so this loop will run when j <= end, so n/2 times.
The inner loop will run when 


Therefore for an unsorted array, the worst case scenerio is O(nlog(n)) which means
a tight bound is $\Theta (nlog(n))$
