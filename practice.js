// Задача №1
// /* напиши скрипт який перевіряє чи входить число у відрізок 
// х1 х2
// - до х1
// - після х2
// - від х1 до х2
// - до х1 або після х2
// */
// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадає у відрізок до ${x1}`, number < x1);

// console.log(`Число ${number} попадає у відрізок після ${x2}`, number > x2);

// const res1 = number > x1 && number < x2;
// // console.log(`Число ${number} попадає у відрізок до ${x1} до ${x2}`,res1);

// const res2 = number < x1 || number > x2;
// console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}`,res2);


// ......................

// Задача №2
// /*
// Напиши скрипт який перевіряє можливість відкрити чат 
// з користувачем.
// Для цього користувач повинен бути
// - другом
// _ онлайн
// - без режиму - не турбувати
//  */
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можна відкрити чат?', canOpenChat);
// ..........................

// /*
// // Задача №3
// // написати скрипт перевірки підписки користувача 
// // при доступі до контенту
// // - є три типи підписки: free, pro і vip
// // - отримати доступ можуть тільки pro і vip
// // */
// const sub = "pro";

// const canAccessContent = sub === "pro" || sub === "vip";
// console.log("Є доступ до контенту?", canAccessContent);
// ...........................

// // Задача №4
// /*Оголоси змінну message і запиши в неї повідомлення про покупку,
// рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits".
// Де < назва товару > і < ціна товару > — це значення змінних productName і pricePerItem.
// Використовуй синтаксис шаблонних рядків.
// */
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = "You picked ${productName}, price per item is ${pricePerItem} credits";

// console.log(message);

// ..................................................

// Задача № 5
// Магазин з продажу ремонтних дроїдів готовий до відкриття,
// залишилося написати скрипт для їх замовлення.
// Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} credits is included in total price.`;

// console.log(message);

// ....................................................

// Задача № 6
// Заміни вирази зі стандартними математичними операторами
// на комбінований оператор присвоєння
// з додаванням, відніманням, множенням і діленням.

// Значення змінної a дорівнює 7
// Використаний оператор +=

// Значення змінної b дорівнює 6
// Використаний оператор -=

// Значення змінної c дорівнює 45
// Використаний оператор *=

// Значення змінної d дорівнює 2
// Використаний оператор /=

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;