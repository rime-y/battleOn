import { Irregular_Info } from "./@interfaces";

export class Irregular {
    i: Irregular_Info;
  
    // setting - creat, specialty, ...
    constructor(id, name, hp, stat1, stat2, stat3, stat4) {
      this.i.id = id;
      this.i.name = name;
      this.i.hp = hp;
      this.i.maxHp = hp;
      this.i.stat1 = stat1;
      this.i.stat2 = stat2;
      this.i.stat3 = stat3;
      this.i.stat4 = stat4;
  
      // default setting
      this.i.dice = 0;
      this.i.res = 0;
  
      this.i.speFlag = false;
    }
  
    setSpecialty(damage) {
      this.i.speFlag = true;
      this.i.speStat = damage;
    }
  
    // basic - runDice, checkStat(isAlive) ...
    runDice(n1, n2) {
      // (n1)d(n2)
      let dRes = 0;
      for (var i = 0; i < n1; i++) {
        dRes += Math.floor(Math.random() * n2 + 1);
      }
      this.i.dice = dRes;
      this.i.res = dRes;
  
      return dRes;
    }
  
    isAlive() {
      if (this.i.hp <= 0) {
        this.i.hp = 0;
        return false;
      }
      return true;
    }
  
    // move - the basic movement
    move_hurt(damage) {
      this.i.hp = this.i.hp - damage;
      return this.i.hp;
    }
  
    move_hit() {
      return this.i.stat1;
    }
  
    useSpecialty() {
      return this.i.speStat;
    }
  
    setRes(Cor) {
      this.i.res = this.i.dice + Cor;
      return this.i.res;
    }
  
    // action - more complicate (combination of movements)
  }
  
  export class Enemy extends Irregular {}
  
  // move: no enemy
  // action: with enemy
  
  export const actions = {
    attack: "at",
    defend: "df",
    run: "ra",
    evasion: "ev",
    special: "sp",
  };
  