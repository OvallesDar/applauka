declare module "@/context/sectionContext" {
  import { Context, ReactNode } from "react";
  import type { Section } from "@/types/section"
  import type { Category } from "@/types/category"
  import type { Product } from "@/types/product"
  
  interface SectionsContextType {
    sections: Section[];
    categories: Category[];
    products: Product[];
    loading: boolean;
    error: string | null;
  }

  export const SectionsContext: Context<SectionsContextType>;
  const SectionsProvider: ({
    children,
  }: {
    children: ReactNode;
  }) => JSX.Element;
  export default SectionsProvider;
}
