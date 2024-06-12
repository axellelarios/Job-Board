
import Job from './job'

const Jobs = () => {
    return (
        <div class="jobs-list">
            <Job className={"job-card"} color={"border-red"} title={"Full time sale associate"} contratType={"CDI"} country="France" city="Marseille" />

            <Job className={"job-card"} color={"border-yellow"} title={"Full time sale associate"} contratType={"CDI"} country="France" city="Marseille" />

            <Job className={"job-card"} color={"border-blue"} title={"Full time sale associate"} contratType={"CDI"} country="France" city="Marseille" />

            <Job className={"job-card"} color={"border-pink"} title={"Full time sale associate"} contratType={"CDI"} country="France" city="Marseille" />

            <Job className={"job-card"} color={"border-purple"} title={"Full time sale associate"} contratType={"CDI"} country="France" city="Marseille" />

            <Job className={"job-card"} color={"border-green"} title={"Full time sale associate"} contratType={"CDI"} country="France" city="Marseille" />



        </div>
    )
}

export default Jobs  