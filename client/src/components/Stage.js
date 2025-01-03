"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importDefault(require("./Card"));
const Stage = ({ stage }) => {
    return (<div className="Stage">
            <h2>{stage.title}</h2>
            {stage.cards.map(card => (<Card_1.default key={card._id} card={card}/>))}
        </div>);
};
exports.default = Stage;
