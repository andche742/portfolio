import './projects.css'
import Project from '../components/project';
import Nav from '../components/nav';

function Projects() {
  return (
    <>
      <Nav showName={true}/>
      <div className="projectsContainer">
        <Project
          project_name="Predictive Substance Abuse Risk Assessment"
          link="https://github.com/andche742/SubstanceAbuseRiskAssessmentML"
          description="A Python-based machine learning application that predicts substance abuse risk by preprocessing behavioral and demographic data, engineering features, and training classification models to provide actionable assessments."
        />
        
        <Project
          project_name="HTTP-DDS Bridge"
          link="https://github.com/bhuvaneshsel/HTTP-DDS_Bridge"
          description="A bridge application that converts JSON data between HTTP clients and DDS pub-sub systems. Built with Python and C++, utilizing generated code based on IDL definitions. Supports HTTP POST to DDS write and HTTP GET to DDS read conversions with Docker containerization."
        />

        <Project
          project_name="Campus Connect"
          link="https://github.com/andche742/CampusConnect"
          description="A Java-based campus scheduling application built with JavaFX for managing office hours and appointments. Implemented polymorphism with BaseScheduleController and subclasses for schedule management, search functionality, and editing office hours."
        />
        
        <Project
          project_name="iLiterate"
          link="https://github.com/andche742/iLiterate"
          description="AI-powered literacy improvement web app designed to help develop literacy skills through accessible and interactive tools. Built with Next.js, Flask, and Google Gemini and Cloud APIs, it features speech-based reading and grammar practice, listening comprehension through text-to-speech, and a learner’s dictionary backed by MongoDB for fast, reusable definitions."
        />
        
        <Project
          project_name="Computer Vision Rock Paper Scissors"
          link="https://github.com/andche742/rock-paper-scissor"
          description="An interactive rock paper scissors game using MediaPipe hand gesture recognition. Built with Python, OpenCV, and TensorFlow, featuring real-time hand pose estimation and sign recognition with TFLite models for both hand sign and finger gesture classification."
        />
        
        <Project
          project_name="Mediapipe Gesture Recognition"
          link="https://github.com/andche742/gesture-recognition"
          description="A Python-based gesture recognition application built with machine learning and computer vision. Processes visual input to identify and classify hand gestures in real-time using OpenCV and TensorFlow."
        />
        
        <Project
          project_name="Do Your Work!"
          link="https://github.com/andche742/DoYourWork"
          description="A full-stack task management application built with React.js frontend, Express.js backend, and MySQL database. Users add tasks with monetary wagers to increase motivation and accountability, with proctors (friends) who verify completion."
        />
      </div>
    </>
  );
}


export default Projects;
