import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const cards = [
  { 
    id: "1", 
    title: "React Course", 
    description: "Learn React from scratch." },
  {
    id: "2",
    title: "Next.js Course",
    description: "Learn Next.js from scratch.",
  },
  {
    id: "3",
    title: "Node.js Course",
    description: "Learn Node.js from scratch.",
  },
];

const students = [
  {
    id: "STU001",
    name: "John Doe",
    email: "john.doe@example.com",
    course: "React Course",
  },
  {
    id: "STU002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    course: "Next.js Course",
  },
  {
    id: "STU003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    course: "Node.js Course",
  },
  {
    id: "STU004",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    course: "React Course",
  },
  {
    id: "STU005",
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    course: "Next.js Course",
  }
];

const statistics = [
  { id: "1", title: "Total Students", value: "150" },
  { id: "2", title: "Active Courses", value: "5" },
  { id: "3", title: "Completed Courses", value: "120" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      {/* Buttons Section */}
      <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
        <div className="text-4xl font-bold mb-8">Buttons</div>
        <div className="button-group mt-10 mb-8">
          <Button variant="default" className="mr-2">
            Login
          </Button>
          <Button variant="default" className="mr-2">
            Register
          </Button>
          <Button variant="default" className="mr-2">
            Contact
          </Button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
        <div className="text-4xl font-bold mb-8">Cards</div>
        <div className="card-group mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {cards.map((card) => (
          <Card key={card.id} className="border border-gray-300 shadow-sm">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>{card.description}</CardContent>
          </Card>
          ))}
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
        <div className="text-4xl font-bold mb-8">Registration Form</div>
        <div className="registration-form mt-10 mb-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <>
              <Label htmlFor="name" className=" text-sm font-medium text-gray-700">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                className="mt-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              </>
              <>
              <Label htmlFor="email" className=" text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="mt-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              </>
              <>
              <Label htmlFor="password" className=" text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              </>
              <div className="col-span-2 flex justify-end space-x-4">
                <Button variant="outline" className="w-md">
                  Clear
                </Button>
                <Button variant="default" className="w-md">
                  Submit
                </Button>
              </div>
          </div>
        </div>

        {/* Student Management Table */}
        <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
          <div className="text-4xl font-bold mb-8">Student Management Table</div>
          <div className="student-table mt-10 mb-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Student ID</TableHead>
                  <TableHead className="text-left">Name</TableHead>
                  <TableHead className="text-left">Email</TableHead>
                  <TableHead className="text-left">Course</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.course}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Dialogs and User Interaction */}
        <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
          <div className="text-4xl font-bold mb-8">Dialogs and User Interaction</div>
          <div className="dialog-interaction mt-10 mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Delete a Student</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Delete Confirmation</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this student?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button variant="destructive">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Additional UI Components for Dashboard */}
        <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
          <div className="text-4xl font-bold mb-8">Building a Dashboard</div>
          <div className="additional-ui mt-10 mb-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {statistics.map((card) => (
                <Card key={card.id} className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>{card.value}</CardContent>
                </Card>
              ))}
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Student ID</TableHead>
                  <TableHead className="text-left">Name</TableHead>
                  <TableHead className="text-left">Email</TableHead>
                  <TableHead className="text-left">Course</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.course}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="outline">Previous</Button>
              <Button variant="default">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
