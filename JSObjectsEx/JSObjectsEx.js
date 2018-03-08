

function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
  Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
  };

  var personSonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
  console.log(personSonny);

  var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

  personSonny.greet(jordan);
  jordan.greet(personSonny);
  console.log(personSonny.name + "'s email is " + personSonny.email + " and phone is " + personSonny.phone);
  console.log(jordan.name + "'s email is " + jordan.email + " and phone is " + jordan.phone);
  