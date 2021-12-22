
class User {
    constructor(email, fullName, birthDate, country, nick) {
        this._email = email
        this._fullName = fullName
        this._birthDate = birthDate
        this._country = country
        this._nick = nick
    }

    set fullName(fullName){
        this._fullName = fullName
    }

    get email(){
        return this._email
    }

    set email(email){
        this._email = email
    }

    get fullName(){
        return this._fullName
    }

    set birthDate(birthDate){
        this._birthDate = birthDate
    }

    get birthDate(){
        return this._birthDate
    }

    set country(country){
        this._country = country
    }

    get country(){
        return this._country
    }

    set nick(nick){
        this._nick = nick
    }

    get nick(){
        return this._nick
    }

}

module.exports = {
    User
}

