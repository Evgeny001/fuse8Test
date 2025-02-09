import {memo} from "react";
import {Card} from "@/shared/ui/Card/Card";
import {Text} from "@/shared/ui/Text/Text";
import {CardType} from "@/pages/ui/CardPage/card.types";
import cls from './CardListItem.module.scss'


interface ArticleListItemProps {
    className?: string;
    card: CardType

}

export const CardListItem = memo((props: ArticleListItemProps) => {
    const { className, card } = props;

    return (
        <div className={className}>
            <Card className={cls.card}>
                <div className={cls.title}>
                    <Text text={card.results[0].name} />
                </div>
                <div className={cls.footer}>
                    <Text text={`Status: ${card.results[0].status}`} />
                    <Text text={`Created: ${card.results[0].created}`}  />
                </div>
            </Card>
        </div>
    );
});
