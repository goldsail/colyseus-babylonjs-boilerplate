import { Schema, type } from "@colyseus/schema";

export interface PressedKeys {
    spin: number;
    move: number;
}

export class Position extends Schema {
    @type("number") x: number = 0;
    @type("number") y: number = 0;
    @type("number") z: number = 0;
    @type("number") heading: number = 0;
}

export class Player extends Schema {
    @type("string") name: string;
    @type(Position) position = new Position();

    pressedKeys: PressedKeys = { spin: 0, move: 0 };
}
