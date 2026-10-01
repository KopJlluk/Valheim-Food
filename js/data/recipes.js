export const recipes = [
    // ==================== 1. ЧЁРНЫЙ ЛЕС (BLACK FOREST) ====================
    {
        id: 'deer_stew',
        name: 'Рагу из оленины',
        category: 'food',
        type: 'hp',
        biome: 'blackforest',
        stats: { hp: 45, stamina: 15, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Мясо оленя', amount: 1 },
            { name: 'Черника', amount: 1 },
            { name: 'Морковь', amount: 1 }
        ]
    },
    {
        id: 'minced_meat_sauce',
        name: 'Соус с мясным фаршем',
        category: 'food',
        type: 'hp',
        biome: 'blackforest',
        stats: { hp: 40, stamina: 13, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Мясо кабана', amount: 1 },
            { name: 'Мясо оленя', amount: 1 },
            { name: 'Морковь', amount: 1 }
        ]
    },
    {
        id: 'pulled_bear',
        name: 'Рваная медвежатина',
        category: 'food',
        type: 'hp',
        biome: 'blackforest',
        stats: { hp: 37, stamina: 16, duration: '30м' },
        yield: 1,
        ingredients: [
            { name: 'Медвежатина', amount: 1 },
            { name: 'Морковь', amount: 2 },
            { name: 'Черника', amount: 1 }
        ]
    },
    {
        id: 'boar_jerky',
        name: 'Вяленая кабанина',
        category: 'food',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 23, stamina: 23, duration: '30м' },
        yield: 2,
        ingredients: [
            { name: 'Мясо кабана', amount: 1 },
            { name: 'Мёд', amount: 1 }
        ]
    },
    {
        id: 'queens_jam',
        name: 'Королевский джем',
        category: 'food',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 14, stamina: 40, duration: '20м' },
        yield: 4,
        ingredients: [
            { name: 'Малина', amount: 8 },
            { name: 'Черника', amount: 8 }
        ]
    },
    {
        id: 'carrot_soup',
        name: 'Морковный суп',
        category: 'food',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 15, stamina: 45, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Морковь', amount: 3 },
            { name: 'Грибы', amount: 1 }
        ]
    },
    {
        id: 'mead_minor_health',
        name: 'Малое зелье здоровья',
        category: 'mead',
        type: 'hp',
        biome: 'blackforest',
        stats: { hp: 50, stamina: 0, duration: 'мгновенно' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Черника', amount: 5 },
            { name: 'Малина', amount: 10 },
            { name: 'Одуванчик', amount: 1 }
        ]
    },
    {
        id: 'mead_minor_stamina',
        name: 'Малое зелье выносливости',
        category: 'mead',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 80, duration: 'мгновенно' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Малина', amount: 10 },
            { name: 'Жёлтый гриб', amount: 10 }
        ]
    },
    {
        id: 'meadow_boar_roast',
        name: 'Луговой кабан на вертеле',
        category: 'feast',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 35, stamina: 35, duration: '50м' },
        yield: 1,
        ingredients: [
            { name: 'Приготовленное мясо оленя', amount: 2 },
            { name: 'Приготовленное мясо кабана', amount: 5 },
            { name: 'Одуванчик', amount: 4 },
            { name: 'Смесь лесных трав', amount: 1 }
        ]
    },
    {
        id: 'black_forest_feast',
        name: 'Пиршество Чёрного леса',
        category: 'feast',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 40, stamina: 40, duration: '50м' },
        yield: 1,
        ingredients: [
            { name: 'Рагу из оленины', amount: 2 },
            { name: 'Морковный суп', amount: 2 },
            { name: 'Королевский джем', amount: 2 },
            { name: 'Смесь лесных трав', amount: 1 }
        ]
    },
    {
        id: 'mead_tasty',
        name: 'Вкусная медовуха',
        category: 'mead',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 0, duration: '10с (+100% реген вынос, -50% реген HP)' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Малина', amount: 10 },
            { name: 'Черника', amount: 5 }
        ]
    },
    {
        id: 'mead_poison_resist',
        name: 'Медовуха-сопротивление яду',
        category: 'mead',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 0, duration: '10м' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Чертополох', amount: 5 },
            { name: 'Хвост никса', amount: 1 },
            { name: 'Уголь', amount: 10 }
        ]
    },

    // ==================== 2. БОЛОТА (SWAMP) ====================
    {
        id: 'sausages',
        name: 'Колбаски',
        category: 'food',
        type: 'hp',
        biome: 'swamp',
        stats: { hp: 55, stamina: 18, duration: '25м' },
        yield: 4,
        ingredients: [
            { name: 'Кишки', amount: 2 },
            { name: 'Мясо кабана', amount: 1 },
            { name: 'Чертополох', amount: 4 }
        ]
    },
    {
        id: 'turnip_stew',
        name: 'Рагу из репы',
        category: 'food',
        type: 'stamina',
        biome: 'swamp',
        stats: { hp: 18, stamina: 55, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Репа', amount: 3 },
            { name: 'Мясо кабана', amount: 1 }
        ]
    },
    {
        id: 'black_soup',
        name: 'Чёрный суп',
        category: 'food',
        type: 'hp',
        biome: 'swamp',
        stats: { hp: 50, stamina: 17, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Туша драуга', amount: 1 },
            { name: 'Мёд', amount: 1 },
            { name: 'Репа', amount: 1 }
        ]
    },
    {
        id: 'swamp_dwellers_delight',
        name: 'Лакомство болотного жителя',
        category: 'feast',
        type: 'balanced',
        biome: 'swamp',
        stats: { hp: 35, stamina: 35, duration: '50м' },
        yield: 1,
        ingredients: [
            { name: 'Колбаски', amount: 8 },
            { name: 'Туша драуга', amount: 4 },
            { name: 'Рагу из репы', amount: 2 },
            { name: 'Смесь лесных трав', amount: 1 }
        ]
    },
    {
        id: 'muckshake',
        name: 'Кровавая мэри',
        category: 'food',
        type: 'stamina',
        biome: 'swamp',
        stats: { hp: 16, stamina: 50, duration: '20м' },
        yield: 1,
        ingredients: [
            { name: 'Слизь', amount: 1 },
            { name: 'Морозная железа', amount: 2 },
            { name: 'Мёд', amount: 1 }
        ]
    },
    {
        id: 'mead_medium_health',
        name: 'Среднее зелье здоровья',
        category: 'mead',
        type: 'hp',
        biome: 'swamp',
        stats: { hp: 75, stamina: 0, duration: 'мгновенно' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Кровь', amount: 4 },
            { name: 'Малина', amount: 10 },
            { name: 'Одуванчик', amount: 1 }
        ]
    },
    // ==================== 3. ГОРЫ (MOUNTAIN) ====================
    {
        id: 'wolf_skewer',
        name: 'Волчий шашлык',
        category: 'food',
        type: 'hp',
        biome: 'mountain',
        stats: { hp: 65, stamina: 21, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Мясо волка', amount: 1 },
            { name: 'Грибы', amount: 2 },
            { name: 'Змеиное мясо', amount: 1 }
        ]
    },
    {
        id: 'eyescream',
        name: 'Глаз-мороженое',
        category: 'food',
        type: 'stamina',
        biome: 'mountain',
        stats: { hp: 21, stamina: 65, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Глаз грейдворфа', amount: 3 },
            { name: 'Морозная железа', amount: 1 }
        ]
    },
    {
        id: 'onion_soup',
        name: 'Луковый суп',
        category: 'food',
        type: 'stamina',
        biome: 'mountain',
        stats: { hp: 20, stamina: 60, duration: '25м' },
        yield: 1,
        ingredients: [{ name: 'Лук', amount: 3 }]
    },
    {
        id: 'mead_frost_resist',
        name: 'Медовуха-сопротивление морозу',
        category: 'mead',
        type: 'balanced',
        biome: 'mountain',
        stats: { hp: 0, stamina: 0, duration: '10м' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Чертополох', amount: 5 },
            { name: 'Кровь', amount: 2 },
            { name: 'Глаз грейдворфа', amount: 1 }
        ]
    },

    // ==================== 4. РАВНИНЫ (PLAINS) ====================
    {
        id: 'lox_pie',
        name: 'Пирог из локса',
        category: 'food',
        type: 'hp',
        biome: 'plains',
        stats: { hp: 75, stamina: 24, duration: '30м' },
        yield: 1,
        ingredients: [
            { name: 'Мясо локса', amount: 2 },
            { name: 'Морошка', amount: 2 },
            { name: 'Ячменная мука', amount: 4 }
        ]
    },
    {
        id: 'blood_pudding',
        name: 'Кровяной пудинг',
        category: 'food',
        type: 'hp',
        biome: 'plains',
        stats: { hp: 80, stamina: 26, duration: '30м' },
        yield: 1,
        ingredients: [
            { name: 'Кровь', amount: 2 },
            { name: 'Ячменная мука', amount: 4 },
            { name: 'Чертополох', amount: 2 }
        ]
    },
    {
        id: 'bread',
        name: 'Хлеб',
        category: 'food',
        type: 'stamina',
        biome: 'plains',
        stats: { hp: 25, stamina: 75, duration: '25м' },
        yield: 1,
        ingredients: [{ name: 'Ячменная мука', amount: 10 }]
    },
    {
        id: 'fish_wraps',
        name: 'Рыбные рулетики',
        category: 'food',
        type: 'stamina',
        biome: 'plains',
        stats: { hp: 70, stamina: 23, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Сырая рыба', amount: 2 },
            { name: 'Ячменная мука', amount: 4 }
        ]
    },
    {
        id: 'mead_major_stamina',
        name: 'Большое зелье выносливости',
        category: 'mead',
        type: 'stamina',
        biome: 'plains',
        stats: { hp: 0, stamina: 160, duration: 'мгновенно' },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Морошка', amount: 10 },
            { name: 'Жёлтый гриб', amount: 10 }
        ]
    },

    // ==================== 5. ТУМАННЫЕ ЗЕМЛИ (MISTLANDS) ====================
    {
        id: 'meat_platter',
        name: 'Мясное ассорти',
        category: 'food',
        type: 'hp',
        biome: 'mistlands',
        stats: { hp: 85, stamina: 28, duration: '30м' },
        yield: 1,
        ingredients: [
            { name: 'Мясо Искателя', amount: 1 },
            { name: 'Зайчатина', amount: 1 },
            { name: 'Курятина', amount: 1 }
        ]
    },
    {
        id: 'honey_glazed_chicken',
        name: 'Курица в медовой глазури',
        category: 'food',
        type: 'hp',
        biome: 'mistlands',
        stats: { hp: 80, stamina: 26, duration: '30м' },
        yield: 1,
        ingredients: [
            { name: 'Курятина', amount: 1 },
            { name: 'Мёд', amount: 3 },
            { name: 'Вересковый королевский гриб', amount: 2 }
        ]
    },
    {
        id: 'misthare_supreme',
        name: 'Зайчатина по-туманному',
        category: 'food',
        type: 'hp',
        biome: 'mistlands',
        stats: { hp: 85, stamina: 28, duration: '30м' },
        yield: 1,
        ingredients: [
            { name: 'Зайчатина', amount: 1 },
            { name: 'Вересковый королевский гриб', amount: 2 },
            { name: 'Морковь', amount: 2 }
        ]
    },
    {
        id: 'salad',
        name: 'Салат',
        category: 'food',
        type: 'stamina',
        biome: 'mistlands',
        stats: { hp: 29, stamina: 85, duration: '25м' },
        yield: 3,
        ingredients: [
            { name: 'Вересковый королевский гриб', amount: 3 },
            { name: 'Лук', amount: 3 },
            { name: 'Семена нифльспарагуса', amount: 3 }
        ]
    },
    {
        id: 'mushroom_omelette',
        name: 'Грибной омлет',
        category: 'food',
        type: 'stamina',
        biome: 'mistlands',
        stats: { hp: 28, stamina: 85, duration: '25м' },
        yield: 1,
        ingredients: [
            { name: 'Яйцо', amount: 3 },
            { name: 'Вересковый королевский гриб', amount: 3 }
        ]
    },
    {
        id: 'seeker_aspic',
        name: 'Заливное из Искателя',
        category: 'food',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 28, stamina: 14, duration: '30м', eitr: 85 },
        yield: 2,
        ingredients: [
            { name: 'Мясо Искателя', amount: 2 },
            { name: 'Магический гриб', amount: 2 },
            { name: 'Маточный сок', amount: 1 }
        ]
    },
    {
        id: 'yggdrasil_porridge',
        name: 'Каша Иггдрасиль',
        category: 'food',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 27, stamina: 13, duration: '30м', eitr: 80 },
        yield: 1,
        ingredients: [
            { name: 'Древесина Иггдрасиль (Сок)', amount: 1 },
            { name: 'Магический гриб', amount: 4 },
            { name: 'Ячменная мука', amount: 3 }
        ]
    },
    {
        id: 'major_eitr_mead',
        name: 'Большое зелье Эйтира',
        category: 'mead',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 0, stamina: 0, duration: 'мгновенно', eitr: 125 },
        yield: 6,
        ingredients: [
            { name: 'Мёд', amount: 10 },
            { name: 'Магический гриб', amount: 5 },
            { name: 'Вересковый королевский гриб', amount: 2 },
            { name: 'Ткань Искателя', amount: 1 }
        ]
    },

];