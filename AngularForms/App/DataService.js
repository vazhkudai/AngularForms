angularFormsApp.factory('DataService', function () {
    var getEmployee = function (id) {
        if (id == 123) {
            return {
                fullName: "Karthik Vazhkudai",
                notes: "Ideal employee. Just don't touch his iPad!",
                department: "Technology",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            };
        }
        return undefined;
    };

    var insertEmployee = function (newEmployee) {
        return true;
    };

    var updateEmployee = function (employee) {
        return true;
    };

    return {
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee
    };
});