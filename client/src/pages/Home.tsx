import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/mock";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("featured");

  const filteredProducts = PRODUCTS.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  ).sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    return 0; // featured default order
  });

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 container-width h-full flex flex-col justify-center text-white space-y-6">
          <span className="font-semibold tracking-wider uppercase text-sm animate-in slide-in-from-bottom-4 duration-500">New Collection 2025</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-2xl animate-in slide-in-from-bottom-4 duration-700 delay-100 leading-tight">
            Redefining <br/> Modern Lifestyle.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg animate-in slide-in-from-bottom-4 duration-700 delay-200">
            Discover our curated selection of premium essentials designed for the way you live today.
          </p>
          <div className="pt-4 animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-white/90">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Explore our latest arrivals and best sellers.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" /> Sort <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortOrder("featured")}>Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOrder("price-asc")}>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOrder("price-desc")}>Price: High to Low</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-medium">No products found</h3>
            <p className="text-muted-foreground mt-2">Try changing your category filter.</p>
            <Button 
              variant="link" 
              onClick={() => setSelectedCategory("All")}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-primary text-primary-foreground py-24 mt-20">
        <div className="container-width text-center space-y-6">
          <h2 className="text-3xl font-bold">Join the movement</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/80">
            Sign up for our newsletter to receive exclusive offers, early access to new drops, and design inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 h-12 rounded-md border-0 bg-primary-foreground/10 px-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-1 focus:ring-white" 
            />
            <Button variant="secondary" size="lg" className="h-12">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
