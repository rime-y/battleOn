export interface Irregular_Info {
  id: string;
  name: string;
  hp: number;
  maxHp: number;

  stat1?: number;
  stat2?: number;
  stat3?: number;
  stat4?: number;
  speStat?: number;

  dice?: number;
  res?: number;

  speFlag: Boolean;
}

export interface Battle_Log_Per_Turn {
  // basic info
  turn_no: number;

  fir: string;
  sec: string;

  // progress log
  fir_action: string;
  fir_res: number;
  fir_note: string;

  sec_action: string;
  sec_res: number;
  sec_note: string;

  // result
  turn_res: Battle_Log_Turn_Result;
}

export interface Battle_Log_Turn_Result {
  p1: string;
  p1_res: string;
  p2: string;
  p2_res: string;
  p3?: string;
  p3_res?: string;
  p4?: string;
  p4_res?: string;
}

