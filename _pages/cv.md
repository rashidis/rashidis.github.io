---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Work experience
======
### Senior Data Scientist, [AGL Energy](https://www.agl.com.au/about-agl) (October 2022 - April 2024)

**Duties includes:**
  * Managing and mentoring a team of 7 data scientists for end-toend data science and MLOps solutions, from the initial pitch and data preparation to post-deployment.
  * Designing, developing, and successfully delivering over 10 distinct scalable cloud-based data-driven solutions in production environments. 
  * Conveying the results and driven insights to the stakeholders.

**Achievements:**
  * Improved multiple factors within AGL by initiating several Gen-Al proof of concepts and deployed them to production.
  * Achieved a 50% reduction of pilot-to-production duration by developing commercially viable in-house Python packages and toolkits aimed at enhancing team performance and streamlining the data science experience.
  * Decreased the MTTR (Mean Time to Resolve) of ML models' maintenance and support tickets by 70% through establishing logging and model monitoring pipelines.
  * Eliminated ingestion pipeline failures entirely by establishing a DataBricks feature store for the organization, integrating PySpark, MLOps stacks, asset bundles, and Unity catalogue.<br>
  * Attained a 40% reduction in service desk time allocation using advanced NLP and LLM techniques.


### Data Scientist Researcher, [RMIT University](https://www.rmit.edu.au/)/ [Ford Company](https://www.ford.com/) (June 2021 - October 2022)  

**Duties included:** Worked in a multi-disciplinary team of 5, including engineers from Ford company in the US and researchers from RMIT  University, in implementing a versatile quality control technology applicable to various problems. <br>
**Achievements:** Increased the company revenue via efficient detection of the defects in industrial parts using domain adaptation method utilizing ResNet50 as the deep neural network backbone, PyTorch, OpenCV, Torch-vision, Scikit-learn


### Machine Learning Specialist, [Keylead Health](https://keyleadhealth.com) (January 2021 - June 2021)
**Duties included:** Collaborated in a 5-member team comprising data engineers and clinicians to analyze healthcare data, aiming to enhance the clinical trial and medical research processes.

  
Skills
======
* Machine Learning and Data Science:
  * Machine learning concepts: Classification, Regression, Clustering, Transfer Learning, Time Series Forecasting.
  * Natural Language Processing: Foundational and Generative LLMs, Generative AI, Langchain, RAG.
  * Deep Neural Networks: CNNs, RNNs, Attention, Transformers (Text, Vision, Multi-modal), LSTM.
  * Python packages and frameworks: PyTorch, NLTK, Scikit-learn, SpaCy, OpenCV, SciPy, NumPy, Pandas

* MLOps in Cloud Platforms:
  *	Azure: Azure resources, Blob Storage, ML Studio, Monitoring, Logging, Online and Batch Endpoints, DevOps practices, Managed Feature Store, Azure Cognitive Services.
  * Databricks: MLOps-Stacks, Unity Catalogue, Feature Store, MLflow.
  * Vector Databases: MongoDB, Faiss.

* Software Engineering Practices and Tools: Git, Continuous Integration (CI), Agile, Design Patterns 

* Big Data: SQL (MySQL) and PySpark, Dask - Functional knowledge.

* Soft Skills: Stakeholder Management, Critical Thinking, Agile Mindset, Teamwork.


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Project Information</title>
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
</style>
</head>
<body>

<h2>Selected Projects </h2>

<table>
  <tr>
    <th>Project</th>
    <th>Date</th>
    <th>Location</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>LLM-based AI Generated RBAC Roles</td>
    <td>03/2024</td>
    <td>Melbourne, VIC</td>
    <td>Automatically generated RBAC roles within Azure, employing a RAGbased Large Language Model (LLM), open-source vector databases (Faiss), GPT3.5, and Langchain in the process. Enhanced security by generating RBAC roles based on user activity, resulting in pruning the overestimated roles.</td>
  </tr>
  <tr>
    <td>Document Understanding Using Multi-Modal Transformers</td>
    <td>01/2024</td>
    <td>Melbourne, VIC</td>
    <td>I employed Donut, a multi-modal transformer, for OCR-free document understanding and precise information extraction. Additionally, I applied advanced prompt engineering techniques such as the cascade of thoughts and Iterative Refinement to enhance accuracy in this project. Increased accuracy in document knowledge extraction by 20% and overcame the OCR problems.</td>
  </tr>
  <tr>
    <td>Auto Topic Generation</td>
    <td>11/2023</td>
    <td>Melbourne, VIC</td>
    <td>Developed and deployed a topic generation and categorization model for customer conversations using GPT-3.5 and K-means clustering. Scaled the model in terms of cost and computation for 300k documents per month with a mean of 4000 tokens per conversation</td>
  </tr>
  <tr>
    <td>Email Classification - Fine-tuning Foundational LLMs</td>
    <td>09/2023</td>
    <td>Melbourne, VIC</td>
    <td>Fine-tuned foundational models and transformers (Bert and Roberta) using methods such as transfer learning, on tasks such as email classification, sentiment analysis, and MTTR regression. Successful deployment of the email classification technique contributed to a 40% reduction in service desk time allocation.</td>
  </tr>
  <tr>
    <td>Churn Model Using LSTM</td>
    <td>06/2023</td>
    <td>Melbourne, VIC</td>
    <td>Churn model leveraging LSTM and LGBM models. Additionally, established a monitoring pipeline to track data and concept drift. Mitigated a 3% churn rate by deploying refactored churn models in production.</td>
  </tr>
  <tr>
    <td>Parallel Programming for Model Improvement</td>
    <td>03/2023</td>
    <td>Melbourne, VIC</td>
    <td>Improved a detection model by restructuring it to leverage parallel libraries, specifically Dask, for optimizing scalability. Reduced the runtime of the model by 94%.</td>
  </tr>
  <tr>
    <td>Call volume prediction using Lstm and attention</td>
    <td>10/2022</td>
    <td>Melbourne, VIC</td>
    <td>Designed and developed a time series forecasting model featuring a multi-head attention layer and an LSTM head Successfully forecasted the call volume resulting in better budgeting for the call center.</td>
  </tr>
</table>

</body>
</html>


Education
======
* Ph.D in Computer Science- Machine learning, University of Melbourne, 2021
* M.S. in Digital Electronics- Cloud Computing, AmirKabir University of Technology, 2016
* B.S. in Electrical Engineering- Electronics, Iran University of Science and Technology, 2009

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
  

[Recommandations](https://www.linkedin.com/in/shima-rashidiiiiiii/details/recommendations/) <br>
For more Info. check my LinkedIn account: ([Link](https://www.linkedin.com/in/shima-rashidiiiiiii/))