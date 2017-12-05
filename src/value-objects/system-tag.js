const {notNullOrWhitespace} = require('../../Ximo/Validation/property-check')

class SystemTag {
    constructor(name, appliesToExpenses, appliesToTimesheets) {
        this._name = name;
        this._appliesToExpenses = appliesToExpenses;
        this._appliesToTimesheets = appliesToTimesheets;
    }
    get appliesToExpenses() { return this._appliesToExpenses }
    get appliesToTimesheets() { return this._appliesToTimesheets }
    get name() { return this._name }
    set name(val) { 
        notNullOrWhitespace(val)
        this._approvedBy = val
    }
}


module.exports = SystemTag
