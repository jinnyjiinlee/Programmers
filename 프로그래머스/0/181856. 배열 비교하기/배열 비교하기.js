function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1;
    if (arr1.length < arr2.length) return - 1;
    if (arr1.length === arr2.length) {
        if ((arr1.reduce((a, b) => a + b)) > (arr2.reduce((a, b) => a + b))) return 1;
        if ((arr1.reduce((a, b) => a + b)) < (arr2.reduce((a, b) => a + b))) return - 1;
        if ((arr1.reduce((a, b) => a + b)) === (arr2.reduce((a, b) => a + b))) return 0;
    }
}