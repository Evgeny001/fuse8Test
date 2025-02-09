import {CardType} from "@/pages/ui/CardPage/card.types";
import {Input} from "@/shared/ui/Input/Input";
import {CardList} from "@/entities/Card/CardList/ui/CardList";
import cls from './CardPage.module.scss'

export const CardPage = () => {

const card: CardType = {
    info: {
        count: 29,
        pages: 2,
        // next: "https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive",
        next: "https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive",
        prev: null
    },
    results: [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                //...
            ],
            url: "https://rickandmortyapi.com/api/character/1",
            created: "2017-11-04T18:48:46.250Z"
        },
    ]
};

return (
    <>
        <div className={cls.inputWrapper}>
            <Input placeholder="gi" className={cls.input}
            />
        </div>
        <CardList
            card={new Array(16).fill(0).map((_, index) => ({
                ...card,
                id: String(index),
            }))}
        />
    </>
)
}
