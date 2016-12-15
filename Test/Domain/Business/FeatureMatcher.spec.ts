import {FeatureMatcher} from "../../../Domain/Business/FeatureMatcher";
/**
 * Created by laanaithossam on 12/09/2016.
 */

describe('FeatureMatcher,when call match', ()=> {
    it('Should return 0', ()=> {
        //Arrange
        var featureMatcher = new FeatureMatcher();
        //Act
        var actual = featureMatcher.Match([], []);
        //Assert
        expect(actual).toEqual(0);
    });
});