import { Input } from "../input";
import { Output } from "../output";

"use strict";

export function sum(message: Input): number {
    return message.x + message.y;
}