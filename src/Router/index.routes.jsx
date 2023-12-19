import AdminRoot from "../Page/Admin/AdminRoot";
import Books from "../Page/Admin/Bookpage/Books";
import AdminDetail from "../Page/Admin/DetailAdmin/AdminDetail";
import Edit from "../Page/Admin/EditPage/Edit";
import HomeAdmin from "../Page/Admin/HomeAdmin/HomeAdmin";
import Basketpage from "../Page/site/Basket/Basketpage";
import CardPage from "../Page/site/CardPage/CardPage";
import Checkout from "../Page/site/CheckOut/Checkout";
import Compare from "../Page/site/ComparePage/Compare";
import Contact from "../Page/site/ContactPage/Contact";
import Detailpage from "../Page/site/Detailpage/Detailpage";
import Home from "../Page/site/Homepage/Home";
import Shoppage from "../Page/site/ShopPage/Shoppage";
import SiteRoot from "../Page/site/SiteRoot";
import Wish from "../Page/site/Wishlist/Wish";
const ROOT = [
   {
      path: "/",
      element: <SiteRoot />,
      children: [
         {
            path: "",
            element: <Home />,
         },
         {
            path: "/:id",
            element: <Detailpage />,
         },
         {
            path: "fav",
            element: <Wish />,
         },
         {
            path: "basket",
            element: <Basketpage />,
         },
         {
            path: "shop",
            element: <Shoppage />,
         },
         {
            path: "contact",
            element: <Contact />,
         },
         {
            path: "check",
            element: <Checkout />,
         },
         {
            path: "cardPage",
            element: <CardPage />,
         },
         {
            path: "compare",
            element: <Compare />,
         },
      ]
   },
   {
      path: "/admin",
      element: <AdminRoot />,
      children: [
         {
            path: "",
            element: <HomeAdmin />,
         },
         {
            path: "books",
            element: <Books />,
         },
         {
            path: "detail/:id",
            element: <AdminDetail />,
         },
         {
            path: "edit/:id",
            element: <Edit />
         },
      ]
   }
]
export default ROOT