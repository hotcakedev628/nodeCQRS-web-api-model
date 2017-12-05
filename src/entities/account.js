const AccountStatus = require('../value-objects/account-status')
const Address = require('../value-objects/address')
const SystemTag = require('../value-objects/system-tags')

class Account {
    constructor() {
        this.address = new Address();
        this.status = new AccountStatus(false, null, false, null);
    }

    get accountNumber() { return this._accountNumber }


    _applyAccountCreated (e)  {
        Id = e.AccountId;
        BusinessName = e.BusinessName;
        AccountNumber = e.AccountNumber;
    }

    _applySystemTagAdded (e) {
        const systemTag = new SystemTag(e.Name, e.AppliesToExpenses, e.AppliesToTimesheets);
        this.systemTagList.push(systemTag)
    }

    _applyAddressUpdated (e) {
        this.address = new Address(e.AddressLine1, e.AddressLine2, e.City, e.Postcode, e.State, e.CountryName);
    }

    _applyAccountApproved (e)  {
        this.status = new AccountStatus(true, e.approvedBy, false, null);
    }

    applyAccountDeleted (e)  {
        this.status = new AccountStatus(this.status.isApproved, this.status.approvedBy, true, e.reason);
    }

    // ReSharper disable once UnusedParameter.Local
    _applyAccountReinstated (e)  {
        this.status = new AccountStatus(this.status.isApproved, this.status.approvedBy, false, null);
    }



}