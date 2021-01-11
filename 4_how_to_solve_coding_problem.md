# HOW TO SOLVE CODING PROBLEM

## **1. Section Overview**

---

At the end of the day an _interview_ is a way for the company to find out can you solve the problem that the company or employer has. Because if we able to solve their problems then we are valuable and we will produce more value to them than the salary they are paying you. This is what **technical interview** tries to answer.

To succeed in the technical interview is the actual coding aspects of the questions.

It is not necessarily about the solution of the problem in coding interview, but the most important things is about:

- **The thought process to solve the coding problem.**
- **Knowing the tradeoffs between data structures and algorithms (space and time complexity).**

Building this foundation:

1. Understanding the Big-O
2. Learning how to solve problems

After we have these foundations we can use data structures and algorithms to solve our problems.

## **2. What Are Companies Looking For?**

---

### - _Analytic Skills_

- How can you think through a problem and analyze things.
- When you're coding during an interview **they want to hear your thought process** and **how you go from not knowing the answer to solving the problem**.

### - _Coding Skills_

- Do you code well
- Is your code clean
- Well organized
- Readable.

### - _Technical Skills_

- Do you know the fundamentals. Did you just memorize things or do you understand the pros and cons of different solutions.

### - _Communication Skills_

Does your personality match the company personality, it means:

- Can you communicate well with others with the team.
- They want to know whether you're the type person that's going to fit well and work well within the company

## **3. What We Need For Coding Interviews**

- Code is readable
- Memory efficient
- Time efficient

## **4. Step By Step Solving Coding Problem**

1.  When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.

    ```js
    1st point
    // Given 2 arrays, create a function that let's user know (true/false)  whether these two arrays contain any common items.
    // For Example:

    const arrays1 = ['a', 'b', 'c', 'x'];
    const arrays2 = ['z', 'y', 'i'];
    // Should return false.

    //-------

    const arrays1 = ['a', 'b', 'c', 'x'];
    const arrays2 = ['z', 'y', 'x'];

    // Should return true.

    2nd point
    // Function:
    // 2 parameters
    // return true or false
    ```

2.  Make sure you double check: What are the inputs? What are the outputs?

    ```js
    // Inputs:
    // 2 parameters that arrays
    ```

        Note:
        + We can ask interviewer that,
            - are they always going to be arrays
            - is it possible that input might not be arrays, maybe an object or string

        + We can confirm with the interview what those cases are.
        + We don't ever jump straight into coding, first explain your approach in a way talking it loud so that we and interviewer know exactly what the steps are that we need to follow.

3.  What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?

    ```js
    // 2 parameters - arrays - no size limit
    // return true or false - boolean return
    ```

        Note:
        Because this is a simple question we might want to ask the interviewer:
        - how large this arrays gonna get.
        - is our goal here to be as efficient as possible with our function, what is more important, time or space complexity.

4.  Don't be annoying and ask too many questions.

        Note:
        We can keep asking them questions but remember there is time limit.

5.  Start with the naive/brute force approach. First thing that comes into mind. It shows that
    you’re able to think well and critically (you don't need to write this code, just speak about it).

6.  Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)

7.  Walk through your approach, comment things and see where you may be able to break things.
    Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
    the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
    that. Sometimes this occurs with repeated work as well.

8.  Before you start coding, walk through your code and write down the steps you are going to
    follow.

9.  Modularize your code from the very beginning. Break up your code into beautiful small pieces
    and add just comments if you need to.

10. Start actually writing your code now. Keep in mind that the more you prepare and understand
    what you need to code, the better the whiteboard will go. So never start a whiteboard
    interview not being sure of how things are going to work out. That is a recipe for disaster.
    Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
    So think: What can I show in order to show that I can do this and I am better than other
    coders. Break things up in Functions (if you can’t remember a method, just make up a function
    and you will at least have it there. Write something, and start with the easy part.

11. Think about error checks and how you can break this code. Never make assumptions about the
    input. Assume people are trying to break your code and that Darth Vader is using your
    function. How will you safeguard it? Always check for false inputs that you don’t want. Here is
    a trick: Comment in the code, the checks that you want to do... write the function, then tell the
    interviewer that you would write tests now to make your function fail (but you won't need to
    actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.

13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc... Ask
    the interviewer if we can make assumption about the code. Can you make the answer return
    an error? Poke holes into your solution. Are you repeating yourself?

14. Finally talk to the interviewer where you would improve the code. Does it work? Are there
    different approaches? Is it readable? What would you google to improve? How can
    performance be improved? Possibly: Ask the interviewer what was the most interesting
    solution you have seen to this problem

15. If your interviewer is happy with the solution, the interview usually ends here. It is also
    common that the interviewer asks you extension questions, such as how you would handle the
    problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
    This is a common follow-up question at Google, where they care a lot about scale. The answer
    is usually a divide-and-conquer approach — perform distributed processing of the data and only
    read certain chunks of the input from disk into memory, write the output back to disk and
    combine them later.
