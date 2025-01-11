import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter all information to create an account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="picture">Avatar</Label>
          <Input
            id="picture"
            type="file"
            className=" file:mr-1 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-primary file:text-foreground px-0 h-10 border-none"
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?
        <Link to="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
