var aCar = {
	owner : 'Joe Bloggs',
	address : '3 Walkers Lane',
	  addPreviousOwner : function( newName, newAddress) {
           var o = { name : newName, address : newAddress } ;
           if (this.previous_owners.length== 3){
           this.previous_owners.shift(0) ;
           }
           this.previous_owners.push(o) ;
     } ,
     
     newOwner : function(newName, newAddress){
     	this.addPreviousOwner(this.owner,this.address);
     	this.owner=newName;
     	this.address=newAddress;
     },
    previous_owners : [ { name : 'Pat Smith', address : '1 Main Street'}, 
                        { name : 'Sheila Dwyer', address : '2 High Street'}],
	type : {
		make : 'Toyota',
		model : 'Corolla',
		cc : 1.8
	},
	features : ['Parking assist', 'Alarm', 'Tow-bar'],
	registration : {year : 10, county : 'WD', number : 1058}
} ;

aCar.mileage = 80000 ;
aCar.color = { exterior : 'red', 
               interior : { texture : 'leather', 
                            shade : 'cream' }
              } ;




aCar.addPreviousOwner('Jim Nugent','3 Lower Road') ;
aCar.addPreviousOwner('Rachel Fleming','4 Upper Road') ;
aCar.newOwner('Donal Dunne','5 Kings Way') ;
console.log(aCar.previous_owners[2].name) ;
console.log(aCar.owner) ;

     //console.log(aCar.previous_owners[2].name) ;
     //console.log(aCar.previous_owners[0].name) ;


	// console.log(aCar);