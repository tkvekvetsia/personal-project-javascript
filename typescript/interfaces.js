"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
function isDate(date) {
    return /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date);
}
exports.isDate = isDate;
