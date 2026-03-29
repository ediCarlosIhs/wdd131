let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        {section: "002", enrolled: 80, instructor: "Sarah Gobble" },
        {section: "003", enrolled: 86, instructor: "David Fluckiger" },
        {section: "004", enrolled: 75, instructor: "Thomas Reid" },
    ]
};


function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`
}

function renderSections() {
    const tbody = document.querySelector("#sections tbody");
    let rows = '';
    for (const section of aCourse.sections) {
        rows += `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        </tr>`
    }
    tbody.innerHTML = rows;
}

// debugger;
setCourseInformation(aCourse);
debugger;
renderSections();
