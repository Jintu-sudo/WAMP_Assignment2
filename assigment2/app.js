// app.js
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.name = "Your Name";
    $scope.tagline = "A brief tagline about you";
    $scope.about = "This is a brief description about yourself.";
    
    $scope.hobbies = ["Reading", "Traveling", "Cooking", "Photography"];
    $scope.village = "Your Native Village/Town";
    
    $scope.family = ["Father: Name", "Mother: Name", "Sibling: Name"];
    
    $scope.schooling = "Details about your schooling.";
    $scope.collegeLife = "Details about your college experience.";
    
    $scope.qualifications = ["High School Diploma", "Bachelor's Degree in Subject"];
    
    $scope.rewards = ["Award 1", "Award 2", "Certificate of Excellence"];
    
    $scope.contributions = "Details about your contributions to society.";
});
