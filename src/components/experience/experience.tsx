import Card from "../ui/card";
import ExperienceList from "./experience-list";
import ExperienceSelectorList from "./experience-selector-list";

interface Props {}

const experiences = [
  {
    experienceName: "Amazon Web Services",
    roleName: "Systems Development Engineer II",
    startDate: "May 2022",
    endDate: "Present",
    summaryItems: [
      "Enable service teams in deployment of on-demand test environments through the development of a service-wide, infrastructure-as-code framework.",
      "Maintain and troubleshoot service-level systems and globally deployed infrastructure during business hours and off-hours during production on-call rotations.",
      "Guide external teams with migrating legacy infrastructure definitions to modern infrastructure-as-code tooling.",
      "Perform scrum master duties and host Agile ceremonies for the team.",
      "Led service-level campaign to migrate CI/CD deployment technologies under a tight deadline that prevented the service’s deployment mechanism from being inoperable.",
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

const Experience = (props: Props) => {
  return (
    <Card
      className="col-start-2 col-end-3 row-start-3 row-end-4 grid grid-cols-1 grid-rows-[30px_600px] gap-y-4 justify-items-center
                 sm:mx-auto sm:items-center sm:grid-rows-[auto_auto]"
      id="experience"
    >
      <h2 className="justify-self-start row-start-1 row-end-2 text-xl font-bold text-yellow-500 underline underline-offset-4 sm:col-start-1 sm:col-end-2">
        02. Experience
      </h2>
      <div
        className="row-start-2 row-end-3 grid gap-y-4 grid-rows-[40px_80%] grid-cols-1 
                   sm:grid-cols-[minmax(200px,250px)_70%] sm:col-span-3 sm:grid-rows-1"
      >
        <ExperienceSelectorList experiences={experiences} />
        <ExperienceList experiences={experiences} />
      </div>
    </Card>
  );
};

export default Experience;
