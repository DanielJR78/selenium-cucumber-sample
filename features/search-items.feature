Feature: Search and results functionalities
  As ...
  In order ...
  I want to ...
  
  Scenario Outline: Search with results multi
    Given I go to Amazon home 
    And I search for <searchText>
    And I accept cookies policies       
    Then I should be redirected to the Results page
    And result header should contain <searchText>
    And any result title should contain <searchText>    
      Examples:
        |searchText     |        
        |"Samsung"      |
        |"moto"         |      
  
  Scenario Outline: Search with results multi
    Given I go to Amazon home 
    And I search for <searchText>
    And I accept cookies policies       
    Then I should be redirected to the Results page    
    And no results header should be shown
      Examples:
        |searchText     |        
        |"jgffxxwwzz"   |
  
  @only_this
  Scenario Outline: Sort results by price ascendant    
    Given I go to Amazon home 
    And I search for <searchText> 
    And I accept cookies policies
    When I sort results by price asc
    Then I should be redirected to the Results page
    And any result should have a price lower than next one
      Examples:
        |searchText     |        
        |"coche"        |      
        |"patin"        |      
  