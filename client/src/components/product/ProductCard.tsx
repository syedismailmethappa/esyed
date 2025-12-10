import { Link } from "wouter";
import { Product } from "@/lib/mock";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cart = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    cart.addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative block h-full">
        <Card className="h-full overflow-hidden border-0 bg-transparent shadow-none transition-all duration-300 hover:-translate-y-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.stock < 5 && (
              <Badge variant="destructive" className="absolute top-2 left-2">
                Low Stock
              </Badge>
            )}
            <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Button size="icon" className="rounded-full shadow-lg h-10 w-10" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <CardContent className="p-4 pt-3 space-y-1">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span>{product.category}</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{product.rating}</span>
              </div>
            </div>
            <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
