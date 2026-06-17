import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="button-group mt-40">
        <Button variant="default" className="mr-2">Login</Button>
        <Button variant="default" className="mr-2">Register</Button>
        <Button variant="default" className="mr-2">Contact</Button>
      </div>
    </div>
  );
}