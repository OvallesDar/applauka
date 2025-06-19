import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center gap-1">
      <h3>404 - Page Not Found</h3>
      <Link to={"/spanish"}>
        <Button variant={"outline"}>Return</Button>
      </Link>
    </div>
  );
}
