export namespace IEntity {
    export interface Rating {
      rate: number;
      count: number;
    }
  
    export interface Product {
      id: string;
      title: string;
      price: number;
      category: string;
      description: string;
      image: string;
      rating: Rating;
    }
  
    export interface ProductProps extends Product {}
}
  