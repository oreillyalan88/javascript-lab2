var aCar = {
	owner : 'Joe Bloggs',
	address : '3 Walkers Lane',
	
		wasOwnedBy : function(query){
			var match = this.previous_owners.find(function(element,index){
			  return query.toUpperCase() == element.name.toUpperCase() ;
           });
        return match == undefined ? false : true ; 
    },
	
	howOld : function() {
               var today = new Date();
               var this_year = today.getFullYear() ;
               return this_year - (this.registration.year + 2000) ;
           },
     
    hasFeature : function(query) {
            var match = this.features.find(function(element,index) {
            return query.toUpperCase() == element.toUpperCase() ;
           });
        return match == undefined ? false : true ; 
    },

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
aCar.newOwner('Donal Dunne','5 Kings Way');
var name = 'Jim Nugent' ;
console.log(name + ' ? ' + aCar.wasOwnedBy(name)) ;
name = 'Paul Minihan' ;
console.log(name + ' ? ' + aCar.wasOwnedBy(name)) ;

