# Shadcn UI with Next.js – Beginner Learning Project

A beginner-friendly project for learning how to build modern user interfaces using **Shadcn UI**, **Next.js**, and **Tailwind CSS**.

This project demonstrates how to install and use common Shadcn UI components, including buttons, cards, forms, tables, dialogs, and dashboard layouts.

---

## 📚 Learning Objectives

By completing this project, you will learn how to:

* Set up a Next.js application
* Install and configure Shadcn UI
* Add and customize Shadcn components
* Build reusable UI elements
* Create forms and input fields
* Display data using tables
* Implement dialog interactions
* Combine multiple components into a dashboard

---

## 🛠 Prerequisites

Before starting, you should be familiar with:

* Basic HTML
* Basic React
* Next.js fundamentals
* Components and Props

---

## 🚀 Project Setup

### 1. Create a Next.js Project

```bash
npx create-next-app@latest shadcn-demo
```

Navigate into the project:

```bash
cd shadcn-demo
```

Start the development server:

```bash
npm run dev
```

### 2. Initialize Shadcn UI

```bash
npx shadcn@latest init
```

Follow the recommended configuration options.

---

## 📁 Project Structure

After initialization, your project will contain folders similar to:

```text
components/
lib/
```

When components are added, they are copied directly into your project:

```text
components/
└── ui/
    └── button.tsx
```

This allows complete customization of component source code.

---

## 🎯 Module 1: Buttons

Install the Button component:

```bash
npx shadcn@latest add button
```

Import:

```tsx
import { Button } from "@/components/ui/button";
```

Usage:

```tsx
<Button>Click Me</Button>
```

### Practice

Create buttons for:

* Login
* Register
* Contact

### Challenge

Build a page containing multiple action buttons.

---

## 🎯 Module 2: Cards

Install the Card component:

```bash
npx shadcn@latest add card
```

Example:

```tsx
<Card>
  <CardHeader>
    <CardTitle>React Course</CardTitle>
  </CardHeader>

  <CardContent>
    Learn React from scratch.
  </CardContent>
</Card>
```

### Real-World Applications

* Product Cards
* Course Cards
* Team Profiles
* Blog Summaries

### Practice

Create three course cards.

---

## 🎯 Module 3: Forms and Inputs

Install components:

```bash
npx shadcn@latest add input
npx shadcn@latest add label
```

Example:

```tsx
<Label>Email</Label>
<Input placeholder="Enter your email" />
```

### Registration Form

Include the following fields:

* Name
* Email
* Password

Add a submit button.

### Practice

Create a student registration form.

---

## 🎯 Module 4: Tables

Install:

```bash
npx shadcn@latest add table
```

Example Data:

| ID | Name  | Course  |
| -- | ----- | ------- |
| 1  | Kasun | React   |
| 2  | Nimal | Next.js |
| 3  | Amal  | Node.js |

### Real-World Applications

* Student Lists
* Orders
* Employees
* Products

### Practice

Build a student management table.

---

## 🎯 Module 5: Dialogs

Install:

```bash
npx shadcn@latest add dialog
```

### Common Use Cases

* Delete Confirmation
* Profile Information
* Terms & Conditions

### Example Flow

```text
User Clicks Delete
        ↓
Dialog Opens
        ↓
User Confirms
```

### Practice

Create a delete confirmation popup.

---

## 🎯 Module 6: Dashboard

Combine multiple components:

* Card
* Button
* Table

### Dashboard Example

```text
Total Students: 150
Total Courses: 12
Total Instructors: 8
```

### Features

* Statistics cards
* Student table
* Action buttons

### Practice

Build a simple admin dashboard.

---

## ✅ Self-Evaluation Checklist

After completing the exercises, verify that you can:

* [ ] Install Shadcn UI
* [ ] Add new components
* [ ] Import components correctly
* [ ] Create forms
* [ ] Create tables
* [ ] Create dialogs
* [ ] Build reusable UI components
* [ ] Build a complete page using multiple components

---

## 📖 Next Steps

Explore additional Shadcn UI components:

* Select
* Dropdown Menu
* Command Palette
* Calendar
* Charts
* Accordion
* Tabs
* Navigation Menu

These components are widely used in modern production applications.

---

## 🎉 Conclusion

This project provides a practical introduction to Shadcn UI and Next.js. By completing each module and exercise, you will gain hands-on experience building reusable, customizable, and modern user interfaces.
