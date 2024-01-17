function getInterviewStatus(resumeId){
    var curDisplayStyle=document.getElementById(`toggle${resumeId}`).style.display;
    document.getElementById(`toggle${resumeId}`).style.display=curDisplayStyle==="none"?"":"none"
    fetch(`/get_interview_status/${resumeId}`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById(`introStatus${resumeId}`).innerText= `Intro Call Status: ${data.intro_status}`;
        document.getElementById(`interview1Status${resumeId}`).innerText = `Interview1 Status: ${data.interview1_status}`;
        document.getElementById(`interview2Status${resumeId}`).innerText = `Interview2 Status: ${data.interview2_status}`
    })
}



function filterTableByIntroStatus(){
    const selectedStatus = introFilter.value.toLowerCase();
    const tableRows=document.querySelectorAll("tbody tr")
    tableRows.forEach(function(row){
       const resumeId=row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response=>response.json())
       .then(data=>{
        const introStatus =data.intro_status.toLowerCase();
        if (selectedStatus===""|| introStatus===selectedStatus.toLowerCase()){
            row.style.display="";
        }
        else{
            row.style.display="none"
        }
       })
    })
    
}

function filterTableByInterview1Status(){
    const interview1Filter = document.getElementById("interview1Filter");
    const selectedStatus = interview1Filter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row){
       const resumeId = row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response => response.json())
       .then(data => {
            const interview1Status = data.interview1_status.toLowerCase();

            if (selectedStatus === "" || interview1Status === selectedStatus.toLowerCase()) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
       })
       .catch(error => {
            console.error("Error fetching interview status:", error);
       });
    });
}

function filterTableByInterview2Status(){
    const interview2Filter = document.getElementById("interview2Filter");
    const selectedStatus = interview2Filter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row){
       const resumeId = row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response => response.json())
       .then(data => {
            const interview2Status = data.interview2_status.toLowerCase();

            if (selectedStatus === "" || interview2Status === selectedStatus.toLowerCase()) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
       })
       .catch(error => {
            console.error("Error fetching interview status:", error);
       });
    });
}
