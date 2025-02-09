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



//     return (
//         <div className={className}>
//             <Card >
//                 <div className={cls.imageWrapper}>
//
//                     <Text text={card.results[0].name} className={cls.data}/>
//                 </div>
//                 <div className={cls.infoWrapper}>
//
//                 </div>
//                 <Text text={card.results[0].created} className={cls.title}/>
//             </Card>
//         </div>
//     );
// });
    return (
        <div className={className}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Text text={card.results[0].name} className={cls.data} />
                </div>
                <div className={cls.infoWrapper}></div>
                <Text text={card.results[0].created} className={cls.title} />
            </Card>
        </div>
    );
});
