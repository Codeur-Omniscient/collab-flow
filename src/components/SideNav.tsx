import {
  LayoutDashboard,
  SquareKanban,
  ArrowLeftRight,
  LucideIcon,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import { NavLink } from "react-router-dom";

interface SideNavItems {
  title: string;
  url: string;
  icon: LucideIcon;
}

const SideNav = () => {
  const items: SideNavItems[] = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Project",
      url: "/project",
      icon: SquareKanban,
    },
    {
      title: "Invitation",
      url: "/invitation",
      icon: ArrowLeftRight,
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-1">
          {items.map((item) => (
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                isActive ? "rounded-md bg-primary" : ""
              }
              key={item.title}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-base hover:bg-primary hover:text-sidebar-primary-foreground"
                >
                  <div>
                    <item.icon />
                    <span>{item.title}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </NavLink>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SideNav;
