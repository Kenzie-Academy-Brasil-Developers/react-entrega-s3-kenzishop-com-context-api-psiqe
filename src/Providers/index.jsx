import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

export const Providers = ({children}) =>{

  return (
    <ProductsProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ProductsProvider>
  )
}

