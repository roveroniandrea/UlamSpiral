# UlamSpiral
Visualization of Ulam's spiral about primal numbers

# [Demo](https://roveroniandrea.github.io/UlamSpiral/)

# How to use
Simply choose the max number to test and canvas scale (Note that external points will still be calculated)

# How it works
Ulam's spiral it's a simple representation of primal numbers disposed in a spiral. If a number is primal it will be printed in black, otherwise in white.
The algorithm to check if a number if primal works in the following way:

Let's suppose we want to describe all numbers multiple of 6. We will later discuss why precisely 6. We can obtain those numbers simply doing 6 * k, where k is an interger number greater or equal to 1.

Some examples are:
`6 * 1 = 6` for k=1, `6 * 2 = 12` for k=2, `6 * 3 = 18` for k=3, and so on.

To obtain numbers between them we can simply add 1, 2, 3, 4 or 5 to them. Generalizing, **every number greater than 6 can be obtained with one of this expressions:**
`6 * k + 0`, `6 * k + 1`, `6 * k + 2`, `6 * k + 3`, `6 * k + 4` or `6 * k + 5`

### But, how to recognize if one of those number is primal?

Let's start with the easiest expression: `6 * k + 0`. If we divide this number by 2 we obtain `(6 * k + 0) / 2 = 3 * k`, which is an integer number (remember that k is always integer). So, **the quotient of the division is always an integer, and so all numbers that can be obtained by `6 * k + 0` are certainly not primal** and we can exclude them (they're also divisible by 3).

The same approach can be used to exclude `6 * k + 2` and `6 * k + 3` cases: the first can be divided by 2, because they're always pair (in fact multiplicating any number with a pair number you get a pair one), while the second are multiple of 3: `(6 * k + 3) / 3 = 2 * k + 1`. Also the `6 * k + 4` case has to be excluded because you always get pair numbers.

**The remaing two expressions are `6 * k + 1` and `6 * k + 5`. Both of them are not divided by 2 or 3 because the result is never an integer:**

`(6 * k + 1) / 2 = 3 * k + 1/2`, `(6 * k + 1) / 3 = 2 * k + 1/3`, `(6 * k + 5) / 2 = 3 * k + 5/2`, `(6 * k + 5) / 3 = 2 * k + 5/3`.

We previously said that with the first 6 expressions we can obtain every number greater than 6, but four of those expressions generates numbers multiple of 2, 3 or both, and so not primal. So, by exclusion, **every primal numbers must be obtained with one of this two expressions**. But it's very important to precise that **not all numbers generated with this two expressions are primal**.

Let's take an example: assigning k=5 and using the last expression, we obtain `6 * 5 + 5 = 35`, which is not divisible by 2 or 3 (this is what we expected), but it's clearly divisible by 5, giving 7 as quotient. Let's demonstrate this:

`(6 * k + 5) / 5 = (6/5) * k + 1`

We have to choose a value of k in order to obtain an integer value from this quotient: the simpler one is 5, but also 10, 15, 20 and so on can be choosen: `(6/5) * 5 + 1 = 6 + 1`, in fact 6 * 5 + 5 gives us 35, which can be divided by 5. Another example is `(6/5) * 15 + 1 = 18 + 1`, in fact `6 * 15 + 5 = 95`.

Also `6 * k + 1` may generate numbers multiple of 5, or even 7: `(6/7) * k + 1 / 7` with k = 8: `(6/7) * 8 + 1 / 7 = 48 / 7 + 1/7 = 49 / 7 = 7`, in fact 6 * 8 + 1 gives us 49 (the same result, but it's purely a coincidence), which is multiple of 7, but not of 2, 3 or 5.

### And so? We have to exclude even this two expressions?

Not at all. In fact, while the previous four expressions gives us a number **certainly** not primal (because any value of k gives an integer), this two **may** give us a not-primal number. In order to exclude the non-primal one, we have to check every of the numbers generated by this two expression with another algorithm. In this project, simply trying to divide the number for all the previuos one (please look to the final quote to Wikipedia). It will add weight to the calculations, but only for a small percentage of numbers. As mentioned below, some tests demonstrated that this approach is 3 times faster than trying to divide each number for all it's previous one.

In addition to this, a simple check to **perfect squares** has been added to avoid some useless calculations.

In this code the expression `6 * k + 5` is used, but in another form. Simply, it can be written as `6 * (k +1) -1`, but thanks to the recursions process we can simply check for `6 * k - 1`, increasing in readability. So, the two final expressions used in this code are:

`6 * k - 1`

`6 * k + 1`

### Why 6?
Why we choose to divide numbers by group of 6? First of all, 6 is a number relatively small, so in the wors case only 6 expression have to be checked. In addition to this, 6 is a multiple of both 2 and 3, which makes easier to exclude some expressions (like +0, +2, +3 and +4), and the remaining are only two (this is very efficient for the code), and further controls with the traditional algorithm is necessary at small percentage. In addition, grouping number by 6 makes easier to obtain higher numbers among grouping b 2 or 3. The next possible number to group is, in my opinion, 30, because it's the least common multple between 2, 3 and 5, but I think the number of expression to check would be higher (I've not tested it anyway).

Sources:

From [Wikipedia, Primality test](https://en.wikipedia.org/wiki/Primality_test#Simple_methods):
>"Given an input number n, check whether any prime integer m from 2 to √n evenly divides n (the division leaves no remainder). If n is divisible by any m then n is composite, otherwise it is prime."
>
>"The algorithm can be improved further by observing that all primes greater than 6 are of the form 6k ± 1. This is 3 times as fast as testing all m."

See Andrew Thivyanathan's answer on this question on Quora: [Is every prime number other than 2 and 3 of the form (6k±1)? Is this a proven result? What are other resources about it?](https://www.quora.com/Is-every-prime-number-other-than-2-and-3-of-the-form-6k%C2%B11-Is-this-a-proven-result-What-are-other-resources-about-it)

Inpiration taken from introduction to "*Esercizi di Matematica per il test di accesso a Informatica*" by *L. Gemignani* and *O. Menchi*, A.A. 2015-2016

**Code written by Andrea Roveroni, feel free to re-use it**
