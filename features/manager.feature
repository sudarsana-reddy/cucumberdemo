Feature:  Verify Manager Functionality

   Feature Description : Manager Should be able to Login


Background: User login as Manager and verify the options
Given user is on Bank Home Page
When User Selects Manager Login
Then User should be login to Manager Home Page

@customercreation
Scenario Outline: Verify Manager Can Create a New Customer

When Manager Initiates a New Customer Creation
And Fills In The Required Customer Data, <first_name>, <last_name> and <pin_code>
And Sumbit the new customer form
Then New Customer Gets Created Successfully
When Manager Gets The Current Customers
And Search For Customer with <first_name>
Then The News Customer should Present in the List with <first_name>, <last_name> and <pin_code>

Examples:
| first_name | last_name | pin_code |
| James  | Bond  | JB007  |