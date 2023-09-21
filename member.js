function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    };

    var skills = {
        languages: ['JavaScript', 'Ruby', 'Python'],
        isDesigner: true,
        isDeveloper: true
    };

    // Merge the objects together
    var john = Object.assign(member, skills);

    // Print the result
    console.log(john);
}