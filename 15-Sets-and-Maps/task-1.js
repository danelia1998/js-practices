
class DB{
    constructor(){
        this.data = new Map()
    }
    create(obj){
        if(!obj || typeof obj == "object"){
            let random = new Date().getTime().toString()
            this.data.set(random, obj)
            return random
        }else{
            throw new Error("Must be an object")
        }
    }

    read(id){
        if(!id || typeof id == "string"){
            const user = this.data.get(id);
            return user ? {...user, id} : null 
        }else{
            throw new Error("Must be an string")
        }
    }

    readAll(){
        if(arguments.length > 0){
            throw new Error("readAll method can't take arguments!")
        }else{
            return Array.from(this.data.values())
        }
    }

    update(id, obj){
        if(!id || typeof id != "string"){
            throw new Error("ID required")}
        else if(!obj || typeof obj != "object"){
            throw new Error("Must be an object")}

        const user = this.data.get(id)        
        if(user){
            this.data.set(id, {...user, ...obj})
            return id
        } else {
            throw new Error("No user with ID like this!")
        }
    }

    delete(id){
        if(!id || typeof id != "string"){
            throw new Error("String ID required")}
        else if(this.data.get(id)){
            return this.data.delete(id)
        }
    }
    
}

const db = new DB();
const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true