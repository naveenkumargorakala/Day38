function isPalindrome(num1, num2) {

    const str1 = num1.toString();
    const str2 = num2.toString();
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[str2.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }
  console.log(isPalindrome(121, 321));
console.log(isPalindrome(121, 121)); 
console.log(isPalindrome(12321, 32123));
