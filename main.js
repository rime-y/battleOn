

class Irregular{
    constructor(id, name, hp, stat1, stat2, stat3, stat4){
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.stat1 = stat1;
        this.stat2 = stat2;
        this.stat3 = stat3;
        this.stat4 = stat4;
    }

    hurt(damage){ // 피해값 계산
        this.hp = this.hp - damage;
        return this.hp;
    }

    hit(){ // 자신 피해값 반환
        return this.stat1;
    }
    
    isAlive(){ // 체력 확인
        if(this.hp <= 0) {
            this.hp = 0;
            return false;
        }
        return true;
    }


    setSpecialty(damage){ // 이능력
        this.speStat = damage;
    }

    useSpecialty(){
        return this.speStat;
    }
}

// 이능력자 등록


// 