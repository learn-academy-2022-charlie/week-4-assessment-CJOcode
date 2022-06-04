# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# psuedo code -->
    # create a method that takes in a number and determines if the number is even or odd.
    # call the method even_odd
        # method will take a number as its parameter
        # within the method, create a conditional state that checks if the number is even using % 2 == 0. 
        # if the num is even print 'num is even'
        # if the num is odd print 'num is odd'
    # print and invoke the method with a argument.


num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd(num)
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end
p even_odd(num1)
p even_odd(num2)
p even_odd(num3)

# output:
# "7 is odd"
#"42 is even"
#"221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# psuedo code -->
# create a method that takes in a string and removes all the vowels from the string.
# the name of the method will be remove_vowel and will take a string as the parameter.
    # use the dot method .delete that will remove all of the vowels from the argument.
        # remember to check for both uppercase and lower vowels
# print and invoke remove_vowel and it arguement

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowel(string)
    string.delete 'aeiouAEIOU'
end 
p remove_vowel(album1)
p remove_vowel(album2)
p remove_vowel(album3)

# output:
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# psuedo code -->
# Create a method that takes in a string and checks if the string is a palindrome.
# Name the method palidrome_check that takes a string as its parameter
    # Create a conditional statement inside the method
        # The IF statment will take the string on the left side of a 'equal to' operator and use .downcase to make sure every letter in the string is lowercase. Then on the right side of the operator use .reverse combined with .downcase to see if the string matches it self reversed. If the word matches the palidrome criteria then use string interpulation and print 'string is a palidrome'.
        # If string does not pass the if statement criteria else will print 'string is not a palidrome'.
# print and invoke palidrome_check adding in an argument.




palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palidrome_check(string)
    if string.downcase == string.reverse.downcase
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end    
end
p palidrome_check(palindrome_tester1)
p palidrome_check(palindrome_tester2)
p palidrome_check(palindrome_tester3)
#output:
# "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"