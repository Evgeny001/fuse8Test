import { memo } from 'react'
import { Card } from '@/shared/ui/Card/Card'
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { Result} from '@/pages/ui/CardPage/card.types'
import cls from './CardListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  card: Result
}

export const CardListItem = memo((props: ArticleListItemProps) => {
    const { className, card } = props;

    return (
        <div className={className}>
            <Card className={cls.card}>
                <article className={cls.title}>
                    <Text text={card.name} theme={TextTheme.PRIMARY} size={TextSize.L}/>
                </article>
                <div className={cls.footer}>
                    <Text text={`Status: ${card.status}`} theme={TextTheme.ADDITIONAL} size={TextSize.S}/>
                    <Text text={`Created: ${card.created}`} theme={TextTheme.ADDITIONAL}  size={TextSize.S} align={TextAlign.RIGHT}/>
                </div>
            </Card>
        </div >
    );
});
