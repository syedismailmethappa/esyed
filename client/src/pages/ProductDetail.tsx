import { useRoute } from "wouter";
import { PRODUCTS } from "@/lib/mock";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NotFound from "./not-found";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const { toast } = useToast();
  const cart = useCart();

  if (!match) return <NotFound />;

  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) return <NotFound />;

  const handleAddToCart = () => {
    cart.addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container-width py-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden border">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`aspect-square rounded-lg overflow-hidden border cursor-pointer ${i === 0 ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'}`}>
                <img 
                  src={product.image} 
                  alt={`View ${i}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="rounded-full px-3">{product.category}</Badge>
              {product.stock < 5 && <Badge variant="destructive">Low Stock</Badge>}
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center text-yellow-500">
                <Star className="fill-current w-4 h-4" />
                <Star className="fill-current w-4 h-4" />
                <Star className="fill-current w-4 h-4" />
                <Star className="fill-current w-4 h-4" />
                <Star className="fill-current w-4 h-4 opacity-50" />
                <span className="text-foreground ml-2 font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">{product.reviews} reviews</span>
            </div>
          </div>

          <div className="text-3xl font-bold mb-8">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 h-14 text-lg" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-14 w-14 p-0">
                <Heart className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Free Shipping</h4>
                <p className="text-xs text-muted-foreground mt-1">On all orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <RefreshCw className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Free Returns</h4>
                <p className="text-xs text-muted-foreground mt-1">Within 30 days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">2 Year Warranty</h4>
                <p className="text-xs text-muted-foreground mt-1">Full coverage included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
