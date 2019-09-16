# UlamSpiral
Visualization of Ulam's spiral about primal numbers

# How to use
Simply choose the max number to test and canvas scale (Note that external points will still be calculated)

# How it works
Ulam's spiral it's a simple representation of primal numbers disposed in a spiral. If a number is primal it will be printed in black, otherwise in white.
The algorithm to check if a number if primal works in the following way:
From [Wikipedia, Primality test](https://en.wikipedia.org/wiki/Primality_test#Simple_methods):
>"Given an input number n, check whether any prime integer m from 2 to √n evenly divides n (the division leaves no remainder). If n is divisible by any m then n is composite, otherwise it is prime."
>
>"The algorithm can be improved further by observing that all primes greater than 6 are of the form 6k ± 1. This is 3 times as fast as testing all m."

This means that **every** primal number n, if not multiple of 2 or 3, can be can be obtained by 6 * k ± 1, with 1 <= k <= n.
However, **also non-primal numbers may be obtained in the same method**, so also the simple algorithm has been added to the code to detect non-primary numbers not detected by the other algorithm.
In addition to this, a simple check to **perfect squares** has been added to avoid some useless calculations.

Other sources:

See Andrew Thivyanathan's answer on this question on Quora: [Is every prime number other than 2 and 3 of the form (6k±1)? Is this a proven result? What are other resources about it?](https://www.quora.com/Is-every-prime-number-other-than-2-and-3-of-the-form-6k%C2%B11-Is-this-a-proven-result-What-are-other-resources-about-it)

Inpiration taken from introduction to "*Esercizi di Matematica per il test di accesso a Informatica*" by *L. Gemignani* and *O. Menchi*, A.A. 2015-2016

**Code written by Andrea Roveroni**
