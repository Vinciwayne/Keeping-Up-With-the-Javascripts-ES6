Homework Assignment #12: Object Oriented Programming


Details:
 

What is object oriented programming, and why would you use it? As you may already know, many javascript projects are written using a functional, or event-driven design pattern. In which cases would an OOP pattern be a better choice?

For this task, write a few paragraphs describing a project that would benefit greatly from an OOP structure. (This could be any kind of application, running on any type of system). Describe the application flow from the user's point of view (user stories). What is the application's purpose, and how would people use it? What information would they enter, and what would be received? Try to mention all the "stories" in which the user performs any kind of CRUD operation.

Next, using pseudocode (or any other notation-technique or diagramming tool you wish), map out what the main objects of the system would look like, how they would be constructed, and how they would relate to each other. 

Save your writeup in a Readme.md file, and push it to Github.

















### (OOP) Object oriented programming 
Object Oriented Programming (OOP) refers to using self-contained pieces of code to develop applications. We call these self-contained pieces of code **objects**, better known as Classes in most OOP programming languages and Functions in JavaScript. We use objects as building blocks for our applications. Building applications with objects allows us to adopt some valuable techniques, namely, **Inheritance** (objects can inherit features from other objects), **Polymorphism** (objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ), and **Encapsulation** (each object is responsible for specific tasks).






### Use of Object oriented programming
Let's say we want to create an application for a car wash. We can have different services depending on the type of car (Regular, SUV, Sport). A user can select what type of service he wants depending on the available services for its type.
```
class Car{
  model,
  color,
  year,
  plate,
  getServices()
}
class RegularCar extends Car {
  availableServices [
    "Wash",
    "Wax",
    "Vacuum"
  ]
}
class SUVCar extends Car {
  "WashXL",
  "WaxXL",
  "VacuumXL"
}
class SportCar extends Car {
  "Wash",
  "Wax",
  "Vacuum",
  "Leather Polish"
}
class washJob {
  car,
  selectedServices [],
  addCar(make, model, color, year, plate. type)
  addService(serviceType)
}
```



##### EZEBUIRO UCHECHUKWU VINCENT #####