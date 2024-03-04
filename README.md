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

The outer loop divides the array into subarrays of double the size of the previous
subarrays until sizes of 1 are achieved making for a runtime of O(log(n)).

The inner loop runs over the whole array each time the outer loop happens resulting
in a runtime of O(n).

Therefore for an unsorted array, the worst case scenerio is O(nlog(n)) which means
a tight bound is $\Theta (nlog(n))$
