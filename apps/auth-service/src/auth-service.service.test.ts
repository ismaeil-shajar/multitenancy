import * as auth_service_service from "./auth-service.service"
import { JwtService } from '@nestjs/jwt';
// @ponicode
describe("auth_service_service.AuthServiceService.login", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_service_service.AuthServiceService(new JwtService({}));
    })

    test("0", () => {
        let result: any = inst.login({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", firstName: "Pierre Edouard", lastName: "Zong", email: "user1+user2@mycompany.com", password: undefined, type: "object", organizationId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", createdAt: "9876", updatedAt: "2017-09-29T19:01:00.000", privilegeGroup: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.login({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", firstName: "George", lastName: "Murray-Kynynmound", email: "user1+user2@mycompany.com", password: undefined, type: "string", organizationId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", createdAt: "c466a48309794261b64a4f02cfcc3d64", updatedAt: "2017-09-29T23:01:00.000Z", privilegeGroup: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.login({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", firstName: "Anas", lastName: "Murray-Kynynmound", email: "something@example.com", password: "NoWiFi4you", type: "number", organizationId: "7289708e-b17a-477c-8a77-9ab575c4b4d8", createdAt: "12345", updatedAt: "Mon Aug 03 12:45:00", privilegeGroup: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.login({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", firstName: "George", lastName: "Zong", email: "TestUpperCase@Example.com", password: undefined, type: "array", organizationId: "a85a8e6b-348b-4011-a1ec-1e78e9620782", createdAt: "12345", updatedAt: "Mon Aug 03 12:45:00", privilegeGroup: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.login({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", firstName: "George", lastName: "Baziz", email: "something@example.com", password: undefined, type: "number", organizationId: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", createdAt: "9876", updatedAt: "2017-09-29T19:01:00.000", privilegeGroup: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.login({ id: "", firstName: "", lastName: "", email: "", password: undefined, type: "", organizationId: "", createdAt: "", updatedAt: "", privilegeGroup: undefined })
        expect(result).toMatchSnapshot()
    })
})
