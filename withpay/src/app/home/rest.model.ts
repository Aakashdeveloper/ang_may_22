export interface IRest{
    _id: string,
    restaurant_id: number,
    restaurant_name: string,
    location_id: number,
    state_id: number,
    restaurant_thumb: string,
    average_rating: number,
    rating_text: string,
    cost: number,
    address: string,
    mealTypes: IMealType[],
    cuisines: ICuisineType[],
    image_gallery: string[]
}

export interface IMealType{
    mealtype_id: number,
    mealtype_name: string
}

export interface ICuisineType{
    cuisine_id: number,
    cuisine_name: string
}