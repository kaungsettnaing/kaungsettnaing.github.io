import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/kaungsettnaing/multi-architecture" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kaungsettnaing/multi-architecture" target="_blank" rel="noreferrer"><h2>Multi-Architecture </h2></a>
                <p>This project demonstrates how to build, push, and deploy multi-architecture container images alongside Infrastructure as Code (IaC) with Terraform on AWS.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kaungsettnaing/simple_nodejs_deployment_with_CI-CD" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kaungsettnaing/simple_nodejs_deployment_with_CI-CD" target="_blank" rel="noreferrer"><h2>Nodejs Deployment with CI/CD </h2></a>
                <p>Automated pipeline provisioning infrastructure with Terraform and deploying a Node.js static build to AWS S3 using GitHub Actions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;