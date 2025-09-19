interface SubItem {
  title: string;
  description?: string;
  image: string;
  darkImage?:string 
  link?: string;
}

interface MenuItem {
  title: string;
link?:string
  subItems?: SubItem[] | undefined;
}
const menuData:MenuItem[] = [
    {
        title:"معامله",
        subItems:[
            {
                title: "خرید و فروش",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            },
             {
                title: "معاملات تعهدی",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            },
             {
                title: "خرید و فورش آنی",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            },
             {
                title: " تبدیل",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            },
             {
                title: "سابقه معاملات",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            }
        ]
    },
    {
        title:"  قیمت ارز دیحیتال",
        subItems:[
            {
                title: "خرید و فروش",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            }
        ]
    },
     {
        title:"خرید ارز دیجیتال",
        subItems:[
            {
                title: "خرید و فروش",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            }
        ]
    },
    {
        title:"خرید آسان",

    },
    {
        title:"آموزش",
        subItems:[
            {
                title: "خرید و فروش",
                description: "  خرید , فروش و استفاده از رمز ارز" ,
                image: "/images/NavBar/buySell.svg",
                darkImage:"/images/NavBar/dark/buySellDark.svg",
                link: "",
            }
        ]
    },
   
]

export default menuData