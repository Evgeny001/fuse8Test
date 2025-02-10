import { Input } from "@/shared/ui/Input/Input";
import { CardList } from "@/entities/Card/CardList/ui/CardList";
import cls from './CardPage.module.scss';
import { useGetCardsQuery } from "@/services/cards-api";
import { useState } from "react";
import { Text, TextSize, TextTheme } from "@/shared/ui/Text/Text";

export const CardPage = () => {
    const [search, setSearch] = useState(''); // Для отображения в input
    const [query, setQuery] = useState(''); // Для запроса

    // Запрос с использованием кешированных данных
    const { data, error, isLoading, isFetching } = useGetCardsQuery(query, {
        skip: query.length < 4, // Пропускаем запрос, если длина запроса меньше 4 символов
    });

    // Обработчик изменения инпута
    const handleSearchChange = (value: string) => {
        setSearch(value); // Обновляем строку поиска
        if (value.length >= 4) {
            setQuery(value); // Если длина больше 3, отправляем запрос
        } else {
            setQuery(''); // Если меньше 4, очищаем запрос
        }
    };

    return (
        <div className={cls.container}>
            <div className={cls.inputWrapper}>
                <Input
                    placeholder="Search characters..."
                    className={cls.input}
                    onChange={handleSearchChange}
                    value={search}
                    autoFocus
                />
                {/* Если есть результаты, показываем количество найденных персонажей */}
                {query.length >= 4 && !isLoading && !isFetching && !error && data && data.results?.length > 0 && (
                    <Text text={`Found characters: ${data.results.length || 0}`} theme={TextTheme.ADDITIONAL} size={TextSize.S} />
                )}
            </div>

            {/* Если данные ещё загружаются */}
            {isLoading && !isFetching && <div>Loading...</div>}

            {/* Ошибка при запросе */}
            {error && <div>Error occurred</div>}

            {/* Если нет ошибки и результаты найдены, отображаем карточки */}
            {query.length >= 4 && !isLoading && !isFetching && !error && data && data.results?.length > 0 && (
                <CardList card={data.results} />
            )}
        </div>
    );
};
