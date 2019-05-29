const FILTER_INPUT_WAIT_INTERVAL = 1000;

const REDIRECT_DELAY = 2000;

const TESTIMONIALS_TIMER_INTERVAL = 8000;

const MAIN_CAROUSEL_TIMER_INTERVAL = 5000;

const ADMIN_PRODUCTS_FILTER_OPTIONS = {'name': 'име', 'number': 'номер', 'category': 'категория', 'subcategory': 'подкатегория'};

const ADMIN_CATEGORIES_FILTER_OPTIONS = {'name': 'име'};

const ELEMENTS_ON_PAGE = {10: 10, 20: 20, 30: 30, 40: 40, 50: 50};

const ORDER_STATUS_BG = {0: 'Получена', 1: 'Потвърдена', 2: 'Изпратена', 3: 'Отказана'};

const ORDER_STATUS_EN = {0: 'ordered', 1: 'confirmed', 2: 'dispatched', 3: 'cancelled'};

const CATEGORY_OR_SUBCATEGORY = {'Категория': false, 'Подкатегория': true};

const LABELS_BG = {
	category: 'Категория',
	subcategory: 'Подкатегория',
	number: '#',
	status: 'Статус',
	lastModification: 'Последна редакция',
	lastModificationTableHeader: 'Редакция',
	customer: 'Получател',
	product: 'Продукт',
	phone: 'Телефон',
	email: 'Емейл',
	amount: 'Сума',
	quantity: 'Брой',
	price: 'Цена',
	total: 'Сума общо',
	edit: 'Редакция',
	address: 'Адрес',
	office: 'Офис',
	orderNumber: 'Поръчка номер',
	deliveredTo: 'Доставка до',
	markAs: 'Отбележи като',
	comments: 'Забележка',
	streetShort: 'ул.',
	districtShort: 'кв.',
	blockShort: 'бл.',
	entranceShort: 'вх.',
	floorShort: 'ет.',
	apartmentShort: 'ап.',
	promoCode: 'За да се възползвате от актуална промоция, моля, валидирайте промо код:'
};

const PLACEHOLDERS = {
	enterPromoCode: 'Въведете промо код'
}

const FACEBOOK_VIDEOS = [
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F1810413359013020%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F1798411130207027%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F1080324425467690%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F229243904443991%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F185537282147987%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F185212032180512%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F183209762380739%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F176997756335273%2F",
	"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoiteochila%2Fvideos%2F180041719364210%2F"
];

const ORDER_DELIVERY_INPUTS = {

	firstName: 'Име',
	lastName: 'Фамилия',
	email: 'Имейл',
	phone: 'Телефон',

	country: 'Държава',
	city: 'Населено място',

	officeName: 'Офис',

	postalCode: 'Пощенски код',
	street: 'Улица',
	streetNo: 'Улица №',
	district: 'Квартал',
	block: 'Блок',
	entrance: 'Вход',
	floor: 'Етаж',
	apartment: 'Апартамент',

	comment: 'Коментар',

	termsAgreed: 'Условия за ползване'
};

const NOT_REQUIRED_ORDER_INPUTS = {
	street: 'улица',
	streetNo: 'улица №',
	district: 'квартал',
	block: 'блок',
	entrance: 'вход',
	floor: 'етаж',
	apartment: 'апартамент',
};

const CREATE_INPUTS = {
	title: 'Заглавие',
	content: 'Съдържание',
	imageUrl: 'Изображение (URL)'
};

const BUTTONS_BG = {
	confirm: 'Потвърди',
	cancel: 'Отказ',
	continue: 'Продължи',
	next: 'Напред',
	back: 'Назад',
	correct: 'Корекция на поръчката',
	yes: 'Да',
	no: 'Не',
	send: 'Изпрати',
	delete: 'Изтрий',
	edit: 'Редактиране',
	more: 'Повече',
	create: 'Създай',
	add: 'Добави',
	saveOrder: 'Запази подреждането',

	//Cart
	saveChanges: 'Запази промените',
	sendOrder: 'Изпрати',
	validate: 'Валидирай',

	// Order
	received: 'Получена',
	confirmed: 'Потвърдена',
	dispatched: 'Изпратена',
	cancelled: 'Отказана'
};

const USER_ACCOUNT = {
	email: 'Имейл',
	password: 'Парола',
	confirmPassword: 'Повтори парола',
	register: 'Регистрация',
	login: 'Вход',
	cancel: 'Отказ',
};

const TOASTR_MESSAGES = {
	//Errors
	error: 'Грешка',
	passwordsMismatch: 'Паролите не съвпадат.',

	'Promotion is not active': 'Промоцията не е активна',
	'No promotion available for selected products/ products quantity': 'Избраните продукти или количества не съответстват на въведения промо код.',
	'Object reference not set to an instance of an object.' : 'Невалиден промо код.',

	'Invalid PromoCode': 'Невалиден промо код.',

	'Quota exceeded': 'Промоцията не е активна',

	//Warnings
	requestEmptyFields: 'Моля, попълнете следните полета:',
	productAlreadyInCart: 'Този продукт вече е добавен.',
	editQuantityFromCart: 'За редакция, моля, отидете в кошница.',
	enterPromoCode: 'Моля. въведете промо код',
	validatingPromo: 'Валидираме Вашия промо код',



	//Success
	successEdit: 'Успешна редакция.',

	productAddedToCart: 'Продуктът е добавен в кошницата Ви.',

	orderSent: 'Поръчката Ви е изпратена.',

	validPromoCode: 'Валиден промо код.',

	successHomeContentModification: 'Съдържанието на началната страница беше променено.',

	successNewsEdit: 'Новината е редактирана успешно.',
	successNewsCreate: 'Новината е създадена успешно.',
	successNewsDelete: 'Новината е изтрита успешно.',

    successCarouselItemCreate: 'Съдържанието беше добавено успешно.',
    successCarouselItemEdit: 'Съдържанието беше редактирано успешно успешно.',
    successCarouselItemDelete: 'Съдържанието беше изтрито успешно успешно.',

	successCancelOrder: 'Поръчката е отказана.',

	successPromotionCreate: 'Промоцията е създадена успешно.',

	messageSent: 'Вашето съобщение беше изпратено!',
    videoAdded: 'Видеото беше добавено!'
};

