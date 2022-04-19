let employee = [{ "id": 1, "first_name": "Reena", "last_name": "Merrall", "email": "rmerrall0@admin.ch", "gender": "Female", "location": "USA" },
{ "id": 2, "first_name": "Susana", "last_name": "Scandrett", "email": "sscandrett1@reference.com", "gender": "Male", "location": "Belgium" },
{ "id": 3, "first_name": "Charmaine", "last_name": "Greyes", "email": "cgreyes2@mapy.cz", "gender": "Female", "location": "New Zealand" },
{ "id": 4, "first_name": "Hillery", "last_name": "MacNair", "email": "hmacnair3@hibu.com", "gender": "Male", "location": "Germany" },
{ "id": 5, "first_name": "Henriette", "last_name": "Stirland", "email": "hstirland4@opensource.org", "gender": "Male", "location": "France" },
{ "id": 6, "first_name": "Dulce", "last_name": "Culross", "email": "dculross5@devhub.com", "gender": "Female", "location": "Ireland" },
{ "id": 7, "first_name": "Ardelia", "last_name": "Vanyashkin", "email": "avanyashkin6@uol.com.br", "gender": "Male", "location": "Unites Kingdom" },
{ "id": 8, "first_name": "Nonna", "last_name": "Rean", "email": "nrean7@uiuc.edu", "gender": "Female", "location": "Saudi Arabia" },
{ "id": 9, "first_name": "Levey", "last_name": "Stithe", "email": "lstithe8@squarespace.com", "gender": "Male", "location": "Dubai" },
{ "id": 10, "first_name": "Ulises", "last_name": "Sutlieff", "email": "usutlieff9@walmart.com", "gender": "Non-binary", "location": "Qatar" }]

function getEmployeeData() {
    console.log("test")
    let rows =""
    for(emp of employee) {
        rows = rows + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.first_name}</td>
                        <td>${emp.last_name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.gender}</td>
                        <td>${emp.location}</td>
                        </tr>`
    }
    document.getElementById("abc").innerHTML = rows
}