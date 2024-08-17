'use client'

import Image from "next/image";
// import Image from "next/image";

// import {items} from  "./items";
// import { useEffect, useState } from "react";

// export default function Home() {

//     const [selectFillters, setSelectFillters] = useState([]);
//     const [filteredItems, setFilteredItems] = useState([]);
//     let filters = ["boy", "girl"];

// const handleFilterClick = (selectedCatagory) => {
//   if (selectFillters.includes(selectedCategory)) {
//     let filters = setSelectFillters.filter((el) => el !== selectedCategory);
//     selectFillters(filters);
//   } else {
//     setSelectFillters([...selectFillters, selectedCategory]);
//   }
// }

//   useEffect(() => {
//     filteredItems();
//   }, [selectFillters]);

//   const filteredItems = () => {
//     if (selectFillters.length > 0) {
//       let tempItems = selectFillters.map((selectedCatagory) => {
//         let temp = items.filter((item) => item.category === selectedCatagory);
//         return temp
//       });
//         selectFillters.includes(tempItems.flat())
//     }
//     setFilteredItems([...filtered]);
//   };

//   return (
//     <main className="items-center justify-between">
//       <div className="">
//       <image src="https://cdn.shopify.com/s/files/1/0646/0211/2255/files/rakhi2024.png?v=1721390384" alt="" className="w-full h-auto " />
//       </div>


// <div className="p-5">

//       <div className="flex justify-between color p-2 pl-8 pr-8 rounded-xl text-center">
//         <div className="text-center">
//           <h2 className="font-bold">Easy Returns</h2>
//           <p className="text-sm">Free pick up</p>
//         </div>

//         <div className="text-center">
//           <h2 className="font-bold">Free Shipping</h2>
//           <p className="text-sm">above Rs 499</p>
//         </div>

//         <div className="text-center">
//           <h2 className="font-bold">New Launch</h2>
//           <p className="text-sm">Every Week</p>
//         </div>
//       </div>
//       </div>


//       <div>
//         <div className="text-center">
//         <img src="https://dsnyonline.com/cdn/shop/files/20211204220655_IMG_1830-scaled.jpg?v=1722759557&width=360" alt="" />
//         <p>Curren lady watch</p>
//         <p>4.500 BD</p>
//         </div>

//         <div className="text-center">
//         <img src="https://dsnyonline.com/cdn/shop/files/20211204220655_IMG_1830-scaled.jpg?v=1722759557&width=360" alt="" />
//         <p>Curren lady watch</p>
//         <p>4.500 BD</p>
//         </div>
//       </div>

//       <div>
//         {filters.map((catagory, idx) => (
//           <button
//             key={`filter ${idx}`}
//             onClick={() => handleFilterClick(catagory)}
//             className={`border-2 border-black rounded-xl p-2 m-2 ${
//               selectFillters?.includes(catagory) ? "active" : ""
//             }`}
//           >
//             {catagory}
//           </button>
//         ))}
//       </div>

//       <div className="">
//         {filteredItems.map((items, idx) => (
//           <div key={`items ${idx}`} className="flex justify-between">
//             {/* <div>
//               <img src={item.image} alt="" />
//             </div> */}
//             <div>
//               <p>{items.name}</p>
//               <p>{items.price}</p>
//             </div>
//           </div>
//         ))}

//       </div>

//       </main>
//   );
// }





import { useEffect, useState, useCallback, useMemo } from "react";

type Item = {
    name: string;
    price: string;
    content: string;
    img: string;
    category: string;
};


export default function Home() {
    const [selectFilters, setSelectFilters] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState([]);

    
    const items = Item[] = useMemo(() => [
        { name: 'Girls Satin High-Low...', price: '₹2,849', content: 'content1', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/dddd1b2865e4743e17154b21575f4f4d.webp", category: 'girl' },
        { name: 'Boys Lapel Brown Plaid...', price: '₹2,399', content: 'content2', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/dabfff17047b2d76c845a69dd57ec88a.webp", category: 'boy' },
        { name: 'Girls Red Embroidered...', price: '₹2,099', content: 'content3', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/629d9a36e5947ea88236f8c99ff5cd3e.webp", category: 'girl' },
        { name: 'Boys Brown Long Sleeves...', price: '₹2,099', content: 'content4', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/6bb46474e2564538b6e41b685198c141.webp", category: 'boy' },
        { name: 'Girls Red Tail Princess...', price: '₹2,849', content: 'content5', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/92f593c522261914ecf5060773382052.webp", category: 'girl' },
        { name: 'Girls Red Tail Princess...', price: '₹2,849', content: 'content6', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/bcb3d3444e4fbdd1cd46d56cb585dde8.webp", category: 'boy' },
        { name: 'Girls Pink Flower Mesh...', price: '₹1,999', content: 'content7', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/7caafa516303bc3c1d88cac1669b5491.webp", category: 'girl' },
        { name: 'Girls Pink Flower Mesh...', price: '₹1,999', content: 'content8', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/fd5aae85fbccc0bff5296ea5d302a1ee.webp", category: 'boy' },
        // { name: 'Girls Pink Fluffy Ombre...', price: '₹2,299', content: 'content9', img: "https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/a3479348360431eff835642d0701f880.webp", category: 'girl' },
    ], []);
    
    const filters = ["boy", "girl"];

    const handleFilterClick = (selectedCategory: string) => {
        if (selectFilters.includes(selectedCategory)) {
            const updatedFilters = selectFilters.filter((el) => el !== selectedCategory);
            setSelectFilters(updatedFilters);
        } else {
            setSelectFilters([...selectFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        const updateFilteredItems = () => {
            if (selectFilters.length > 0) {
                const tempItems = items.filter((item) => selectFilters.includes(item.category));
                setFilteredItems(tempItems);
            } else {
                setFilteredItems(items);
            }
        };
        updateFilteredItems();
    }, [selectFilters, items]);

    const updateFilteredItems = useCallback(() => {
        if (selectFilters.length > 0) {
            const tempItems = items.filter((item) => selectFilters.includes(item.category));
            setFilteredItems(tempItems);
        } else {
            setFilteredItems(items); // Show all items if no filter is selected
        }
    }, [selectFilters, items]);

    return (
        <main className="items-center justify-between">
            <div className="h-100 overflow-hidden">
                <Image src="https://cdn.shopify.com/s/files/1/0646/0211/2255/files/character_shop_msite.jpg?v=1719821091" alt="" className="w-full h-auto" />
            </div>

            <div className="p-5">
                <div className="flex justify-between color p-2 pl-8 pr-8 rounded-xl text-center">
                    <div className="text-center">
                        <h2 className="font-bold">Easy Returns</h2>
                        <p className="text-sm">Free pick up</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold">Free Shipping</h2>
                        <p className="text-sm">above Rs 499</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold">New Launch</h2>
                        <p className="text-sm">Every Week</p>
                    </div>
                </div>
            </div>

            <div className="pt-5">
              <p className="text-center text-xl font-bold">New Arrivals</p>
                {filters.map((category, idx) => (
                    <button
                        key={`filter ${idx}`}
                        onClick={() => handleFilterClick(category)}
                        className={`border-2 border-black rounded-xl p-2 m-2 ${selectFilters.includes(category) ? "active" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-4 p-2">
                {filteredItems.map((item, idx) => (
                    <div key={`item ${idx}`} className="flex justify-between">
                        <div className="text-center">
                          <div>
                          <img className="rounded-xl" src={item.img} alt="" />
                          </div>
                           <div className="pt-2">
                            <p>{item.name}</p>
                            <p className="font-bold">{item.price}</p>
                          </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-4 p-2 text-center">
              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/aa154eca255fcd4217dc50a29d1392e4.webp" alt="" />
                <p>Sets Boys</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/a8657c7a31ae4bb016473d7b153c0f27.webp" alt="" />
                <p>T-shirts</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/59782e7a30ba07d9dfbd4e331d735e23.webp" alt="" />
                <p>Shirts</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/8259d544f0463145461df9340a1ace73.webp" alt="" />
                <p>Denims</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/a64656ada198a6dce273a31ef45a228a.webp" alt="" />
                <p>Partywear</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/c6f25f9dc1f0f0a1cdefc08a650dade0.webp" alt="" />
                <p>Shorts & Bermudas</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/74e29d86077cff1b052030c5fd192bd6.webp" alt="" />
                <p>Sportswear</p>
              </div>

              <div>
                <Image src="https://dxtqjdp4acos7.cloudfront.net/images/scale/2x/5800f6b80695776a25f177294678607c.webp" alt="" />
                <p>Accessories</p>
              </div>
            </div>
        </main>
    );
}
