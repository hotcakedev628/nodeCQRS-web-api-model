const {maxLength} = require('../../Ximo/Validation/property-check')

class AccountStatus {
    constructor(isApproved, approvedBy, isDeleted, deletedReason) {
        this._isApproved = isApproved;
        this._approvedBy = approvedBy;
        this._isDeleted = isDeleted;
        this._deletedReason = deletedReason;
    }
    
    get approvedBy() { return this._approvedBy }
    get isApproved() { return this._isApproved }
    set isApproved(val) { 
        maxLength(val, 100)
        this._approvedBy = val
    }
    get isDeleted() { return this._deletedReason}
    get deletedReason() { return this._deletedReason}
    set deletedReason(val) {
        maxLength(val, 100)
        this._deletedReason = val
    }

}

let e = new AccountStatus('d', 'd', 'r', 'r')
console.log(e._deletedReason)

module.exports = AccountStatus