const mainContainer = document.getElementById('container');

//courses.forEach((data) => {
    fetch('./data.json')
      //this method is used to check that if the link is valid or not.
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            `There is a problem , the status number is: ${response.status}`)
     
        } else {
          return response.json();
        }
    })
      .then((data) => {
        console.log(data)
       
        const courseData = data.slice(0,6);
        courseData.forEach((course) => {
            console.log(courseData)
            // create a container for all the information about the courses
            const courseContainer = document.createElement('div');
            courseContainer.setAttribute('id', 'courseContainer');

            //create a p  element inside the div element for the course name
            const courseName = document.createElement('p');
            courseName.setAttribute('id','name');
            courseName.textContent = "Course name: " + course.name;

            //create a p  element inside the div element for the course id
            const courseId = document.createElement('p');
            courseId.setAttribute('id', 'courseId');
            courseId.textContent = "ID: " + course.id;

            //create an a   element inside the div element for the course live link
            const courseLink = document.createElement('a');
            courseLink.setAttribute('id', 'liveLink');
            
            courseLink.innerHTML =`<a href = "${course.URL}">Live Link</a>`

            //to make the added element appear in html we use append child method
            container.appendChild(courseContainer);
            courseContainer.appendChild(courseName);
            courseContainer.appendChild(courseId);
            courseContainer.appendChild(courseLink);
        });

      })