# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

My work:
```javascript
let stack = [{ left: 0, right: array.length - 1 }];
while (stack.length > 0) {
    let { left, right } = stack.pop();
    
    let pivot = array[right];

    for (let j = left; j < right; j++) {
        i++;
    }

    //split array at the pivot and sort each side
}
```

The inner loop is easy to find as it loops over a range (0, n) so it loops n times. this is the worst case obiously bc the range changes. 

The outer loop loops n/2 times in the worst case because my pivot is always the right most element,
this means that we are only reducing the array by 2 each iteration adding up to n/2 times. so asymtopticly n times.

my final worst case runtime is $T(n) = \frac{n}{2} * n \epsilon \theta(n^2) $


I was talking to Gage and he made it sound impossible, so i did one google search: https://www.geeksforgeeks.org/iterative-quick-sort/
it had a solution and now i regret looking at it, I tried to forget as much as possible and i havent looked back since i originally viewed the code. i have no idea how much my code resemebles their solution. The analysis is 100% mine though.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.