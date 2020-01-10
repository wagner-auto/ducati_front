import {SEND} from "./sender/mail_send";
import Cleave from "cleave.js";
require("cleave.js/dist/addons/cleave-phone.ru");
/**
 * Предзагрузка фансибоксов
 */
require("./bootstrap");
/**
 * Яндекс карты
 */
require("./map/yandex_map");

/**
 * Обработка телефонных номеров
 */

const phone = new Cleave("input[type=tel]", {
    phone: true,
    phoneRegionCode: "RU"
});
/**
 * Отправка писем
 */
SEND();
