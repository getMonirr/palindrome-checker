const isPalindrome = (string) => {
  const regex = /[\W_]/g;

  const lowerCaseWithRemove = string.toLowerCase().replace(regex, "");
  const reverseLowerCase = lowerCaseWithRemove.split("").reverse().join("");

  return lowerCaseWithRemove === reverseLowerCase;
};

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
