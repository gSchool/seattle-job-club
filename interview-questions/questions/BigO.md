What is the runtime of the code below?

```
void foo(int[] array){
  int sum = 0;
  int product = 1;
  for (int i = 0; i < array.length; i++){
    sum += array[i]
  }
  for(int i = 0; i < array.lenght; i++){
    product *= array[i];
  }
  
  System.out.println(sum + ", " + product);
```

```
void printPairs(int[] array){
  for(int i = 0; i < array.length; i++){
    for(int j = 0; J < array.lenght; J++){
    System.out.println(array[i] + ", " + array[j]);
  }
}
```

```
void printUnorderedParis(int[] array){
  for(int i = 0; i < array.length; i++){
    for(int j = i + j; j < array.length; j++){
      System.out.println(array[i] + ", " + array[j]);
    }
  }
}
```

```
void printUnorderedPairs(int[] arrayA, int[] arrayB){
  for (int i = 0; i < arrayA.length; i++){
    for(int j = 0; j < arrayB.length; j++){
      System.out.println(arrayA[i] + ", " + arrayB[j]);
    }
  }
}
```

```
void printUnorderedPairs(int[] arrayA, int[] arrayB){
  for(int i = 0; i < arrayA.length; i++){
    for(int j = 0; i < arrayB.length; j++){
      for(int k = 0; k < 100000; k++){
        System.out.println(arrayA[i] + ", " + arrayB[j]);
      }
    }
  }
}
```

```
void reverse(int[] array){
  for(int i = 0; i < array.length/2; i++){
    int other = array.length - i - 1;
    int temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
}
```

```
int factorial(int n){
  if(n < 0){
    return -1;
  } else if(n == 0 ){
    return 1;
  } else {
    return n * factorial(n - 1)
  }
}
```

```
boolean isPrime(int n){
  for(int x = 2; x * x <= n; x++){
    if(n % x == 0){
      return false;
    }
  }
  return true;
}
```
