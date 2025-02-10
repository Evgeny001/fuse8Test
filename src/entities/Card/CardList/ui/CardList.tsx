import { memo } from 'react';
import cls from './CardList.module.scss'
import {CardListItem} from "@/entities/Card/CardListItem/ui/CardListItem";

interface ArticleListProps {
    className?: string;
    card: any
    isLoading?: boolean;
}

export const CardList = memo((props: ArticleListProps) => {
    const { card } = props;

    const renderCard = (card: any) => {

        return <CardListItem  card={card} className={cls.CardListItem} />;
    };

    return (
        <div className={cls.CardList}>
            {card.length > 0 ? card.map(renderCard) : null}
        </div>
    );
});
