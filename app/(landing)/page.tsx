import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandigPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandigPage;