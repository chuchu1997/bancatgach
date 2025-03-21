// components/Navbar.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const categories = [
    {
      name: "Electronics",
      href: "/electronics",
      subcategories: [
        {
          title: "Computers",
          href: "/electronics/computers",
          items: [
            { name: "Laptops", href: "/electronics/computers/laptops" },
            { name: "Desktop PCs", href: "/electronics/computers/desktop-pcs" },
            { name: "Tablets", href: "/electronics/computers/tablets" },
            { name: "Monitors", href: "/electronics/computers/monitors" }
          ]
        },
        {
          title: "Phones & Accessories",
          href: "/electronics/phones-accessories",
          items: [
            { name: "Smartphones", href: "/electronics/phones-accessories/smartphones" },
            { name: "Cases", href: "/electronics/phones-accessories/cases" },
            { name: "Chargers", href: "/electronics/phones-accessories/chargers" },
            { name: "Screen Protectors", href: "/electronics/phones-accessories/screen-protectors" }
          ]
        },
        {
          title: "Audio",
          href: "/electronics/audio",
          items: [
            { name: "Headphones", href: "/electronics/audio/headphones" },
            { name: "Speakers", href: "/electronics/audio/speakers" },
            { name: "Microphones", href: "/electronics/audio/microphones" },
            { name: "Home Audio", href: "/electronics/audio/home-audio" }
          ]
        },
        {
          title: "Cameras",
          href: "/electronics/cameras",
          items: [
            { name: "DSLR", href: "/electronics/cameras/dslr" },
            { name: "Mirrorless", href: "/electronics/cameras/mirrorless" },
            { name: "Action Cameras", href: "/electronics/cameras/action-cameras" },
            { name: "Accessories", href: "/electronics/cameras/accessories" }
          ]
        }
      ]
    },
    {
      name: "Fashion",
      href: "/fashion",
      subcategories: [
        {
          title: "Men",
          href: "/fashion/men",
          items: [
            { name: "Shirts", href: "/fashion/men/shirts" },
            { name: "Pants", href: "/fashion/men/pants" },
            { name: "Jackets", href: "/fashion/men/jackets" },
            { name: "Shoes", href: "/fashion/men/shoes" }
          ]
        },
        {
          title: "Women",
          href: "/fashion/women",
          items: [
            { name: "Dresses", href: "/fashion/women/dresses" },
            { name: "Tops", href: "/fashion/women/tops" },
            { name: "Bottoms", href: "/fashion/women/bottoms" },
            { name: "Footwear", href: "/fashion/women/footwear" }
          ]
        },
        {
          title: "Kids",
          href: "/fashion/kids",
          items: [
            { name: "Boys", href: "/fashion/kids/boys" },
            { name: "Girls", href: "/fashion/kids/girls" },
            { name: "Infants", href: "/fashion/kids/infants" },
            { name: "Teens", href: "/fashion/kids/teens" }
          ]
        },
        {
          title: "Accessories",
          href: "/fashion/accessories",
          items: [
            { name: "Watches", href: "/fashion/accessories/watches" },
            { name: "Bags", href: "/fashion/accessories/bags" },
            { name: "Jewelry", href: "/fashion/accessories/jewelry" },
            { name: "Hats", href: "/fashion/accessories/hats" }
          ]
        }
      ]
    },
    {
      name: "Home",
      href: "/home",
      subcategories: [
        {
          title: "Kitchen",
          href: "/home/kitchen",
          items: [
            { name: "Appliances", href: "/home/kitchen/appliances" },
            { name: "Cookware", href: "/home/kitchen/cookware" },
            { name: "Utensils", href: "/home/kitchen/utensils" },
            { name: "Storage", href: "/home/kitchen/storage" }
          ]
        },
        {
          title: "Furniture",
          href: "/home/furniture",
          items: [
            { name: "Living Room", href: "/home/furniture/living-room" },
            { name: "Bedroom", href: "/home/furniture/bedroom" },
            { name: "Dining Room", href: "/home/furniture/dining-room" },
            { name: "Office", href: "/home/furniture/office" }
          ]
        },
        {
          title: "Decor",
          href: "/home/decor",
          items: [
            { name: "Wall Art", href: "/home/decor/wall-art" },
            { name: "Lighting", href: "/home/decor/lighting" },
            { name: "Rugs", href: "/home/decor/rugs" },
            { name: "Plants", href: "/home/decor/plants" }
          ]
        },
        {
          title: "Bathroom",
          href: "/home/bathroom",
          items: [
            { name: "Towels", href: "/home/bathroom/towels" },
            { name: "Shower Curtains", href: "/home/bathroom/shower-curtains" },
            { name: "Bath Accessories", href: "/home/bathroom/bath-accessories" },
            { name: "Storage", href: "/home/bathroom/storage" }
          ]
        }
      ]
    },
    {
      name: "Books",
      href: "/books",
      subcategories: [
        {
          title: "Fiction",
          href: "/books/fiction",
          items: [
            { name: "Mystery", href: "/books/fiction/mystery" },
            { name: "Sci-Fi", href: "/books/fiction/sci-fi" },
            { name: "Fantasy", href: "/books/fiction/fantasy" },
            { name: "Romance", href: "/books/fiction/romance" }
          ]
        },
        {
          title: "Non-Fiction",
          href: "/books/non-fiction",
          items: [
            { name: "Biography", href: "/books/non-fiction/biography" },
            { name: "History", href: "/books/non-fiction/history" },
            { name: "Science", href: "/books/non-fiction/science" },
            { name: "Self-Help", href: "/books/non-fiction/self-help" }
          ]
        },
        {
          title: "Children's",
          href: "/books/childrens",
          items: [
            { name: "Picture Books", href: "/books/childrens/picture-books" },
            { name: "Chapter Books", href: "/books/childrens/chapter-books" },
            { name: "Educational", href: "/books/childrens/educational" },
            { name: "Young Adult", href: "/books/childrens/young-adult" }
          ]
        },
        {
          title: "Textbooks",
          href: "/books/textbooks",
          items: [
            { name: "School", href: "/books/textbooks/school" },
            { name: "College", href: "/books/textbooks/college" },
            { name: "Professional", href: "/books/textbooks/professional" },
            { name: "Reference", href: "/books/textbooks/reference" }
          ]
        }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                BrandName
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {categories.map((category) => (
                <div 
                  key={category.name} 
                  className="relative"
                  onMouseEnter={() => setActiveCategory(category.name )}
                  onMouseLeave={() => setActiveCategory('')}
                >
                  <Link 
                    href={category.href}
                    className={`${
                      activeCategory === category.name 
                        ? 'border-indigo-500 text-gray-900' 
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16`}
                  >
                    {category.name}
                  </Link>
                  
                  {/* Mega Menu */}
                  {activeCategory === category.name && (
                    <div className="absolute left-0 mt-0.5 w-screen max-w-7xl z-10">
                      <div className="grid grid-cols-4 gap-5 bg-white p-8 shadow-lg rounded-b-lg">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory.title} className="space-y-3">
                            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                              <Link href={subcategory.href} className="hover:text-indigo-600">
                                {subcategory.title}
                              </Link>
                            </h3>
                            <ul className="space-y-2">
                              {subcategory.items.map((item) => (
                                <li key={item.name}>
                                  <Link 
                                    href={item.href}
                                    className="text-gray-600 hover:text-indigo-600"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;