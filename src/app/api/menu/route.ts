export async function GET() {
  const menuItems = [
    { title: "Home", url: "/home" },
    { title: "About", url: "/about" },
    { title: "Treatment", url: "/treatment" },
    { title: "Doctors", url: "/doctors" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "/contact" },
  ];

  return Response.json(menuItems);
}