const CONFIRM_DIALOGS = {
	cancelOrder: 'Желаете ли да откажете поръчката?',
	deleteOrder: 'Сигурни ли сте, че искате да откажете поръчката?',
	deleteProduct: 'Сигурни ли сте, че искате да изтриете този продукт?',
	deleteNews: 'Сигурни ли сте, че искате да изтриете тази новина?',
	deletePromo: 'Сигурни ли сте, че искате да изтриете промоцията?',
    deletePartner: 'Сигурни ли сте, че искате да изтриете партньора?',
	deleteCarouselItem: 'Сигурни ли сте, че искате да изтриете банера?'
};

const RESOLUTIONS = {
	xs: 450,
	sm: 680,
	md: 980,
	bootstrapXS: 768,
	bootstrapSM: 992,
	bootstrapMD: 1200,
	smTopSellers: 640,
	mdTopSellers: 1000,
};

const PRODUCT = {
	price: 'Цена:',
	addToCart: 'Добави'
};

const HOME = {
	topSellers: 'Последно добавени',
	news: 'Блог'
};

const LOREM_IPSUM = 'Известен факт е, че читателя обръща внимание на съдържанието, което чете, а не на оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално разпределение на буквите и се чете по-лесно, за разлика от нормален текст на английски език като "Това е съдържание, това е съдържание". Много системи за публикуване и редактори на Уеб страници използват Lorem Ipsum като примерен текстов модел "по подразбиране", поради което при търсене на фразата "lorem ipsum" в Интернет ще бъдат открити много сайтове в процес на разработка. Някой от тези сайтове биват променяни с времето, а други по случайност или нарочно(за забавление и пр.) биват оставяни в този си незавършен вид.';


const TERMS_AND_CONDITIONS = {
	terms: 'Общи условия и поверителност'
};

const NEWS = {
	published: 'Публикуван на: '
};

const CURRENCY = 'лв.';

const CONTACT_FORM = {
	name: 'Име и Фамилия',
	email: 'Имейл',
	subject: 'Относно',
	message: 'Съобщение'
};

const CART = {
	//Main
	edit: 'Преглед и редакция',
	deliveryData: 'Данни за доставка',
	confirm: 'Потвърждение',
	step1: 'Стъпка 1',
	step2: 'Стъпка 2',
	step3: 'Стъпка 3',
	noProductAdded: 'Нямате добавени продукти',

	//Products table
	product: 'Продукт',
	quantity: 'Брой',
	price: 'Цена',
	sum: 'Сума',
	totalSum: 'Обща стойност: ',

	//Delivery details


	//Review
	recipient: 'Получател',
	toEkontOffice: 'Доставка до офис на ЕКОНТ',
	toAddress: 'Доставка до адрес',
	comment: 'Коментар',
	noComment: 'Няма добавени забележки.',
};

const PARTNERS = {
	city: 'град',
	address: 'адрес',
	logoUrl: 'лого',
	name: 'име',
	webUrl: 'уеб сайт',
	category: 'категория'
};

const PARTNER_CATEGORIES = {
	optics: 'оптики',
	others: 'други',
	gsm: 'GSM аксесоари',
	fishing: 'лов и риболов'
};

const PRODUCT_MOVEMENTS = {
	0: "Покупка",
	1: "Покупка корекция",
	2: "Продажба",
	3: "Продажба корекция",
	4: "Положителна корекция",
	5: "Отрицателна корекция"
};

export {
	FILTER_INPUT_WAIT_INTERVAL,
	MAIN_CAROUSEL_TIMER_INTERVAL,
	TESTIMONIALS_TIMER_INTERVAL,
	ADMIN_PRODUCTS_FILTER_OPTIONS,
    ADMIN_CATEGORIES_FILTER_OPTIONS,
    CATEGORY_OR_SUBCATEGORY,
	ELEMENTS_ON_PAGE,
	ORDER_STATUS_BG,
	ORDER_STATUS_EN,
	LABELS_BG,
	PLACEHOLDERS,
	USER_ACCOUNT,
	TOASTR_MESSAGES,
	ORDER_DELIVERY_INPUTS,
	NOT_REQUIRED_ORDER_INPUTS,
    CREATE_INPUTS,
	BUTTONS_BG,
	RESOLUTIONS,
	REDIRECT_DELAY,
	CONFIRM_DIALOGS,
	PRODUCT,
	HOME,
    TERMS_AND_CONDITIONS,
	CURRENCY,
	CONTACT_FORM,
	CART,
	FACEBOOK_VIDEOS,
	NEWS,
	PARTNERS,
	PARTNER_CATEGORIES,
    LOREM_IPSUM,
	PRODUCT_MOVEMENTS
};

