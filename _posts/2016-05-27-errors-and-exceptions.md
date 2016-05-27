---
title:   "Errors and exceptions (in Rust)"
subtitle: An introduction on errors and exceptions handling using Rust as example
date:    2016-05-27 12:03:00
layout:  post
author:  giovanni_capuano
categories: Tech
cover_image: errors_and_exceptions_in_rust.png
permalink:  errors-and-exceptions-in-rust/
importance: 2
---

### General definitions
**Error**: An unusual and unexpected situation in the running program that can be resolved only by fixing
the program (i.e. *out of memory*).
**Exception**: An expected but unpredictable situation that happens at runtime (i.e. *read protected file*).

The main difference here is that errors are **unexpected** (and very often lead to exploitable bugs) and often
hard to predict (did someone whisper *overflow*?), while exceptions are expected and usually lead to a crash
of the application when not predicted and then handled (for example when you want to modify a file that actually
does not exist but you didn't think about this possibility).

### How popular languages deal with exceptions
Programming languages can be splitted in four categories based on the way they handle exceptions:

- Strict exception handling: The language provides full and explicit coverage to exceptions. Exceptions are defined as classes (either built-in and defined
by the developer) that represent the type of exception they handle. Methods are shipped with a list of exceptions they can rise (explicitely or not)
and require to be handled with a `Try...catch`-like construct. Not handled exceptions lead to a compile-time error.
- Weak exception handling: Everything that's been said for the *strict exception handling* languages with the addition that developers are not required
to handle exceptions and methods are not shipped with any definition of the exceptions they can rise demanding this task to the documentation.
Exceptions that are not handled lead to an abortion of the application.
- Exceptions-agnostic: Exception handling is not provided by the language but can be realized (usually with conditional statements and `goto`s).
- By monadic types: Exception handling is realized with generic structs in which values are encapsulated.

The most popular language that implements the features of the first category is *Java*.The second category is basically huge, and includes
most of the languages over here: *C++, Python, Ruby, PHP, JavaScript* and so on.

Usually handling exceptions in this very OOPish way is quite expensive in terms of resources. The *C* programming language does not have any knowledge
about exceptions and most of projects (the Linux kernel included) handle them with `if`s and `goto`s to jump to the block where a task gets rescued.
It's obvious that this trait asks developers to be completely aware about all the edge cases of their code and to write a expecially clean code.

The last category is the most appreciated inside the functional programming world. The concept is that instead of returning `NULL`s or raising
exceptions in case of failures (i.e. an hashtable that does not include a given key), an option type is used that can either encapsulates a value
or being empty. *Haskell* uses an option type called `Maybe` that accepts `Nothing` or `Just x` while *Rust, Scala, OCaml, Swift* and others use
an `Option` type that accepts `None` or `Some(x)`. Through decostruction via pattern matching, the developer can handle both of these cases.

Let's see shortly what this does mean.

### Exception handling in Rust
So, this section wants just to be a little go deeper on what it's been said previously. Please look at [this article](http://blog.burntsushi.net/rust-error-handling/)
and the [Rust book](https://doc.rust-lang.org/book/) for a great learning about this!

As said, talking about exceptions, the only tools Rust gives to developers are `Option<T>` and `Result<T, E>`. They are everything but magic,
being so easy that you can implement them by yourself in a couple of lines. Not even joking. And they are terribly optimized in compile-time, so that
their usage is almost cost-free.

### `Option<T>`
 I'm the kind of person who prefers to leave the code to talk for me. Please have a look at
[this snippet](https://play.rust-lang.org/?gist=2636dd21ba2b1317ae0d4287bb5bc862&version=stable&backtrace=0).

We define a dictionary containing the name of the books as key and the count of volumes in the stock as value.
The `get()` method returns an option type that we want to deconstruct through pattern matching, extracting so the value if it's present.

Instead of using pattern matching we can also `unwrap()` the value directly in
[this way](https://play.rust-lang.org/?gist=9dc9e5ac92d8f3f14d30e55eb58bc3a8&version=stable&backtrace=0).
This method basically extracts the value from an `Option<T>`, assuming it `is_some()`.

It is quite a double edged weapon though. If the `Option<T>` `is_none()`, meaning that it has not a value
encapsulated, it will `panic!` as you can see [here](https://play.rust-lang.org/?gist=6ce0014f989ce2cd6668278e98e09cf3&version=stable&backtrace=0).

`panic!` is a macro defined in the Rust's standard library that aborts the current thread (this means that our multi-threaded applications can be still
alive too :)), causing most of the times the crash of the application, in the same flavor of a Ruby or Python's unhandled exception.

We don't care that our returned value is an `Option<T>` instead of the plain value as long as we don't need to use it. Pattern matching, `unwrap()`,
`unwrap_or()` and `unwrap_or_else()` ([documented here](https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap)) are usually everything
we need to keep our code safe from unexpected returning values.
We can live so in a world without `NULL`. It sounds kinda like a dream, isn't it? But it's real.

### `Result<T, E>`
This thing looks really like an exception class. If option types represent a possibility for a value to exists, result types represent a success
or a failure of a task (i.e. the creation of a file).

Basically it works like `Option<T>`, but instead of accepting `Some(T)` or `None`, these options are replaced by `Ok(T)` and `Err(E)`.
`Ok` basically works exactly like `Some`, while `Err` is a wrapper for a value that represents the error (as it
is generic, despite what it can looks like, it can be whatever thing you like, a string containing an error message included).

### What about errors?
Initially we said that errors are unexpected and unusual situations in which the program can end into.

Most of the languages represents the most common errors with actual exception (i.e. `OutOfMemoryError`) but they're not really supposed to be handled,
and so what they do are only giving a reasonable message about the reason of the crash of the application.

Smart compilers like Rust's, help avoiding errors in compile-time, providing strict rules and checkings on every thing the programmer does, like
the ones related to the memory management.

In case of errors like an index out of an array's bound (which index can be inputted by the user and cannot always be expected, for example),
there's a brand new `panic::catch_unwind()` method that does exactly what `Try...catch` or `Begin...rescue` do, but it needs to be used conscientiously,
as it is *not* a shorthand for option and result types. Please read [Rust 1.9 announcement](http://blog.rust-lang.org/2016/05/26/Rust-1.9.html) to learn more about
catching `panic!`s and more.

---

**On Honeypot companies apply directly to developers with tech stack and salary upfront. [Sign-up](https://www.honeypot.io/pages/how_does_it_work?utm_source=techblog2) to get into the game!**
