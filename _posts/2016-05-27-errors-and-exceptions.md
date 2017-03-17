---
title:   "Errors and Exceptions (in Rust)"
subtitle: An introduction to errors and exceptions handling using Rust as example
date:    2016-05-27 12:03:00
layout:  post
author:  giovanni_capuano
categories: [Developer Careers]
cover_image: errors_and_exceptions_in_rust.png
permalink:  errors-and-exceptions-in-rust/
importance: 2
---

An introduction to errors and exceptions handling using Rust as example.

<!--more-->

### General definitions
**Error**: An unusual and unexpected situation in the running program that can be resolved only by fixing the program (i.e. *out of memory*).

**Exception**: An expected and irregular situation that happens at runtime (i.e. *read-protected file*).

The main difference here is that errors are **unexpected** (and usually lead to exploitable bugs) and are often hard to predict
(did someone whisper *overflow*?), while exceptions are expected (you know that they *could* happen) and usually lead to a crash
of the application when not handled (for example when you want to modify a file that actually does not exist but you didn't think about this possibility).

### How popular languages deal with exceptions
We could split programming languages into four categories based on the way they handle exceptions:

- Strict exception handling: the language provides full and explicit coverage to exceptions. Exceptions are defined as classes (either built-in and defined
by the developer) that represent the type of exception they handle. Methods are shipped with a list of exceptions they can rise (explicitely or just by
invoking other functions) and require to be handled with a `Try...catch`-like construct. Not handled exceptions lead to a compile-time error.
- Weak exception handling: everything that's been said for the *strict exception handling* languages with the addition that developers are not required
to handle exceptions and methods are not shipped with any definition of the exceptions they can rise demanding this task to the documentation.
Exceptions that are not handled lead to an abortion of the application at run time.
- Exceptions-agnostic: exception handling is not provided by the language but can be implemented (usually with conditional statements and `goto`s).
- By monadic types: exception handling is realized with generic structs in which values are encapsulated.

The most popular language that implements the features of the first category is *Java*.
The second category is basically huge, and includes most of the languages over here: *C++, Python, Ruby, PHP, JavaScript* and so on.

Usually handling exceptions in this very OOPish way is quite expensive in terms of resources. The *C* programming language does not have any knowledge
about exceptions and most projects (the [Linux kernel](https://github.com/torvalds/linux/blob/9256d5a308c95a50c6e85d682492ae1f86a70f9b/drivers/media/dvb-frontends/drxk_hard.c#L518)
included) handle them with `if`s and `goto`s to jump to the block where a task gets rescued.
It's obvious that this trait asks developers to be completely aware about all the edge cases of their code and to write especially clean code.

The last category is the most appreciated inside the functional programming world. The concept is that instead of returning `NULL`s or raising
exceptions in case of failures (i.e. an hashtable that does not include a given key), an option type is used that can either encapsulates a value
or being empty. *Haskell* uses an option type called `Maybe` that accepts `Nothing` or `Just x` while *Rust, Scala, OCaml, Swift* and others use
an `Option` type that accepts `None` or `Some(T)`. Through decostruction via pattern matching, the developer can handle both of these cases.

Let's see shortly what in practice this does mean exemplifying with a language that despite is not purely functional, implements and makes extensive use of monadic types.

### Exception handling in Rust
This section wants to go a little deeper on what it's been said previously. Please look at [this article](http://blog.burntsushi.net/rust-error-handling/)
and the [Rust book](https://doc.rust-lang.org/book/) for a great learning about this!

As said, talking about exceptions, the only tools Rust gives to developers are `Option<T>` and `Result<T, E>`. They are everything but magic,
being so easy that you can implement them by yourself in a couple of lines, as done in the article linked above.
And they are terribly optimized in compile-time too, so that their usage is almost cost-free.

### `Option<T>`
I'm the kind of person who prefers to leave the code to talk for itself. Please have a look at
[this snippet](https://play.rust-lang.org/?gist=2636dd21ba2b1317ae0d4287bb5bc862&version=stable&backtrace=0).

We define a dictionary containing the name of the books as key and the count of volumes in the stock as value.
The `get()` method returns an option type that we want to deconstruct through pattern matching, extracting so its value if it's present.

Instead of using pattern matching we can also `unwrap()` the value directly in
[this way](https://play.rust-lang.org/?gist=9dc9e5ac92d8f3f14d30e55eb58bc3a8&version=stable&backtrace=0).
This method basically extracts the value from an `Option<T>`, assuming it `is_some()`.

It is quite a double edged weapon though. If the `Option<T>` `is_none()`, meaning that it has not a value
encapsulated, it will `panic!` as you can see [here](https://play.rust-lang.org/?gist=6ce0014f989ce2cd6668278e98e09cf3&version=stable&backtrace=0).

`panic!` is a macro defined in the Rust's standard library that aborts the current thread (this means that our multi-threaded applications can be still
alive too :)), causing most of the times the crash of the application, in the same flavor of a Ruby or Python's unhandled exception.

We don't care that our returned value is an `Option<T>` instead of the plain value as long as we don't need to use it. Pattern matching, `unwrap()`,
`unwrap_or()` and `unwrap_or_else()` ([documented here](https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap)) are usually everything
we need to keep our code safe from unexpected values that can be returned.

We can live in a world without `NULL`s. It sounds kinda like a dream, doesn't it? But it's real.

### `Result<T, E>`
This thing really looks like an exception class. If *option types* represent a possibility for a value to exists, *result types* represent a success
or a failure of a task (i.e. the creation of a file).

Basically it works like `Option<T>`, but instead of accepting `Some(T)` or `None`, these options are replaced by `Ok(T)` and `Err(E)`.
`Ok(T)` basically works exactly like `Some(T)`, encapsulating a generic value, while `Err(E)` is a wrapper for a value that represents the error (as it
is generic, despite what it can looks like, it can be whatever thing you like, a string containing an error message included).

### What about errors?
Initially we said that errors are unexpected and unusual situations in which the program can end into.

Most of the languages represents the most common errors with actual exceptions (i.e. `OutOfMemoryError`) but they're not really supposed to be handled,
and so what they do is only giving a reasonable message about the reason of the crash of the application.

Smart compilers like Rust's help avoiding errors in compile time, providing strict rules and checkings on everything the programmer does, like
the ones related to the memory management.

In case of errors like an index out of an array's bound (which index could be inputted by the user and cannot always be expected, for example),
actually there's a brand new `panic::catch_unwind()` method that does exactly what `Try...catch` or `Begin...rescue` do, but it needs to be used
conscientiously, as it is *not* a shorthand for option and result types.
Please read [Rust 1.9 announcement](http://blog.rust-lang.org/2016/05/26/Rust-1.9.html) to learn more about catching `panic!`s and more.

* * *

**[Join Honeypot](https://app.honeypot.io/users/sign_up?utm_source=blog&utm_medium=organic&utm_term=e&utm_content=160506&utm_campaign=dev-no) today and receive 4 interview invites or more in three weeks.**
