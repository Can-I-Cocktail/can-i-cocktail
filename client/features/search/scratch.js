/*
Example of Match
sort each array A-Z
[olives, vemouth, vodka] | [olives, pineapple juice, rum, vermouth, vodka]
all three must be present to be a match
does olives === olives ? Y -> move to next recipe ingredient
does vermouth === pineapple juice ? N -> move to next user ingredient
does vermouth === rum ? N -> move to next user ingredient
does vermouth === vermouth ? Y -> move to next recipe ingredient
does vodka === vodka ? Y -> recipe is possible, store recipe object
Move to next recipe

Example of NOT Match
sort each array A-Z
[olives, vemouth, vodka] | [olives, pineapple juice, rum, gin, vodka]
all three must be present to be a match
does olives === olives ? Y -> move to next recipe ingredient
does vermouth === pineapple juice ? N -> move to next user ingredient
does vermouth === rum ? N -> move to next user ingredient
does vermouth === gin ? N -> move to next user ingredient
does vermouth === vodka ? N -> move to next user ingredient
No more user ingreidents to check. Not a match
Move to next recipe 
*/

/*
[olives, vermouth, vodka] | [olives, pineapple juice, rum, gin, vodka]
merged and sorted A-Z -> [gin, olives, olives, pineapple juice, rum, vermouth, vermouth, vodka, vodka]
[olives, olives, pineapple juice, rum, vermouth, vermouth, vodka, vodka]
gin === olives ? 
    N - move one and check against next element
    Y - increment ingreidentMatch by 1, move two indexes and check against next element
keep doing this until either the match count === recipeIngredients.length or until there are no more elements in recipeIngredients to check for
each time we exit the loop we have to reset the count 

find index and last index of method
*/
