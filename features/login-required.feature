Feature: Actions requiring login
  As ...
  In order ...
  I want to ... 

  Background:
    Given I go to Amazon home 
     And I search for "patinete"     
     And I accept cookies policies
     And I open a random result
  
  Scenario: Login is required to process orders
   Given I add the current item to the cart
    When I open the cart page
     And I process the current order
    Then I should be redirected to the Signin page
  
  @only_this
  Scenario: Login is required to buy now products
    When I buy now the current item     
    Then I should be redirected to the Signin page
  
  Scenario: Login is required to add items to wishlist
    When I add the current item to the wishlist      
    Then I should be redirected to the Signin page
