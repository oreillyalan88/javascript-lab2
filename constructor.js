function Car(name,address,make,model,cc,reg) {
        this.owner = name
        this.address = address
        this.previous_owners = [ ]
        this.type = { make : make, model : model, cc : cc }
        this.features = ['Parking assist', 'Alarm', 'Tow-bar'];

        this.addPreviousOwner = function(newName,newAddress) {
               var o = { name : newName, address : newAddress }
               if (this.previous_owners.length == 3) {
                     this.previous_owners.shift()
               }
               this.previous_owners.push(o)
         };

         this.wasOwnedBy = function(query) {
            var match = this.previous_owners.find(function(element,index) {
                return element.name.toUpperCase() == query.toUpperCase() ;
            });
            return match == undefined ? false : true ; 
         };
    }

    var car1 = new Car('Joe Bloggs','3 Walkers Lane',
                       'Toyota','Corolla',1.8,
                       '10-WD-1058') ;
    car1.addPreviousOwner( 'Pat Smith', 
                           '1 Main Street') ;
    car1.addPreviousOwner( 'Pat Smith', 
                           '1 Main Street') ;
    car1.addPreviousOwner( 'Sheila Dwyer', 
                           '2 High Street') ;
    console.log('Path Smith ? ' + car1.wasOwnedBy('Pat Smith')) ;