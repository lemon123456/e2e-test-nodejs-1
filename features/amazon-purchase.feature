@purchase
Feature: Login

  Scenario: Login with correct username and password
    Given I go to amazon home page
    When I login with username "***" and password "***"
    Then I should see the account information

