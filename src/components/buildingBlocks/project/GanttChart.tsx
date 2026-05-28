import type { FunctionComponent } from "react";
import { Gantt, Willow, type ITask } from "@svar-ui/react-gantt"
import "@svar-ui/react-gantt/all.css";
import type { Chart_Task } from "@/types";

const GanttChart: FunctionComponent<{ flow: Chart_Task[] }> = ( { flow }) => {


    const scales = [
        { unit: "month", step: 1, format: "%F %Y" },
        { unit: "day", step: 1, format: "%j" },
    ];

    return (
        <Willow>
            <Gantt tasks={flow as ITask[]} scales={scales} readonly={true}/>
        </Willow>
    );

}

export default GanttChart;