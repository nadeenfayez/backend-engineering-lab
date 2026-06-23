# Open Closed Principle (OCP)

## Definition

Software entities should be open for extension but closed for modification.

This means we should be able to add new functionality without changing existing tested code.

Instead of modifying existing classes or functions, we extend the behavior by adding new code.

## Examples

### Example 1 - Footballer Roles

Problem:
Footballer class handles:
- Footballer data
- Deciding role behavior using conditional statements

Adding a new footballer role requires modifying the Footballer class.

Solution:
Use polymorphism and create separate role classes.

Separate responsibilities:
- Footballer -> stores footballer information and uses a role
- PlayerRole -> defines the role behavior
- Specific role classes -> provide their own implementation

New footballer roles can be added without modifying existing code.


### Example 2 - Quiz Questions

Problem:
printQuiz function handles:
- Printing quiz questions
- Deciding how each question type should be displayed using conditional statements

Adding a new question type requires modifying the printQuiz function.

Solution:
Use polymorphism and create separate question classes.

Separate responsibilities:
- printQuiz -> prints any question
- Question -> defines the expected question behavior
- Specific question classes -> provide their own display implementation

New question types can be added without modifying existing code.


### Example 3 - Discounts

Problem:
calcPrice function handles:
- Calculating the final price
- Deciding which discount calculation should be applied using conditional statements

Adding a new discount type requires modifying the calcPrice function.

Solution:
Use polymorphism and create separate discount classes.

Separate responsibilities:
- calcPrice -> applies any discount type
- Discount -> defines the discount behavior
- Specific discount classes -> provide their own calculation logic

New discounts can be added without modifying existing code.