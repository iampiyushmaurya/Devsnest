let name = {
    firstName: 'piyush',
    lastName: 'Maurya',
    printName: function(){
        console.log(this.firstName+ " "+this.lastName);
    },
    sum : function(a,b,c){
        console.log(a+b+c);
    }
}
name.printName();
let name2 = {
    firstName: 'kane',
    lastName: 'pope',
}
name.printName.call(name2);
name.printName.apply(name2);
let print = name.printName.bind(name2);
print()

name.sum.call(name2,10,20,30);
name.sum.apply(name2,[10,10,20]);
let print1 = name.sum.bind(name2,100,20,10);
print1()