import SignupForm from "@/features/auth/signup/SignupForm";
import logo from "../assets/logo.svg";
import signupBanner from "../assets/signup-banner.webp";

const SignUp = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <img src={logo} alt="logo" />
            </div>
            CollabFlow
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={signupBanner}
          alt="Sign up banner"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  );
};

export default SignUp;
