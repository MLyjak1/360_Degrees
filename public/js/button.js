document.getElementById("search-button").addEventListener("click", searchForDegree);

//Handles searching for degree submit functionality.
async function searchForDegree(event) {
// Function tries to autocomplate the degree name in the search bar
    let searchTerm = document.getElementById("autocomplete-input").value.trim();
// Waits until the ID value from the switch case is returned
    let modifiedTerm = await getIdValue(searchTerm);
// takes the search term from the switch case
    if (searchTerm) {

        const response = await fetch(`/api/review/${modifiedTerm}`, {
            method: "GET",
            headers: { "Content-Type": "application/json"}
        });
// if else statement 
        if (response.ok) {
            document.location.replace(`/review/${modifiedTerm}`)

        } else {
            alert("Invalid degree choice.");
        }
    }

}

//A long ugly switch statement to turn the string into a number for easier use later. Yuck...
function getIdValue(term) {
    switch (term) {
        case "Accounting":
            return 1;
        case "Art Design":
            return 2;
        case "Automotive Technology":
            return 3;
        case "Aviation":
            return 4;
        case "Biology": 
            return 5;
        case "Business": 
            return 6;
        case "CAD/Computer Aided Drafting": 
            return 7;
        case "Child Development": 
            return 8;
        case "Christian Counseling": 
            return 9;
        case "Clinical Psychology": 
            return 10;
        case "Communications": 
            return 11;
        case "Computer Animation": 
            return 12;
        case "Computer Engineering": 
            return 13;
        case "Computer Forensics": 
            return 14;
        case "Computer Networking": 
            return 15;
        case "Computer Programming": 
            return 16;
        case "Computer Science": 
            return 17;
        case "Construction Management": 
            return 18;
        case "Counseling": 
            return 19;
        case "Counseling Psychology": 
            return 20;
        case "Criminal Justice": 
            return 21;
        case "Culinary Arts": 
            return 22;
        case "Cybersecurity": 
            return 23;
        case "Diesel Mechanic": 
            return 24;
        case "Early Childhood Education": 
            return 25;
        case "Education": 
            return 26;
        case "Electrical Engineering": 
            return 27;
        case "Electronics": 
            return 28;
        case "English": 
            return 29;
        case "Exercise Science": 
            return 30;
        case "Fitness Trainer": 
            return 31;
        case "Forensic Psychology": 
            return 32;
        case "Forensic Science": 
            return 33;
        case "Graphic Design": 
            return 34;
        case "Gunsmithing": 
            return 35;
        case "Health Education": 
            return 36;
        case "Health Sciences": 
            return 37;
        case "Healthcare Administration": 
            return 38;
        case "Healthcare Informatics": 
            return 39;
        case "Healthcare Management": 
            return 40;
        case "History": 
            return 41;
        case "Holistic Medicine": 
            return 42;
        case "Hospitality Management": 
            return 43;
        case "Human Resources": 
            return 44;
        case "Human Services": 
            return 45;
        case "HVAC": 
            return 46;
        case "Information Technology": 
            return 47;
        case "Interior Design": 
            return 48;
        case "Jewelry Design": 
            return 49;
        case "Journalism": 
            return 50;
        case "Landscape Design": 
            return 51;
        case "Law": 
            return 52;
        case "Mathematics": 
            return 53;
        case "Mechanical Engineering": 
            return 54;
        case "Medical Billing Coding": 
            return 55;
        case "Medical Office Administration": 
            return 56;
        case "Motorcycle Mechanic": 
            return 57;
        case "Music Production": 
            return 58;
        case "Network Administration": 
            return 59;
        case "Network Security": 
            return 60;
        case "Nurse Practitioner (NP)": 
            return 61;
        case "Nursing": 
            return 62;
        case "Nutrition": 
            return 63;
        case "Occupational Therapy Assistant": 
            return 64;
        case "Office Management": 
            return 65;
        case "Organizational Leadership": 
            return 66;
        case "Patient Care Technician": 
            return 67;
        case "Personal Training": 
            return 68;
        case "Pharmacy": 
            return 69;
        case "Pharmacy Technician": 
            return 70;
        case "Photography": 
            return 71;
        case "Physics": 
            return 72;
        case "Psychology": 
            return 73;
        case "Public Administration": 
            return 74;
        case "Public Health": 
            return 75;
        case "Real Estate": 
            return 76;
        case "Respiratory Therapy": 
            return 77;
        case "School Counseling": 
            return 78;
        case "Social Work": 
            return 79;
        case "Sports Management": 
            return 80;
        case "Sports Medicine": 
            return 81;
        case "Substance Abuse Counseling": 
            return 82;
        case "Teaching": 
            return 83;
        case "Technology Management": 
            return 84;
        case "Veterinary Technician": 
            return 85;
        case "Video Game Design": 
            return 86;
        case "Vocational": 
            return 87;
        case "Web Design": 
            return 88;
        case "Writing": 
            return 89;
        case "Other": 
            return 90;
            
    }
}
