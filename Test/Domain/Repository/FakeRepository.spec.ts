/**
 * Created by laanaithossam on 12/09/2016.
 */
import {User} from "../../../Domain/Entity/User/User";
import {FakeRepository} from "../../../Fake/FakeRepository";

describe("FakeRepository, When call Create", ()=> {
    it("Should creates a new user", ()=> {

        //Arrange
        var storage = [];
        var repository = new FakeRepository<User>(storage);
        var expected = new User();
        expected.FirstName = 'Hossam';
        expected.LastName = 'Laanait';

        //Act
        repository.Insert(expected);

        //Assert
        var actual = storage.filter(u=>u.FirstName == expected.FirstName)[0];
        expect(actual).toEqual(jasmine.any(User));
        expect(storage.length).toEqual(1);
        expect(actual.FirstName).toEqual(expected.FirstName);
        expect(actual.LastName).toEqual(expected.LastName)
    });
});


describe("FakeRepository, When call Remove", ()=> {
    it("Should removes the user", ()=> {
        //Arrange
        var expected = new User();
        expected.FirstName = 'Hossam';
        expected.LastName = 'Laanait';
        var storage: Array<User> = [expected];
        var repository = new FakeRepository<User>(storage);

        //Act
        repository.Remove(expected);

        //Assert
        expect(storage.length).toEqual(0);
    });
});

describe("FakeRepository, When call Update", ()=> {
    it("Should updates the user", ()=> {
        //Arrange
        var expected = new User();
        expected.FirstName = 'Hossam';
        expected.LastName = 'Laanait';
        var storage: Array<User> = [expected];
        var repository = new FakeRepository<User>(storage);


        //Act
        expected.Email = "laanaithossam@gmail.com";
        repository.Update(expected);

        //Assert
        var actual = storage.filter(u=>u.FirstName == expected.FirstName)[0];
        expect(actual).toEqual(jasmine.any(User));
        expect(actual.FirstName).toEqual(expected.FirstName);
        expect(actual.LastName).toEqual(expected.LastName);
        expect(actual.Email).toEqual(expected.Email);
        expect(storage.length).toEqual(1);
    });
});

describe("FakeRepository, When call Find", ()=> {
    it("Should find the specified user", ()=> {
        //Arrange
        var expected = new User();
        expected.FirstName = 'Hossam';
        expected.LastName = 'Laanait';
        var storage: Array<User> = [expected];
        var repository = new FakeRepository<User>(storage);


        //Act
        var actual = repository.Find(expected);
        //Assert
        expect(actual).toEqual(jasmine.any(User));
        expect(actual.FirstName).toEqual(expected.FirstName);
        expect(actual.LastName).toEqual(expected.LastName);
    });
});
