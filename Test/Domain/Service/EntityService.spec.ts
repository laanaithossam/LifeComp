import {User} from "../../../Domain/Entity/User/User";
import {EntityService} from "../../../Domain/Service/EntityService";
import {RepositoryBase} from "../../../Domain/Repository/RepositoryBase";


describe("EntityService<User>, When call Insert", ()=> {
    it("Should creates a new user", ()=> {

        //Arrange
        var repositoryMock: RepositoryBase<User>;
        repositoryMock = jasmine.createSpyObj("repositoryMock", ['Insert']);
        var userEntityService = new EntityService<User>(repositoryMock);
        var user = new User();
        user.FirstName = 'Hossam';
        user.LastName = 'Laanait';

        //Act
        userEntityService.Insert(user);

        //Assert
        expect(repositoryMock.Insert).toHaveBeenCalledWith(user);
    });
});


describe("EntityService<User>, When call Remove", ()=> {
    it("Should removes the user", ()=> {
        //Arrange
        var repositoryMock: RepositoryBase<User>;
        repositoryMock = jasmine.createSpyObj("repositoryMock", ['Remove']);
        var user = new User();
        user.FirstName = 'Hossam';
        user.LastName = 'Laanait';
        var userEntityService = new EntityService<User>(repositoryMock);

        //Act
        userEntityService.Remove(user);

        //Assert
        expect(repositoryMock.Remove).toHaveBeenCalledWith(user);
    });
});

describe("EntityService<User>, When call Update", ()=> {
    it("Should updates the user", ()=> {
        //Arrange
        var repositoryMock: RepositoryBase<User>;
        repositoryMock = jasmine.createSpyObj("repositoryMock", ['Update']);
        var user = new User();
        user.FirstName = 'Hossam';
        user.LastName = 'Laanait';
        var userEntityService = new EntityService<User>(repositoryMock);

        //Act
        userEntityService.Update(user);

        //Assert
        expect(repositoryMock.Update).toHaveBeenCalledWith(user);
    });
});

describe("EntityService<User>, When call Find", ()=> {
    it("Should find the specified user", ()=> {
        //Arrange
        var repositoryMock: RepositoryBase<User>;
        repositoryMock = jasmine.createSpyObj("repositoryMock", ['Find']);
        var user = new User();
        user.FirstName = 'Hossam';
        user.LastName = 'Laanait';
        var userEntityService = new EntityService<User>(repositoryMock);

        //Act
        userEntityService.Find(user);

        //Assert
        expect(repositoryMock.Find).toHaveBeenCalledWith(user);
    });
});