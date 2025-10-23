

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

function ProductDisplay({
    product,
    showDescription, 
    showStockStatus,
    onAddToCart,
    children}:ProductDisplayProps) {

    return (
        <>
            <div>
                <img src={product.imageUrl ? product.imageUrl : undefined} alt="product image" />
            </div>
            <div>
                <p>{showDescription ? product.description : null}</p>
                <p>{showStockStatus ? product.inStock : null}</p>
                <button onClick={onAddToCart ? () => onAddToCart(product.id) : undefined}>Add to Cart</button>

            </div>
            {children}
        </>
    );
}

export default ProductDisplay;