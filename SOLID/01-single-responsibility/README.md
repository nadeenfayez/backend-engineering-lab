# Single Responsibility Principle (SRP)

## Definition

A class should have only one reason to change.

This does not mean a class should have only one method.
It means a class should only handle one responsibility.

## Examples

### Example 1 - Mobile Logger

Problem:
Mobile class handles:
- Mobile behavior
- Logging

Solution:
Move logging responsibility into a Logger class.


### Example 2 - User Management

Problem:
User class handles:
- User data
- Database operations
- Sending emails

Solution:
Separate responsibilities:
- User -> stores user information
- UserRepository -> manages persistence
- EmailService -> manages emails


### Example 3 - Authentication

Problem:
User class handles:
- User data
- Authentication
- Saving logged users

Solution:
Separate responsibilities:
- User -> stores data
- AuthService -> handles authentication
- UserRepository -> handles storage