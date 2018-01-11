var person = {
    name: "Mosh",
    walk: function() {
        this.trigger("walking", {
            speed: 1,
            startTime: "8:00"
        });
    }
};

_.extend(person, Backbone.Events);

person.on("walking", (e) => {
    console.log('person is walking');
    console.log('passed event to walking event is: ', e);
});

person.walk()