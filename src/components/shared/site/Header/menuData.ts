import { Menu } from "@/types/Menu"

export const menuData: Menu[] = [
  {
    id: 1,
    title: "ขายดี",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "ร้านค้า",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "ติดต่อ",
    newTab: false,
    path: "/contact",
  },
  {
    id: 4,
    title: "เพจ",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 41,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 42,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 43,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 44,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 45,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 46,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 47,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 48,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
    ],
  },
  {
    id: 5,
    title: "บล็อก",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 51,
        title: "Blog Grid with sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 52,
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 53,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
]
