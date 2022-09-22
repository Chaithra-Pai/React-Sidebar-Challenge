import { Menu } from "./Menu";

export default function MenuWrapper() {
  const menuConfig = [
    { title: "Home" },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"]
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"]
    }
  ];

  return (
    <div className="menu-wrapper">
      <Menu menuConfig={menuConfig} />
    </div>
  );
  
}
