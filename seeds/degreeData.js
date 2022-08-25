const { Degree } = require("../models");

const degreeSeedData = [
    {
        degree_name: "Accounting",
        score_value: 0,
    },
    {
        degree_name: "Art Desigin",
        score_value: 0,
    },
    {
        degree_name: "Automotive Technology",
        score_value: 0,
    },
    {
        degree_name: "Aviation",
        score_value: 0,
    },
    {
        degree_name: "Biology",
        score_value: 0,
    },
    {
        degree_name: "Buisness",
        score_value: 0,
    },
    {
        degree_name: "Cad/Computer Aided Drafting",
        score_value: 0,
    },
    {
        degree_name: "Child Development",
        score_value: 0,
    },
    {
        degree_name: "Christian Counseling",
        score_value: 0,
    },
    {
        degree_name: "Clinical Psycology",
        score_value: 0,
    },
    {
        degree_name: "Communitcations",
        score_value: 0,
    },
    {
        degree_name: "Computer Animation",
        score_value: 0,
    },
    {
        degree_name: "Computer Engineering",
        score_value: 0,
    },
    {
        degree_name: "Computer Forensics",
        score_value: 0,
    },
    {
        degree_name: "Computer Networking",
        score_value: 0,
    },
    {
        degree_name: "Computer Programming",
        score_value: 0,
    },
    {
        degree_name: "Computer Science",
        score_value: 0,
    },
    {
        degree_name: "Construction Management",
        score_value: 0,
    },
    {
        degree_name: "Counseling",
        score_value: 0,
    },
    {
        degree_name: "Counseling Psycology",
        score_value: 0,
    },
    {
        degree_name: "Criminal Justice",
        score_value: 0,
    },
    {
        degree_name: "Culinary Arts",
        score_value: 0,
    },
    {
        degree_name: "Cyber Security",
        score_value: 0,
    },
    {
        degree_name: "Diesel Mechanic",
        score_value: 0,
    },
    {
        degree_name: "Early Childhood Education",
        score_value: 0,
    },
    {
        degree_name: "Education",
        score_value: 0,
    },
    {
        degree_name: "Electrical Engineering",
        score_value: 0,
    },
    {
        degree_name: "Electronics",
        score_value: 0,
    },
    {
        degree_name: "English",
        score_value: 0,
    },
    {
        degree_name: "Exercise Science",
        score_value: 0,
    },
    {
        degree_name: "Fitness Trainer",
        score_value: 0,
    },
    {
        degree_name: "Forensic Psychology",
        score_value: 0,
    },
    {
        degree_name: "Forensic Science",
        score_value: 0,
    },
    {
        degree_name: "Graphic Design",
        score_value: 0,
    },
    {
        degree_name: "Gunsmithing",
        score_value: 0,
    },
    {
        degree_name: "Health Education",
        score_value: 0,
    },
    {
        degree_name: "Health Sciences",
        score_value: 0,
    },
    {
        degree_name: "Healthcare Administration",
        score_value: 0,
    },
    {
        degree_name: "Healthcare Informatics",
        score_value: 0,
    },
    {
        degree_name: "Healthcare Management",
        score_value: 0,
    },
    {
        degree_name: "History",
        score_value: 0,
    },
    {
        degree_name: "Holistic Medicine",
        score_value: 0,
    },
    {
        degree_name: "Hospitality Management",
        score_value: 0,
    },
    {
        degree_name: "Human Resources",
        score_value: 0,
    },
    {
        degree_name: "Human Services",
        score_value: 0,
    },
    {
        degree_name: "HVAC",
        score_value: 0,
    },
    {
        degree_name: "Information Technology",
        score_value: 0,
    },
    {
        degree_name: "Interior Design",
        score_value: 0,
    },
    {
        degree_name: "Jewelry Design",
        score_value: 0,
    },
    {
        degree_name: "Journalism",
        score_value: 0,
    },
    {
        degree_name: "Landscape Design",
        score_value: 0,
    },
    {
        degree_name: "Law",
        score_value: 0,
    },
    {
        degree_name: "Mathematics",
        score_value: 0,
    },
    {
        degree_name: "Mechanical Engineering",
        score_value: 0,
    },
    {
        degree_name: "Medical Billing Coding",
        score_value: 0,
    },
    {
        degree_name: "Medical Office Administration",
        score_value: 0,
    },
    {
        degree_name: "Motorcycle Mechanic",
        score_value: 0,
    },
    {
        degree_name: "Music Production",
        score_value: 0,
    },
    {
        degree_name: "Network Administration",
        score_value: 0,
    },
    {
        degree_name: "Network Security",
        score_value: 0,
    },
    {
        degree_name: "Nurse Practitioner (NP",
        score_value: 0,
    },
    {
        degree_name: "Nursing",
        score_value: 0,
    },
    {
        degree_name: "Nutrition",
        score_value: 0,
    },
    {
        degree_name: "Occupational Therapy Assistant",
        score_value: 0,
    },
    {
        degree_name: "Office Management",
        score_value: 0,
    },
    {
        degree_name: "Organizational Leadership",
        score_value: 0,
    },
    {
        degree_name: "Patient Care Technician",
        score_value: 0,
    },
    {
        degree_name: "Personal Training",
        score_value: 0,
    },
    {
        degree_name: "Pharmacy",
        score_value: 0,
    },
    {
        degree_name: "Pharmacy Technician",
        score_value: 0,
    },
    {
        degree_name: "Photography",
        score_value: 0,
    },
    {
        degree_name: "Physics",
        score_value: 0,
    },
    {
        degree_name: "Psychology",
        score_value: 0,
    },
    {
        degree_name: "Public Administration",
        score_value: 0,
    },
    {
        degree_name: "Public Health",
        score_value: 0,
    },
    {
        degree_name: "Real Estate",
        score_value: 0,
    },
    {
        degree_name: "Respiratory Therapy",
        score_value: 0,
    },
    {
        degree_name: "School Counseling",
        score_value: 0,
    },
    {
        degree_name: "Social Work",
        score_value: 0,
    },
    {
        degree_name: "Sports Management",
        score_value: 0,
    },
    {
        degree_name: "Sports Medicine",
        score_value: 0,
    },
    {
        degree_name: "Substance Abuse Counseling",
        score_value: 0,
    },
    {
        degree_name: "Teaching",
        score_value: 0,
    },
    {
        degree_name: "Technology Management",
        score_value: 0,
    },
    {
        degree_name: "Veterinary Technician",
        score_value: 0,
    },
    {
        degree_name: "Video Game Design",
        score_value: 0,
    },
    {
        degree_name: "Vocational",
        score_value: 0,
    },
    {
        degree_name: "Web Design",
        score_value: 0,
    },
    {
        degree_name: "Writing",
        score_value: 0,
    },
    {
        degree_name: "Other",
        score_value: 0,
    },
];

const seedDegree = () => Degree.bulkCreate(degreeSeedData);

module.exports = seedDegree;