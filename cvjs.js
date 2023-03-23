fetch('cv.json')
.then(response => response.json())
.then(data => {
const cv = document.getElementById('cvjson');
cv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Address: ${data.address}</p>
    <h3>Experience</h3>
    <ul>
    ${data.experience.map(job => `
        <li>
        <h4>${job.position}</h4>
        <p>${job.company} | ${job.location} | ${job.start_date} to ${job.end_date}</p>
        <ul>
            ${job.responsibilities.map(responsibility => `
            <li>${responsibility}</li>
            `).join('')}
        </ul>
        </li>
    `).join('')}
    </ul>
    <h2>Education</h2>
    <ul>
    ${data.education.map(school => `
        <li>
        <h4>${school.qualification}</h4>
        <p>${school.location} | ${school.start_date} to ${school.end_date}</p>
        <ul>
            ${school.knowledge.map(knowledge => `
            <li>${knowledge}</li>
            `).join('')}
        </ul>
        </li>
    `).join('')}
    </ul>`;})
    
