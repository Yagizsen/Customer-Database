class customer{
    constructor(name,ID,subs,purchase){
        this.name=name,
        this.ID=ID,
        this.subs=subs,
        this.purchase=purchase
    }


    displaySubs(subs){
        console.log(this.subs);
    }

changeSubs(subs,purchase){
    if(this.purchase>1000){
this.subs="elite";
    }else if(this.purchase>500){
this.subs="gold";
    }else if(this.purchase>300){
        this.subs="silver";
            }else{
                this.subs="bronze";
            }
console.log(this.subs)
}

madePurchase(sale){
    this.purchase+=sale;

}
}



const customer1= new customer("Jack", "K9L0123YU", "",1200);
const customer2= new customer("Jhonny", "K91223JK", "",40);
const customer3= new customer("Milenna", "K345KI3U", "",340);

customer3.madePurchase(200)


customer3.changeSubs();

