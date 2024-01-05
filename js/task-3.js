"use strict";

function profile(username, playTime) {

    const profile = {
        username: "Jacob",
        playTime: 300,
        changeUsername: function(newName) {
            this.username += newName;
        },
        updatePlayTime: function(hours) {
            this.playTime += hours;
        },
        getInfo: function(){
            return `${this.username} has ${this.playTime} active hours!`;
        }
    };
    return profile;
}

const userProfile = profile("Jacob", 300);

console.log(userProfile.getInfo()); // "Jacob has 300 active hours!"

userProfile.changeUsername("Marco");
console.log(userProfile.getInfo()); // "Marco has 300 active hours!"

userProfile.updatePlayTime(20);
console.log(userProfile.getInfo()); // "Marco has 320 active hours!"
