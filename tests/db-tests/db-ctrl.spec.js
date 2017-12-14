require('dotenv').config()
const faker = require('faker')
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const db = require('../../src/database/db-ctrl')
const dbConnection = require('../../src/database/db-connection.js')

describe("Db Event store ", function () {
    beforeAll(async () => {
        dbConnection.connectToTestDb()
        // await db.removeAllEvents()
    })

    afterAll(async () => {
        // await db.removeAllEvents()
    })


    describe("Creating a new account", function () {

        beforeAll(async () => {

        })
        it("should create a new account", async function () {
            const id = faker.commerce.price(100, 1000)
            const res = await db.saveNewAccount(id, 555556, faker.name.firstName())
            expect(res.id).toBe(id)
        })

    })

    describe("Delete an account", function () {
        const id = faker.commerce.price(100, 1000)
        beforeAll(async () => {
            await db.saveNewAccount(id, 555556, faker.name.firstName())
        })
        it("should delete an account", async function () {
            const res = await db.deleteAccount(id)
            expect(res.result.n).toBe(1)
        })
    })


    describe("Adding a system tag", function () {
        const id = faker.commerce.price(100, 1000)
        beforeAll(async () => {
            await db.saveNewAccount(id, 555556, faker.name.firstName())
        })
        it("should add system tag", async function () {
            const sysTag = {
                name: faker.name.jobArea(),
                appliesToExpenses: true,
                appliesToTimesheets: false
            }
            const res = await db.addSystemTag(id, sysTag.name, sysTag.appliesToExpenses, sysTag.appliesToTimesheets)
            expect(res.name).toBe(sysTag.name)
            expect(res.appliesToExpenses).toBe(sysTag.appliesToExpenses)
            expect(res.appliesToTimesheets).toBe(sysTag.appliesToTimesheets)
            
        })
    })


    describe("Updating an account address", function () {
        const id = faker.commerce.price(100, 1000)
        
        beforeAll(async () => {
            await db.saveNewAccount(id, 555556, faker.name.firstName())
        })
        it("should update address successfully", async function () {
            const newAddress = {
                addressLine1: faker.address.secondaryAddress(), addressLine2: faker.address.streetAddress(), city: faker.address.city(), 
                postcode:11111, countryName: faker.name.firstName(), state: faker.address.state()
            }
            const res = await await db.updateAccountAddress(id,  newAddress)
            expect(res.addressLine1).toBe(newAddress.addressLine1)
            expect(res.addressLine2).toBe(newAddress.addressLine2)
            expect(res.city).toBe(newAddress.city)
            expect(res.postcode).toBe(newAddress.postcode)
            expect(res.countryName).toBe(newAddress.countryName)
            expect(res.state).toBe(newAddress.state)    
        })
    })



    describe("Approving an account", function () {
        const id = faker.commerce.price(100, 1000)
        
        beforeAll(async () => {
            await db.saveNewAccount(id, 555556, faker.name.firstName())
        })
        it("should approve account successfully", async function () {
            const approvedBy = faker.name.firstName()
            const res = await await db.approveAccount(id,  approvedBy)
            expect(res.approvedBy).toBe(approvedBy)
            expect(res.isApproved).toBe(true)
        })
    })


    describe("Getting account details", function () {
        const id = faker.commerce.price(100, 1000)
        beforeAll(async () => {
            await db.saveNewAccount(id, 555556, faker.name.firstName())
        })
        it("should approve account successfully", async function () {
            const res = await await db.getAccountDetailsById(id)
            expect(res.id).toBe(id)
        })
    })



})
