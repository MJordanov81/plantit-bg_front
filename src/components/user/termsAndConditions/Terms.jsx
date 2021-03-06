﻿import React from 'react';

import {Grid, Col, Row} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import {TERMS_AND_CONDITIONS} from '../../../data/constants/componentConstants';

class Terms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <Grid fluid id="terms">
                <Grid className='bg-white'>

                    <Col xs={12}>
                        <h1 className="section-heading">{TERMS_AND_CONDITIONS.terms}</h1>
                        <p>
                            Plantit-bg.com е уебсайт за on-line пазаруване, който се управлява от мен - Мариян Бориславов Йорданов, 
			    в качеството ми на АДМИНИСТРАТОР,
                            и се използва от ПОТРЕБИТЕЛИТЕ - всяко физическо или юридическо лице, което използва
                            услугите на сайта, при условията, посочени по-долу. Продуктите предлагани на сайта са с високо качество, като част от растенията са собствено производство, 
			    а други са закупени от доказани производители от ЕС.
                        </p>
                        <ol>
                            <li>
                                Настоящите общи условия представляват споразумение между Администратора и Потребителя и
                                съдържат условията за използването на уебсайта, като приемането им е задължително за използването на сайта.
                            </li>
                            <li>
                                Общите условия влизат в сила от момента, в който Потребителят използва за пръв път
                                сайта. Те са приложими при всяко посещение и използване на сайта и са валидни до преустановяване
                                използването на сайта.
                            </li>
                            <li>
                                Услугите в сайта, предоставени от Администратора включват:
                                <ul>
                                    <li>
                                        Предоставяне на достъп през уеб браузър до информацията от този сайт.
                                    </li>
                                    <li>
                                        Продажба на продукт от сайта. При направа на поръчка онлайн, Потребителят
                                        заявява
                                        желание да получи определена стока срещу заплащане. Формата на заплащане е
                                        наложен
                                        платеж/пощенски превод. 
                                    </li>
                                    <li>
                                        Доставка на продукт от сайта. Доставката се осъществава с куриерска фирма, за
                                        сметка на Потребителя. Доставката включва опция за преглед на продукта преди плащане,
					като с цел своевременно установяване на дефектни/сгрешени продукти, моля да се възползвате винаги от това свое право.
					Растенията продавани на сайта се изпращат на гол корен, 
					с изключение на по-деликатни видове или при изрично желание от страна на ПОТРЕБИТЕЛЯ. 
					Доставки при метеорологични условия застрашаващи оцеляването на растенията при транспорт, няма да бъдат извършвани.
                                    </li>
                                    <li>
                                        Връщане на стока. Съгласно закона за защита на потребителите ЗЗП чл.55
                                        ПОТРЕБИТЕЛЯТ има право да върне или замени закупен продукт в рамките на 14 дни от дата на
                                        закупуване. За контакт с АДМИНИСТРАТОРА на този сайт във връзка с връщане на стока, моля използвайте контактната форма. 
					Върнатият продукт трябва да е в изряден търговски вид, без следи от
                                        употреба, растенията закупени от сайта трябва да бъдат без видими белези, третирани съгласно указанията предоставени на този сайт
					и с добър търговски вид, както в момента на тяхното получаване. 
					При спазване на условията за върната поръчка, се възстановява пълната
                                        сума на Потребителя. Транспортната услуга при връщане на стоки е за сметка на ПОТРЕБИТЕЛЯ, 
					освен в случаите на изпратена различна от поръчаната или дефектна стока.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                С използването на уебсайта и направена поръчка, Потребителят приема и дава своето
                                информирано изрично съгласие, личните му данни - име ,телефон и адрес за доставка да
                                бъдат
                                събирани, обработвани и съхранявани от Администратора, който ще ги използва ЕДИНСТВЕНО и
                                САМО с цел правилното, безпроблемно и пълноценно реализирана онлайн поръчка. 
				Личните данни няма да бъдат предоставяни на трети страни при никакви обстоятелства.
                            </li>
                            <li>
                                Администраторът предприема мерки за защита на личните данни на потребителите, следвайки
                                политиката си за поверителност и съгласно изискванията на Закона за защита на личните
                                данни
                                и други приложими разпоредби на българското и европейското право.
                            </li>
                        </ol>

                        <p>УСЛОВИЯ ЗА ОБРАБОТКА НА ЛИЧНИ ДАННИ ПО ЗАКОНА ЗА ЗАЩИТА НА ЛИЧНИТЕ ДАННИ И РЕГЛАМЕНТ (ЕС)
                            2016/679</p>
                        <ol>
                            <li>
                                За да използва САЙТА, ПОТРЕБИТЕЛЯT дава съгласието си АДМИНИСТРАТОРА да събира и
                                обработва личните му данни и декларира, че е запознат/а с:

                                <ul>
                                    <li>
                                        целта и средствата за обработка на личните данни;
                                    </li>
                                    <li>
                                        доброволния характер на предоставянето на данните;
                                    </li>
                                    <li>
                                        правото на достъп, на коригиране и на изтриване на събраните данни;
                                    </li>
                                </ul>
                            </li>
                            <li>
                                С регистрирането си в САЙТА или извършване на ПОРЪЧКА и попълването на формуляра с лични
                                данни,
                                ПОТРЕБИТЕЛЯT декларира, че е съгласен всички предоставени от него лични данни да бъдат
                                включени в
                                базата данни на АДМИНИСТРАТОРА и дава своето изрично и недвусмислено съгласие, че
                                личните му данни,
                                могат да бъдат съхранявани и използвани от АДМИНИСТРАТОРА за:

                                <ul>
                                    <li>
                                        <strong>Оформяне и изпращане на поръчки</strong><br/>

                                        За да направите поръчка е необходимо да предоставите следните лични данни,
                                        необходими за изпълнението на поръчката Ви:
                                        <ul>
                                            <li>
                                                Две имена
                                            </li>
                                            <li>
                                                Tелефон
                                            </li>
                                            <li>
                                                Имейл адрес
                                            </li>
                                            <li>
                                                Адрес за доставка (може да бъде посочен и офис на куриера)
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Контактна форма</strong><br/>

                                        Информацията, предоставена от ПОТРЕБИТЕЛЯ посредством формата за контакти на сайта,
                                        се използва само за обратна връзка от страна на АДМИНИСТРАТОРА и се пази до 30 дни,
                                        след приключване на кореспондецията. Предоставените данни, през контактната форма от
                                        ПОТРЕБИТЕЛЯ, няма да бъде използвана за маркетингови цели!
                                    </li>
                                </ul>
                            </li>
                            <li>
                                АДМИНИСТРАТОРЪТ няма да предоставя каквато и да било лична информация на трети лица.
                            </li>
                            <p>
                                <strong>Поверителността на личните Ви данни е важна за нас!</strong>
                            </p>
                        </ol>

                    </Col>


                    <Col xs={12} className="text-center">
                        <button className={"btn-custom default md"} onClick={() => this.props.history.go(-1)} > Назад </button>
                    </Col>


                </Grid>



            </Grid>
        );
    }
}

export default Terms;