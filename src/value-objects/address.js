const { maxLength } = require('../../Ximo/Validation/property-check')

class Address {
    constructor(addressLine1 = null, addressLine2 = null, city = null,
        postCode = null, state = null, countryName = null, planet = null) {

        this._addressLine1 = addressLine1
        this._addressLine2 = addressLine2
        this._city = city, this._postcode = postCode
        this._state = state
        this._countryName = countryName
        this._planet = planet
    }

    get addressLine1() { return this._addressLine1 }
    set addressLine1(val) {
        maxLength(val, 100)
        this._addressLine1 = val
    }

    get addressLine2() { return this._addressLine2 }
    set addressLine2(val) {
        maxLength(val, 100)
        this._addressLine2 = val
    }

    get city() { return this._city }
    set city(val) {
        maxLength(val, 100)
        this._city = val
    }

    get planet() { return this._planet }
    set planet(val) {
        maxLength(val, 100)
        this._planet = val
    }

    get postCode() { return this._postcode }
    set postCode(val) {
        maxLength(val, 12)
        this._postcode = val
    }

    get state() { return this._state }
    set state(val) {
        maxLength(val, 100)
        this._approvedBy = val
    }


    get countryName() { return this._countryName }
    set countryName(val) {
        maxLength(val, 100)
        this._countryName = val
    }


}

module.exports = Address

