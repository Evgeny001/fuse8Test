import { memo } from 'react';
import {CardType} from "@/pages/ui/CardPage/card.types";
import cls from './CardList.module.scss'
import {CardListItem} from "@/entities/Card/CardListItem/ui/CardListItem";

interface ArticleListProps {
    className?: string;
    card: CardType[]
    isLoading?: boolean;
}

export const CardList = memo((props: ArticleListProps) => {
    const { card } = props;

    const renderCard = (card: CardType) => {

        return <CardListItem  card={card} />;
    };

    return (
        <div className={cls.CardList}>
            {card.length > 0 ? card.map(renderCard) : null}
        </div>
    );
});
