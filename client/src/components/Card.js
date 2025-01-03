"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ card }) => {
    return (<div className="Card">
            <h3>{card.title}</h3>
            <p>{card.comments}</p>
        </div>);
};
exports.default = Card;
