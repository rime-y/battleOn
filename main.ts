import {
  Irregular_Info,
  Battle_Log_Per_Turn,
  Battle_Log_Turn_Result,
} from "./@interfaces";
import { Irregular, Enemy, actions } from "./database";

// player data input
let p1: Irregular = new Irregular("p1", "player one", 100, 5, 5, 5, 5);
let e1: Enemy = new Enemy("e1", "enemy one", 100, 5, 5, 5, 5);

// battle start
function fir_turn(fir, sec, action) {
  switch (action) {
    case actions.attack:
      sec.hurt(fir.attack());
      break;
    case actions.defend:
      break;
    default:
      console.log("FirTurn-NotRegisteredAction");
  }
}

function sec_turn(fir, sec, action, preAction) {
  switch (action) {
    case actions.attack:
      break;
    case actions.defend:
      break;
    default:
      console.log("SecTurn-NotRegisteredAction");
  }
}

function one_turn() {}
