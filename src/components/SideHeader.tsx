import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import logo from "@/assets/logo.svg";

const SideHeader = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="flex flex-row items-center gap-2 p-4 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <p className="text-lg font-semibold">
            Collab<span className="text-primary">Flow</span>
          </p>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SideHeader;
