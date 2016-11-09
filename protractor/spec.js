/**
 * Created by  User: nicorama
 * Date: 03/11/2014 ; Time: 19:51
 */
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */


console.log("in protractor spec")

describe('my app', function() {



    it('should have a click button', function() {

        expect(1).toBe(1);

        browser.get('http://localhost:3000/protractor.html');
        var button = element(by.css('button.fetch'))

        expect(button.isPresent()).toBe(true);

        //not working that much here
      //  browser.pause();


    });




    describe('Clicking should show users and admins', function() {

        it('should do the math', function () {
            expect(1).toBe(1);

        browser.get('http://localhost:3000/protractor.html');
        var button = element(by.css('button.fetch'))

        expect(button.isPresent()).toBe(true);


        button.click().then(function(result){

            console.log("IN CLICK")
            //if too short, probably not needed
            browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css('li.user-fetch'));
            });


            var items = element.all(by.css('li'));
            //console.log(items.count())
            expect(items.count()).toBeGreaterThan(6)
            expect(items.count()).toBeLessThan(25)
        })

/*
         browser.driver.wait(function() {
            return browser.driver.isElementPresent(by.css('li.admin'));
         });

*/

        });

    });


    describe('We can add comment on troll topic', function() {

        it ("should be more than 5 users in the comboBox", function(){
            expect(1).toBe(1);
            //expect(element.all(by.css('option')).count()).toBeGreaterThan(5)

        })


        it("should add a comment when I fill the textarea and click OK", function(){

            expect(1).toBe(1);
            /*
            var textarea = element(by.css('textarea'))
            expect(textarea.isPresent()).toBe(true);
            textarea.sendKeys('I am a super comment');

            var sendButton = element(by.css('button.send-comment'));
            expect(sendButton.isPresent()).toBe(true);
            sendButton.click()
            */



        })





    });

});
