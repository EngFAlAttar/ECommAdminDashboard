import { Product } from "./products"

const SUBCATEGORIES = [
    {
        name:"all"
    },
    {
        name:"Food"
    },
    {
        name:"Toys"
    },
    {
        name:"Grooming & Hygene"
    },
    {
        name:"Training"
    },
    {
        name:"Accessories"
    },
    {
        name:"Health"
    }
]
const PETS = [
    {
        name:"Birds"
    },
    {
        name:"Cats"
    },
    {
        name:"Dogs"
    },
    {
        name:"Horses"
    },
    {
        name:"Reptiles"
    },
    {
        name:"Rodents"
    },
]
export interface Category{
    id: number,
    name: string,
    image: string,
    children?:Category[]
}

export interface FilterNode{
    name: string,
    children?:FilterNode[]
}

export const FILTER_CATEGORIES: FilterNode[] = [
    {
        name:"pet",
        children: PETS
    },
    {
        name:"category type",
        children: SUBCATEGORIES
    }
]
export const CATEGORIES : Category[] = [
    {
        id: 1,
        name: "birds",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fearfreehappyhomes.com%2Fshould-you-get-a-parrot%2F&psig=AOvVaw0mg7g_1ILqyKeqAQOTxUhM&ust=1745301248080000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDA7f-36IwDFQAAAAAdAAAAABAE",
        children: [
            {
                id:1.1,
                name: SUBCATEGORIES[0].name,
                image: ""

            },
            {
                id:1.2,
                name: SUBCATEGORIES[1].name,
                image: ""

            },
            {
                id:1.3,
                name: SUBCATEGORIES[2].name,
                image: ""

            },
            {
                id:1.4,
                name: SUBCATEGORIES[3].name,
                image: ""

            },
            {
                id:1.5,
                name: SUBCATEGORIES[4].name,
                image: ""

            },
            {
                id:1.6,
                name: SUBCATEGORIES[5].name,
                image: ""

            },

        ]
    },
    {
        id: 2,
        name: "cats",
        image: "https://images.squarespace-cdn.com/content/v1/55c945e0e4b04386fb9f8162/1648394646948-DR7XJ053CMU2PRR6NOTY/cat-family.jpg",
        children: [
            {
                id:2.1,
                name: SUBCATEGORIES[0].name,
                image: ""

            },
            {
                id:2.2,
                name: SUBCATEGORIES[1].name,
                image: ""

            },
            {
                id:2.3,
                name: SUBCATEGORIES[2].name,
                image: ""

            },
            {
                id:2.4,
                name: SUBCATEGORIES[3].name,
                image: ""

            },
            {
                id:2.5,
                name: SUBCATEGORIES[4].name,
                image: ""

            },
            {
                id:2.6,
                name: SUBCATEGORIES[5].name,
                image: ""

            },
            

        ]
    },
    {
        id: 3,
        name: "dogs",
        image: "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
        children: [
            {
                id:3.1,
                name: SUBCATEGORIES[0].name,
                image: ""

            },
            {
                id:3.2,
                name: SUBCATEGORIES[1].name,
                image: ""

            },
            {
                id:3.3,
                name: SUBCATEGORIES[2].name,
                image: ""

            },
            {
                id:3.4,
                name: SUBCATEGORIES[3].name,
                image: ""

            },
            {
                id:3.5,
                name: SUBCATEGORIES[4].name,
                image: ""

            },
            {
                id:3.6,
                name: SUBCATEGORIES[5].name,
                image: ""

            },
        ]
    },
    {
        id: 4,
        name: "horses",
        image: "https://www.zoetisequine.com/assets/images/Mare-and-Foal-Care/Carousel-Images/700A0838_rt2_LR-image01.jpg",
        children: [
            {
                id:4.1,
                name: SUBCATEGORIES[0].name,
                image: ""

            },
            {
                id:4.2,
                name: SUBCATEGORIES[1].name,
                image: ""

            },
            {
                id:4.3,
                name: SUBCATEGORIES[2].name,
                image: ""

            },
            {
                id:4.4,
                name: SUBCATEGORIES[3].name,
                image: ""

            },
            {
                id:4.5,
                name: SUBCATEGORIES[4].name,
                image: ""

            },
            {
                id:4.6,
                name: SUBCATEGORIES[5].name,
                image: ""

            },
        ]
    },
    {
        id: 5,
        name: "reptiles",
        image: "https://www.beverlyhillsvets.com/blog/wp-content/uploads/2017/12/BevHills_iStock-120691488.jpg",
        children: [
            {
                id:5.1,
                name: SUBCATEGORIES[0].name,
                image: ""

            },
            {
                id:5.2,
                name: SUBCATEGORIES[1].name,
                image: ""

            },
            {
                id:5.3,
                name: SUBCATEGORIES[2].name,
                image: ""

            },
            {
                id:5.4,
                name: SUBCATEGORIES[3].name,
                image: ""

            },
            {
                id:5.5,
                name: SUBCATEGORIES[4].name,
                image: ""

            },
            {
                id:5.6,
                name: SUBCATEGORIES[5].name,
                image: ""

            },
        ]
    },
    {
        id: 6,
        name: "rodents",
        image: "https://static.nycgovparks.org/images/pagefiles/171/chipmunk-closeup__6193c1a2c7163.jpeg",
        children: [
            {
                id:6.1,
                name: SUBCATEGORIES[0].name,
                image: ""

            },
            {
                id:6.2,
                name: SUBCATEGORIES[1].name,
                image: ""

            },
            {
                id:6.3,
                name: SUBCATEGORIES[2].name,
                image: ""

            },
            {
                id:6.4,
                name: SUBCATEGORIES[3].name,
                image: ""

            },
            {
                id:6.5,
                name: SUBCATEGORIES[4].name,
                image: ""

            },
            {
                id:6.6,
                name: SUBCATEGORIES[5].name,
                image: ""

            },
        ]
    }
]
