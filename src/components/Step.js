export default class Step{
    constructor(id, date, distance){
        this.id = id;
        this.date = date;
        this.distance = distance;
    }

    addDistance(value){
        this.distance = (Number(this.distance) + Number(value)).toString();
    }
}