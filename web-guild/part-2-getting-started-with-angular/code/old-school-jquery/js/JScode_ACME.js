
$(document).ready(function() {
    acmeAjax.getInfo();
});

//overlay object for general Ajax loading
var overlay = {

    display: function() {

        var item = document.getElementById("overlayLoading");

        //toggle between "visible" and "hidden"
        item.style.visibility = (item.style.visibility == "visible") ? "hidden" : "visible";
    }
};


//acmeAjax object
var acmeAjax = {

    message: null,

    save: function() {

        var employee = {};

        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var hasDriversLicense = $('#hasDriversLicense').val();
        var gender = $('#gender').val();

        employee.name = name;
        employee.surname = surname;
        employee.hasDriversLicense = hasDriversLicense ? 'yes' : 'no';
        employee.gender = gender;
        employee.created_at = new Date();
        employee.updated_at = new Date();

        overlay.display();

        //save
        acmeAjax.saveDetails(employee);

    },

    saveDetails: function(employeeObj) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/employees",
            data: JSON.stringify(employeeObj),
            contentType: "application/json",
            dataType: "json",
            success: function(msg) {
                overlay.display();
                acmeAjax.getInfo();
            },
            error: ajaxFailed
        });
    }
    ,
    getInfo: function() {

        overlay.display();

        $.get('http://localhost:3000/employees', function(data){
            var employeesList = JSON.parse(data);

            for (var i = 0; i < employeesList.length; i++) {
                var obj = employeesList[i];
                $('#employees').append('<li>'+ obj.name +'-'+ obj.surname +'-'+ obj.hasDriversLicense +'-'+ obj.gender +'</li>');
            }
            overlay.display();
        });
    }

};


function ajaxFailed(result) {
    //Ajax failed display error msg
    alert(result.status + ' ' + result.statusText);
}