import { INGREDIENTS } from './ingredients.js';

export const recipes = [
    // ==================== 1. ЧЁРНЫЙ ЛЕС (BLACK FOREST) ====================
    // --- Еда: HP ---
    {
        id: 'deer_stew',
        name: 'Рагу из оленины',
        category: 'food',
        type: 'hp',
        biome: 'blackforest',
        stats: { hp: 45, stamina: 15, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.raw_deer_meat, amount: 1 },
            { ...INGREDIENTS.blueberries, amount: 1 },
            { ...INGREDIENTS.carrot, amount: 1 }
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
            { ...INGREDIENTS.raw_boar_meat, amount: 1 },
            { ...INGREDIENTS.raw_deer_meat, amount: 1 },
            { ...INGREDIENTS.carrot, amount: 1 }
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
            { ...INGREDIENTS.bear_meat, amount: 1 },
            { ...INGREDIENTS.carrot, amount: 2 },
            { ...INGREDIENTS.blueberries, amount: 1 }
        ]
    },
    // --- Еда: Стамина ---
    {
        id: 'carrot_soup',
        name: 'Морковный суп',
        category: 'food',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 15, stamina: 45, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.carrot, amount: 3 },
            { ...INGREDIENTS.mushroom, amount: 1 }
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
            { ...INGREDIENTS.raspberries, amount: 8 },
            { ...INGREDIENTS.blueberries, amount: 8 }
        ]
    },
    // --- Еда: Баланс ---
    {
        id: 'boar_jerky',
        name: 'Вяленая кабанина',
        category: 'food',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 23, stamina: 23, duration: '30м' },
        yield: 2,
        ingredients: [
            { ...INGREDIENTS.raw_boar_meat, amount: 1 },
            { ...INGREDIENTS.honey, amount: 1 }
        ]
    },
    // --- Пиры ---
    {
        id: 'black_forest_feast',
        name: 'Пиршество Чёрного леса',
        category: 'feast',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 40, stamina: 40, duration: '50м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.deer_stew_item, amount: 2 },
            { ...INGREDIENTS.carrot_soup_item, amount: 2 },
            { ...INGREDIENTS.queens_jam_item, amount: 2 },
            { ...INGREDIENTS.herb_blend, amount: 1 }
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
            { ...INGREDIENTS.cooked_deer_meat, amount: 2 },
            { ...INGREDIENTS.cooked_boar_meat, amount: 5 },
            { ...INGREDIENTS.dandelion, amount: 4 },
            { ...INGREDIENTS.herb_blend, amount: 1 }
        ]
    },
    // --- Медовухи / Зелья ---
    {
        id: 'mead_minor_health',
        name: 'Малое зелье здоровья',
        category: 'mead',
        type: 'hp',
        biome: 'blackforest',
        stats: { hp: 50, stamina: 0, duration: 'мгновенно (+50 HP)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.blueberries, amount: 5 },
            { ...INGREDIENTS.raspberries, amount: 10 },
            { ...INGREDIENTS.dandelion, amount: 1 }
        ]
    },
    {
        id: 'mead_minor_stamina',
        name: 'Малое зелье выносливости',
        category: 'mead',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 80, duration: 'мгновенно (+80 выносливости)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.raspberries, amount: 10 },
            { ...INGREDIENTS.yellow_mushroom, amount: 10 }
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
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.raspberries, amount: 10 },
            { ...INGREDIENTS.blueberries, amount: 5 }
        ]
    },
    {
        id: 'mead_ratatosk',
        name: 'Эликсир Рататоска',
        category: 'mead',
        type: 'stamina',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 0, duration: '10м (+15% скор. бега, +7.5% скор. плавания)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.blueberries, amount: 10 },
            { ...INGREDIENTS.squirrel_tendon, amount: 1 }
        ]
    },
    {
        id: 'mead_poison_resist',
        name: 'Медовуха-сопротивление яду',
        category: 'mead',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 0, duration: '10м (сопротивление яду)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.thistle, amount: 5 },
            { ...INGREDIENTS.neck_tail, amount: 1 },
            { ...INGREDIENTS.coal, amount: 10 }
        ]
    },
    {
        id: 'mead_troll_strength',
        name: 'Медовуха силы тролля',
        category: 'mead',
        type: 'balanced',
        biome: 'blackforest',
        stats: { hp: 0, stamina: 0, duration: '5м (+250 к грузоподъёмности)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.troll_fish, amount: 2 },
            { ...INGREDIENTS.dragon_eggshell, amount: 1 }
        ]
    },
    // --- 1. ОКЕАН (Ocean) ---
{
        id: 'cooked_serpent_meat',
        name: 'Приготовленное мясо змея',
        biome: 'ocean',
        category: 'food',
        type: 'health',
        yield: 1,
        stats: { hp: 70, stamina: 23, duration: '25:00' },
        ingredients: [
            { ...INGREDIENTS.serpent_meat, amount: 1 }
        ]
    },
    {
        id: 'cooked_fish',
        name: 'Приготовленная рыба',
        biome: 'ocean',
        category: 'food',
        type: 'health',
        yield: 1,
        stats: { hp: 45, stamina: 15, duration: '20:00' },
        ingredients: [
            { ...INGREDIENTS.raw_fish, amount: 1 }
        ]
    },
    {
        id: 'serpent_stew',
        name: 'Рагу из змея',
        biome: 'ocean',
        category: 'food',
        type: 'health',
        yield: 1,
        stats: { hp: 80, stamina: 26, duration: '30:00' },
        ingredients: [
            { ...INGREDIENTS.serpent_meat, amount: 1 },
            { ...INGREDIENTS.mushroom, amount: 1 },
            { ...INGREDIENTS.honey, amount: 2 }
        ]
    },
    {
        id: 'sailors_bounty',
        name: 'Щедрость морехода',
        biome: 'ocean',
        category: 'feast',
        type: 'balanced',
        yield: 1,
        stats: { hp: 75, stamina: 75, duration: '30:00' },
        ingredients: [
            { ...INGREDIENTS.cooked_fish, amount: 5 },
            { ...INGREDIENTS.thistle, amount: 4 },
            { ...INGREDIENTS.cooked_serpent_meat, amount: 2 }
        ]
    },

    // ==================== 2. БОЛОТА (SWAMP) ====================
    // --- Еда: HP ---
    {
        id: 'sausages',
        name: 'Колбаски',
        category: 'food',
        type: 'hp',
        biome: 'swamp',
        stats: { hp: 55, stamina: 18, duration: '25м' },
        yield: 4,
        ingredients: [
            { ...INGREDIENTS.entrails, amount: 2 },
            { ...INGREDIENTS.raw_boar_meat, amount: 1 },
            { ...INGREDIENTS.thistle, amount: 4 }
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
            { ...INGREDIENTS.entrails, amount: 1 },
            { ...INGREDIENTS.honey, amount: 1 },
            { ...INGREDIENTS.turnip, amount: 1 }
        ]
    },
    // --- Еда: Стамина ---
    {
        id: 'turnip_stew',
        name: 'Рагу из репы',
        category: 'food',
        type: 'stamina',
        biome: 'swamp',
        stats: { hp: 18, stamina: 55, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.turnip, amount: 3 },
            { ...INGREDIENTS.raw_boar_meat, amount: 1 }
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
            { ...INGREDIENTS.ooze, amount: 1 },
            { ...INGREDIENTS.freeze_gland, amount: 2 },
            { ...INGREDIENTS.honey, amount: 1 }
        ]
    },
    // --- Пиры ---
    {
        id: 'swamp_dwellers_delight',
        name: 'Лакомство болотного жителя',
        category: 'feast',
        type: 'balanced',
        biome: 'swamp',
        stats: { hp: 35, stamina: 35, duration: '50м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.sausages_item, amount: 8 },
            { ...INGREDIENTS.entrails, amount: 4 },
            { ...INGREDIENTS.turnip_stew_item, amount: 2 },
            { ...INGREDIENTS.herb_blend, amount: 1 }
        ]
    },
    // --- Медовухи / Зелья ---
    {
        id: 'mead_medium_health',
        name: 'Среднее зелье здоровья',
        category: 'mead',
        type: 'hp',
        biome: 'swamp',
        stats: { hp: 75, stamina: 0, duration: 'мгновенно (+75 HP)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.bloodbag, amount: 4 },
            { ...INGREDIENTS.raspberries, amount: 10 },
            { ...INGREDIENTS.dandelion, amount: 1 }
        ]
    },
    {
        id: 'mead_frost_resist',
        name: 'Морозоустойчивая медовуха',
        category: 'mead',
        type: 'balanced',
        biome: 'swamp',
        stats: { hp: 0, stamina: 0, duration: '10м (защита от холода)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.blueberries, amount: 5 },
            { ...INGREDIENTS.muck, amount: 2 },
            { ...INGREDIENTS.greydwarf_eye, amount: 1 }
        ]
    },

    // ==================== 3. ГОРЫ (MOUNTAIN) ====================
    // --- Еда: HP ---
    {
        id: 'wolf_skewer',
        name: 'Волчий шашлык',
        category: 'food',
        type: 'hp',
        biome: 'mountain',
        stats: { hp: 65, stamina: 21, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.wolf_meat, amount: 1 },
            { ...INGREDIENTS.mushroom, amount: 2 },
            { ...INGREDIENTS.onion, amount: 1 }
        ]
    },
    // --- Еда: Стамина ---
    {
        id: 'eyescream',
        name: 'Глаз-мороженое',
        category: 'food',
        type: 'stamina',
        biome: 'mountain',
        stats: { hp: 21, stamina: 65, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.greydwarf_eye, amount: 3 },
            { ...INGREDIENTS.freeze_gland, amount: 1 }
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
        ingredients: [
            { ...INGREDIENTS.onion, amount: 3 }
        ]
    },
    // --- Еда: Баланс ---
    {
        id: 'wolf_jerky',
        name: 'Вяленая волчатина',
        category: 'food',
        type: 'balanced',
        biome: 'mountain',
        stats: { hp: 33, stamina: 33, duration: '30м' },
        yield: 2,
        ingredients: [
            { ...INGREDIENTS.wolf_meat, amount: 1 },
            { ...INGREDIENTS.honey, amount: 1 }
        ]
    },
    // --- Медовухи / Зелья ---
    {
        id: 'brew_animal_whispers',
        name: 'Отвар звериного шепота',
        category: 'mead',
        type: 'balanced',
        biome: 'mountain',
        stats: { hp: 0, stamina: 0, duration: '15м (ускоряет приручение животных в 2 раза)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.onion, amount: 5 },
            { ...INGREDIENTS.carrot, amount: 10 },
            { ...INGREDIENTS.stinking_pebbles, amount: 1 }
        ]
    },

    // ==================== 4. РАВНИНЫ (PLAINS) ====================
    // --- Еда: HP ---
    {
        id: 'blood_pudding',
        name: 'Кровяной пудинг',
        category: 'food',
        type: 'hp',
        biome: 'plains',
        stats: { hp: 80, stamina: 26, duration: '30м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.muck, amount: 2 },
            { ...INGREDIENTS.barley_flour, amount: 4 },
            { ...INGREDIENTS.thistle, amount: 2 }
        ]
    },
    {
        id: 'lox_pie',
        name: 'Пирог из Быкоящера',
        category: 'food',
        type: 'hp',
        biome: 'plains',
        stats: { hp: 75, stamina: 24, duration: '30м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.lox_meat, amount: 2 },
            { ...INGREDIENTS.cloudberry, amount: 2 },
            { ...INGREDIENTS.barley_flour, amount: 4 }
        ]
    },
    // --- Еда: Стамина ---
    {
        id: 'bread',
        name: 'Хлеб',
        category: 'food',
        type: 'stamina',
        biome: 'plains',
        stats: { hp: 25, stamina: 75, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.barley_flour, amount: 10 }
        ]
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
            { ...INGREDIENTS.raw_fish, amount: 2 },
            { ...INGREDIENTS.barley_flour, amount: 4 }
        ]
    },
    // --- Пиры ---
    {
        id: 'hearty_mountain_logger_stew',
        name: 'Сытное жаркое горного лесоруба',
        category: 'feast',
        type: 'balanced',
        biome: 'plains',
        stats: { hp: 45, stamina: 45, duration: '50м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.wolf_skewer_item, amount: 2 },
            { ...INGREDIENTS.onion_soup_item, amount: 3 },
            { ...INGREDIENTS.carrot, amount: 4 },
            { ...INGREDIENTS.mountain_pepper, amount: 1 }
        ]
    },
    // --- Медовухи / Зелья ---
    {
        id: 'mead_major_stamina',
        name: 'Большое зелье выносливости',
        category: 'mead',
        type: 'stamina',
        biome: 'plains',
        stats: { hp: 0, stamina: 160, duration: 'мгновенно (+160 выносливости)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.cloudberry, amount: 10 },
            { ...INGREDIENTS.yellow_mushroom, amount: 10 }
        ]
    },
    {
        id: 'mead_berserker',
        name: 'Медовуха берсеркира',
        category: 'mead',
        type: 'stamina',
        biome: 'plains',
        stats: { hp: 0, stamina: 0, duration: '20с (-80% расход вынос., уязвимость х1.5 к физ. урону)' },
        yield: 3,
        ingredients: [
            { ...INGREDIENTS.red_mushroom, amount: 10 },
            { ...INGREDIENTS.yellow_mushroom, amount: 10 },
            { ...INGREDIENTS.fly_agaric, amount: 1 }
        ]
    },
    {
        id: 'mead_anti_sting',
        name: 'Средство от смертожалов',
        category: 'mead',
        type: 'balanced',
        biome: 'plains',
        stats: { hp: 0, stamina: 0, duration: '10м (предотвращает атаки смертожалов)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.cloudberry, amount: 10 },
            { ...INGREDIENTS.grouper, amount: 3 },
            { ...INGREDIENTS.fragrant_bouquet, amount: 1 }
        ]
    },
    {
        id: 'barley_fire_wine',
        name: 'Огненное ячменное вино',
        category: 'mead',
        type: 'balanced',
        biome: 'plains',
        stats: { hp: 0, stamina: 0, duration: '10м (сопротивление огню)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.barley, amount: 10 },
            { ...INGREDIENTS.cloudberry, amount: 10 }
        ]
    },

    // ==================== 5. ТУМАННЫЕ ЗЕМЛИ (MISTLANDS) ====================
    // --- Еда: HP ---
    {
        id: 'meat_platter',
        name: 'Мясное ассорти',
        category: 'food',
        type: 'hp',
        biome: 'mistlands',
        stats: { hp: 85, stamina: 28, duration: '30м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.seeker_meat, amount: 1 },
            { ...INGREDIENTS.hare_meat, amount: 1 },
            { ...INGREDIENTS.chicken_meat, amount: 1 }
        ]
    },
    {
        id: 'misthare_supreme',
        name: 'Гуляш из зайчатины',
        category: 'food',
        type: 'hp',
        biome: 'mistlands',
        stats: { hp: 85, stamina: 28, duration: '30м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.hare_meat, amount: 1 },
            { ...INGREDIENTS.jotun_puff, amount: 2 },
            { ...INGREDIENTS.carrot, amount: 2 }
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
            { ...INGREDIENTS.chicken_meat, amount: 1 },
            { ...INGREDIENTS.honey, amount: 3 },
            { ...INGREDIENTS.jotun_puff, amount: 2 }
        ]
    },
    // --- Еда: Стамина ---
    {
        id: 'fish_and_bread',
        name: 'Рыба с хлебом',
        category: 'food',
        type: 'stamina',
        biome: 'mistlands',
        stats: { hp: 30, stamina: 90, duration: '30м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.cooked_fish, amount: 1 },
            { ...INGREDIENTS.barley_flour, amount: 2 }
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
            { ...INGREDIENTS.jotun_puff, amount: 3 },
            { ...INGREDIENTS.onion, amount: 3 },
            { ...INGREDIENTS.niflsparagus, amount: 3 }
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
            { ...INGREDIENTS.egg, amount: 3 },
            { ...INGREDIENTS.jotun_puff, amount: 3 }
        ]
    },
    // --- Еда: Эйтр ---
    {
        id: 'seeker_aspic',
        name: 'Холодец из Искателя',
        category: 'food',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 28, stamina: 14, eitr: 85, duration: '30м' },
        yield: 2,
        ingredients: [
            { ...INGREDIENTS.seeker_meat, amount: 2 },
            { ...INGREDIENTS.magecap, amount: 2 },
            { ...INGREDIENTS.royal_jelly, amount: 2 }
        ]
    },
    {
        id: 'yggdrasil_porridge',
        name: 'Каша Иггдрасиль',
        category: 'food',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 27, stamina: 13, eitr: 80, duration: '30м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.sap, amount: 1 },
            { ...INGREDIENTS.magecap, amount: 4 },
            { ...INGREDIENTS.barley_flour, amount: 3 }
        ]
    },
    {
        id: 'stuffed_mushroom',
        name: 'Фаршированный гриб',
        category: 'food',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 25, stamina: 12, eitr: 75, duration: '25м' },
        yield: 1,
        ingredients: [
            { ...INGREDIENTS.magecap, amount: 3 },
            { ...INGREDIENTS.blood_clot, amount: 1 },
            { ...INGREDIENTS.turnip, amount: 2 }
        ]
    },
    // --- Медовухи / Зелья ---
    {
        id: 'major_eitr_mead',
        name: 'Большое зелье Эйтира',
        category: 'mead',
        type: 'eitr',
        biome: 'mistlands',
        stats: { hp: 0, stamina: 0, eitr: 125, duration: 'мгновенно (+125 Эйтира)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.honey, amount: 10 },
            { ...INGREDIENTS.sap, amount: 5 },
            { ...INGREDIENTS.jotun_puff, amount: 2 },
            { ...INGREDIENTS.magecap, amount: 5 }
        ]
    },
    {
        id: 'mead_lightfoot',
        name: 'Медовуха Легкоступа',
        category: 'mead',
        type: 'stamina',
        biome: 'mistlands',
        stats: { hp: 0, stamina: 0, duration: '10м (-30% расход вынос. на прыжки, +20% высота прыжка)' },
        yield: 6,
        ingredients: [
            { ...INGREDIENTS.scale_hide, amount: 2 },
            { ...INGREDIENTS.feather, amount: 5 },
            { ...INGREDIENTS.cloudberry, amount: 5 }
        ]
    }
];