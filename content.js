const content = [
    {
        id : 1,
        name : "BERRY BLAST",
        color : `rgb(204, 0 ,255)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Raspberries", "Kale", "Blueberries", "Pineapple", "Coconut milk", "Water"],
        description : "This smoothie isn't just a refreshing drink, it's a vibrant orchestra of health benefits. Raspberries and blueberries harmonize with kale, a leafy green maestro, to orchestrate an immune-boosting VITAMIN C symphony. Meanwhile, pineapple steps in with its vibrant notes of BROMELAIN, an enzyme that aids DIGESTION and INFLAMMATION. Coconut milk joins the chorus, adding creamy texture and a chorus of HEALTHY FATS and ELECTROLYTES for HYDRATION. The result? A delicious melody of ANTIOXIDANTS, MINERALS for strong bones, and FIBER for digestive harmony. This will leave you feeling energized and revitalized, ready to face the day with your health in perfect harmony.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 2,
        name : "MANGO LOVER",
        color : `rgb(255, 214 ,0)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Strawberries", "Mango", "Banana", "Coconut milk", "Water"],
        description : "This smoothie isn't just a beach in a glass, it's a tropical treasure trove of nutrients. Mangoes, reign supreme with a solar flare of VITAMIN A, essential for HEALTHY VISION and GLOWING SKIN. Strawberries sparkle with VITAMIN C, guarding your immune system, while their FIBER keeps your gut happily dancing. Bananas with their POTASSIUM-RICH jester, regulate BLOOD PRESSURE and fuel your muscles. And finally, the creamy coconut milk, rich in medium-chain TRIGLYCERIDES, boosts METABOLISM and adds a velvety texture. Each sip is a symphony of health, strengthening bones with MANGANESE, fighting free radicals with ANTIOXIDANTS, and keeping you hydrated with ELECTROLYTES.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 3,
        name : "APPLE DETOX",
        color : `rgb(5, 226 , 27)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Baby Spinach", "Apples", "Celery", "Cucumber", "Lemon", "Ginger", "Water"],
        description : "This smoothie is a nutritional powerhouse disguised as a verdant delight. Baby spinach, pack a punch of IRON for ENERGY and MUSCLE FUNCTION, while cucumber and celery, nature's hydrating duo, replenish ELECTROLYTES and keep you cool from the inside out. The apples, VITAMIN C champions, bolster your IMMUNE SYSTEM and the puckering lemon, a powerhouse of ANTIOXIDANTS, detoxes your body like a cleansing spell. Finally, ginger, the fiery root, kicks in with its ANTI-INFLAMMATORY magic, soothing digestion and calming your aches. Each sip is a symphony of nutrients, boosting bone health with CALCIUM from celery and revving your energy with VITAMIN B6 from spinach.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 4,
        name : "BEETROOT SMOOTHIE",
        color : `rgb(255, 0 , 92)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Beetroot", "Apple", "Carrot", "Celery", "Ginger", "Water"],
        description : "Beetroot, a champion of NITRATES, with its NITRIC OXIDE, boosts blood flow and oxygen to your tired cells. Apples, swirl in with their FIBER and VITAMIN C, keeping your gut happy and digestion dancing smoothly. Carrots, ignite your energy furnace, their VITAMIN A a sunbeam spotlighting your inner glow. Celery, a hydrating maestro, glides in, its ELECTROLYTES and water content replenishing your reserves and keeping you on the beat. Finally, zesty ginger, a THERMOGENIC tango partner, adds a fiery kick, revving up your metabolism and torching fatigue like a tropical salsa band. Each sip leaving you vibrant, energized, and ready to conquer your day with a lighter step and a sunnier smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 5,
        name : "KIWI GRAPE",
        color : `rgb(149, 228 ,49)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Green grapes", "Kale", "Kiwi", "Almonds(optional)", "Almond milk", "Water"],
        description : "This smoothie is a green glow-up in a glass! Kale, the leafy iron fortress, joining forces with plump green grapes, bursting with ANTIOXIDANT RESVERATROL, to guard your heart and cells. Kiwi, the VITAMIN C crusader, swoops in with a tangy punch, boosting your immune system like a sprightly warrior. Almonds, the PROTEIN and FIBER knights, bring satiety and HEALTHY FATS, while creamy almond milk, rich in CALCIUM and VITAMIN E, adds a velvety texture and nourishes your bones. Each sip is a symphony of goodness, whispering secrets of STRONG MUSCLES (magnesium from almonds!), HEALTHY DIGESTION (fiber from grapes!), and BALANCED ENERGY (vitamin B6 from kiwi!).",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 6,
        name : "DOUBLE BERRY",
        color : `rgb(255, 66 ,191)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Strawberries", "Raspberries", "Bananas", "Almonds(optional)", "Almond milk", "Water"],
        description : "This smoothie isn't just a pink party in a glass, it's a nutritional disco ball exploding with benefits! Strawberries and raspberries, VITAMIN C rock-stars, belting out IMMUNITY anthems. Joined by the POTASSIUM rich banana, the muscle-fueling DJ, keeping your energy levels groovin'. Almond milk, rich in CALCIUM and VITAMIN E, lays down a creamy baseline, while crunchy almonds sprinkle in HEALTHY FATS and PROTEIN, making you feel like a satisfied dancer. Each sip is a vibrant melody of nutrients, STRENGTHENING BONES with MANGANESE from almonds, fighting free radicals with ANTIOXIDANTS from berries, and keeping you full and energized with banana's FIBER.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 7,
        name : "BLUEBERRY SPINACH",
        color : `rgb(2, 255 , 164)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Blueberries", "Spinach", "Bananas", "Rolled oats", "Almond milk", "Water"],
        description : "This smoothie isn't just a breakfast in a glass, it's a superhero team assembled for ultimate wellness! Blueberries, bursting with ANTIOXIDANTS, shield your cells like microscopic guardians. Leafy spinach, the IRON rich powerhouse, adds muscle-building fuel, while creamy almond milk, rich in CALCIUM and VITAMIN E, acts as the bone-strengthening fortress. Banana, the POTASSIUM captain, electrifies your muscles, and rolled oats, the FIBER champion, provide sustained energy like a slow-release shield. Each sip bolstering your immune system with VITAMIN C from blueberries, fighting free radicals with spinach's ANTIOXIDANTS, and keeping you feeling full and focused with oat's FIBER and banana's energy.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 16,
        name : "BERRY SMOOTHIE",
        color : `rgb(255, 0 , 199)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Strawberries", "Raspberries", "Milk", "Honey", "Water"],
        description : "Elevate your vitality with a sensory symphony encapsulated in a single glass. The dynamic duo of strawberries and raspberries infusing your system with a burst of ANTIOXIDANTS, fortifying your defenses and leaving you ready to conquer the day. The creamy milk not only provides a PROTEIN punch but also ensures a sustained release of energy, keeping fatigue at bay. And when golden honey joins the ensemble, its NATURAL SUGARS become the secret fuel, offering a sweet lift without the dreaded crash. This smoothie is not just a tantalizing treat for your taste buds but a powerhouse designed to recharge your spirit, making sluggish mornings a thing of the past. ",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 17,
        name : "TROPICAL SMOOTHIE",
        color : `rgb(250, 255 , 0)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Oranges", "Mango", "Pineapple", "Oats", "Flaxseeds", "Cinnamon", "Water"],
        description : "This sunshine-inspired smoothie harnesses the vibrant power of tropical fruits and nutty grains to ignite your day. Juicy oranges burst with energizing VITAMIN C, shielding your cells and keeping you fighting fit. Mango and pineapple, rich in BETA-CAROTENE and MANGANESE, team up to strengthen your immunity and sharpen your focus. But the power doesn't stop there. Oats, nature's fuel depot, release energy slowly, preventing afternoon crashes, while flaxseeds, packed with OMEGA-3S, nurture your brain and keep you mentally sharp. Finally, a whisper of cinnamon adds a warming touch, regulating blood sugar and ensuring your energy levels hum smoothly throughout the day.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 18,
        name : "ALL-SO-HEALTHY",
        color : `rgb(144, 2 , 255)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Blueberries", "Mango","Fat free milk", "Honey", "Water"],
        description : "This vibrant medley in a glass isn't just a smoothie, it's a morning wake-up. Creamy fat-free milk dances with natural sweetness from honey, creating a base that's light yet satisfying. Then, the mangoes deliver a surge of VITAMIN C, keeping your immune system on guard and your smile radiant. Plump blueberries, ANTIOXIDANT powerhouses, protect your cells and sharpen your focus. But the energy MVP? the banana, its POTASSIUM punch pumping up your muscles and electrolytes, ensuring you conquer the day. Every sip is a delicious reminder that nature provides the best power-ups, leaving you feeling vibrant, energized, and ready to tackle anything the day throws your way.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 19,
        name : "BANANA COCOA",
        color : `rgb(203, 113 , 8)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Cocoa powder", "Flaxseeds","Chia seeds", "Milk", "Water"],
        description : "Ditch the caffeine jitters and embrace a sustained energy revolution with this powerhouse smoothie! Creamy milk swirls with rich cocoa powder, creating a base as decadent as it is nutritious. Bananas unleash a POTASSIUM punch, fueling your muscles and electrolytes for peak performance. Tiny titans - flax and chia seeds - burst onto the scene, their OMEGA-3S and FIBER teaming up to keep your brain sharp and your gut happy. Finally, a sprinkle of magic dust - cocoa powder - delivers a dose of ANTIOXIDANTS and HEALTHY FATS, keeping your energy levels humming like a well-oiled machine. It's a delicious dance of nutrients, a symphony of sustained power, all in one invigorating sip.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 20,
        name : "MEAN GREEN",
        color : `rgb(0, 153 , 15)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Apples", "Celery ribs", "Baby spinach", "Parsley", "Cucumber", "Ginger", "Honey", "Water"],
        description : "This masterpiece is a green-goddess energy bomb. Crisp green apples, unleash a rush of VITAMIN C, keeping you fighting fit. Baby spinach, packed with IRON and MAGNESIUM, pump oxygen to your muscles and sharpening your focus. Cool cucumber, nature's HYDRATOR extraordinaire, keeps you feeling fresh and energized, while a zesty ginger root kick-starts your digestive system, ensuring everything runs smoothly. Finally, a touch of honey, nature's golden nectar, adds a touch of sweetness and fuels your brain with sustained energy. Each sip is a delicious reminder that green is the color of power, leaving you vibrant, revitalized, and ready to conquer the day with a chlorophyll grin.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 21,
        name : "BRAIN FOOD",
        color : `rgb(20, 0 , 254)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Blueberries", "Avocadoes","Baby spinach", "Fat free milk", "Water"],
        description : "This creamy concoction is a vibrant dance of nutrients designed to ignite your day. Avocadoes, rich in HEALTHY FATS, become a smooth platform for your energy launch. Then, strawberries, bursting with VITAMIN C, shield your cells and keeping you bright-eyed all day. Bananas, nature's POTASSIUM powerhouses, fuel your muscles and electrolytes, ensuring you conquer the day. Leafy spinach, brimming with IRON and MAGNESIUM, pump oxygen to your brain and muscles, turning up your mental wattage. Finally, a chorus of blueberries, ANTIOXIDANT powerhouses, sweetens the deal while protecting your cells and sharpening your focus.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 22,
        name : "CREAMY WATERMELON",
        color : `rgb(255, 98 , 145)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Watermelon", "Mint leaves","Vanilla yogurt", "Honey", "Fat free milk", "Water"],
        description : "This is a juicy rebellion against midday fatigue. Watermelon, nature's candy, explodes with VITAMIN C and L-CITRULLINE, waking up your cells and boosting your circulation like a summer splash. Creamy fat-free milk swirls in, adding PROTEIN and CALCIUM for smooth sailing through your day. Then, a scoop of vanilla ice cream, delivers a burst of energy without the heavy cream. But wait, there's more! A drizzle of honey adds a touch of natural sweetness and fuels your brain with slow-burning goodness. Finally, Mint leaves, invigorate your senses and aids digestion, keeping you light and bright. Every sip leaves you feeling vibrant, refreshed, and ready to conquer the rest of your day with a watermelon grin.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 23,
        name : "MANGO GINGER",
        color : `rgb(250, 133 , 48)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Mango", "Coconut oil", "Honey", "Ginger", "Water"],
        description : "This tropical tango is a sunshine serenade to your sluggish soul. Mangoes, nature's energy bombs, unleash VITAMIN C, shielding your cells and keeping your mood bright. Bananas, POTASSIUM powerhouses, pump electrolytes through your body, ensuring you dance through the day with pep in your step. Coconut oil, smooth and rich, glides in, offering sustained energy for the long haul. A touch of honey adds a natural sweetness, fueling your brain, while a zesty ginger root awakens your senses and gets your digestive engine purring. Each sip leaves you vibrant, energized, and ready to sway your way through anything the day throws your way.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Energy-boost smoothie'
    },
    {
        id : 24,
        name : "GREEN TURMERIC",
        color : `rgb(149, 202 , 63)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Banana", "Spinach", "Turmeric powder", "Ginger", "Chia seeds", "Water"],
        description : "This is the best anti-inflammatory smoothie because every ingredient fights inflammation. The most powerful ones include turmeric powder and ginger. Turmeric has ANTI-INFLAMMATORY CURCUMIN, while ginger has GINGEROL. Both ingredients are also rich in ANTIOXIDANTS, which reduce inflammation. Turmeric and ginger have a spicy, warming flavor. It's balanced by the sweetness of banana. Other anti-inflammatory effects come from ANTIOXIDANTS in spinach and OMEGA-3 fats in chia seeds.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 25,
        name : "TURMERIC SMOOTHIE",
        color : `rgb(255, 154 , 2)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Bananas", "Pineapple", "Turmeric powder", "Dates/Honey", "Coconut milk", "Water"],
        description : "This is a biochemist's dream team assembled to combat fiery aches and pains. Coconut milk, delivers MEDIUM-CHAIN TRIGLYCERIDES that research suggests may reduce inflammation markers. Turmeric's CURCUMIN, a potent ANTIOXIDANT, extinguishes pro-inflammatory free radicals. Dates, sweet nature's jewels, bring FIBER and ANTIOXIDANTS like POLYPHENOLS, further dampening inflammation. POTASSIUM-rich bananas replenish electrolytes, vital for proper muscle function and pain management. Finally, pineapple with BROMELAIN, an enzyme that acts like a natural anti-inflammatory, breaking down inflammatory proteins, leaving you feeling vibrant, pain-free.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 26,
        name : "KALE MANGO",
        color : `rgb(10, 197 , 6)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Pineapple", "Mango", "Kale", "Chia seeds", "Water"],
        description : "This isn't just a smoothie, it's a nutrient-packed shield against aches and pains, a verdant oasis in every sip. Kale, loaded with VITAMIN K and SULFORAPHANE, joins forces with pineapple's BROMELAIN enzyme, like tiny soldiers breaking down inflammatory compounds. Mango, bursting with ANTIOXIDANT BETA-CAROTENE, joins the fray, shielding your cells from free radicals. Chia seeds, rich in OMEGA-3 fatty acids, stand guard, their potent lipids quenching the flames of inflammation. Each sip is a delicious declaration of peace, leaving you vibrant, pain-free, and ready to conquer whatever comes your way.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 27,
        name : "CARROT SMOOTHIE",
        color : `rgb(255, 155 , 37)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Apples", "Carrots", "Banana", "Chia seeds", "Water"],
        description : "This vibrant orange smoothie is a nutritional firetruck packed with anti-inflammatory power. Crisp apples, loaded with QUERCETIN and VITAMIN C, team up with banana's POTASSIUM and MAGNESIUM, dousing the flames of free radicals. Then, carrot's BETA-CAROTENE and VITAMIN A join the party, building a shield against oxidative stress. Chia seeds, brimming with OMEGA-3 fatty acids, quench the heat of inflammation. Each sip is a delicious reminder that nature provides the best fire control, leaving you vibrant, pain-free, and ready to reclaim your day.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 28,
        name : "BLUEBERRY SMOOTHIE",
        color : `rgb(37, 163 , 255)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Blueberries", "Spinach", "Chia seeds", "Dates/Honey", "Almond milk", "Water"],
        description : "This smoothie is a nutrient orchestra tuned to soothe aches and pains, a harmonious blend in every sip. Creamy almond milk, your smooth and gentle base, dances with blueberry's ANTHOCYANINS, like tiny purple notes harmonizing to quiet inflammatory noise. Dates, nature's candy, add a whisper of sweetness and a wealth of PREBIOTICS, fostering gut health and reducing inflammatory markers. Leafy spinach, with VITAMIN K and FOLATE, build a fortress against free radicals and finally, chia seeds with OMEGA-3, tap out healthy fats, damping down the inflammatory. Each sip leaves you vibrant, pain-free, and ready to move to the rhythm of a healthy day.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 30,
        name : "PINEAPPLE GINGER",
        color : `rgb(250, 255 , 1)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Pineapple", "Ginger", "Dates", "Turmeric", "Almond milk", "Water"],
        description : "This fiery tropical swirl is a nutrient-powered cooling fan designed to extinguish aches and pains. Almond milk, your soothing base, embracing the golden glow of turmeric, CURCUMIN warriors, dousing the flames of free radicals. Dates, add a whisper of sweetness and a wealth of ANTIOXIDANTS, shielding your cells from harmful heat. Ginger, a fiery champion, its pungent zing soothing tired muscles and boosting circulation. Pineapple, bursting with BROMELAIN, break down inflammatory proteins and cool the fire within. Each sip is a delicious reminder that nature provides the best air conditioning, leaving you vibrant, pain-free, and ready to face the day with a tropical breeze.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 31,
        name : "AVOCADO SMOOTHIE",
        color : `rgb(0, 153 , 15)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Banana", "Avocado", "Kale", "Chia seeds", "Honey", "Almond milk", "Water"],
        description : "This smoothie, is a nutrient orchestra tuned to soothe aches and pains. Almond milk, your soothing base, dances with honey's PREBIOTICS, harmonizing gut health and reducing inflammatory markers. Chia seed's OMEGA-3, tap out a rhythm of healthy fats, damping down the inflammatory drumbeat. Leafy kale, an antioxidant with VITAMIN K and SULFORAPHANE, build a fortress against free radicals. Avocados, creamy champions of MONO-UNSATURATED FATS, lubricate joints and ease muscle tension. Finally, banana’s POTASSIUM, replenish electrolytes, crucial for proper muscle function and pain management. Each sip  leaving you vibrant, pain-free, and ready to move to the rhythm of a healthy day.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 32,
        name : "BEET SMOOTHIE",
        color : `rgb(255, 3 , 109)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Apples", "Baby spinach", "Beetroot", "Strawberries", "Water"],
        description : "This smoothie is a vibrant orchestra of nutrients tuned to quiet the whispers of inflammation. Apples, bursting with QUERCETIN and VITAMIN C, serenade your cells with antioxidant melodies. Baby spinach, an IRON-rich baritone, joins the harmony, delivering oxygen to your muscles and tissues, easing away tightness. Beetroot, a deep crimson cello, unleashes its NITRATES, NITRIC OXIDE, easing blood flow and reducing inflammation. Finally, strawberries add their ANTIOXIDANT harmonies, shielding your cells from free radicals. Each sip is a delicious masterpiece of healing, leaving you vibrant, pain-free, and ready to dance to the rhythm of a healthy day.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Anti-inflammatory smoothie'
    },
    {
        id : 33,
        name : "BANANA SOY",
        color : `rgb(225, 163 , 3)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Bananas", "Almonds", "Flax seeds", "Soy milk","Honey", "Water"],
        description : "This creamy, golden concoction is a skin-loving siren song in a glass. Bananas, nature's POTASSIUM powerhouses, team up with the VITAMIN E bounty of almonds, soaking up free radicals that dull your skin. Creamy soy milk, a PROTEIN champion, builds collagen's scaffolding for a firmer, bouncier complexion. Flax seeds, OMEGA-3 warriors, stand guard, their potent oils shielding your skin from dryness and inflammation. Finally, a touch of honey, nature's golden nectar, adds a whisper of sweetness and a dose of ANTIOXIDANTS, further protecting your glow. Each sip is a delicious reminder that beauty blooms from within, leaving you vibrant, radiant, and ready to face the day with a sunshine smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 34,
        name : "SPINACH ORANGE",
        color : `rgb(60, 186 , 65)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Bananas", "Spinach", "Oranges", "Greek yogurt", "Water"],
        description : "This smoothie, is a skin-sculpting symphony conducted by nature's finest performers. Leafy spinach, an IRON-rich bass, serenades your cells with oxygen, delivering nutrients to your skin's foundation. Bananas, POTASSIUM powerhouses, regulate hormones and keeping your complexion's glow on fleek. Then, oranges, bursting with VITAMIN C, trumpet their ANTIOXIDANT melodies, shielding your skin from free radicals. Greek yogurt, a PROTEIN champion, joins the chorus, building collagen's scaffolding for a firmer, bouncier canvas. Each sip is a delicious concerto of rejuvenation, leaving you vibrant, luminous, and ready to face the day with a naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 35,
        name : "BLUEBERRY BANANA",
        color : `rgb(0, 255 , 224)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Bananas", "Blueberries", "Greek yogurt", "Honey", "Water"],
        description : "This smoothie, is a skin-sculpting masterpiece, an antioxidant symphony in every sip. Blueberries, bursting with ANTHOCYANIN power, paint your skin with protection against free radicals. Creamy Greek yogurt, your PROTEIN champion, joins the harmony, building collagen's scaffolding for a firmer, bouncier canvas. Bananas, POTASSIUM powerhouses, regulate hormones, keeping your complexion's glow on point, while honey's natural sweetness adds a touch of PREBIOTIC magic, nurturing your gut for an inner radiance that shines through. Each sip is a delicious concerto of rejuvenation, leaving you vibrant, luminous, and ready to face the day with a naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 36,
        name : "AVOCADO CHIA",
        color : `rgb(173, 232 , 5)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Avocado", "Chia seeds", "Milk", "Honey", "Water"],
        description : "This smoothie is a skin-sculpting spa in a glass, infused with nature's nourishing dew. Avocados, champions of MONOUNSATURATED FATS, smooth away dryness and plump your skin from within. Creamy milk, full of PROTEIN, builds collagen's scaffolding for a firmer, bouncier canvas. Chia seeds, OMEGA-3 warriors, stand guard, their potent oils shielding your skin from inflammation. Finally, a touch of honey, nature's golden nectar, adds a whisper of sweetness and a dose of ANTIOXIDANTS, further protecting your glow. Each sip is a delicious reminder that inner peace reflects on your face, leaving you vibrant, luminous, and ready to face the day with a naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 37,
        name : "TOMATO CARROTS",
        color : `rgb(255, 2 , 17)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Lemon", "Tomatoes", "Carrots", "Celery","Honey", "Water"],
        description : "This isn't just a smoothie, it's a skin-sculpting symphony conducted by nature's radiant performers. Lemons, VITAMIN C powerhouses, trumpet their ANTIOXIDANT melodies, shielding your skin from free radicals. Juicy tomatoes, bursting with LYCOPENE, join the harmony, soaking up UV rays before they can dim your glow. Carrots, BETA-CAROTENE champions, dance in with their LUTEIN and VITAMIN A, illuminating your complexion from within. Finally, celery, a hydration hero, glides in, its VITAMIN K and FOLATE building your skin's foundation for a firmer, bouncier canvas. Each sip leaving you vibrant, luminous, and ready to face the day with a naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 38,
        name : "APPLE LEMON",
        color : `rgb(173, 232 , 5)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Apples", "Lemon", "Celery stalks", "Cucumber","Honey", "Water"],
        description : "This smoothie is a skin-revitalizing dance party in a glass. Celery, with its VITAMIN K and FOLATE, illuminates your skin from within. Lemon, a zesty sourpuss, has VITAMIN C, boosting collagen production for a firmer, bouncier skin. Crisp apples, bursting with ANTIOXIDANTS, pour in their anti-inflammatory magic, shielding your skin from free radicals. Finally, cool cucumber, a hydrating maestro, glides in its SILICA and VITAMIN K building your skin's scaffolding for a smoother, suppler routine. Each sip leaving you vibrant, luminous, and ready to face the day with a dewy, naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 39,
        name : "BEET ORANGE",
        color : `rgb(232, 5 , 5)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Beetroot", "Orange", "Carrot", "Honey", "Water"],
        description : "This isn't just a smoothie, it's a skin-sculpting sunset serenade, bursting with nature's radiant brushstrokes. Oranges, VITAMIN C powerhouses, trumpet their citrusy melodies, shielding your skin from free radicals. Beetroot, a ruby-red champion, joins the harmony, its NITRATES like tiny spotlights boosting blood flow and illuminating your complexion from within. Carrots, BETA-CAROTENE ballerinas, join in with their LUTEIN and VITAMIN A, like golden glitter painting your skin with a healthy shimmer. Each sip is a delicious concerto of revitalization, leaving you vibrant, luminous, and ready to face the day with a naturally radiant glow.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 40,
        name : "TURMERIC SMOOTHIE",
        color : `rgb(250, 133 , 48)`,
        font : `'Acme', sans-serif`,
        ingredients : ["Mango", "Carrot", "Turmeric", "Coconut water", "Water"],
        description : "This smoothie is a skin-sculpting samba in a glass, infused with nature's radiant rhythm. Mangoes, bursting with BETA-CAROTENE, pirouette in, painting your skin with a healthy bronze. Carrots, VITAMIN A champions, join the groove, their LUTEIN and ANTIOXIDANTS shielding your glow from free radicals. Coconut water, your hydrating maestro, glides in, its ELECTROLYTES and SILICA building your skin's foundation for a smoother, suppler routine. Finally, turmeric, with CURCUMIN, performs its anti-inflammatory magic calming irritation and boosting collagen production for a firmer skin. Each sip is a delicious anthem of rejuvenation, leaving you vibrant, luminous, and ready to face the day with a naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Skin-care smoothie'
    },
    {
        id : 41,
        name : "CUCUMBER GINGER",
        color : `rgb(124, 197 , 6)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Cucumber", "Ginger", "Lemon", "Pineapple", "Water"],
        description : "This isn't just a smoothie, it's a weight-management mambo for your midsection with every sip. Cucumber, with its WATER and FIBER, drives away cravings and keeps you feeling light on your feet. Ginger, a THERMOGENIC champ, adds a fiery kick, revving up your metabolism and turning that belly fat into fuel like a tropical island drumbeat. Lemon, a VITAMIN C power house, joins the party with its citric acid, boosting collagen and flushing away bloat. Finally, pineapple, bursting with BROMELAIN, swirls in with its sweetness, waltzing away toxins and inflammation, all while keeping things low-calorie. Each sip leaving you vibrant, energized, and ready to cha cha your way to a happier, healthier you.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 42,
        name : "BERRY BLAST",
        color : `rgb(204, 0 , 255)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Raspberries", "Kale", "Blueberries","Pineapple", "Coconut milk", "Water"],
        description : "This smoothie, is a calorie-defying hula dance in every sip. Raspberries, champions of FIBER and KETONES, propel your body into fat-burning mode. Kale, navigates the course with its SATIATING POWER, keeping hunger pangs at bay and cravings silenced. Blueberries, ANTIOXIDANT ninjas, shield your cells from free radicals' sabotage, while pineapple, with its BROMELAIN enzyme, acts like a metabolic bouncer, breaking down those unwanted pounds. Finally, creamy coconut milk, your LOW-CALORIE navigator, steams up the smoothie journey, keeping you fueled and satisfied without weighing you down. Each sip leaving you vibrant, energized, and ready to blast off into a lighter, healthier you.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 43,
        name : "PINA COLADA",
        color : `rgb(235, 255 , 0)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Kale", "Pinapple", "Avocado", "Coconut flakes", "Chia seeds", "Mint", "Water"],
        description : "This smoothie, is a calorie-crushing conga line. Kale, with its FIBER and VITAMIN K, keeps you full and firing up your fat-burning furnace. Pineapple, with its BROMELAIN enzyme, breaks down unwanted pounds. Creamy avocado joins in, its HEALTHY FATS slowing down sugar absorption and keeping hunger pangs at bay. Coconut flakes, add a touch of texture and MEDIUM-CHAIN TRIGLYCERIDES, giving you sustained energy without weighing you down. Chia seeds with their FIBER and PROTEIN keep you feeling full and your cravings silenced. Each sip is a delicious reminder that healthy choices are the hottest beat, leaving you vibrant, energized, and ready to conquer your day with a lighter step.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 44,
        name : "APPLE LEMON",
        color : `rgb(5, 226 , 27)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Baby spinach", "Apple", "Celery", "Cucumber","Lemon", "Ginger", "Water"],
        description : "This smoothie, is a calorie-crushing cha cha. Baby spinach with its FIBER and FOLATE, boosts metabolism and keeps you feeling full. Apples, with their PECTIN, slow down sugar absorption and keep cravings at bay. Celery, with its LOW-CALORIE, adds rhythm and volume without weighing you down. Cucumber, flushes away toxins and keeps you feeling light on your feet. Lemon adds a tangy counterpoint, its VITAMIN C and CITRIC revving up your fat-burning furnace. Finally, ginger with its THERMOGENIC magic, torches calories, boosting your energy for the weight-loss cha cha. Each sip leaving you vibrant, energized, and ready to conquer your day with a lighter step.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 45,
        name : "KALE GRAPE",
        color : `rgb(36, 255 , 0)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Kale", "Green grapes", "Kiwi", "Almond milk", "Water"],
        description : "This smoothie, is a calorie-counting Charleston, a metabolism-revving rumba in every sip. Juicy green grapes, with their FIBER and RESVERATROL, pirouet away sugar cravings and boost fat-burning. Leafy kale, with its ANTIOXIDANTS and VITAMIN K,  guard your gut and keeps you feeling full. Kiwi, bursts in with its VITAMIN C and ENZYMES, breaking down those unwanted pounds. Almonds, champions of PROTEIN and HEALTHY FATS, add a nutty rhythm, keeping hunger pangs at bay and slowing down sugar absorption. Finally, creamy almond milk, your LACTOSE-FREE maestro, glides in, swirling the whole symphony together with LOW-CALORIE hydration and a touch of sweetness.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 46,
        name : "BERRY BANANA",
        color : `rgb(203, 0 , 134)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Strawberries", "Raspberries", "Banana", "Almond milk", "Water"],
        description : " This smoothie, is a metabolism-revving mambo for your belly in every sip. Strawberries and raspberries, tiny ruby firecrackers packed with FIBER and KETONES, ignite your fat-burning fiesta, boosting your body into a calorie-dancing frenzy. Bananas, POTASSIUM powerhouses, keep your muscles moving and your electrolytes steady, ensuring you groove to the rhythm of weight loss. Creamy almond milk, your LACTOSE-FREE maestro, glides in, swirling the whole party together with low-calorie hydration and a touch of nutty sweetness. Each sip is a delicious reminder that healthy choices are the hottest band on the block, leaving you vibrant, energized, and ready to conga your way to a lighter you.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 47,
        name : "WATERMELON LEMON",
        color : `rgb(254, 47 , 47)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Watermelon", "Banana", "Lemon", "Water"],
        description : "This smoothie, is a calorie-crushing cha cha, a water-whirling rhumba for your waistline. Watermelon, leads the dance with its L-CITRULLINE and volume-boosting water content, teasing away hunger pangs and keeping you feeling light on your feet. Bananas, POTASSIUM powerhouses, join the party with their fiber and energy-sustaining magic, fueling your moves without weighing you down. Lemon, adds a tangy counterpoint, its VITAMIN C and CITRIC ACID like tiny cheerleaders revving up your metabolism and flushing away bloat. Each sip is a delicious reminder that healthy choices are the hottest beat, leaving you vibrant, energized, and ready to conquer your day with a lighter step.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 48,
        name : "AVOCADO APPLE",
        color : `rgb(115, 255 , 66)`,
        font : `'Protest Riot', sans-serif`,
        ingredients : ["Apple", "Avocado", "Spinach", "Water"],
        description : "This smoothie, is a calorie-counting cha cha, a metabolism-revving rumba for your belly in every sip. Creamy avocado, the MONOUNSATURATED FATS maestro, its healthy fats like tiny tango partners slowing down sugar absorption and keeping hunger pangs at bay. Crisp apples, nature's sweet temptation, join the party with their PECTIN, a sugar-taming tango partner slowing down absorption and keeping cravings quiet. Leafy spinach, a FIBER-fueled firecracker, ignites the fat-burning fiesta, boosting metabolism and keeping you feeling full with every swirl. Each sip is a delicious reminder that healthy choices are the hottest beat, leaving you vibrant, energized, and ready to conquer your day with a lighter step.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Weight-loss smoothie'
    },
    {
        id : 49,
        name : "CARROT SMOOTHIE",
        color : `rgb(255, 92 , 0)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Carrots", "Oranges", "Ginger", "Water"],
        description : "This smoothie, is a sun-kissed symphony for your soul, a radiant chorus of nutrients in every sip. Carrots, BETA-CAROTENE ballerinas, pirouette in with their LUTEIN and VITAMIN A, like golden spotlights painting your skin with a healthy glow. Juicy oranges, VITAMIN C powerhouses, trumpet their citrusy melodies, shielding your cells from free radicals' mischievous whispers. Zesty ginger, a fiery spice warrior, adds a touch of heat, its ANTI-INFLAMMATORY magic calming irritation and boosting collagen production for a firmer beat. Each sip is a delicious reminder that inner peace reflects from your complexion, leaving you vibrant, luminous, and ready to face the day with a naturally radiant smile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'All smoothies'
    },
    {
        id : 50,
        name : "CHOCO STRAWBERRY",
        color : `rgb(255, 0 , 199)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Strawberries", "Spinach","Avocado","Protein powder", "Milk"],
        description : "Give your body the post-workout refuel it craves with this powerhouse smoothie. Milk and protein powder deliver a punch of fast-absorbing PROTEIN, aiding in muscle repair and growth. Leafy green spinach is packed with VITAMINS and MINERALS to jumpstart recovery and support your overall health. Avocado's HEALTHY FATS keep you feeling satisfied and help your body absorb essential nutrients. Strawberries' burst of ANTIOXIDANTS fights inflammation, while the addition of chocolate powder throws in a delightful twist and might even contribute to muscle recovery. This delicious concoction is a meticulously crafted blend of nutrients designed to supercharge your post-workout rejuvenation.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 51,
        name : "TROPICAL GREEN",
        color : `rgb(250, 255 , 0)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Spinach", "Pineapple", "Protein powder", "Greek yogurt"],
        description : "Kickstart your post-workout recovery with this delicious and nutritious smoothie. Bananas provide readily available carbohydrates to replenish glycogen stores depleted during exercise. Pineapple adds a tropical twist and delivers bromelain, an enzyme that can aid in reducing muscle soreness. Packed with protein and probiotics, Greek yogurt promotes muscle repair and gut health. The addition of protein powder further boosts your protein intake, crucial for building and repairing muscle tissue. This vibrant smoothie is a perfect blend of nutrients designed to refuel your body, fight inflammation, and accelerate post-workout recovery.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 52,
        name : "HIGH CARB",
        color : `rgb(144, 2 , 255)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Dates", "Cinnamon","Ginger", "Protein powder"],
        description : "This banana-date smoothie is a natural energy booster, perfect for refueling after a workout. Bananas offer easily digestible carbohydrates to replenish glycogen stores used for energy. Medjool dates provide a surge of natural sugars for a quick energy boost, along with potassium to combat muscle cramps. The warm spices, cinnamon and ginger, have anti-inflammatory properties that can help reduce muscle soreness. The addition of protein powder further boosts your protein intake, crucial for building and repairing muscle tissue. Blended with water, this smoothie is a light and hydrating option to help your body recover.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 53,
        name : "GREEN FIX",
        color : `rgb(203, 113 , 8)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Kale", "Spinach", "Banana", "Chia seeds", "Milk"],
        description : "Transform your workout recovery routine with this nutrient-packed green smoothie. Kale and spinach, powerhouses of vitamins and minerals, jumpstart your body's recharging process.  The protein punch from protein powder provides essential building blocks for muscle repair and growth.  Bananas offer readily available carbohydrates to replenish glycogen stores used for energy.  Chia seeds, rich in fiber and healthy fats, promote sustained energy and keep you feeling fuller for longer. Blended with milk, this smoothie delivers a complete package of nutrients to refuel your body, reduce muscle soreness, and aid in post-workout recovery.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 54,
        name : "BERRY PUNCH",
        color : `rgb(0, 153 , 15)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Strawberries", "Oats", "Dates", "Protein powder", "Almond milk"],
        description : "Recharge your body after a workout with this protein-packed and energizing strawberry smoothie. Strawberries are a great source of vitamin C, an antioxidant that helps reduce inflammation caused by exercise. Oats provide sustained energy through complex carbohydrates, perfect for refilling your glycogen stores. Medjool dates offer a natural dose of sugars for a quick energy boost, along with potassium to prevent muscle cramps. Protein powder delivers essential protein for muscle repair and growth, crucial after an intense workout. Blended with nutrient-rich almond milk, this smoothie provides a delicious and balanced combination of nutrients to jumpstart your recovery, reduce soreness, and replenish your energy stores.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 55,
        name : "CHOCO PEANUT",
        color : `rgb(20, 0 , 254)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Peanut butter", "Cacao powder", "Oats", "Fat free milk", "Protein powder"],
        description : "Bananas provide readily available carbohydrates to replenish glycogen stores, while peanut butter offers healthy fats and sustained energy. Protein powder and milk join forces to deliver a powerful dose of protein, essential for muscle repair and growth.  The addition of cocoa powder adds a touch of chocolatey indulgence, but may also contain beneficial antioxidants for muscle recovery. Oats, a source of complex carbohydrates and fiber, provide long-lasting energy and help you feel fuller for longer. This delicious smoothie is a carefully crafted combination of nutrients designed to refuel your body, promote muscle repair, and keep you feeling satisfied after a tough workout.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 56,
        name : "PINEAPPLE RECOVERY",
        color : `rgb(255, 98 , 145)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Pineapple", "Spinach", "Ginger", "Banana", "Almond milk"],
        description : "Conquer post-workout fatigue with this refreshing and nutrient-packed smoothie. Pineapples, a natural source of bromelain, can help reduce muscle soreness, while bananas replenish glycogen stores, your body's primary source of energy during exercise. Almond milk provides a hydrating base and healthy fats, while spinach delivers a dose of vitamins and minerals to aid recovery. Ginger's anti-inflammatory properties can further combat muscle discomfort. Finally, chia seeds, rich in fiber and omega-3 fatty acids, promote satiety and sustained energy, making this smoothie a delicious and functional way to refuel your body after a workout.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 57,
        name : "BERRY ORANGE",
        color : `rgb(250, 133 , 48)`,
        font : `'Protest Revolution', sans-serif`,
        ingredients : ["Banana", "Blueberries", "Orange", "Oats", "Greek yogurt"],
        description : "Conquer your post-workout hunger with this satisfying and nutrient-packed smoothie. Bananas provide readily available carbohydrates to restock your glycogen stores, the energy source depleted during exercise. Blueberries, bursting with antioxidants, combat inflammation that can lead to muscle soreness.  Greek yogurt offers a double whammy of protein and probiotics, aiding muscle repair and promoting gut health. Rolled oats add a dose of complex carbohydrates for sustained energy, while the vitamin C in oranges helps with nutrient absorption and keeps your immune system strong. This delicious smoothie is a well-rounded blend of nutrients designed to refuel your body and support your overall recovery after a workout.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Post-Workout smoothie'
    },
    {
        id : 58,
        name : "BEETROOT CLEANSE",
        color : `rgb(255, 0 , 92)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Beetroot", "Carrots", "Celery", "Apple", "Ginger", "Lemon"],
        description : "Apples burst with vitamin C and quercetin, an antioxidant that helps fight inflammation, pectin, a soluble fiber that cleans your digestive system, sweeping away toxins and promoting healthy elimination. Beetroots, rich in nitrates, can convert to nitric oxide in the body, promoting healthy blood flow and potentially lowering blood pressure. Carrots overflow with beta-carotene, which is converted to vitamin A, crucial for vision and immune function. Celery adds a touch of cool hydration and fiber, aiding digestion and keeping you feeling fuller for longer. Ginger boasts anti-inflammatory properties and can soothe nausea. A squeeze of lemon, nature's vitamin C powerhouse, not only adds a detoxifying punch  but also aids in iron absorption.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 59,
        name : "CARROT CLEANSE",
        color : `rgb(255, 92 , 0)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Carrots", "Pineapple", "Orange", "Ginger","Tumeric", "Lemon"],
        description : "Carrots brim with beta-carotene, which your body converts to vitamin A, essential for healthy vision and a strong immune system. Oranges bursting with vitamin C, a potent antioxidant that helps fight free radicals and supports overall well-being. Pineapple adds a touch of tropical sweetness while delivering a dose of bromelain, an enzyme known to aid digestion and reduce inflammation. Turmeric, swoops in with its anti-inflammatory and antioxidant powers. Ginger, its close relative, adds a touch of warmth and boasts similar anti-inflammatory properties, potentially soothing nausea and aiding digestion. Finally, a squeeze of lemon adds a refreshing zing and provides another dose of vitamin C, along with a detoxifying kick.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 60,
        name : "GREEN DETOX",
        color : `rgb(5, 226 , 27)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Kale", "Apple", "Spinach", "Ginger", "Celery", "Lemon"],
        description : "Kale provides a hefty dose of vitamins A, C, and K, crucial for healthy vision, immunity, and blood clotting, respectively. Spinach joins the party with folate, essential for cell growth and repair, and lutein, which protects your eyes from harmful light. Apples are rich in pectin, a soluble fiber that aids digestion and helps remove toxins from the body. Celery, a natural diuretic, promotes healthy elimination and keeps you feeling full for longer. Ginger boasts powerful anti-inflammatory properties that can help reduce bloating and nausea. It also aids digestion and keeps your gut feeling happy. Finally, a squeeze of lemon adds a burst of vitamin C, a potent antioxidant that supports detoxification and brightens the flavor profile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 61,
        name : "SUGAR DETOX",
        color : `rgb(149, 228 ,49)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Apple", "Spinach", "Cucumber", "Ginger", "Celery", "Lemon"],
        description : "Apples contain pectin, a soluble fiber that sweeps away toxins in the digestive system and promotes healthy elimination. Additionally, apples are rich in vitamin C and quercetin, an antioxidant that combats inflammation and supports overall well-being. Cucumber is packed with electrolytes and essential minerals that replenish your body and aid in detoxification. Spinach contains vitamins A, C, and K, crucial for healthy vision, immunity, fighting free radicals, bone health and blood clotting. Celery  is a natural diuretic, promoting healthy elimination of toxins and excess water weight. Ginger boasts powerful anti-inflammatory properties that can help reduce bloating and nausea. A squeeze of lemon adds a burst of vitamin C, a key detoxifying agent, and brightens the flavor profile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 62,
        name : "COLON CLEANSE",
        color : `rgb(203, 0 , 134)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Beetroot","Carrots", "Spinach", "Cucumber", "Ginger", "Lemon"],
        description : " Beets are rich in nitrates that convert to nitric oxide in the body. This molecule promotes healthy blood flow, potentially lowering blood pressure and enhancing exercise performance. Carrot contains beta-carotene, which your body converts to vitamin A. This essential nutrient is crucial for healthy vision, a strong immune system, and vibrant skin. Spinach contains vitamins A, C, and K, crucial for healthy vision, immunity, fighting free radicals, bone health and blood clotting. Cucumber contains electrolytes and essential minerals that replenish your body and aid in detoxification. Ginger boasts powerful anti-inflammatory properties that can help reduce bloating and nausea. A squeeze of lemon adds a burst of vitamin C, a key detoxifying agent, and brightens the flavor profile.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 63,
        name : "WATERMELON CLEANSE",
        color : `rgb(254, 47 , 47)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Watermelon", "Beetroot", "Apples", "Celery", "Ginger", "Lemon"],
        description : "Watermelon is over 90% water, making it incredibly hydrating. It's also rich in L-citrulline and lycopene, supporting healthy blood flow and protection from cell damage. Beets are rich in nitrates that convert to nitric oxide in the body, promoting healthy blood flow and potentially lowering blood pressure. Apples contain pectin, a soluble fiber that sweeps away toxins in the digestive system and promotes healthy elimination. Celery is a natural diuretic, promoting healthy elimination of toxins and excess water weight. Ginger boasts powerful anti-inflammatory properties that can help reduce bloating and nausea. A squeeze of lemon adds a burst of vitamin C, which aids in iron absorption, further enhancing your overall well-being.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 64,
        name : "PINANA CLEANSE",
        color : `rgb(235, 255 , 0)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Pineapple", "Bananas", "Spinach", "Celery", "Ginger", "Lemon"],
        description : "Bananas are packed with potassium, a crucial electrolyte that helps regulate blood pressure and muscle function. Pineapples are loaded with bromelain, an enzyme known to aid digestion and reduce inflammation. Spinach contains vitamins A, C, and K, crucial for healthy vision, immunity, fighting free radicals, bone health and blood clotting. Celery is a natural diuretic, promoting healthy elimination of toxins and excess water weight. Ginger boasts powerful anti-inflammatory properties that can help reduce bloating and nausea. A squeeze of lemon adds a burst of vitamin C, a key detoxifying agent, and brightens the flavor profile. Vitamin C also aids in iron absorption, further enhancing your overall well-being.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    },
    {
        id : 65,
        name : "AVOCADO CLEANSE",
        color : `rgb(124, 197 , 6)`,
        font : `'Permanent Marker', cursive`,
        ingredients : ["Avocado", "Apples", "Spinach", "Cucumber", "Celery", "Ginger"],
        description : "Bananas are packed with potassium, a crucial electrolyte that helps regulate blood pressure and muscle function. Pineapples are loaded with bromelain, an enzyme known to aid digestion and reduce inflammation. Spinach contains vitamins A, C, and K, crucial for healthy vision, immunity, fighting free radicals, bone health and blood clotting. Celery is a natural diuretic, promoting healthy elimination of toxins and excess water weight. Ginger boasts powerful anti-inflammatory properties that can help reduce bloating and nausea. A squeeze of lemon adds a burst of vitamin C, a key detoxifying agent, and brightens the flavor profile. Vitamin C also aids in iron absorption, further enhancing your overall well-being.",
        pricing : [250.00,  350.00, 450.00],
        type : 'Detox smoothies'
    }
]

const customSmoothie = {
    fruits : ['BANANA', 'APPLE', 'STRAWBERRY', 'BLUEBERRY', 'RASPBERRY', 'ORANGE', 'PINEAPPLE', 'MANGO', 'WATERMELON', 'GRAPES', 'KIWI', 'PEACHES'],
    veggies : ['AVOCADO', 'SPINACH', 'KALE', 'CARROTS', 'CELERY', 'CUCUMBER'],
    base: ['WATER', 'LOWFAT MILK', 'YOGURT', 'ALMOND MILK', 'COCONUT MILK', 'COCONUT WATER'],
    addins: ['FLAXSEEDS', 'CHIA SEEDS', 'ALMONDS', 'HONEY', 'CINNAMON', 'GINGER']
}

export default content;
export {customSmoothie};
