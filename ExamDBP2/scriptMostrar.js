$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/CategoryRestService/FindById/1"
    }).then(function(data) {
       $('.id').append(data.id);
       $('.c-date').append(data.whenCreated);
       $('.a-date').append(data.whenLastUpdated);
       $('.name').append(data.name);
       $('.description').append(data.description);
    });
});