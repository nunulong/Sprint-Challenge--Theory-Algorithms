a) Answer: the running time is O(n^2). Because we chose first element as pivot and the left partition has n - 1 elements to sort. By doing this recursively, the total recursive call has n layers, and for each layer, the time complexity is n. So the total running time is O(n^2);

b) Answer: if the pivot is always chosen to be the median element, the running time should be o(nlogn).
Because we chose median as pivot and each time the partition will be half of the array, so the deep of the recursive call is logn. For each layer of recursive call or partitions, the time complexity is n since there are n element in the array. So the total running time is O(nlogn).
