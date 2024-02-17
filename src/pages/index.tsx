import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";


export default function Home() {
  return (
    <main style={{padding: '1rem'}}>
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Button variant="default">Click me</Button>
      </Link>
    </main>
  );
}
