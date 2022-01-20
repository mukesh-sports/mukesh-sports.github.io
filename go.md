- why is go fast
> simple and efficient memory management and concurrency model
> the dependencies are linked to a single binary file thereby putting off dependencies on servers.


- What is “slice” in Go
  3 components of slice
  > Pointer: This is used for pointing to the first element of the array accessible via slice. The element doesn’t need to  be the first element of the array.

  > Length: This is used for representing the total elements count present in the slice.

  > Capacity: This represents the capacity up to which the slice can expand. For example: Consider an array of name arr having the values “This”,“is”, “a”,“Go”,“interview”,“question”

- go interfaces

- struct 
> A structure or struct in Golang is a user-defined type that allows to group/combine items of possibly different types into a single type. 

- go routines
 > Go channels > Go channel is a medium using which goroutines communicate data values with each other. It is a technique that allows data transfer to other goroutines. A channel can transfer data of the same type. The data transfer in the channel is bidirectional meaning the goroutines can use the same channel for sending or receiving the data as shown in the image below

- Golang Maps
>Golang Maps is a collection of unordered pairs of key-value. It is widely used because it provides fast lookups and values that can retrieve, update or delete with the help of keys. It is a reference to a hash table


- Which is safer for concurrent data access? Channels or Maps?
> Channels are safe for concurrent access because they have blocking/locking mechanisms that do not let goroutines share memory in the presence of multiple threads.

> Maps are unsafe because they do not have locking mechanisms. While using maps, we have to use explicit locking mechanisms like mutex for safely sending data through goroutines.


- shadowing in  golang
> Shadowing is a principle when a variable overrides a variable in a more specific scope. This means that when a variable is declared in an inner scope having the same data type and name in the outer scope, the variable is said to be shadowed. The outer variable is declared before the shadowed variable.

- variadic functions in Go
> The function that takes a variable number of arguments is called a variadic function. 
