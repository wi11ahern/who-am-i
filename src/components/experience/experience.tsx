import Card from "../ui/card";
import ExperienceList from "./experience-list";
import ExperienceSelectorList from "./experience-selector-list";

const experiences = [
  {
    experienceName: "The Hartford",
    roleName: "Sr. Machine Learning Engineer",
    startDate: "June 2023",
    endDate: "Present",
    summaryItems: [
      "Lead and facilitate successful on-premises to cloud migrations for machine learning models within data science teams.",
      "Enhance machine learning solution deployment speed through the implementation of Continuous Integration/Continuous Deployment (CI/CD) methodologies.",
      "Spearhead efforts to enhance engineering velocity by optimizing development practices, refining processes, and implementing advanced tooling.",
      "Share cloud expertise by guiding engineering teams on optimal AWS utilization and industry best practices."
    ],
  },
  {
    experienceName: "Amazon Web Services",
    roleName: "Systems Development Engineer II",
    startDate: "May 2022",
    endDate: "June 2023",
    summaryItems: [
      "Empowered service teams to deploy on-demand test environments by creating a comprehensive infrastructure-as-code framework.",
      "Managed and resolved issues related to service-level systems and worldwide deployed infrastructure, ensuring operational integrity during both business hours and off-hours as part of production on-call rotations.",
      "Directed external teams in the migration of legacy infrastructure definitions to contemporary infrastructure-as-code tools.",
      "Executed scrum master responsibilities and facilitated Agile ceremonies for the team.",
      "Headed a service-level initiative to successfully migrate CI/CD deployment technologies within a challenging timeline, preventing disruptions to the service's deployment mechanism.",
    ],
  },
  {
    experienceName: "Cigna (2020)",
    roleName: "Software Engineering Advisor",
    startDate: "January 2020",
    endDate: "May 2022",
    summaryItems: [
      "Developed features for and maintained an enterprise-level analytics platform built within AWS, empowering the internal data and analytics community with a diverse analytics toolkit.",
      "Engaged with external vendors to implement and POC features for the platform in order to extend platform potential.",
      "Architected and implemented scalable, event-driven, cloud solutions written in Python and using AWS services such as, but not limited to, Lambda, EKS, Glue, S3, and CloudWatch, in order to improve platform performance, monitoring and cost reduction.",
      "Engineered and enhanced CI/CD pipelines for deploying infrastructure and applications to AWS, leveraging technologies such as Terragrunt, Terraform, Please Build and CloudBees, helping streamline the team’s deployment process.",
      "Contributed to the broader organization by committing features to cross-team code repositories, enabling and accelerating teams with shared solutions.",
      "Created and managed AWS roles for secure service and data access.",
      "Defined, organized, and scoped work by creating features and user stories in Jira and performing Agile scrum rituals.",
      "Led a team of engineers to develop an end-to-end testing framework for an elaborate, multi-team ETL workflow in order to ensure accuracy of data and in doing so, reducing Cigna’s financial risk.",
      "Collaboratively engineered a data ingestion tool that automated a complex, manual process of ingesting on-prem data sources into S3 and Redshift, reducing workflow time from days to hours and enforcing strict SLAs.",
    ],
  },
  {
    experienceName: "Cigna (2017)",
    roleName: "Software Engineer",
    startDate: "January 2017",
    endDate: "May 2020",
    summaryItems: [
      "Containerized applications using Docker in order to enable the team to easily host in both OpenShift and AWS.",
      "Spearheaded the development of a Spring Boot API in Kotlin, used to manage, classify, and mark data for deletion based on business rules and legal and compliance policies, reducing Cigna’s financial risk.",
      "Supported a front-end UI built in Angular, used for outlining data sources based on risk profiles.",
      "Assisted with the development of a data pipeline in Python, which leveraged HDFS commands to securely transport private health information (PHI) and personally identifiable information (PII) into the Hadoop data lake.",
      "Developed a Flask API for a machine learning model that enabled other teams to use it as a microservice.",
      "Assisted in the development of a Python process for capturing storage metrics for databases in the Hadoop data lake, which made it possible to provide valuable insights using dashboards.",
      "Built deployments pipelines utilizing Jenkins and Ansible.",
      "Created Splunk dashboards and alerts for providing insights into application status, which helped to reduce downtime.",
    ],
  },
];

const Experience = () => {
  return (
    <Card
      className="col-start-2 col-end-3 row-start-3 row-end-4 grid grid-cols-1 grid-rows-[30px_600px] gap-y-4 justify-items-center
                 sm:mx-auto sm:items-center sm:grid-rows-[auto_auto]"
      id="experience"
    >
      <h2 className="row-start-1 row-end-2 text-xl font-bold text-yellow-500 underline justify-self-start underline-offset-4 sm:col-start-1 sm:col-end-2">
        02. Experience
      </h2>
      <div
        className="row-start-2 row-end-3 grid gap-y-4 grid-rows-[40px_80%] grid-cols-1 
                   sm:grid-cols-[minmax(200px,250px)_70%] sm:col-span-3 sm:grid-rows-[550px]"
      >
        <ExperienceSelectorList experiences={experiences} />
        <ExperienceList experiences={experiences} />
      </div>
    </Card>
  );
};

export default Experience;
