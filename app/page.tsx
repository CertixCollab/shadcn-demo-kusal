import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
      <div className="border-b border-gray-300 w-full max-w-4xl mb-8">
        <div className="text-4xl font-bold mb-8">Cards</div>
        <div className="card-group mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{cards[0].title}</CardTitle>
            </CardHeader>
            <CardContent>{cards[0].description}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{cards[1].title}</CardTitle>
            </CardHeader>
            <CardContent>{cards[1].description}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{cards[2].title}</CardTitle>
            </CardHeader>
            <CardContent>{cards[2].description}</CardContent>
          </Card>
        </div>
      </div>
      <div className="border-b border-gray-300 w-full max-w-4xl mb-8"></div>
    </div>
  );
}
