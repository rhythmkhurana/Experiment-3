import React from "react";

/* =========================
   Base Class: Person
========================= */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getRole() {
    return "Person";
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }
}

/* =========================
   Student Class (Inheritance)
========================= */
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  // Method Overriding
  getRole() {
    return "Student";
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

/* =========================
   Teacher Class (Inheritance)
========================= */
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getRole() {
    return "Teacher";
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

/* =========================
   React Component
========================= */
function PersonHierarchy() {
  // Polymorphism: Different objects, same method name
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  const containerStyle = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #eef2f7, #f8fafc)",
    minHeight: "100vh"
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  };

  return (
    <div style={containerStyle}>
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} style={cardStyle}>
          <h2>
            {person.name} ({person.getRole()})
          </h2>
          <p>Age: {person.age}</p>
          <p style={{ fontStyle: "italic", color: "#555" }}>
            {person.introduce()}
          </p>

          {/* Extra Properties */}
          {person instanceof Student && (
            <p>Major: {person.major}</p>
          )}

          {person instanceof Teacher && (
            <p>Teaching: {person.subject}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default PersonHierarchy;
