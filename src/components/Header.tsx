import { Bell } from "lucide-react";
import { NavUser } from "./nav-user";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";

const Header = () => {
  const USER = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
      <div className="flex grow items-center justify-between gap-2">
        <p className="">Welcome back,{USER.name}</p>
        <div className="flex items-center gap-2">
          <Button variant="ghost">
            <Bell />
          </Button>
          <NavUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
