const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5,
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable{
    constructor(item){
        this.type = 'Vegetable';
        this.seasonKoef = 1.3;
        Object.assign(this, item);
    }

    getSum(season){
        if(season) this.price *= this.seasonKoef;
        return this.price;
    }

    getPrice(){
        this.price = this.getSum(this.season);
        return `${this.name} cost: ${this.price}`;
    }

    getInfo(){
        let info = [];
        for(let key in this)
            info.push(`${key}: ${this[key]}`);
            info = info[0].toUpperCase() + info.slice(1);
        return `<ul>
            ${info.join(`. `)}
        </ul>`;
    }
};

let newVegetable = vegetables
    .map(item => new Vegetable(item));

newVegetable.forEach(item => console.log(item.getPrice()));
newVegetable.forEach(item => document.write(item.getInfo()));
