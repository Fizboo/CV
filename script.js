function createSkillsList(skillsData) {
  const skills = document.getElementById("skills");
  skillsData.forEach((skill) => {
    const li = document.createElement("li");
    li.innerText = skill;
    skills.appendChild(li);
  });
}

function createEducationList(educationData) {
  const education = document.getElementById("education");
  educationData.forEach((edu) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${edu.institution}</strong> - ${edu.degree} (${edu.years})`;
    education.appendChild(li);
  });
}

function createCoursesList(coursesData) {
  const courses = document.getElementById("courses");
  coursesData.forEach((course) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${course.title}</strong> - ${course.institution} (${course.completionDate})`;
    courses.appendChild(li);
  });
}

function createExperienceList(nonITExperienceData) {
  const nonITExperience = document.getElementById("nonITExperience");
  nonITExperienceData.forEach((job) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.company}</strong> - ${job.position} (${job.years})`;
    nonITExperience.appendChild(li);
  });
}

function createCertificationsList(certificationsData) {
  const certifications = document.getElementById("certifications");
  certificationsData.forEach((cert) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${cert.title}</strong> - ${cert.institution} (${cert.completionDate})`;
    certifications.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("resumeData.json")
    .then((response) => response.json())
    .then((data) => {
      createSkillsList(data.skills);
      createEducationList(data.education);
      createCoursesList(data.courses);
      createExperienceList(data.nonITExperience);
      createCertificationsList(data.certifications);
    })
    .catch((error) => {
      console.error("Error fetching resume data:", error);
    });
});
